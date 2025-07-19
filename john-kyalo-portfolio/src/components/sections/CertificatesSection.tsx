"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, Award } from "lucide-react";

const certificates = [
  {
    id: 1,
    title: "Microsoft Power BI Data Analyst",
    issuer: "Microsoft",
    date: "2025",
    description:
      "Comprehensive Power BI certification covering preparation of data, data modeling, analyze & visualize, managing and securing Power BI.",
    link: "https://learn.microsoft.com/en-us/users/johnkyalo-1233/credentials/a36ea6e826d866c7?ref=https%3A%2F%2Fwww.linkedin.com%2F",
  },
  {
    id: 2,
    title: "Data Scientist",
    issuer: "DataCamp",
    date: "2024",
    description:
      "Advanced SQL techniques for complex queries, database optimization, and Machine learning for analytical purposes.",
    link: "https://www.datacamp.com/certificate/DS0029631178765",
  },
  {
    id: 3,
    title: "Career Essentials in Generative AI",
    issuer: "Microsoft,LinkedIn",
    date: "2024",
    description:
      "In-depth course on Generative AI covering Artificial Intelligence for Business, Responsible AI, Copilot & Prompt Engineering.",
    link: "https://www.linkedin.com/learning/certificates/dc2228443f6334636b0885e4244bdd466f4cb4d999276a1922c5f7071ce19383",
  },
  
];

export default function CertificatesSection() {
  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 3;
  const pageCount = Math.ceil(certificates.length / itemsPerPage);

  const nextPage = () => {
    setCurrentPage((prev) => (prev + 1) % pageCount);
  };

  const prevPage = () => {
    setCurrentPage((prev) => (prev - 1 + pageCount) % pageCount);
  };

  const visibleCertificates = certificates.slice(
    currentPage * itemsPerPage,
    currentPage * itemsPerPage + itemsPerPage
  );

  return (
    <section id="certificates" className="section-padding bg-secondary/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="section-title">Certificates</h2>
          <p className="section-subtitle max-w-2xl mx-auto">
            Professional certifications that showcase my expertise and continuous learning.
          </p>
        </motion.div>

        <div className="relative">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {visibleCertificates.map((certificate, index) => (
              <motion.div
                key={certificate.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="h-full"
              >
                <Card className="h-full border-border hover:shadow-md transition-shadow overflow-hidden">
                  <CardContent className="p-6 flex flex-col h-full">
                    <div className="mb-4 flex items-center justify-center">
                      <span className="flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 text-primary">
                        <Award className="h-6 w-6" />
                      </span>
                    </div>
                    <h3 className="text-xl font-semibold text-center mb-2">
                      {certificate.title}
                    </h3>
                    <div className="text-sm text-muted-foreground text-center mb-4">
                      {certificate.issuer} | {certificate.date}
                    </div>
                    <p className="text-sm text-muted-foreground flex-grow mb-4">
                      {certificate.description}
                    </p>
                    <Button
                      variant="outline"
                      className="w-full mt-auto"
                      asChild
                    >
                      <a href={certificate.link} target="_blank" rel="noopener noreferrer">
                        Certificate Link
                      </a>
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          {pageCount > 1 && (
            <div className="flex justify-center items-center mt-8 space-x-2">
              <Button
                variant="outline"
                size="icon"
                onClick={prevPage}
                disabled={pageCount <= 1}
              >
                <ChevronLeft className="h-4 w-4" />
              </Button>
              {Array.from({ length: pageCount }).map((_, i) => (
                <Button
                  key={`page-${i}`}
                  variant={i === currentPage ? "default" : "outline"}
                  size="icon"
                  className="w-8 h-8"
                  onClick={() => setCurrentPage(i)}
                >
                  {i + 1}
                </Button>
              ))}
              <Button
                variant="outline"
                size="icon"
                onClick={nextPage}
                disabled={pageCount <= 1}
              >
                <ChevronRight className="h-4 w-4" />
              </Button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
