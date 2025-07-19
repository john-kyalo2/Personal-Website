"use client";

import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { Button } from "@/components/ui/button";
import { ArrowRight, Github, Linkedin, Globe } from "lucide-react";
import Link from "next/link";
import { Link as ScrollLink } from "react-scroll";

export default function HeroSection() {
  return (
    <section
      id="home"
      className="pt-40 pb-32 md:pt-52 md:pb-40 bg-gradient-to-b from-background to-secondary/30 relative overflow-hidden"
    >
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto md:mx-0"
        >
          <h2 className="text-primary font-medium mb-3">Hello! I'm</h2>
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            John <span className="text-primary">Kyalo</span>
          </h1>
          <h2 className="text-2xl md:text-3xl font-medium mb-6 h-10">
            <TypeAnimation
              sequence={[
                "Data & BI Analyst", 2000,
                "Data Storyteller", 2000,
                "Business Insights Specialist", 2000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
              className="text-foreground"
            />
          </h2>
          <p className="text-muted-foreground text-lg mb-8 max-w-2xl">
            I help businesses make sense out of their data and empower smarter
            decisions through insightful analysis and visualization.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-8">
            <ScrollLink
              to="contact"
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}
              className="cursor-pointer"
            >
              <Button className="group">
                Contact Me
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </ScrollLink>

            <ScrollLink
              to="projects"
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}
              className="cursor-pointer"
            >
              <Button variant="outline">View Projects</Button>
            </ScrollLink>
          </div>

          <div className="flex items-center space-x-4">
            <Link
              href="https://github.com/John-Kyalo"
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground hover:text-primary transition-colors"
              aria-label="GitHub"
            >
              <Github className="h-5 w-5" />
            </Link>
            <Link
              href="https://www.linkedin.com/in/johnkyalo/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground hover:text-primary transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-5 w-5" />
            </Link>
            <Link
              href="https://dev.to/johnkyalo"
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground hover:text-primary transition-colors"
              aria-label="Website"
            >
              <Globe className="h-5 w-5" />
            </Link>
          </div>
        </motion.div>
      </div>

      {/* Decorative code block */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.8 }}
        transition={{ delay: 0.3, duration: 0.5 }}
        className="hidden md:block absolute top-1/2 right-10 transform -translate-y-1/2 bg-background/80 dark:bg-secondary/80 backdrop-blur-sm p-5 rounded-lg shadow-lg border border-border w-96 animate-float"
        aria-hidden="true"
      >
        <div className="flex space-x-2 mb-3">
          <div className="w-3 h-3 rounded-full bg-red-500" />
          <div className="w-3 h-3 rounded-full bg-yellow-500" />
          <div className="w-3 h-3 rounded-full bg-green-500" />
        </div>
        <pre className="text-xs font-mono">
          <code className="text-foreground">
            <span className="text-blue-600">const</span>{" "}
            <span className="text-green-600">analyst</span> = {"{"}
            <br />
            {"  "}
            <span className="text-purple-600">name</span>:{" "}
            <span className="text-amber-600">'John Kyalo'</span>,
            <br />
            {"  "}
            <span className="text-purple-600">skills</span>: [
            <br />
            {"    "}
            <span className="text-amber-600">'Power BI'</span>,
            <br />
            {"    "}
            <span className="text-amber-600">'SQL'</span>,
            <br />
            {"    "}
            <span className="text-amber-600">'Python'</span>
            <br />
            {"  "}],
            <br />
            {"  "}
            <span className="text-purple-600">mission</span>:{" "}
            <span className="text-amber-600">'Transforming data into insights'</span>
            <br />
            {"}"};
          </code>
        </pre>
      </motion.div>
    </section>
  );
}
