import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Briefcase, CheckCircle2, ChevronDown, ChevronUp, Globe2, MapPin } from "lucide-react";

interface Experience {
  title: string;
  company: string;
  period: string;
  location: string;
  focus: string;
  summary: string;
  highlights: string[];
  stack: string[];
  featured?: boolean;
}

const experiences: Experience[] = [
  {
    title: "Software Developer",
    company: "Pinetop Technology Venture",
    period: "Current Role",
    location: "Hybrid - BSD, Indonesia",
    focus: "TalentCloud.Ai - Malaysia HQ collaboration",
    summary:
      "Building TalentCloud.Ai with an end-to-end fullstack mindset across web and mobile experiences.",
    highlights: [
      "Developing and maintaining fullstack features using PHP Laravel on the backend, Vue.js and React.js on the frontend, and React Native for mobile delivery.",
      "Implementing form management features from frontend UI and API integration through backend business logic and database operations.",
      "Collaborating with engineering teams in Malaysia and Indonesia to deliver integrated solutions across multiple product surfaces.",
    ],
    stack: ["PHP", "Laravel", "Vue.js", "React.js", "React Native"],
    featured: true,
  },
  {
    title: "Backend Developer Intern",
    company: "Core Initiative",
    period: "Oct 2024 - Oct 2024",
    location: "Indonesia",
    focus: "Backend feature development",
    summary:
      "Supported backend feature delivery with a focus on secure account flows and reservation management.",
    highlights: [
      "Developed secure profile update and password change features with validation and encryption for stronger data protection.",
      "Implemented soft delete functionality with Eloquent ORM, making data removal safer and reversible.",
      "Built recurring booking and room amenity logic with optimized queries and flexible backend configuration.",
    ],
    stack: ["Laravel", "PHP", "MySQL", "Eloquent ORM"],
  },
  {
    title: "Web Development Intern",
    company: "PT Dewan Studio",
    period: "Feb 2023 - Mar 2023",
    location: "Indonesia",
    focus: "Business web applications",
    summary:
      "Contributed to internal business tools and monitoring systems built with Laravel.",
    highlights: [
      "Developed an inventory management website using Laravel 9.",
      "Built a financial monitoring web application for mosque operations using Laravel 9.",
    ],
    stack: ["Laravel 9", "PHP", "MySQL"],
  },
];

const WorkExperience = () => {
  const [expanded, setExpanded] = useState(false);
  const displayedExperiences = expanded ? experiences : experiences.slice(0, 2);

  return (
    <section id="experience" className="relative overflow-hidden px-6 py-24">
      <div className="absolute inset-x-0 top-0 -z-10 h-64 bg-[radial-gradient(circle_at_20%_10%,hsl(18_92%_56%/.12),transparent_45%),radial-gradient(circle_at_90%_0%,hsl(194_60%_45%/.12),transparent_28%)]" />

      <div className="mx-auto max-w-6xl">
        <div className="mb-14 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-3xl">
            <Badge
              variant="outline"
              className="border-primary/15 bg-white/70 px-4 py-1.5 text-[0.7rem] uppercase tracking-[0.24em] text-primary"
            >
              Work Experience
            </Badge>
            <h2 className="mt-5 text-4xl font-semibold tracking-tight text-foreground md:text-5xl">
              Delivering product work across backend, frontend, and mobile.
            </h2>
            <p className="mt-4 text-lg leading-8 text-muted-foreground">
              My experience has grown from backend foundations into fullstack product delivery with a strong focus on complete flows, thoughtful collaboration, and reliable implementation.
            </p>
          </div>

          <div className="flex flex-wrap gap-3">
            {["Laravel", "React.js", "React Native", "Cross-country team delivery"].map((item) => (
              <span
                key={item}
                className="rounded-full border border-primary/10 bg-white/75 px-4 py-2 text-sm font-medium text-foreground/80 shadow-soft"
              >
                {item}
              </span>
            ))}
          </div>
        </div>

        <div className="relative">
          <div className="absolute bottom-10 left-5 top-6 hidden w-px bg-gradient-to-b from-accent/50 via-primary/20 to-transparent md:block" />

          <div className="space-y-6">
            {displayedExperiences.map((exp, index) => (
              <article
                key={exp.company}
                className="relative animate-fade-in md:pl-16"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="absolute left-[14px] top-10 hidden h-3 w-3 rounded-full bg-accent ring-8 ring-background md:block" />

                <div
                  className={cn(
                    "relative overflow-hidden rounded-[2rem] border p-6 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-medium md:p-8",
                    exp.featured
                      ? "border-primary/10 bg-[linear-gradient(135deg,hsl(0_0%_100%),hsl(36_56%_94%))]"
                      : "border-white/60 bg-white/80 backdrop-blur"
                  )}
                >
                  <div className="absolute inset-x-10 top-0 h-px bg-gradient-to-r from-transparent via-accent/40 to-transparent" />

                  <div className="flex flex-col gap-8 lg:flex-row">
                    <div className="lg:w-[18rem] lg:flex-shrink-0">
                      <div className="mb-4 flex flex-wrap gap-2">
                        {exp.featured && (
                          <Badge className="bg-primary text-primary-foreground">Featured Role</Badge>
                        )}
                        <Badge
                          variant="outline"
                          className="border-primary/10 bg-white/75 text-foreground/70"
                        >
                          {exp.period}
                        </Badge>
                      </div>

                      <h3 className="text-2xl font-semibold tracking-tight text-foreground">{exp.title}</h3>
                      <p className="mt-3 flex items-center gap-2 text-base font-medium text-foreground/85">
                        <Briefcase className="h-4 w-4 text-accent" />
                        {exp.company}
                      </p>

                      <div className="mt-5 space-y-3 text-sm text-muted-foreground">
                        <p className="flex items-center gap-2">
                          <MapPin className="h-4 w-4 text-accent" />
                          {exp.location}
                        </p>
                        <p className="flex items-center gap-2">
                          <Globe2 className="h-4 w-4 text-accent" />
                          {exp.focus}
                        </p>
                      </div>
                    </div>

                    <div className="flex-1">
                      <p className="text-base leading-8 text-muted-foreground">{exp.summary}</p>

                      <ul className="mt-6 grid gap-3">
                        {exp.highlights.map((item) => (
                          <li key={item} className="flex items-start gap-3 rounded-2xl bg-secondary/45 p-4">
                            <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-accent" />
                            <span className="text-sm leading-7 text-foreground/80 md:text-[0.95rem]">{item}</span>
                          </li>
                        ))}
                      </ul>

                      <div className="mt-6 flex flex-wrap gap-2">
                        {exp.stack.map((item) => (
                          <span
                            key={item}
                            className="rounded-full border border-primary/10 bg-white/70 px-3 py-1.5 text-sm font-medium text-foreground/75"
                          >
                            {item}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>

        {experiences.length > 2 && (
          <div className="mt-12 flex justify-center">
            <Button
              variant="outline"
              onClick={() => setExpanded(!expanded)}
              className="group rounded-full border-primary/15 bg-white/70 px-6 backdrop-blur"
            >
              {expanded ? (
                <>
                  Show Less <ChevronUp className="ml-2 h-4 w-4 transition-transform group-hover:-translate-y-1" />
                </>
              ) : (
                <>
                  View More Experience <ChevronDown className="ml-2 h-4 w-4 transition-transform group-hover:translate-y-1" />
                </>
              )}
            </Button>
          </div>
        )}
      </div>
    </section>
  );
};

export default WorkExperience;
