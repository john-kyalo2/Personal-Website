"use client";

import { motion } from "framer-motion";
import { Database, PieChart, TrendingUp } from "lucide-react";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { AvatarImage } from "@radix-ui/react-avatar";

export default function AboutSection() {
  return (
    <section id="about" className="section-padding bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="section-title">About Me</h2>
          <p className="section-subtitle max-w-2xl mx-auto">
            Anything & Everything Data
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="col-span-1 flex flex-col items-center"
          >
            <Avatar className="w-48 h-48 mb-6">
              <AvatarImage src="\profile-pic_greyish bg.png" alt="john k" />
              <AvatarFallback className="text-5xl bg-secondary text-primary">
                JK
              </AvatarFallback>
            </Avatar>
            <h3 className="text-2xl font-bold mb-2">John Kyalo</h3>
            <p className="text-primary font-medium mb-4">Data & BI Analyst</p>
            <div className="flex space-x-3 mb-6">
              <div className="px-3 py-1 bg-secondary text-foreground rounded-full text-sm">
                Power BI
              </div>
              <div className="px-3 py-1 bg-secondary text-foreground rounded-full text-sm">
                SQL
              </div>
              <div className="px-3 py-1 bg-secondary text-foreground rounded-full text-sm">
                Python
              </div>
            </div>
            <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">
              <Button variant="outline" className="mt-2">
                View Resume
              </Button>
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
            className="col-span-2"
          >
            <h3 className="text-xl font-semibold mb-4 flex items-center">
              <Database className="mr-2 h-5 w-5 text-primary" /> Bio
            </h3>
            <p className="text-muted-foreground mb-6">
              As a dedicated Data and Business Intelligence Analyst, I specialize in transforming complex datasets into actionable insights. With expertise in data visualization, SQL querying, and Python scripting, I help organizations make data-driven decisions that drive growth and efficiency.
            </p>

            <h3 className="text-xl font-semibold mb-4 flex items-center">
              <TrendingUp className="mr-2 h-5 w-5 text-primary" /> Experience
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
              <Card>
                <CardContent className="p-4">
                  <h4 className="font-medium">Data Analyst</h4>
                  <p className="text-sm text-muted-foreground">
                    DCA | 2024 - Present
                  </p>
                  <ul className="text-sm mt-2 space-y-1 text-muted-foreground">
                    <li>• Built interactive dashboards using Power BI</li>
                    <li>• Applied UI/UX principles to improve usability</li>
                    <li>• Collaborated with teams to translate business questions into insights</li>
                  </ul>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-4">
                  <h4 className="font-medium">Data Intern</h4>
                  <p className="text-sm text-muted-foreground">
                    Africa Stem Girl | 2024 - 2024
                  </p>
                  <ul className="text-sm mt-2 space-y-1 text-muted-foreground">
                    <li>• Scraped data from website to support intelligent agent development</li>
                    <li>• Contributed to what would have been an AI agent by preparing data logic</li>
                    <li>• Conducted exploratory data analysis</li>
                  </ul>
                </CardContent>
              </Card>
            </div>

            <h3 className="text-xl font-semibold mb-4 flex items-center">
              <PieChart className="mr-2 h-5 w-5 text-primary" /> Education
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Card>
                <CardContent className="p-4">
                  <h4 className="font-medium">Bachelor's in Business Information Technology</h4>
                  <p className="text-sm text-muted-foreground">
                    Africa Nazarene University | 2020 - 2024
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-4">
                  <h4 className="font-medium">Data Analysis Certification</h4>
                  <p className="text-sm text-muted-foreground">
                    ALX | 2024
                  </p>
                </CardContent>
              </Card>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
