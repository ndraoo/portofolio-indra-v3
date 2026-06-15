import { Badge } from "@/components/ui/badge";
import { Code2, Database, Layers3, Smartphone } from "lucide-react";

const skillGroups = [
  {
    icon: Code2,
    title: "Frontend Craft",
    description: "Clean interfaces and user flows.",
    skills: ["React.js", "Vue.js", "JavaScript", "Tailwind CSS"],
  },
  {
    icon: Database,
    title: "Backend Systems",
    description: "APIs, business logic, and backend flow.",
    skills: ["Laravel", "PHP", "Go", "REST API"],
  },
  {
    icon: Smartphone,
    title: "Mobile Delivery",
    description: "Mobile features connected to the product stack.",
    skills: ["React Native", "Firebase", "Swagger", "Figma"],
  },
  {
    icon: Layers3,
    title: "Data and Workflow",
    description: "Data, tooling, and team workflow.",
    skills: ["MySQL", "PostgreSQL", "Docker", "GitHub", "Bootstrap"],
  },
];

const Skills = () => {
  return (
    <section className="relative overflow-hidden px-6 py-24">
      <div className="absolute inset-x-0 top-0 -z-10 h-72 bg-[radial-gradient(circle_at_80%_0%,hsl(331_74%_63%/.18),transparent_28%),radial-gradient(circle_at_12%_20%,hsl(0_0%_100%/.45),transparent_36%)]" />

      <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="panel-3d-dark stack-offset-dark rounded-[2.25rem] p-8 text-white xl:p-10">
          <Badge
            variant="outline"
            className="chip-3d-dark rounded-full px-4 py-1.5 text-[0.72rem] uppercase tracking-[0.24em] text-white/72"
          >
            Skills and Technologies
          </Badge>

          <h2 className="mt-6 text-4xl font-semibold leading-tight tracking-tight text-white md:text-5xl">
            Main stack and workflow.
          </h2>

          <p className="mt-5 text-base leading-8 text-white/66 md:text-lg">
            Tools I use for frontend, backend, mobile, and delivery.
          </p>

          <div className="mt-8 grid gap-3 sm:grid-cols-2">
            {["User flows", "API integration", "Business logic", "Team delivery"].map((item) => (
              <div
                key={item}
                className="rounded-[1.25rem] border border-white/10 bg-white/[0.05] px-4 py-4 text-sm font-medium text-white/72"
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
              className="panel-3d rounded-[1.85rem] p-6 transition-all duration-300 hover:-translate-y-1"
            >
              <div className="inline-flex rounded-2xl border border-primary/12 bg-accent/12 p-3 text-primary">
                <Icon className="h-5 w-5" />
              </div>

              <h3 className="mt-5 text-xl font-semibold text-foreground">{title}</h3>
              <p className="mt-3 text-sm leading-7 text-muted-foreground md:text-base">{description}</p>

              <div className="mt-5 flex flex-wrap gap-2">
                {skills.map((skill) => (
                  <span
                    key={skill}
                    className="chip-3d rounded-full px-3 py-1.5 text-sm font-medium text-foreground/75"
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
