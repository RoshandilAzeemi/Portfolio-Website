"use client";

import ScrollReveal from "./scroll-reveal";

const skillCategories = [
  {
    label: "Languages",
    skills: ["Python", "SQL", "C"],
  },
  {
    label: "Libraries",
    skills: [
      "Pandas",
      "NumPy",
      "Pydantic",
      "OpenPyXL",
      "RapidFuzz",
      "pdfplumber",
      "Streamlit",
    ],
  },
  {
    label: "Visualization",
    skills: ["Power BI", "Matplotlib", "Seaborn"],
  },
  {
    label: "Tools",
    skills: ["Git / GitHub", "Jupyter", "Cursor", "Microsoft Office"],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="relative z-10 px-6 py-28 sm:py-36">
      <div className="mx-auto max-w-4xl">
        <ScrollReveal>
          <p className="mb-12 text-xs tracking-[0.3em] uppercase text-accent">
            Technical Skills
          </p>
        </ScrollReveal>

        <div className="grid gap-8 sm:grid-cols-2">
          {skillCategories.map((cat, i) => (
            <ScrollReveal key={cat.label} delay={0.1 + i * 0.1}>
              <div className="group">
                <h3 className="mb-3 text-xs font-medium tracking-widest uppercase text-muted-dark">
                  {cat.label}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {cat.skills.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-lg border border-border bg-card px-3 py-1.5 text-sm text-muted transition-all duration-300 hover:border-accent/40 hover:text-foreground hover:shadow-[0_0_12px_rgba(139,92,246,0.1)]"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
