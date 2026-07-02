"use client";

import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";

const roles = [
  {
    id: 1,
    title: "Data Analyst",
    company: "DCA",
    period: "2024 — 2025",
    story:
      "At DCA I owned the reporting layer end to end — designing and shipping interactive Power BI dashboards that became the team's daily reference for performance. I worked closely with non-technical stakeholders to translate loose business questions into measurable KPIs, and applied UI/UX principles so reports weren't just accurate, but genuinely pleasant to use.",
    highlights: ["Power BI", "DAX", "UI/UX Design", "Stakeholder Collaboration"],
  },
  {
    id: 2,
    title: "Data Intern",
    company: "Africa Stem Girl",
    period: "2024",
    story:
      "My first industry seat. I scraped web data, sourced structured data to lay the groundwork for intelligent agents, and ran exploratory analysis to understand what the data could — and couldn't — answer. It taught me the honest truth of analytics: most of the craft is in getting the data ready before a single business question is solved.",
    highlights: ["Python", "Web Scraping", "Exploratory Analysis"],
  },
];

export default function ExperienceSection() {
  return (
    <section id="experience" className="section-padding bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="section-title">Experience</h2>
          <p className="section-subtitle max-w-2xl mx-auto">
            Where I've practiced the craft — with the context behind each stop.
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          <div className="relative border-l-2 border-primary/20 pl-8 space-y-12">
            {roles.map((role, index) => (
              <motion.div
                key={role.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                viewport={{ once: true }}
                className="relative"
              >
                <span className="absolute -left-[41px] top-1 flex h-6 w-6 items-center justify-center rounded-full bg-primary/10 ring-4 ring-background">
                  <Briefcase className="h-3 w-3 text-primary" />
                </span>
                <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1 mb-2">
                  <h3 className="text-xl font-semibold">{role.title}</h3>
                  <span className="text-primary font-medium">
                    {role.company}
                  </span>
                  <span className="text-sm text-muted-foreground font-mono">
                    {role.period}
                  </span>
                </div>
                <p className="text-muted-foreground mb-3">{role.story}</p>
                <div className="flex flex-wrap gap-2">
                  {role.highlights.map((h) => (
                    <span
                      key={h}
                      className="px-2.5 py-0.5 bg-secondary text-xs rounded-full"
                    >
                      {h}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
