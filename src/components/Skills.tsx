import { Badge } from "@/components/ui/badge";
import { Code2, Database, Layers3, Smartphone } from "lucide-react";

const skillGroups = [
  {
    icon: Code2,
    title: "Frontend Craft",
    description: "Building polished interfaces and user flows that stay practical in production.",
    skills: ["React.js", "Vue.js", "JavaScript", "Tailwind CSS"],
  },
  {
    icon: Database,
    title: "Backend Systems",
    description: "Designing APIs, business logic, and operational features that support product reliability.",
    skills: ["Laravel", "PHP", "Go", "REST API"],
  },
  {
    icon: Smartphone,
    title: "Mobile Delivery",
    description: "Connecting mobile product experiences with the same quality and consistency as the web stack.",
    skills: ["React Native", "Firebase", "Swagger", "Figma"],
  },
  {
    icon: Layers3,
    title: "Data and Workflow",
    description: "Keeping delivery smooth with clear collaboration, stable data layers, and repeatable tooling.",
    skills: ["MySQL", "PostgreSQL", "Docker", "GitHub", "Bootstrap"],
  },
];

const Skills = () => {
  return (
    <section className="relative overflow-hidden px-6 py-24">
      <div className="absolute inset-x-0 top-0 -z-10 h-72 bg-[radial-gradient(circle_at_82%_0%,hsl(194_60%_45%/.12),transparent_28%),radial-gradient(circle_at_12%_20%,hsl(18_92%_56%/.08),transparent_40%)]" />

      <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="rounded-[2rem] border border-white/60 bg-white/80 p-8 shadow-medium backdrop-blur xl:p-10">
          <Badge
            variant="outline"
            className="border-primary/15 bg-secondary/70 px-4 py-1.5 text-[0.7rem] uppercase tracking-[0.24em] text-primary"
          >
            Skills and Technologies
          </Badge>

          <h2 className="mt-6 text-4xl font-semibold leading-tight tracking-tight text-foreground md:text-5xl">
            The stack I use to ship real product work.
          </h2>

          <p className="mt-5 text-base leading-8 text-muted-foreground md:text-lg">
            My day-to-day work moves between frontend polish, backend implementation, mobile delivery, and the systems that keep product teams shipping smoothly.
          </p>

          <div className="mt-8 grid gap-3 sm:grid-cols-2">
            {["User flows", "API integration", "Business logic", "Cross-team delivery"].map((item) => (
              <div
                key={item}
                className="rounded-[1.25rem] border border-primary/10 bg-secondary/45 px-4 py-4 text-sm font-medium text-foreground/80"
              >
                {item}
              </div>
            ))}
          </div>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          {skillGroups.map(({ icon: Icon, title, description, skills }) => (
            <article
              key={title}
              className="rounded-[1.75rem] border border-primary/10 bg-[linear-gradient(135deg,hsl(0_0%_100%/.92),hsl(36_56%_94%/.92))] p-6 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-medium"
            >
              <div className="inline-flex rounded-2xl bg-primary/8 p-3 text-accent">
                <Icon className="h-5 w-5" />
              </div>

              <h3 className="mt-5 text-xl font-semibold text-foreground">{title}</h3>
              <p className="mt-3 text-sm leading-7 text-muted-foreground md:text-base">{description}</p>

              <div className="mt-5 flex flex-wrap gap-2">
                {skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full border border-primary/10 bg-white/75 px-3 py-1.5 text-sm font-medium text-foreground/75"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
