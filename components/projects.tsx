"use client";

import ScrollReveal from "./scroll-reveal";
import { motion } from "framer-motion";
import { ExternalLink, ArrowRight } from "lucide-react";

function GitHubIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
    </svg>
  );
}
import { useRef } from "react";

const projects = [
  {
    title: "Client2Clean",
    tagline: "Automated Data Deduplication Pipeline",
    description:
      "A high-performance ETL pipeline that automates ingestion, validation, and deduplication of messy client datasets from CSV, Excel, and JSON formats. Features an interactive Streamlit dashboard with dynamic column mapping, real-time dataset statistics, and fuzzy string matching using RapidFuzz to identify duplicates with 90%+ similarity.",
    tech: ["Python", "Pandas", "Streamlit", "Pydantic", "RapidFuzz"],
    highlights: [
      "Fuzzy matching catches variations that exact-match filters miss",
      "Pydantic schemas ensure 100% data integrity in exports",
      "Interactive dashboard with real-time duplicate detection stats",
    ],
    liveUrl: "https://client2clean-9oyn4bzi2zzp9fm57buvxi.streamlit.app/",
    githubUrl: "https://github.com/RoshandilAzeemi/Client2Clean",
    gradient: "from-violet-600/20 to-indigo-600/20",
    accentBorder: "border-violet-500/20",
  },
  {
    title: "Invoice Pipeline",
    tagline: "PDF to Structured Data Automation",
    description:
      "Automated extraction pipeline that transforms unstructured invoice PDFs into clean, structured Excel datasets. Built using pdfplumber and Pandas, this tool eliminated 20+ hours per week of manual data transcription at SMP Promotions.",
    tech: ["Python", "pdfplumber", "Pandas", "OpenPyXL"],
    highlights: [
      "Eliminated 20+ hours/week of manual work",
      "Normalized unstructured data into structured Excel",
      "Integrated into production workflow at SMP Promotions",
    ],
    liveUrl: null,
    githubUrl: "https://github.com/RoshandilAzeemi/Invoice-Pipeline",
    gradient: "from-indigo-600/20 to-purple-600/20",
    accentBorder: "border-indigo-500/20",
  },
  {
    title: "CreditLens",
    tagline: "End-to-End Credit Risk Analysis Pipeline",
    description:
      "Built a full credit risk analysis pipeline on 1,000 loan records — cleaning data in Python/Pandas (handling 394 nulls as unknown to preserve sample size), querying insights in PostgreSQL, and visualizing key metrics in Power BI. Wrote a 10-query SQL portfolio uncovering default drivers like 40.94% default rate for under-25 borrowers and 49.27% for those with little checking balance.",
    tech: ["Python", "PostgreSQL", "Pandas", "Power BI"],
    highlights: [
      "30% overall default rate surfaced via KPI cards and interactive dashboard",
      "10-query SQL portfolio revealing key default drivers by age, housing, and savings",
      "Homeowners default at nearly half the rate of renters",
    ],
    liveUrl: null,
    githubUrl: "https://github.com/RoshandilAzeemi/CreditLens",
    gradient: "from-teal-600/20 to-cyan-600/20",
    accentBorder: "border-teal-500/20",
  },
];

export default function Projects() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 500, behavior: "smooth" });
    }
  };

  return (
    <section id="projects" className="relative z-10 py-28 sm:py-36">
      <div className="mx-auto max-w-4xl px-6">
        <ScrollReveal>
          <div className="mb-12 flex items-end justify-between">
            <p className="text-xs tracking-[0.3em] uppercase text-accent">
              Projects
            </p>
            {projects.length > 1 && (
              <button
                onClick={scrollRight}
                className="group flex items-center gap-1 text-xs text-muted-dark transition-colors hover:text-accent"
              >
                Scroll
                <ArrowRight className="h-3 w-3 transition-transform group-hover:translate-x-1" />
              </button>
            )}
          </div>
        </ScrollReveal>
      </div>

      {/* Horizontal scroll container */}
      <ScrollReveal delay={0.15}>
        <div
          ref={scrollRef}
          className="no-scrollbar snap-scroll flex gap-6 overflow-x-auto px-6 pb-4 sm:px-[max(1.5rem,calc((100vw-56rem)/2+1.5rem))]"
        >
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 * i, duration: 0.5 }}
              className={`group relative min-w-[340px] max-w-[480px] shrink-0 rounded-2xl border ${project.accentBorder} bg-gradient-to-br ${project.gradient} p-6 transition-all duration-500 hover:scale-[1.02] hover:shadow-[0_0_40px_rgba(139,92,246,0.1)] sm:min-w-[440px] sm:p-8`}
            >
              {/* Glass inner card */}
              <div className="rounded-xl border border-white/5 bg-black/40 p-5 backdrop-blur-sm sm:p-6">
                <h3 className="mb-1 text-xl font-bold text-foreground sm:text-2xl">
                  {project.title}
                </h3>
                <p className="mb-4 text-sm font-medium text-accent-light">
                  {project.tagline}
                </p>
                <p className="mb-5 text-sm leading-relaxed text-muted">
                  {project.description}
                </p>

                {/* Highlights */}
                <ul className="mb-5 space-y-1.5">
                  {project.highlights.map((h, j) => (
                    <li
                      key={j}
                      className="flex items-start gap-2 text-xs text-muted"
                    >
                      <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-accent" />
                      {h}
                    </li>
                  ))}
                </ul>

                {/* Tech stack */}
                <div className="mb-5 flex flex-wrap gap-1.5">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="rounded-md border border-white/5 bg-white/5 px-2 py-0.5 text-[11px] text-muted"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex gap-3">
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 rounded-lg border border-accent/30 bg-accent/10 px-3 py-1.5 text-xs font-medium text-accent-light transition-all hover:bg-accent/20"
                    >
                      <ExternalLink className="h-3 w-3" />
                      Live Demo
                    </a>
                  )}
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 rounded-lg border border-border bg-card px-3 py-1.5 text-xs font-medium text-muted transition-all hover:border-border-hover hover:text-foreground"
                  >
                    <GitHubIcon className="h-3 w-3" />
                    GitHub
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </ScrollReveal>
    </section>
  );
}
