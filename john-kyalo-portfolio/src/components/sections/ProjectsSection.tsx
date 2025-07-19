"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const projects = [
  {
    id: 1,
    title: "Sales Analytics Dashboard",
    description:
      "Interactive Power BI dashboard providing real-time sales insights, KPIs, and trends analysis for a retail company.This has been done across regions, products and time periods.",
    image: "/project1.jpg",
    tags: ["Power BI", "DAX", "SQL", "UI/UX"],
    demo: "https://app.powerbi.com/view?r=eyJrIjoiZjJlYTBjM2EtNWIxZS00ZDI5LTk0YTAtZmMzMWUzYzQ3ZjlmIiwidCI6IjJiNDkzNTk3LWNiNWMtNDNlOC04NzlmLWYwZmI2OWYwZTU1NSIsImMiOjl9",
    github: "",
  },
  {
    id: 2,
    title: "HealthCare Analysis",
    description:
      "A data-driven approach on patient's data to establish care across 10 major hosptials- uncovering trends, costs, insights to improve outcomesand inform smarter healthcare decisions",
    image: "/project2.png",
    tags: ["Power BI", "DAX", "Power Query"],
    demo: "https://app.powerbi.com/view?r=eyJrIjoiZGRhMzgyMjEtYTNhZC00NDI1LWFmNGUtOTgzYmJiMTI5Y2Y1IiwidCI6IjJiNDkzNTk3LWNiNWMtNDNlOC04NzlmLWYwZmI2OWYwZTU1NSIsImMiOjl9",
    github: "",
  },
  {
    id: 3,
    title: "Digital Marketing Campaign Hub",
    description:
      "An advanced marketing analytics dashboard that provides comprehensive visibility into digital campaign performance across multiple channels and product categories.",
    image: "/project3.png",
    tags: ["DAX", "Power BI", "ETL", "Data Warehouse"],
    demo: "https://app.powerbi.com/view?r=eyJrIjoiMzRkYTU1NDEtM2E3ZS00ODk2LWJhODgtNGEwMTM4MzI3MjcyIiwidCI6IjJiNDkzNTk3LWNiNWMtNDNlOC04NzlmLWYwZmI2OWYwZTU1NSIsImMiOjl9",
    github: "",
  },
];

export default function ProjectsSection() {
  return (
    <section id="projects" className="section-padding bg-secondary/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="section-title">Projects</h2>
          <p className="section-subtitle max-w-2xl mx-auto">
            Here are some of the projects I've worked on, showcasing my skills in data analysis and visualization.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="overflow-hidden h-full border-border project-card">
                <div className="relative h-52 w-full">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover"
                    />
                  
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                  <p className="text-muted-foreground text-sm mb-4">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-1 bg-secondary text-xs rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </CardContent>
                <CardFooter className="px-6 py-4 border-t flex justify-center">                 
                  <Button size="sm" asChild>
                    <Link href={project.demo} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="mr-2 h-4 w-4" />
                      Live Demo
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>

        <div className="flex justify-center mt-12">
          <Button variant="outline" size="lg">
          <Link href="https://www.datascienceportfol.io/johnkyalo" target="_blank">
            View More Projects
          </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
