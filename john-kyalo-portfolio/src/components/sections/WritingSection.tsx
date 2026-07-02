"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowUpRight, BookOpen, Clock, PenLine } from "lucide-react";
import {
  fetchMediumPosts,
  formatPostDate,
  MEDIUM_PROFILE_URL,
  type MediumPost,
} from "@/lib/medium";

const POSTS_TO_SHOW = 3;

export default function WritingSection() {
  const [posts, setPosts] = useState<MediumPost[] | null>(null);
  const [failed, setFailed] = useState(false);

  useEffect(() => {
    let cancelled = false;
    fetchMediumPosts(POSTS_TO_SHOW).then((result) => {
      if (cancelled) return;
      if (result.length > 0) setPosts(result);
      else setFailed(true);
    });
    return () => {
      cancelled = true;
    };
  }, []);

  return (
    <section id="writing" className="section-padding bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="section-title">Writing</h2>
          <p className="section-subtitle max-w-2xl mx-auto !mb-4">
            I think in public. Fresh pieces on data, BI and Microsoft Fabric.
          </p>
          <p className="font-mono text-xs text-muted-foreground">
            <span className="inline-block w-2 h-2 rounded-full bg-green-500 mr-2 animate-pulse" />
            live-synced from Medium
          </p>
        </motion.div>

        {/* Loading skeletons */}
        {posts === null && !failed && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {Array.from({ length: POSTS_TO_SHOW }).map((_, i) => (
              <Card key={`skeleton-${i}`} className="overflow-hidden">
                <div className="h-40 bg-secondary animate-pulse" />
                <CardContent className="p-5 space-y-3">
                  <div className="h-3 w-1/3 bg-secondary rounded animate-pulse" />
                  <div className="h-5 w-full bg-secondary rounded animate-pulse" />
                  <div className="h-3 w-full bg-secondary rounded animate-pulse" />
                  <div className="h-3 w-2/3 bg-secondary rounded animate-pulse" />
                </CardContent>
              </Card>
            ))}
          </div>
        )}

        {/* Graceful fallback if the feed can't be reached */}
        {failed && (
          <div className="text-center max-w-md mx-auto">
            <PenLine className="h-10 w-10 text-primary mx-auto mb-4" />
            <p className="text-muted-foreground mb-6">
              My latest articles live on Medium — the feed is taking a nap
              right now, but the stories are wide awake.
            </p>
          </div>
        )}

        {/* Articles */}
        {posts && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {posts.map((post, index) => (
              <motion.a
                key={post.link}
                href={post.link}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group block h-full"
              >
                <Card className="overflow-hidden h-full border-border project-card flex flex-col">
                  <div className="relative h-40 w-full overflow-hidden">
                    {post.image ? (
                      // Dynamic remote images from Medium's CDN — plain img on purpose
                      // eslint-disable-next-line @next/next/no-img-element
                      <img
                        src={post.image}
                        alt={post.title}
                        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                        loading="lazy"
                      />
                    ) : (
                      <div className="h-full w-full bg-gradient-to-br from-primary/15 via-secondary to-primary/5 flex items-center justify-center">
                        <BookOpen className="h-12 w-12 text-primary/50" />
                      </div>
                    )}
                  </div>
                  <CardContent className="p-5 flex flex-col flex-grow">
                    <div className="flex items-center gap-3 text-xs text-muted-foreground font-mono mb-3">
                      <span>{formatPostDate(post.pubDate)}</span>
                      <span className="flex items-center gap-1">
                        <Clock className="h-3 w-3" />
                        {post.readingTimeMin} min read
                      </span>
                    </div>
                    <h3 className="text-lg font-semibold mb-2 line-clamp-2 group-hover:text-primary transition-colors">
                      {post.title}
                    </h3>
                    <p className="text-muted-foreground text-sm mb-4 line-clamp-3 flex-grow">
                      {post.snippet}
                    </p>
                    <div className="flex items-center justify-between mt-auto">
                      <div className="flex flex-wrap gap-1.5">
                        {post.categories.slice(0, 2).map((cat) => (
                          <span
                            key={cat}
                            className="px-2 py-0.5 bg-secondary text-xs rounded-full"
                          >
                            {cat}
                          </span>
                        ))}
                      </div>
                      <span className="text-primary flex items-center text-sm font-medium shrink-0">
                        Read
                        <ArrowUpRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                      </span>
                    </div>
                  </CardContent>
                </Card>
              </motion.a>
            ))}
          </div>
        )}

        <div className="flex justify-center mt-10">
          <Button variant="outline" asChild>
            <a
              href={MEDIUM_PROFILE_URL}
              target="_blank"
              rel="noopener noreferrer"
            >
              <BookOpen className="mr-2 h-4 w-4" />
              All Articles on Medium
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
