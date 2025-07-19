"use client";

import Link from "next/link";
import { Github, Linkedin, Globe } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-secondary py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <Link
              href="/"
              className="text-xl font-bold text-primary hover:text-primary/80 transition-colors"
            >
              JK.
            </Link>
            <p className="text-sm text-muted-foreground mt-2">
              Building data-driven solutions that transform businesses.
            </p>
          </div>

          <div className="flex items-center space-x-4">
            <Link
              href="https://github.com/John-Kyalo"
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground hover:text-primary transition-colors"
            >
              <Github className="h-5 w-5" />
            </Link>
            <Link
              href="https://www.linkedin.com/in/johnkyalo/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground hover:text-primary transition-colors"
            >
              <Linkedin className="h-5 w-5" />
            </Link>
            <Link
              href="https://dev.to/johnkyalo"
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground hover:text-primary transition-colors"
            >
              <Globe className="h-5 w-5" />
            </Link>
          </div>
        </div>

        <div className="border-t border-border mt-6 pt-6 text-center text-sm text-muted-foreground">
          © {currentYear} John Kyalo | Anything & Everything Data
        </div>
      </div>
    </footer>
  );
}
