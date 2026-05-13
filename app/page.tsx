import CursorGlow from "@/components/cursor-glow";
import Hero from "@/components/hero";
import About from "@/components/about";
import Skills from "@/components/skills";
import Experience from "@/components/experience";
import Projects from "@/components/projects";
import BentoGrid from "@/components/bento-grid";
import Contact from "@/components/contact";
import Dock from "@/components/dock";

export default function Home() {
  return (
    <>
      {/* Background grid overlay */}
      <div className="grid-overlay" />

      {/* Cursor glow effect */}
      <CursorGlow />

      {/* Main content */}
      <main className="relative z-10">
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <BentoGrid />
        <Contact />
      </main>

      {/* Floating dock navigation */}
      <Dock />
    </>
  );
}
