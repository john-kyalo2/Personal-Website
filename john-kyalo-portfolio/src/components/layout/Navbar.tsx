"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Link as ScrollLink } from "react-scroll";
import { Menu, X, Download, MoonIcon, SunIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTheme } from "next-themes";

const navLinks = [
  { name: "Home", to: "home", offset: -100 },
  { name: "About", to: "about", offset: -100 },
  { name: "Projects", to: "projects", offset: -100 },
  { name: "Skills", to: "skills", offset: -100 },
  { name: "Certificates", to: "certificates", offset: -100 },
  { name: "Contact", to: "contact", offset: -100 },
];

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };


  const handleResumeDownload = () => {
    // Create a temporary anchor element to trigger download
    const link = document.createElement('a');
    link.href = '/resume.pdf';
    link.download = 'resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/80 backdrop-blur-md shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link
          href="/"
          className="text-xl font-bold text-primary hover:text-primary/80 transition-colors"
        >
          JK.
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-1">
          {navLinks.map((link) => (
            <ScrollLink
              key={link.name}
              to={link.to}
              spy
              smooth
              offset={link.offset}
              duration={500}
              className="px-3 py-2 text-sm font-medium text-foreground hover:text-primary cursor-pointer transition-colors"
              activeClass="text-primary"
            >
              {link.name}
            </ScrollLink>
          ))}
          <Button
            variant="outline"
            size="sm"
            className="ml-4 border-primary text-primary hover:bg-primary hover:text-primary-foreground"
            onClick={handleResumeDownload}
          >
            <Download className="mr-2 h-4 w-4" />
            Resume
          </Button>
          {mounted && (
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="ml-2"
            >
              {theme === "dark" ? (
                <SunIcon className="h-[1.2rem] w-[1.2rem]" />
              ) : (
                <MoonIcon className="h-[1.2rem] w-[1.2rem]" />
              )}
            </Button>
          )}
        </nav>

        {/* Mobile Menu Button */}
        <div className="flex items-center md:hidden">
          {mounted && (
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="mr-2"
            >
              {theme === "dark" ? (
                <SunIcon className="h-[1.2rem] w-[1.2rem]" />
              ) : (
                <MoonIcon className="h-[1.2rem] w-[1.2rem]" />
              )}
            </Button>
          )}
          <Button variant="ghost" size="icon" onClick={toggleMobileMenu}>
            {mobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-background/95 backdrop-blur-sm shadow-md">
          <div className="container mx-auto px-4 py-2 space-y-1">
            {navLinks.map((link) => (
              <ScrollLink
                key={link.name}
                to={link.to}
                spy
                smooth
                offset={link.offset}
                duration={500}
                className="block py-2 text-sm font-medium text-foreground hover:text-primary cursor-pointer transition-colors"
                activeClass="text-primary"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.name}
              </ScrollLink>
            ))}
            <div className="pt-2">
              <Button
                variant="outline"
                size="sm"
                className="w-full border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                onClick={handleResumeDownload}
              >
                <Download className="mr-2 h-4 w-4" />
                Resume
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
