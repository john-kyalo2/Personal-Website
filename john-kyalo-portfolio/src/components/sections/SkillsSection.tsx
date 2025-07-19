"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import {
  Database,
  BarChart4,
  Code2,
  LineChart,
  Layers,
  Binary,
} from "lucide-react";

const skillCategories = [
  {
    title: "Data Analysis",
    icon: <BarChart4 className="h-6 w-6 text-primary" />,
    skills: ["Statistical Analysis", "Churn Analysis", "Data Mining", "A/B Testing", "Cohort Analysis"],
  },
  {
    title: "Data Visualization",
    icon: <LineChart className="h-6 w-6 text-primary" />,
    skills: ["Power BI", "Tableau", "Data Storytelling", "UI/UX Design", "Visual Analytics"],
  },
  {
    title: "Databases & SQL",
    icon: <Database className="h-6 w-6 text-primary" />,
    skills: ["SQL", "MySQL", "PostgreSQL", "Schema Design", "Query Optimization"],
  },
  {
    title: "Programming",
    icon: <Code2 className="h-6 w-6 text-primary" />,
    skills: ["Python", "DAX", "Power Query", "Automation Scripts"],
  },
  {
    title: "Business Intelligence",
    icon: <Layers className="h-6 w-6 text-primary" />,
    skills: ["KPI Metrics", "Business Reporting", "Executive Dashboards", "Process Optimization"],
  },
  {
    title: "Tools & Technologies",
    icon: <Binary className="h-6 w-6 text-primary" />,
    skills: ["Excel", "Microsoft Fabric", "Git", "Jupyter Notebooks"],
  },
];

export default function SkillsSection() {
  return (
    <section id="skills" className="section-padding bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="section-title">Skills</h2>
          <p className="section-subtitle max-w-2xl mx-auto">
            I've worked with various data tools and technologies to deliver insights and drive business decisions.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full hover:shadow-md transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    {category.icon}
                    <h3 className="text-lg font-semibold ml-2">{category.title}</h3>
                  </div>
                  <ul className="space-y-2">
                    {category.skills.map((skill) => (
                      <li key={skill} className="text-muted-foreground flex items-center">
                        <span className="w-2 h-2 bg-primary rounded-full mr-2" />
                        {skill}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
