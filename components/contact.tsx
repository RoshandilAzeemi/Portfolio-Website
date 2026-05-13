"use client";

import ScrollReveal from "./scroll-reveal";
import { Mail, Phone, ArrowUpRight } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="relative z-10 px-6 py-28 sm:py-36">
      <div className="mx-auto max-w-4xl text-center">
        <ScrollReveal>
          <p className="mb-4 text-xs tracking-[0.3em] uppercase text-accent">
            Get in Touch
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <h2 className="mb-6 font-display text-4xl font-bold italic text-foreground sm:text-5xl md:text-6xl">
            Let&apos;s Connect
          </h2>
        </ScrollReveal>

        <ScrollReveal delay={0.2}>
          <p className="mx-auto mb-10 max-w-md text-base text-muted">
            I&apos;m always open to new opportunities, collaborations, and
            conversations. Don&apos;t hesitate to reach out.
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.3}>
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href="mailto:roshandil45@gmail.com"
              className="group flex items-center gap-2 rounded-full border border-accent/30 bg-accent/10 px-6 py-3 text-sm font-medium text-accent-light transition-all duration-300 hover:bg-accent/20 hover:shadow-[0_0_30px_rgba(139,92,246,0.15)]"
            >
              <Mail className="h-4 w-4" />
              roshandil45@gmail.com
              <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </a>

            <a
              href="tel:+14164757961"
              className="flex items-center gap-2 rounded-full border border-border bg-card px-6 py-3 text-sm font-medium text-muted transition-all duration-300 hover:border-border-hover hover:text-foreground"
            >
              <Phone className="h-4 w-4" />
              416-475-7961
            </a>
          </div>
        </ScrollReveal>

        {/* Footer */}
        <ScrollReveal delay={0.4}>
          <div className="mt-24 border-t border-border pt-8">
            <p className="text-xs text-muted-dark">
              © {new Date().getFullYear()} Roshandil Azeemi. Built with Next.js
              &amp; Tailwind CSS.
            </p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
