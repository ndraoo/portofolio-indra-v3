import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowDown, ArrowRight, Code2, Layers3, Workflow, Sparkles } from "lucide-react";

const focusAreas = [
  "Fullstack web and mobile",
  "Clean UI & Reliable APIs",
  "Medan - BSD - Malaysia Collabs",
];

const spotlightItems = [
  {
    icon: Layers3,
    title: "Fullstack ownership",
    description: "End-to-end design, API delivery, and database mapping.",
  },
  {
    icon: Code2,
    title: "Modern stack",
    description: "Laravel, Vue.js, React.js, React Native.",
  },
  {
    icon: Workflow,
    title: "Practical execution",
    description: "Clean, testable, and production-ready work.",
  },
];

const Hero = () => {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-[calc(100vh-5rem)] flex items-center overflow-hidden px-6 pb-20 pt-32 lg:pt-24">
      <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center w-full">
        {/* Left column */}
        <div className="animate-fade-in z-10">
          <Badge
            variant="outline"
            className="interactive-badge mb-6 rounded-full px-4 py-1.5 text-[0.72rem] uppercase tracking-[0.24em] font-semibold text-foreground/80"
          >
            <Sparkles className="h-3 w-3 mr-1.5 text-primary animate-pulse-slow" />
            Software Developer
          </Badge>

          <h1 className="max-w-4xl text-5xl font-extrabold leading-[1.08] tracking-tight text-foreground md:text-7xl">
            Fullstack developer for <span className="gradient-text">web</span>, backend, and <span className="gradient-text">mobile</span>.
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-muted-foreground md:text-xl font-normal">
            Building clean UI, solid APIs, and reliable product flows with Laravel, Vue.js, React, and React Native.
          </p>

          <div className="mt-8 flex flex-wrap gap-2.5">
            {focusAreas.map((item) => (
              <span
                key={item}
                className="glass-card interactive-badge rounded-full px-4 py-2 text-sm font-medium text-foreground/80"
              >
                {item}
              </span>
            ))}
          </div>

          <div className="mt-10 flex flex-wrap gap-4">
            <Button
              onClick={() => scrollToSection("experience")}
              size="lg"
              className="rounded-full px-8 bg-primary hover:bg-primary/90 text-primary-foreground font-semibold shadow-lg hover-lift hover-glow flex items-center gap-2"
            >
              Explore Experience
              <ArrowDown className="h-4 w-4" />
            </Button>

            <Button
              variant="outline"
              size="lg"
              onClick={() => scrollToSection("contact")}
              className="glass-card rounded-full px-8 text-foreground font-medium hover-lift border-border/80"
            >
              Let&apos;s Work Together
              <ArrowRight className="h-4 w-4 ml-1.5" />
            </Button>
          </div>
        </div>

        {/* Right column (Visual Feature Highlight) */}
        <div className="relative animate-fade-in z-10" style={{ animationDelay: "0.15s" }}>
          {/* Floating small note badge */}
          <div className="absolute -left-6 top-12 hidden lg:block h-36 w-36 -rotate-12 rounded-[2rem] glass-card p-5 shadow-xl animate-float">
            <p className="text-[0.65rem] uppercase tracking-[0.2em] text-muted-foreground">Current Stack</p>
            <p className="mt-2 text-base font-bold text-foreground">React Native</p>
            <p className="mt-1 text-xs text-muted-foreground leading-relaxed">Cross-platform mobile feature ownership.</p>
          </div>

          <div className="absolute -right-6 bottom-0 hidden lg:block h-32 w-52 rotate-6 rounded-[2rem] glass-card-dark p-5 text-white shadow-2xl animate-float-reverse">
            <p className="text-[0.65rem] uppercase tracking-[0.2em] text-white/50">Current Focus</p>
            <p className="mt-2 text-base font-bold text-white">TalentCloud.Ai</p>
            <p className="mt-1 text-xs text-white/60 leading-relaxed">Delivering collaborative SaaS features.</p>
          </div>

          {/* Primary Feature Dashboard Card */}
          <div className="glass-card-dark rounded-[2.5rem] p-7 text-white md:p-8 shadow-2xl relative overflow-hidden">
            {/* Subtle glow border */}
            <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent" />
            
            <div className="flex flex-wrap items-center justify-between gap-3">
              <span className="rounded-full bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-white/90 border border-white/10">
                Primary Stack
              </span>
              <span className="rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs text-white/70">
                BSD, Indonesia
              </span>
            </div>

            <div className="mt-8">
              <p className="text-xs font-bold uppercase tracking-[0.24em] text-white/40">Pinetop Technology Venture</p>
              <h2 className="mt-3 text-3xl font-bold tracking-tight md:text-[2.2rem] leading-tight text-white">
                Building <span className="text-primary-foreground font-extrabold bg-gradient-to-r from-violet-400 to-indigo-300 bg-clip-text text-transparent">TalentCloud.Ai</span> end to end.
              </h2>
              <p className="mt-4 max-w-xl text-sm leading-relaxed text-white/60">
                Coordinating with Malaysia HQ to design, ship, and maintain critical user profiles, onboarding, and dashboard systems.
              </p>
            </div>

            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              {spotlightItems.map(({ icon: Icon, title, description }) => (
                <div
                  key={title}
                  className="rounded-2xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.05] transition-colors p-4 flex flex-col justify-between"
                >
                  <Icon className="h-5 w-5 text-violet-400" />
                  <div>
                    <h3 className="mt-3 text-xs font-bold text-white uppercase tracking-wider">{title}</h3>
                    <p className="mt-1 text-[0.72rem] leading-relaxed text-white/50">{description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
