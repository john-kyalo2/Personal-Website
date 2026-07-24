"use client";

import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { Button } from "@/components/ui/button";
import { ArrowRight, Github, Linkedin, Globe, BookOpen } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { Link as ScrollLink } from "react-scroll";
import { MEDIUM_PROFILE_URL } from "@/lib/medium";

export default function HeroSection() {
  return (
    <section
      id="home"
      className="pt-36 pb-24 md:pt-48 md:pb-32 bg-gradient-to-b from-background to-secondary/30 relative overflow-hidden"
    >
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-12 items-center">
          {/* Left: intro */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="md:col-span-3"
          >
            <p className="text-primary font-mono text-sm mb-3">
              — Anything &amp; Everything Data
            </p>
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              John <span className="text-primary">Kyalo</span>
            </h1>
            <h2 className="text-2xl md:text-3xl font-medium mb-6 h-10">
              <TypeAnimation
                sequence={[
                  "Data & BI Analyst", 2000,
                  "Analytics Engineer", 2000,
                ]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
                className="text-foreground"
              />
            </h2>
            <p className="text-muted-foreground text-lg mb-8 max-w-2xl">
              In a world overflowing with data, clarity is a competitive advantage. I specialize in creating that clarity.
              I transform fragmented data into intuitive dashboards and meaningful stories that help organizations see patterns, 
              uncover opportunities, and ask better questions.
              
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <ScrollLink
                to="projects"
                spy={true}
                smooth={true}
                offset={-100}
                duration={500}
                className="cursor-pointer"
              >
                <Button className="group">
                  Explore My Work
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </ScrollLink>

              <ScrollLink
                to="writing"
                spy={true}
                smooth={true}
                offset={-100}
                duration={500}
                className="cursor-pointer"
              >
                <Button variant="outline">
                  <BookOpen className="mr-2 h-4 w-4" />
                  Read My Writing
                </Button>
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
                href={MEDIUM_PROFILE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground hover:text-primary transition-colors"
                aria-label="Medium"
              >
                <Globe className="h-5 w-5" />
              </Link>
            </div>
          </motion.div>

          {/* Right: photo + floating code block */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="md:col-span-2 relative flex justify-center md:justify-end"
          >
            <div className="relative">
              <div className="relative w-56 h-56 md:w-72 md:h-72 rounded-2xl overflow-hidden ring-4 ring-primary/20 shadow-xl rotate-2">
                <Image
                  src="/profile-pic_greyish bg.png"
                  alt="John Kyalo — Data & BI Analyst"
                  fill
                  className="object-cover"
                  priority
                />
              </div>

              <div
                className="absolute -bottom-10 -left-24 hidden lg:block bg-background/90 dark:bg-secondary/90 backdrop-blur-sm p-4 rounded-lg shadow-lg border border-border w-64 animate-float"
                aria-hidden="true"
              >
                <div className="flex space-x-2 mb-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-red-500" />
                  <div className="w-2.5 h-2.5 rounded-full bg-yellow-500" />
                  <div className="w-2.5 h-2.5 rounded-full bg-green-500" />
                </div>
                <pre className="text-[11px] font-mono leading-relaxed">
                  <code className="text-foreground">
                    <span className="text-blue-600">const</span>{" "}
                    <span className="text-green-600">analyst</span> = {"{"}
                    <br />
                    {"  "}
                    <span className="text-purple-600">name</span>:{" "}
                    <span className="text-amber-600">'John Kyalo'</span>,
                    <br />
                    {"  "}
                    <span className="text-purple-600">stack</span>: [
                    <span className="text-amber-600">'Power BI'</span>,{" "}
                    <span className="text-amber-600">'Fabric'</span>,{" "}
                    <span className="text-amber-600">'SQL'</span>],
                    <br />
                    {"  "}
                    <span className="text-purple-600">mission</span>:{" "}
                    <span className="text-amber-600">
                      'Data → decisions'
                    </span>
                    <br />
                    {"}"};
                  </code>
                </pre>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
