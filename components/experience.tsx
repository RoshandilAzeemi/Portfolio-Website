"use client";

import ScrollReveal from "./scroll-reveal";
import { Briefcase, MapPin, Calendar } from "lucide-react";

const experiences = [
  {
    role: "Data Analyst",
    company: "SMP Promotions",
    period: "Apr 2025 – Aug 2025",
    location: "Mississauga, ON",
    bullets: [
      "Eliminated 20+ hours/week of manual transcription by developing a Python pipeline (pdfplumber, Pandas) to extract and normalize unstructured invoice data from PDFs into structured Excel datasets.",
      "Performed analysis on customer datasets to identify and eliminate duplicates and outliers (Pandas), ensuring 98% data accuracy for marketing campaigns.",
      "Consistently exceeded weekly sales targets by 10% while managing client relationships across Rogers and Ebox telecommunication products.",
    ],
  },
  {
    role: "Data & Business Analytics Intern",
    company: "Sohail Akhtar Enterprise Inc. — IT Consulting",
    period: "May 2024 – Sep 2024",
    location: "Oakville, ON",
    bullets: [
      "Used Pandas to manipulate, transform, and analyze operational and client datasets in support of business transformation initiatives.",
      "Prototyped Client2Clean, a Python deduplication tool using RapidFuzz and Pandas, reconciling disparate client databases and establishing a single source of truth.",
      "Leveraged Excel to create structured analyses, pivot tables, and performance summaries for internal teams and client deliverables.",
      "Wrote SQL queries (JOINs, CTEs) to extract, filter, join, and aggregate data from relational databases to support system and business analysis.",
    ],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="relative z-10 px-6 py-28 sm:py-36">
      <div className="mx-auto max-w-4xl">
        <ScrollReveal>
          <p className="mb-12 text-xs tracking-[0.3em] uppercase text-accent">
            Experience
          </p>
        </ScrollReveal>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-[19px] top-2 bottom-2 w-px bg-gradient-to-b from-accent/40 via-border to-transparent sm:left-[19px]" />

          <div className="space-y-12">
            {experiences.map((exp, i) => (
              <ScrollReveal key={exp.role} delay={0.15 * i}>
                <div className="relative flex gap-6 pl-2">
                  {/* Timeline dot */}
                  <div className="relative z-10 mt-1.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-accent/30 bg-card">
                    <Briefcase className="h-3.5 w-3.5 text-accent" />
                  </div>

                  {/* Content */}
                  <div className="flex-1 rounded-2xl border border-border bg-card p-5 transition-all duration-300 hover:border-border-hover hover:bg-card-hover sm:p-6">
                    <div className="mb-3 flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
                      <div>
                        <h3 className="text-base font-semibold text-foreground sm:text-lg">
                          {exp.role}
                        </h3>
                        <p className="text-sm text-accent-light">{exp.company}</p>
                      </div>
                      <div className="flex flex-col items-start gap-1 sm:items-end">
                        <span className="flex items-center gap-1 text-xs text-muted-dark">
                          <Calendar className="h-3 w-3" />
                          {exp.period}
                        </span>
                        <span className="flex items-center gap-1 text-xs text-muted-dark">
                          <MapPin className="h-3 w-3" />
                          {exp.location}
                        </span>
                      </div>
                    </div>

                    <ul className="space-y-2.5">
                      {exp.bullets.map((bullet, j) => (
                        <li
                          key={j}
                          className="flex items-start gap-2 text-sm leading-relaxed text-muted"
                        >
                          <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent/60" />
                          {bullet}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
