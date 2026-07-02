// Client-side Medium feed loader.
// The site is statically exported, so the visitor's browser pulls the feed
// on every visit — publish on Medium and this stays in sync automatically.

export const MEDIUM_USERNAME = "johnkyalo212";
export const MEDIUM_PROFILE_URL = `https://medium.com/@${MEDIUM_USERNAME}`;
const FEED_URL = `https://medium.com/feed/@${MEDIUM_USERNAME}`;

export type MediumPost = {
  title: string;
  link: string;
  pubDate: string; // ISO-ish date string
  categories: string[];
  snippet: string;
  image: string | null;
  readingTimeMin: number;
};

/** Strip tags and collapse whitespace to get a plain-text snippet. */
function toPlainText(html: string): string {
  const div = document.createElement("div");
  div.innerHTML = html;
  return (div.textContent || "").replace(/\s+/g, " ").trim();
}

/** First real image in the article body (skips Medium's 1px tracking pixel). */
function firstImage(html: string): string | null {
  const matches = html.matchAll(/<img[^>]+src="([^"]+)"/gi);
  for (const m of matches) {
    const src = m[1];
    if (!src.includes("medium.com/_/stat")) return src;
  }
  return null;
}

function readingTime(text: string): number {
  const words = text.split(/\s+/).filter(Boolean).length;
  return Math.max(1, Math.round(words / 200));
}

function buildPost(raw: {
  title: string;
  link: string;
  pubDate: string;
  categories: string[];
  content: string;
}): MediumPost {
  const text = toPlainText(raw.content);
  return {
    title: raw.title,
    link: raw.link.split("?")[0],
    pubDate: raw.pubDate,
    categories: raw.categories.slice(0, 3),
    snippet: text.slice(0, 220).trimEnd() + (text.length > 220 ? "…" : ""),
    image: firstImage(raw.content),
    readingTimeMin: readingTime(text),
  };
}

/** Route 1 — rss2json (JSON, CORS-enabled). */
async function viaRss2Json(): Promise<MediumPost[]> {
  const res = await fetch(
    `https://api.rss2json.com/v1/api.json?rss_url=${encodeURIComponent(FEED_URL)}`
  );
  if (!res.ok) throw new Error(`rss2json ${res.status}`);
  const data = await res.json();
  if (data.status !== "ok" || !Array.isArray(data.items)) {
    throw new Error("rss2json bad payload");
  }
  return data.items.map(
    (item: {
      title: string;
      link: string;
      pubDate: string;
      categories?: string[];
      content?: string;
      description?: string;
    }) =>
      buildPost({
        title: item.title,
        link: item.link,
        pubDate: item.pubDate,
        categories: item.categories ?? [],
        content: item.content || item.description || "",
      })
  );
}

/** Route 2 — raw XML through a CORS proxy, parsed natively. */
async function viaRawXml(): Promise<MediumPost[]> {
  const res = await fetch(
    `https://api.allorigins.win/raw?url=${encodeURIComponent(FEED_URL)}`
  );
  if (!res.ok) throw new Error(`proxy ${res.status}`);
  const xml = new DOMParser().parseFromString(await res.text(), "text/xml");
  return Array.from(xml.getElementsByTagName("item")).map((item) => {
    const get = (tag: string) =>
      item.getElementsByTagName(tag)[0]?.textContent ?? "";
    const content =
      item.getElementsByTagNameNS("*", "encoded")[0]?.textContent ?? "";
    return buildPost({
      title: get("title"),
      link: get("link"),
      pubDate: get("pubDate"),
      categories: Array.from(item.getElementsByTagName("category")).map(
        (c) => c.textContent ?? ""
      ),
      content,
    });
  });
}

/** Latest posts, newest first. Tries two routes before giving up. */
export async function fetchMediumPosts(limit = 3): Promise<MediumPost[]> {
  for (const route of [viaRss2Json, viaRawXml]) {
    try {
      const posts = await route();
      if (posts.length > 0) return posts.slice(0, limit);
    } catch {
      // fall through to the next route
    }
  }
  return [];
}

export function formatPostDate(pubDate: string): string {
  const d = new Date(pubDate);
  if (Number.isNaN(d.getTime())) return "";
  return d.toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
}
