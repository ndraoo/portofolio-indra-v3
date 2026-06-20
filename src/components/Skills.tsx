import { Badge } from "@/components/ui/badge";
import { Code2, Database, Layers3, Smartphone, Laptop } from "lucide-react";

const skillGroups = [
  {
    icon: Code2,
    title: "Frontend Craft",
    description: "Developing responsive client views and user interfaces.",
    skills: ["React.js", "Vue.js", "JavaScript", "Tailwind CSS", "Bootstrap"],
  },
  {
    icon: Database,
    title: "Backend Systems",
    description: "Structuring APIs, databases, and core business flows.",
    skills: ["Laravel", "PHP", "Go", "REST APIs", "Eloquent ORM"],
  },
  {
    icon: Smartphone,
    title: "Mobile Delivery",
    description: "Shipping mobile features tied to core services.",
    skills: ["React Native", "Firebase", "FCM notifications"],
  },
  {
    icon: Layers3,
    title: "Tooling & Database",
    description: "Managing schemas, workflows, and developer tools.",
    skills: ["MySQL", "PostgreSQL", "Docker", "Git", "Swagger", "Figma"],
  },
];

const Skills = () => {
  return (
    <section id="skills" className="relative px-6 py-28 overflow-hidden">
      <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[0.95fr_1.05fr] items-center">
        {/* Left Column (Main Heading) */}
        <div className="glass-card-dark rounded-[2.5rem] p-8 text-white md:p-10 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-white/15 to-transparent" />
          
          <Badge
            variant="outline"
            className="rounded-full bg-white/10 px-4 py-1.5 text-[0.72rem] uppercase tracking-[0.24em] font-semibold text-white/90 border border-white/10"
          >
            <Laptop className="h-3 w-3 mr-1.5 text-violet-400" />
            Skills & Stack
          </Badge>

          <h2 className="mt-6 text-4xl font-extrabold leading-tight tracking-tight text-white md:text-5xl">
            My technology <span className="bg-gradient-to-r from-violet-400 to-indigo-300 bg-clip-text text-transparent">toolbox</span>.
          </h2>

          <p className="mt-5 text-sm leading-relaxed text-white/70 md:text-base">
            I work across frontend views, backend data stores, and client devices to deliver cohesive user flows.
          </p>

          <div className="mt-8 grid gap-3 sm:grid-cols-2">
            {[
              "Modular Component Flow",
              "Relational Database Design",
              "REST API Integration",
              "Git Deployment Flow",
            ].map((item) => (
              <div
                key={item}
                className="rounded-xl border border-white/5 bg-white/[0.03] px-4 py-3.5 text-xs font-semibold text-white/80"
              >
                {item}
              </div>
            ))}
          </div>
        </div>

        {/* Right Column (Skills Grid) */}
        <div className="grid gap-4 sm:grid-cols-2">
          {skillGroups.map(({ icon: Icon, title, description, skills }) => (
            <article
              key={title}
              className="glass-card hover-lift rounded-2xl p-5 border-border/40 flex flex-col justify-between"
            >
              <div>
                <div className="inline-flex rounded-xl bg-primary/10 p-3 text-primary">
                  <Icon className="h-5 w-5" />
                </div>

                <h3 className="mt-4 text-base font-bold text-foreground">{title}</h3>
                <p className="mt-2 text-xs text-muted-foreground leading-relaxed">{description}</p>
              </div>

              <div className="mt-5 flex flex-wrap gap-1.5">
                {skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full bg-muted border border-border/30 px-2.5 py-1 text-[0.7rem] font-semibold text-foreground/80 hover:border-primary/40 hover:text-primary transition-colors cursor-default"
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
