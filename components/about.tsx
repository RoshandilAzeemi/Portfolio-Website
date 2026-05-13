"use client";

import ScrollReveal from "./scroll-reveal";
import { GraduationCap, Award, BookOpen } from "lucide-react";

const coursework = [
  "Linear Algebra",
  "Discrete Mathematics",
  "Intro to Software Design",
];

export default function About() {
  return (
    <section id="about" className="relative z-10 px-6 py-28 sm:py-36">
      <div className="mx-auto max-w-4xl">
        {/* Section label */}
        <ScrollReveal>
          <p className="mb-4 text-xs tracking-[0.3em] uppercase text-accent">
            About
          </p>
        </ScrollReveal>

        {/* Intro */}
        <ScrollReveal delay={0.1}>
          <p className="mb-16 max-w-2xl text-lg leading-relaxed text-muted sm:text-xl">
            I&apos;m a Computer Science student at McMaster University with a passion
            for turning raw data into actionable insights. I specialize in
            building automated data pipelines, crafting interactive dashboards,
            and writing clean, production-ready Python code.
          </p>
        </ScrollReveal>

        {/* Education card */}
        <ScrollReveal delay={0.2}>
          <div className="group rounded-2xl border border-border bg-card p-6 transition-all duration-300 hover:border-border-hover hover:bg-card-hover sm:p-8">
            <div className="flex items-start gap-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-accent-glow">
                <GraduationCap className="h-5 w-5 text-accent" />
              </div>
              <div className="flex-1">
                <div className="flex flex-col justify-between gap-2 sm:flex-row sm:items-center">
                  <div>
                    <h3 className="text-lg font-semibold text-foreground">
                      McMaster University
                    </h3>
                    <p className="text-sm text-muted">
                      Bachelor of Computer Science
                    </p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm font-medium text-accent-light">
                      GPA: 3.5 / 4.0
                    </p>
                    <p className="text-xs text-muted-dark">Hamilton, ON</p>
                  </div>
                </div>

                {/* Coursework */}
                <div className="mt-5">
                  <div className="mb-2 flex items-center gap-2">
                    <BookOpen className="h-3.5 w-3.5 text-muted-dark" />
                    <p className="text-xs tracking-wide uppercase text-muted-dark">
                      Relevant Coursework
                    </p>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {coursework.map((course) => (
                      <span
                        key={course}
                        className="rounded-full border border-border bg-black/40 px-3 py-1 text-xs text-muted transition-colors hover:border-accent/30 hover:text-accent-light"
                      >
                        {course}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* Certification */}
        <ScrollReveal delay={0.3}>
          <div className="mt-4 rounded-2xl border border-border bg-card p-6 transition-all duration-300 hover:border-border-hover hover:bg-card-hover">
            <div className="flex items-center gap-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-accent-glow">
                <Award className="h-5 w-5 text-accent" />
              </div>
              <div>
                <h3 className="text-sm font-semibold text-foreground">
                  AWS Certified Cloud Practitioner
                </h3>
                <p className="text-xs text-muted-dark">
                  In Progress · Expected June 2026
                </p>
              </div>
              <div className="ml-auto">
                <span className="rounded-full border border-accent/20 bg-accent/10 px-3 py-1 text-xs text-accent-light">
                  In Progress
                </span>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
