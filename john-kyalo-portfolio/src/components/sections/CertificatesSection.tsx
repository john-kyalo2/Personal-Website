"use client";

import { motion } from "framer-motion";
import { Award, ArrowUpRight } from "lucide-react";

// Add a certificate = add an object. The grid grows with you.
const certificates = [
  {
    id: 1,
    title: "Microsoft Fabric Analytics Engineer",
    issuer: "Microsoft",
    date: "2026",
    link: "https://learn.microsoft.com/en-us/users/johnkyalo-1233/credentials/4a43cffaacdfb054?ref=https%3A%2F%2Fwww.linkedin.com%2F",
  },
  {
    id: 2,
    title: "Microsoft Power BI Data Analyst",
    issuer: "Microsoft",
    date: "2025",
    link: "https://learn.microsoft.com/en-us/users/johnkyalo-1233/credentials/a36ea6e826d866c7?ref=https%3A%2F%2Fwww.linkedin.com%2F",
  },
  {
    id: 3,
    title: "Data Scientist",
    issuer: "DataCamp",
    date: "2024",
    link: "https://www.datacamp.com/certificate/DS0029631178765",
  },
  {
    id: 4,
    title: "Career Essentials in Generative AI",
    issuer: "Microsoft & LinkedIn",
    date: "2024",
    link: "https://www.linkedin.com/learning/certificates/dc2228443f6334636b0885e4244bdd466f4cb4d999276a1922c5f7071ce19383",
  },
];

export default function CertificatesSection() {
  return (
    <section id="certificates" className="section-padding bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <h2 className="section-title">Certificates</h2>
          <p className="section-subtitle max-w-2xl mx-auto !mb-0">
            Credentials behind the craft — click any to verify.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-6xl mx-auto">
          {certificates.map((cert, index) => (
            <motion.a
              key={cert.id}
              href={cert.link}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
              viewport={{ once: true }}
              className="group flex items-center gap-4 rounded-lg border border-border bg-card p-4 hover:border-primary/40 hover:shadow-md transition-all"
            >
              <span className="flex items-center justify-center w-10 h-10 shrink-0 rounded-full bg-primary/10 text-primary">
                <Award className="h-5 w-5" />
              </span>
              <div className="min-w-0 flex-grow">
                <h3 className="font-semibold text-sm leading-snug group-hover:text-primary transition-colors">
                  {cert.title}
                </h3>
                <p className="text-xs text-muted-foreground mt-0.5">
                  {cert.issuer} · {cert.date}
                </p>
              </div>
              <ArrowUpRight className="h-4 w-4 shrink-0 text-muted-foreground transition-all group-hover:text-primary group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
