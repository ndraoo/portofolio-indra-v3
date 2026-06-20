import { Badge } from "@/components/ui/badge";
import { Code2, Database, Smartphone, Users, User, Compass } from "lucide-react";

const valueCards = [
  {
    icon: Code2,
    title: "Product-minded dev",
    description: "Translating features into user-centered digital applications.",
  },
  {
    icon: Database,
    title: "Fullstack ownership",
    description: "Connecting databases, secure APIs, and responsive frontends.",
  },
  {
    icon: Smartphone,
    title: "Web and mobile delivery",
    description: "Developing cross-platform apps and web platforms in parallel.",
  },
  {
    icon: Users,
    title: "Collaborative mind",
    description: "Integrating with cross-border product owners and developers.",
  },
];

const About = () => {
  return (
    <section id="about" className="relative px-6 py-28 overflow-hidden">
      <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[1.1fr_0.9fr] items-center">
        {/* Left Card: Main bio */}
        <div className="glass-card-dark rounded-[2.5rem] p-8 text-white md:p-10 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-white/15 to-transparent" />
          
          <Badge
            variant="outline"
            className="rounded-full bg-white/10 px-4 py-1.5 text-[0.72rem] uppercase tracking-[0.24em] font-semibold text-white/90 border border-white/10"
          >
            <User className="h-3 w-3 mr-1.5 text-violet-400" />
            About Me
          </Badge>

          <h2 className="mt-6 max-w-3xl text-4xl font-extrabold leading-tight tracking-tight text-white md:text-5xl">
            Shipped clean and <span className="bg-gradient-to-r from-violet-400 to-indigo-300 bg-clip-text text-transparent">reliable</span> software.
          </h2>

          <div className="mt-6 space-y-5 text-sm leading-relaxed text-white/70 md:text-base">
            <p>
              I specialize in frontend interfaces, API development, and data schema management.
              My style is about delivering features that work perfectly and scale efficiently.
            </p>
            <p>
              I love building collaboration setups where frontends fit backend payloads. Currently working
              extensively with Laravel, React.js, React Native, and PostgreSQL.
            </p>
            <p>
              When not working, I dive into learning system architecture, optimizing database flows, and building modular systems.
            </p>
          </div>

          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            {[
              { value: "2 Active", label: "Professional Roles" },
              { value: "Collaborative", label: "Delivery Style" },
              { value: "Web & Mobile", label: "Product Scope" },
            ].map((item) => (
              <div 
                key={item.label} 
                className="rounded-2xl border border-white/5 bg-white/[0.03] p-4 text-center"
              >
                <p className="text-[0.65rem] uppercase tracking-[0.22em] text-white/40">{item.label}</p>
                <p className="mt-2 text-sm font-bold text-white">{item.value}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Right Cards: Pillars */}
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
          <div className="mb-2">
            <Badge
              variant="outline"
              className="interactive-badge mb-2 rounded-full px-4 py-1.5 text-[0.72rem] uppercase tracking-[0.24em] font-semibold text-foreground/80"
            >
              <Compass className="h-3 w-3 mr-1.5 text-primary" />
              Core Competencies
            </Badge>
            <h3 className="text-2xl font-bold tracking-tight text-foreground">How I build.</h3>
          </div>

          {valueCards.map(({ icon: Icon, title, description }) => (
            <div
              key={title}
              className="glass-card hover-lift rounded-2xl p-5 border-border/40"
            >
              <div className="flex gap-4 items-start">
                <div className="flex-shrink-0 rounded-xl bg-primary/10 p-3 text-primary">
                  <Icon className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="text-base font-bold text-foreground">{title}</h4>
                  <p className="mt-1.5 text-xs text-muted-foreground leading-relaxed">{description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
