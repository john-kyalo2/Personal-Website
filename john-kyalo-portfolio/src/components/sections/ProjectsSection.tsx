"use client";

import { useRef, useState, useCallback } from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, ArrowLeft, ArrowRight, BarChart4, BookOpen } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

type Project = {
  id: number;
  title: string;
  description: string;
  image: string | null; // null → styled gradient fallback
  tags: string[];
  demo: string;
  demoLabel?: string;
};

// Add a project = add an object. The rail scrolls forever.
const projects: Project[] = [
  {
    id: 1,
    title: "Sales Analytics Dashboard",
    description:
      "Interactive Power BI dashboard providing real-time sales insights, KPIs, and trend analysis for a retail company — across regions, products and time periods.",
    image: "/project1.jpg",
    tags: ["Power BI", "DAX", "SQL", "UI/UX"],
    demo: "https://app.fabric.microsoft.com/view?r=eyJrIjoiNjZkYjdmMDItYTAwYy00Y2JiLTkwYjQtNzlmNGM1NmY3ZmY2IiwidCI6ImI2N2EzNmQwLWI2ZWMtNDg3YS05NTdjLWM2MWRjZjg3NTdlYiJ9",
  },
  {
    id: 2,
    title: "HealthCare Analysis",
    description:
      "A data-driven look at patient data across 10 major hospitals — uncovering trends, costs and insights to improve outcomes and inform smarter healthcare decisions.",
    image: "/project2.png",
    tags: ["Power BI", "DAX", "Power Query"],
    demo: "https://app.powerbi.com/view?r=eyJrIjoiMjM3ZGQwZDYtYjVlNi00MDdhLTg2YTYtNDJmZTQwZGNhNDIxIiwidCI6ImI2N2EzNmQwLWI2ZWMtNDg3YS05NTdjLWM2MWRjZjg3NTdlYiJ9",
  },
  {
    id: 3,
    title: "Digital Marketing Campaign Hub",
    description:
      "An advanced marketing analytics dashboard with comprehensive visibility into digital campaign performance across multiple channels and product categories.",
    image: "/project3.png",
    tags: ["DAX", "Power BI", "ETL", "Data Warehouse"],
    demo: "https://app.powerbi.com/view?r=eyJrIjoiNWIwNzhlMzctMTMyMy00YjI0LTg4OWItMDA5M2RkNDJiOTY5IiwidCI6ImI2N2EzNmQwLWI2ZWMtNDg3YS05NTdjLWM2MWRjZjg3NTdlYiJ9",
  },
  {
    id: 4,
    title: "BAL 2026 — Scores to a Story",
    description:
      "Near real-time analytics on the Basketball Africa League: live standings and player stats ingested with Microsoft Fabric notebooks into a Lakehouse, modeled, and served in Power BI.",
    image: "/Fabric_arc.png",
    tags: ["Microsoft Fabric", "Lakehouse", "Notebooks", "Power BI"],
    demo: "https://medium.com/@johnkyalo212/a-microsoft-fabric-bal-2026-from-scores-to-a-story-part-1-3-cb14cd046431",
    demoLabel: "Read Case Study",
  },
  {
    id: 5,
    title: "Profit & Loss Statement",
    description:
      "A finance-grade P&L in Power BI: a structure table encodes accounting logic into the model, so Gross, Operating and Net Profit compute — and order — themselves correctly.",
    image: "/P&Lstatement.png",
    tags: ["Power BI", "DAX", "Financial Reporting"],
    demo: "https://app.powerbi.com/view?r=eyJrIjoiZmQ0NjY2ODQtZDk0Ny00ZWI0LWI2OTctZTM2ODk5ZmJkZTllIiwidCI6ImI2N2EzNmQwLWI2ZWMtNDg3YS05NTdjLWM2MWRjZjg3NTdlYiJ9",
  },
];

const fallbackIcons = [BarChart4, BookOpen];

export default function ProjectsSection() {
  const railRef = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(0);
  const [current, setCurrent] = useState(1);

  const handleScroll = useCallback(() => {
    const rail = railRef.current;
    if (!rail) return;
    const max = rail.scrollWidth - rail.clientWidth;
    const p = max > 0 ? rail.scrollLeft / max : 0;
    setProgress(p);
    setCurrent(Math.min(projects.length, Math.round(p * (projects.length - 1)) + 1));
  }, []);

  const scrollByCard = (dir: 1 | -1) => {
    const rail = railRef.current;
    if (!rail) return;
    const card = rail.querySelector<HTMLElement>("[data-rail-card]");
    const step = card ? card.offsetWidth + 24 : 380;
    rail.scrollBy({ left: dir * step, behavior: "smooth" });
  };

  return (
    <section id="projects" className="section-padding bg-secondary/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <h2 className="section-title">Projects</h2>
          <p className="text-primary/80 font-mono text-sm mb-3">
            SELECT * FROM projects ORDER BY curiosity DESC;
          </p>
          <p className="section-subtitle max-w-2xl mx-auto !mb-0">
            Live and interactive dashboards, end to end analytical work.
          </p>
        </motion.div>

        {/* Rail controls: result-cursor counter + query progress bar */}
        <div className="flex items-center justify-between mb-6 max-w-6xl mx-auto">
          <div className="flex items-center gap-4">
            <span className="font-mono text-sm text-muted-foreground">
              row{" "}
              <span className="text-foreground font-semibold">
                {String(current).padStart(2, "0")}
              </span>{" "}
              of {String(projects.length).padStart(2, "0")}
            </span>
            <div className="hidden sm:block w-40 h-1 rounded-full bg-border overflow-hidden">
              <div
                className="h-full bg-primary rounded-full transition-all duration-150"
                style={{ width: `${Math.max(8, progress * 100)}%` }}
              />
            </div>
          </div>
          <div className="flex gap-2">
            <Button
              variant="outline"
              size="icon"
              className="rounded-full"
              onClick={() => scrollByCard(-1)}
              aria-label="Previous project"
            >
              <ArrowLeft className="h-4 w-4" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              className="rounded-full"
              onClick={() => scrollByCard(1)}
              aria-label="Next project"
            >
              <ArrowRight className="h-4 w-4" />
            </Button>
          </div>
        </div>

        <div
          ref={railRef}
          onScroll={handleScroll}
          className="flex gap-6 overflow-x-auto snap-x snap-mandatory no-scrollbar pb-4 max-w-6xl mx-auto"
        >
          {projects.map((project, index) => {
            const FallbackIcon = fallbackIcons[index % fallbackIcons.length];
            return (
              <motion.div
                key={project.id}
                data-rail-card
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: Math.min(index, 2) * 0.1 }}
                viewport={{ once: true }}
                className="snap-start shrink-0 w-[300px] sm:w-[340px]"
              >
                <Card className="overflow-hidden h-full border-border project-card flex flex-col">
                  <div className="relative h-40 w-full">
                    {project.image ? (
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className="object-cover"
                      />
                    ) : (
                      <div className="h-full w-full bg-gradient-to-br from-primary/15 via-secondary to-primary/5 flex items-center justify-center">
                        <FallbackIcon className="h-12 w-12 text-primary/50" />
                      </div>
                    )}
                    <span className="absolute top-3 left-3 font-mono text-[11px] px-2 py-0.5 rounded-full bg-background/85 backdrop-blur-sm border border-border">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </div>
                  <CardContent className="p-5 flex flex-col flex-grow">
                    <h3 className="text-lg font-semibold mb-2">
                      {project.title}
                    </h3>
                    <p className="text-muted-foreground text-sm mb-4 line-clamp-3 flex-grow">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-1.5 mb-4">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-2 py-0.5 bg-secondary text-xs rounded-full"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <Button size="sm" className="w-full mt-auto" asChild>
                      <Link
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink className="mr-2 h-4 w-4" />
                        {project.demoLabel ?? "Live Demo"}
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>

        <div className="flex justify-center mt-8">
          <Button variant="outline" asChild>
            <Link
              href="https://www.datascienceportfol.io/johnkyalo"
              target="_blank"
              rel="noopener noreferrer"
            >
              View Full Portfolio
              <ExternalLink className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
