"use client";

import { motion } from "framer-motion";
import {
  Database,
  BarChart4,
  Code2,
  LineChart,
  Wrench,
} from "lucide-react";

const skillCategories = [
  {
    title: "Data Analysis",
    icon: <BarChart4 className="h-5 w-5 text-primary" />,
    skills: [
      "Statistical Analysis",
      "A/B Testing",
      "Cohort Analysis",
      "Churn Analysis"
    ],
  },
  {
    title: "Data Visualization",
    icon: <LineChart className="h-5 w-5 text-primary" />,
    skills: [
      "Power BI",
      "Tableau",
      "Data Storytelling",
      "Executive Dashboards",
      "UI/UX",
    ],
  },
  {
    title: "Databases & SQL",
    icon: <Database className="h-5 w-5 text-primary" />,
    skills: [
      "SQL Server",
      "MySQL",
      "PostgreSQL",
      "Schema Design",
      "Query Optimization",
    ],
  },
  {
    title: "Programming",
    icon: <Code2 className="h-5 w-5 text-primary" />,
    skills: ["Python", "SQL", "DAX", "Power Query(M)"],
  },
  {
    title: "Data Platforms",
    icon: <Wrench className="h-5 w-5 text-primary" />,
    skills: ["Microsoft Fabric", "Azure", "Excel", "Git", "Jupyter Notebooks"],
  },
];

export default function SkillsSection() {
  return (
    <section id="skills" className="section-padding bg-secondary/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <h2 className="section-title">Skills</h2>
          <p className="section-subtitle max-w-2xl mx-auto !mb-0">
            The toolkit behind the insights.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-x-6 gap-y-8 max-w-6xl mx-auto">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-2 mb-3">
                {category.icon}
                <h3 className="font-semibold text-sm">{category.title}</h3>
              </div>
              <div className="flex flex-wrap gap-1.5">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-2.5 py-1 bg-background border border-border text-xs rounded-full text-muted-foreground hover:text-foreground hover:border-primary/40 transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
