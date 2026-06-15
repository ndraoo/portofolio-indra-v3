import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowDown, ArrowRight, Code2, Layers3, Workflow } from "lucide-react";

const focusAreas = [
  "Fullstack web and mobile",
  "Clean UI and reliable APIs",
  "Indonesia-Malaysia collaboration",
];

const spotlightItems = [
  {
    icon: Layers3,
    title: "Fullstack ownership",
    description: "UI, API, and database flow.",
  },
  {
    icon: Code2,
    title: "Modern stack",
    description: "Laravel, Vue.js, React.js, React Native.",
  },
  {
    icon: Workflow,
    title: "Practical execution",
    description: "Clean, maintainable, production-ready work.",
  },
];

const Hero = () => {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative overflow-hidden px-6 pb-24 pt-28">
      <div className="absolute left-[8%] top-16 -z-10 h-48 w-48 rounded-[2.5rem] border border-primary/12 bg-accent/12 blur-2xl" />
      <div className="absolute right-[12%] top-24 -z-10 h-56 w-56 rounded-full bg-accent/18 blur-3xl" />

      <div className="mx-auto grid min-h-[calc(100vh-7rem)] max-w-6xl gap-16 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
        <div className="animate-fade-in">
          <Badge
            variant="outline"
            className="chip-3d mb-6 rounded-full px-4 py-1.5 text-[0.72rem] uppercase tracking-[0.24em] text-foreground"
          >
            Software Developer
          </Badge>

          <h1 className="max-w-4xl text-5xl font-semibold leading-[0.92] tracking-tight text-foreground md:text-7xl">
            Fullstack software developer for web, backend, and mobile.
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-muted-foreground md:text-xl">
            Laravel, Vue.js, React.js, and React Native. Building clean UI, solid APIs, and reliable product flows.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            {focusAreas.map((item) => (
              <span
                key={item}
                className="chip-3d rounded-full px-4 py-2 text-sm font-medium text-foreground/80"
              >
                {item}
              </span>
            ))}
          </div>

          <div className="mt-10 flex flex-wrap gap-4">
            <Button
              onClick={() => scrollToSection("experience")}
              size="lg"
              className="rounded-full px-7 shadow-[0_16px_36px_-22px_rgba(0,0,0,0.72)] transition-all hover:-translate-y-0.5"
            >
              Explore Experience
              <ArrowDown className="h-4 w-4" />
            </Button>

            <Button
              variant="outline"
              size="lg"
              onClick={() => scrollToSection("contact")}
              className="chip-3d rounded-full px-7 text-foreground"
            >
              Let&apos;s Work Together
              <ArrowRight className="h-4 w-4" />
            </Button>
          </div>
        </div>

        <div className="relative animate-fade-in" style={{ animationDelay: "0.15s" }}>
          <div className="absolute -left-6 top-12 hidden h-40 w-40 -rotate-12 rounded-[2rem] border border-primary/12 bg-card/60 shadow-[0_30px_60px_-36px_rgba(132,30,78,0.34)] backdrop-blur md:block" />
          <div className="absolute -right-6 bottom-0 hidden h-28 w-56 rotate-6 rounded-[2rem] border border-primary/20 bg-primary/95 p-5 text-primary-foreground shadow-[0_40px_80px_-44px_rgba(95,23,56,0.72)] md:block">
            <p className="text-xs uppercase tracking-[0.24em] text-white/55">Current Focus</p>
            <p className="mt-3 text-lg font-semibold">TalentCloud.Ai</p>
            <p className="mt-2 text-sm leading-6 text-white/65">Fullstack web and mobile feature delivery.</p>
          </div>

          <div className="panel-3d-dark stack-offset-dark rounded-[2.5rem] p-7 text-white md:p-8">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <span className="chip-3d-dark rounded-full px-4 py-2 text-xs font-medium uppercase tracking-[0.24em] text-white/70">
                Current Role
              </span>
              <span className="rounded-full border border-white/12 px-4 py-2 text-sm text-white/72">
                Hybrid - BSD, Indonesia
              </span>
            </div>

            <div className="mt-8">
              <p className="text-sm uppercase tracking-[0.24em] text-white/50">Pinetop Technology Venture</p>
              <h2 className="mt-3 text-4xl font-semibold tracking-tight md:text-[2.7rem]">
                Building TalentCloud.Ai end to end.
              </h2>
              <p className="mt-5 max-w-xl text-base leading-8 text-white/66">
                Fullstack delivery across Laravel, Vue.js, React.js, and React Native.
              </p>
            </div>

            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              {spotlightItems.map(({ icon: Icon, title, description }) => (
                <div
                  key={title}
                  className="rounded-[1.6rem] border border-white/10 bg-white/[0.05] p-4 backdrop-blur"
                >
                  <Icon className="h-5 w-5 text-white" />
                  <h3 className="mt-4 text-sm font-semibold text-white">{title}</h3>
                  <p className="mt-2 text-sm leading-6 text-white/62">{description}</p>
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
