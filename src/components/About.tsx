import { Badge } from "@/components/ui/badge";
import { Code2, Database, Smartphone, Users } from "lucide-react";

const valueCards = [
  {
    icon: Code2,
    title: "Product-minded development",
    description: "I like turning requirements into production-ready features that feel clean, fast, and intuitive.",
  },
  {
    icon: Database,
    title: "Strong fullstack ownership",
    description: "From frontend forms to API integration and backend data flow, I am comfortable handling the full delivery path.",
  },
  {
    icon: Smartphone,
    title: "Web and mobile delivery",
    description: "I work across browser and mobile experiences so the product feels connected on every touchpoint.",
  },
  {
    icon: Users,
    title: "Collaborative execution",
    description: "I enjoy working with distributed teams, aligning technical decisions, and delivering practical solutions together.",
  },
];

const About = () => {
  return (
    <section id="about" className="px-6 py-20">
      <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="rounded-[2rem] border border-white/60 bg-white/80 p-8 shadow-medium backdrop-blur xl:p-10">
          <Badge
            variant="outline"
            className="border-primary/15 bg-secondary/70 px-4 py-1.5 text-[0.7rem] uppercase tracking-[0.24em] text-primary"
          >
            About Me
          </Badge>

          <h2 className="mt-6 max-w-3xl text-4xl font-semibold leading-tight tracking-tight text-foreground md:text-5xl">
            A software developer who enjoys connecting product thinking with solid engineering execution.
          </h2>

          <div className="mt-6 space-y-5 text-base leading-8 text-muted-foreground md:text-lg">
            <p>
              I focus on building dependable digital experiences across frontend, backend, and mobile. My work usually starts from understanding the product flow, then continues through interface implementation, API integration, business logic, and database operations.
            </p>
            <p>
              At Pinetop Technology Venture, I contribute to TalentCloud.Ai by developing fullstack features with Laravel, Vue.js, React.js, and React Native. That mix lets me stay close to both user experience and system behavior, which is where I do my best work.
            </p>
            <p>
              I care about maintainable code, efficient collaboration, and software that feels refined in day-to-day use, not just functional on paper.
            </p>
          </div>
        </div>

        <div className="grid gap-4">
          {valueCards.map(({ icon: Icon, title, description }) => (
            <div
              key={title}
              className="rounded-[1.75rem] border border-primary/10 bg-[linear-gradient(135deg,hsl(0_0%_100%/.92),hsl(36_56%_94%/.92))] p-6 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-medium"
            >
              <div className="inline-flex rounded-2xl bg-primary/8 p-3 text-accent">
                <Icon className="h-5 w-5" />
              </div>
              <h3 className="mt-5 text-xl font-semibold text-foreground">{title}</h3>
              <p className="mt-3 text-sm leading-7 text-muted-foreground md:text-base">{description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
