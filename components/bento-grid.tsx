"use client";

import ScrollReveal from "./scroll-reveal";
import { Gamepad2, Film, Code2 } from "lucide-react";

const games = [
  { name: "Minecraft", emoji: "⛏️" },
  { name: "Rocket League", emoji: "🚗" },
  { name: "CS:GO", emoji: "🎯" },
];

const films = [
  { name: "Se7en", year: "1995" },
  { name: "The Godfather", year: "1972" },
  { name: "Pulp Fiction", year: "1994" },
  { name: "Gladiator", year: "2000" },
  { name: "Catch Me If You Can", year: "2002" },
];

const techStack = [
  { name: "Python", color: "#3776AB" },
  { name: "Pandas", color: "#150458" },
  { name: "SQL", color: "#DC382D" },
  { name: "Git", color: "#F05032" },
  { name: "Power BI", color: "#F2C811" },
];

export default function BentoGrid() {
  return (
    <section id="interests" className="relative z-10 px-6 py-28 sm:py-36">
      <div className="mx-auto max-w-4xl">
        <ScrollReveal>
          <p className="mb-12 text-xs tracking-[0.3em] uppercase text-accent">
            Beyond the Code
          </p>
        </ScrollReveal>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-3 sm:grid-rows-2">
          {/* Gaming — spans 1 col, 2 rows */}
          <ScrollReveal delay={0.1} className="sm:row-span-2">
            <div className="group h-full rounded-2xl border border-border bg-card p-6 transition-all duration-300 hover:border-violet-500/20 hover:bg-card-hover">
              <div className="mb-5 flex items-center gap-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-violet-500/10">
                  <Gamepad2 className="h-4.5 w-4.5 text-violet-400" />
                </div>
                <h3 className="text-sm font-semibold uppercase tracking-wider text-foreground">
                  Gaming
                </h3>
              </div>

              <div className="space-y-3">
                {games.map((game) => (
                  <div
                    key={game.name}
                    className="flex items-center gap-3 rounded-xl border border-transparent bg-white/[0.02] p-3 transition-all duration-300 hover:border-violet-500/20 hover:bg-white/[0.04]"
                  >
                    <span className="text-2xl">{game.emoji}</span>
                    <div>
                      <p className="text-sm font-medium text-foreground">
                        {game.name}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>

          {/* Films — spans 2 cols */}
          <ScrollReveal delay={0.2} className="sm:col-span-2">
            <div className="group h-full rounded-2xl border border-border bg-card p-6 transition-all duration-300 hover:border-amber-500/20 hover:bg-card-hover">
              <div className="mb-5 flex items-center gap-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-amber-500/10">
                  <Film className="h-4.5 w-4.5 text-amber-400" />
                </div>
                <h3 className="text-sm font-semibold uppercase tracking-wider text-foreground">
                  Films
                </h3>
              </div>

              <div className="flex flex-wrap gap-2">
                {films.map((film) => (
                  <div
                    key={film.name}
                    className="group/film flex items-center gap-2 rounded-xl border border-transparent bg-white/[0.02] px-4 py-2.5 transition-all duration-300 hover:border-amber-500/20 hover:bg-white/[0.04]"
                  >
                    <span className="text-lg">🎬</span>
                    <div>
                      <p className="text-sm font-medium text-foreground">
                        {film.name}
                      </p>
                      <p className="text-[10px] text-muted-dark">{film.year}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>

          {/* Tech Stack — spans 2 cols */}
          <ScrollReveal delay={0.3} className="sm:col-span-2">
            <div className="group h-full rounded-2xl border border-border bg-card p-6 transition-all duration-300 hover:border-cyan-500/20 hover:bg-card-hover">
              <div className="mb-5 flex items-center gap-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-cyan-500/10">
                  <Code2 className="h-4.5 w-4.5 text-cyan-400" />
                </div>
                <h3 className="text-sm font-semibold uppercase tracking-wider text-foreground">
                  Tech Stack
                </h3>
              </div>

              <div className="flex flex-wrap gap-2">
                {techStack.map((tech) => (
                  <div
                    key={tech.name}
                    className="flex items-center gap-2 rounded-xl border border-transparent bg-white/[0.02] px-4 py-2.5 transition-all duration-300 hover:border-white/10 hover:bg-white/[0.04]"
                  >
                    <div
                      className="h-2.5 w-2.5 rounded-full"
                      style={{ backgroundColor: tech.color }}
                    />
                    <span className="text-sm font-medium text-muted">
                      {tech.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
