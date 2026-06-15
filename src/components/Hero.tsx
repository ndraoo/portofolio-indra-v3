import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowDown, ArrowRight, Code2, Globe2, Layers3 } from "lucide-react";

const focusAreas = [
  "Laravel, Vue.js, React.js, and React Native",
  "Fullstack product delivery",
  "Cross-country engineering collaboration",
];

const spotlightItems = [
  {
    icon: Layers3,
    title: "End-to-end execution",
    description: "Handling UI flows, API integration, backend logic, and database operations in one delivery cycle.",
  },
  {
    icon: Code2,
    title: "Modern product stack",
    description: "Shipping across Laravel, Vue.js, React.js, and React Native with maintainable implementation.",
  },
  {
    icon: Globe2,
    title: "Regional teamwork",
    description: "Collaborating with engineering teams in Indonesia and Malaysia to deliver integrated solutions.",
  },
];

const Hero = () => {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative overflow-hidden px-6 pb-20 pt-28">
      <div className="absolute inset-0 -z-20 bg-[radial-gradient(circle_at_top_left,hsl(24_94%_90%/.6),transparent_34%),radial-gradient(circle_at_88%_12%,hsl(190_73%_83%/.45),transparent_22%)]" />
      <div className="absolute left-1/2 top-12 -z-10 h-72 w-72 -translate-x-1/2 rounded-full bg-accent/10 blur-3xl" />

      <div className="mx-auto grid min-h-[calc(100vh-7rem)] max-w-6xl gap-14 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
        <div className="animate-fade-in">
          <Badge
            variant="outline"
            className="mb-6 border-primary/15 bg-white/70 px-4 py-1.5 text-[0.7rem] uppercase tracking-[0.24em] text-primary shadow-soft backdrop-blur"
          >
            Software Developer
          </Badge>

          <h1 className="max-w-4xl text-5xl font-semibold leading-[0.95] tracking-tight text-foreground md:text-7xl">
            Building digital products that feel <span className="font-serif text-accent italic">polished</span> from interface to infrastructure.
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-muted-foreground md:text-xl">
            I&apos;m Indra Purnomo, a Software Developer based in Indonesia with a focus on fullstack web and mobile delivery. I build reliable user flows, connect clean APIs, and shape backend logic that supports scalable products.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            {focusAreas.map((item) => (
              <span
                key={item}
                className="rounded-full border border-primary/10 bg-white/70 px-4 py-2 text-sm font-medium text-foreground/80 shadow-soft backdrop-blur"
              >
                {item}
              </span>
            ))}
          </div>

          <div className="mt-10 flex flex-wrap gap-4">
            <Button
              onClick={() => scrollToSection("experience")}
              size="lg"
              className="group rounded-full px-7 shadow-strong transition-all hover:-translate-y-0.5 hover:shadow-medium"
            >
              Explore Experience
              <ArrowDown className="h-4 w-4 transition-transform group-hover:translate-y-1" />
            </Button>

            <Button
              variant="outline"
              size="lg"
              onClick={() => scrollToSection("contact")}
              className="group rounded-full border-primary/15 bg-white/70 px-7 backdrop-blur"
            >
              Let&apos;s Work Together
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </div>
        </div>

        <div className="animate-fade-in" style={{ animationDelay: "0.15s" }}>
          <div className="rounded-[2rem] border border-white/60 bg-white/80 p-6 shadow-strong backdrop-blur-xl md:p-8">
            <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
              <div>
                <p className="text-sm font-medium uppercase tracking-[0.22em] text-primary/70">Current Focus</p>
                <h2 className="mt-2 text-3xl font-semibold tracking-tight text-foreground">TalentCloud.Ai</h2>
              </div>
              <span className="rounded-full border border-accent/20 bg-accent/10 px-4 py-2 text-sm font-medium text-accent">
                Hybrid - BSD, Indonesia
              </span>
            </div>

            <p className="text-sm leading-7 text-muted-foreground md:text-base">
              Shipping fullstack product features across Laravel, Vue.js, React.js, and React Native with attention to user experience, business logic, and integration quality.
            </p>

            <div className="mt-6 grid gap-4 sm:grid-cols-3">
              {spotlightItems.map(({ icon: Icon, title, description }) => (
                <div
                  key={title}
                  className="rounded-2xl border border-primary/8 bg-secondary/55 p-4 shadow-soft"
                >
                  <Icon className="h-5 w-5 text-accent" />
                  <h3 className="mt-4 text-sm font-semibold text-foreground">{title}</h3>
                  <p className="mt-2 text-sm leading-6 text-muted-foreground">{description}</p>
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
