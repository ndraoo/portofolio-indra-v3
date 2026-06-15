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
    <section id="about" className="px-6 py-24">
      <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="panel-3d-dark stack-offset-dark rounded-[2.25rem] p-8 text-white xl:p-10">
          <Badge
            variant="outline"
            className="chip-3d-dark rounded-full px-4 py-1.5 text-[0.72rem] uppercase tracking-[0.24em] text-white/72"
          >
            About Me
          </Badge>

          <h2 className="mt-6 max-w-3xl text-4xl font-semibold leading-tight tracking-tight text-white md:text-5xl">
            A software developer who likes product interfaces to feel calm, precise, and well-supported underneath.
          </h2>

          <div className="mt-6 space-y-5 text-base leading-8 text-white/68 md:text-lg">
            <p>
              I focus on building dependable digital experiences across frontend, backend, and mobile. My work usually starts from understanding the product flow, then continues through interface implementation, API integration, business logic, and database operations.
            </p>
            <p>
              At Pinetop Technology Venture, I contribute to TalentCloud.Ai by developing fullstack features with Laravel, Vue.js, React.js, and React Native. In parallel, I continue part-time software engineering work at Putra Muda Mandiri, building operational features that support real day-to-day business usage.
            </p>
            <p>
              I care about maintainable code, efficient collaboration, and software that feels refined in day-to-day use, not just functional on paper.
            </p>
          </div>

          <div className="mt-8 grid gap-3 sm:grid-cols-3">
            {[
              { value: "2", label: "active roles" },
              { value: "Fullstack", label: "delivery style" },
              { value: "Web + Mobile", label: "product scope" },
            ].map((item) => (
              <div key={item.label} className="rounded-[1.5rem] border border-white/10 bg-white/[0.05] p-4">
                <p className="text-xs uppercase tracking-[0.22em] text-white/46">{item.label}</p>
                <p className="mt-3 text-lg font-semibold text-white">{item.value}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="grid gap-4">
          {valueCards.map(({ icon: Icon, title, description }) => (
            <div
              key={title}
              className="panel-3d rounded-[1.85rem] p-6 transition-all duration-300 hover:-translate-y-1"
            >
              <div className="inline-flex rounded-2xl border border-black/8 bg-black/5 p-3 text-foreground">
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
