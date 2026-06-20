import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import {
  Briefcase,
  CheckCircle2,
  ChevronDown,
  ChevronUp,
  Globe2,
  MapPin,
  Sparkles,
  Award,
} from "lucide-react";

interface Experience {
  title: string;
  company: string;
  period: string;
  location: string;
  scope: string;
  summary: string;
  highlights: string[];
  stack: string[];
  featured?: boolean;
  active?: boolean;
  employmentType?: string;
}

const experiences: Experience[] = [
  {
    title: "Software Developer",
    company: "Pinetop Technology Venture",
    period: "Dec 2025 - Present",
    location: "Hybrid - BSD, Indonesia",
    scope: "TalentCloud.Ai - Malaysia HQ collaboration",
    summary:
      "Delivering core end-to-end user flows, profile systems, and cross-border API endpoints.",
    highlights: [
      "Ship clean, robust features across Vue.js frontends and Laravel backends.",
      "Own full lifecycle feature delivery from data models to client UI layouts.",
      "Collaborate directly with product stakeholders in Malaysia and developers in Medan/BSD.",
    ],
    stack: ["Laravel", "PHP", "Vue.js", "React Native", "PostgreSQL"],
    featured: true,
    active: true,
  },
  {
    title: "Software Engineer",
    company: "Putra Muda Mandiri",
    period: "Apr 2025 - Present",
    location: "Medan, North Sumatra, Indonesia - Remote",
    scope: "POS & Operational backend platform",
    summary:
      "Supporting operational backend development and push notification infrastructures.",
    highlights: [
      "Implemented a scalable push notification system via Firebase Cloud Messaging.",
      "Built restaurant POS endpoints, invoice generators, and logs tracking APIs.",
      "Structured unit tests and Git merge workflows for stable releases.",
    ],
    stack: ["POS System", "Firebase", "Go", "Git", "REST APIs"],
    active: true,
    employmentType: "Part-time",
  },
  {
    title: "Backend Developer Intern",
    company: "Core Initiative",
    period: "Oct 2024 - Oct 2024",
    location: "Jakarta, Indonesia - Remote",
    scope: "Booking & User management logic",
    summary:
      "Implemented critical backend update flows and data management patterns.",
    highlights: [
      "Secured user profile and password changes with robust verification policies.",
      "Built soft-delete architectures using Laravel Eloquent scopes.",
      "Configured booking schedule intervals and amenity checklists.",
    ],
    stack: ["Laravel", "PHP", "MySQL", "Eloquent ORM"],
  },
  {
    title: "Web Development Intern",
    company: "PT Dewan Studio",
    period: "Feb 2023 - Mar 2023",
    location: "Jakarta, Indonesia - Remote",
    scope: "Business tools prototyping",
    summary:
      "Created initial prototypes for inventory tracking and administrative monitoring.",
    highlights: [
      "Prototyped a robust inventory tracking portal for client deployments.",
      "Created mosque balance monitoring web dashboards using Laravel.",
    ],
    stack: ["Laravel 9", "PHP", "MySQL", "Bootstrap"],
  },
];

const currentExperiences = experiences.filter((item) => item.active);
const previousExperiences = experiences.filter((item) => !item.active);

const ExperienceCard = ({ exp, index }: { exp: Experience; index: number }) => {
  const dark = Boolean(exp.featured);

  return (
    <article
      className={cn(
        "h-full rounded-[2.5rem] p-7 md:p-8 hover-lift border transition-all duration-300 relative overflow-hidden flex flex-col justify-between",
        dark
          ? "glass-card-dark text-white shadow-2xl"
          : "glass-card border-border/40 text-foreground"
      )}
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      {dark && (
        <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent" />
      )}

      <div>
        <div className="flex flex-wrap gap-2 items-center justify-between">
          <Badge
            variant="outline"
            className={cn(
              "rounded-full px-3 py-1 text-[0.7rem] uppercase tracking-wider font-semibold",
              dark
                ? "bg-white/10 text-white/95 border-white/10"
                : "bg-primary/5 text-primary border-primary/20"
            )}
          >
            {dark ? "Primary Role" : "Active Role"}
          </Badge>

          {exp.employmentType && (
            <Badge
              variant="outline"
              className={cn(
                "rounded-full px-3 py-1 text-[0.7rem] uppercase tracking-wider font-semibold",
                dark
                  ? "bg-white/5 text-white/70 border-white/10"
                  : "bg-muted text-muted-foreground border-border"
              )}
            >
              {exp.employmentType}
            </Badge>
          )}
        </div>

        <div className="mt-6 flex items-start gap-4">
          <div
            className={cn(
              "rounded-2xl p-3.5",
              dark
                ? "bg-white/5 border border-white/10 text-white"
                : "bg-primary/5 border border-primary/10 text-primary"
            )}
          >
            <Briefcase className="h-5 w-5" />
          </div>

          <div>
            <h3 className="text-xl font-bold tracking-tight leading-tight">
              {exp.title}
            </h3>
            <p className={cn("mt-1.5 text-sm font-medium", dark ? "text-white/80" : "text-primary")}>
              {exp.company}
            </p>
          </div>
        </div>

        <div className="mt-5 flex flex-wrap gap-2 text-xs">
          <span
            className={cn(
              "rounded-full px-3 py-1.5 border font-medium",
              dark
                ? "bg-white/5 border-white/10 text-white/80"
                : "bg-muted border-border text-muted-foreground"
            )}
          >
            {exp.period}
          </span>
          <span
            className={cn(
              "rounded-full px-3 py-1.5 border font-medium",
              dark
                ? "bg-white/5 border-white/10 text-white/80"
                : "bg-muted border-border text-muted-foreground"
            )}
          >
            {exp.location}
          </span>
        </div>

        <div
          className={cn(
            "mt-6 rounded-2xl border p-5",
            dark ? "bg-white/[0.02] border-white/5" : "bg-black/[0.015] border-black/5"
          )}
        >
          <div
            className={cn(
              "flex items-center gap-1.5 text-[0.7rem] uppercase tracking-[0.22em] font-semibold",
              dark ? "text-white/40" : "text-muted-foreground"
            )}
          >
            <Sparkles className="h-3.5 w-3.5" />
            Impact Summary
          </div>
          <p className={cn("mt-2 text-sm leading-relaxed", dark ? "text-white/70" : "text-muted-foreground")}>
            {exp.summary}
          </p>
        </div>

        <ul className="mt-5 space-y-2.5">
          {exp.highlights.map((item) => (
            <li
              key={item}
              className={cn(
                "flex items-start gap-3 rounded-xl border p-3.5",
                dark ? "bg-white/[0.01] border-white/5" : "bg-white/40 border-border/30"
              )}
            >
              <CheckCircle2
                className={cn("mt-0.5 h-4.5 w-4.5 flex-shrink-0", dark ? "text-violet-400" : "text-primary")}
              />
              <span className={cn("text-xs leading-relaxed", dark ? "text-white/70" : "text-foreground/80")}>
                {item}
              </span>
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-6 pt-5 border-t border-border/10">
        <div className="flex flex-wrap gap-1.5 mb-4">
          {exp.stack.map((item) => (
            <span
              key={item}
              className={cn(
                "rounded-full px-2.5 py-1 text-[0.7rem] font-semibold",
                dark
                  ? "bg-white/5 border border-white/10 text-white/80"
                  : "bg-muted border border-border/40 text-foreground/80"
              )}
            >
              {item}
            </span>
          ))}
        </div>

        <div className={cn("flex items-center gap-1.5 text-xs", dark ? "text-white/40" : "text-muted-foreground")}>
          <Globe2 className="h-3.5 w-3.5" />
          <span>{exp.scope}</span>
        </div>
      </div>
    </article>
  );
};

const PreviousExperienceCard = ({ exp, index }: { exp: Experience; index: number }) => (
  <article
    className="glass-card rounded-2xl p-6 border-border/40 hover-lift animate-fade-in"
    style={{ animationDelay: `${index * 0.08}s` }}
  >
    <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
      <div className="max-w-2xl">
        <span className="text-[0.7rem] uppercase tracking-wider font-semibold text-primary">
          {exp.period}
        </span>
        <h3 className="mt-2 text-xl font-bold tracking-tight text-foreground">
          {exp.title}
        </h3>
        <p className="text-xs font-semibold text-muted-foreground">{exp.company} — {exp.location}</p>
        <p className="mt-3 text-xs leading-relaxed text-muted-foreground">{exp.summary}</p>
      </div>

      <div className="flex flex-wrap gap-1 lg:max-w-sm lg:justify-end">
        {exp.stack.map((item) => (
          <span
            key={item}
            className="rounded-full bg-muted border border-border/40 px-2.5 py-1 text-[0.7rem] font-semibold text-foreground/80"
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  </article>
);

const WorkExperience = () => {
  const [expanded, setExpanded] = useState(false);

  return (
    <section id="experience" className="relative px-6 py-28 overflow-hidden">
      <div className="mx-auto max-w-6xl">
        <div className="mb-12 grid gap-6 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
          <div className="max-w-3xl">
            <Badge
              variant="outline"
              className="interactive-badge mb-4 rounded-full px-4 py-1.5 text-[0.72rem] uppercase tracking-[0.24em] font-semibold text-foreground/80"
            >
              <Award className="h-3 w-3 mr-1.5 text-primary" />
              Work Experience
            </Badge>
            <h2 className="mt-5 text-4xl font-extrabold tracking-tight text-foreground md:text-5xl">
              Professional <span className="gradient-text">journey</span>.
            </h2>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground font-normal">
              Active fullstack and mobile delivery. Click below to see earlier history.
            </p>
          </div>

          <div className="grid gap-3 sm:grid-cols-3">
            {[
              { value: "2 Active", label: "Roles Shipped" },
              { value: "Fullstack", label: "Core Delivery" },
              { value: "Medan - BSD", label: "Footprint" },
            ].map((item) => (
              <div key={item.label} className="glass-card rounded-2xl p-4 text-center border-border/40">
                <p className="text-[0.65rem] uppercase tracking-[0.22em] text-muted-foreground">{item.label}</p>
                <p className="mt-2 text-sm font-bold text-foreground">{item.value}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {currentExperiences.map((exp, index) => (
            <ExperienceCard key={`${exp.company}-${exp.title}`} exp={exp} index={index} />
          ))}
        </div>

        {/* Older Roles */}
        <div className="mt-16">
          <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between border-t border-border/40 pt-10">
            <div>
              <p className="text-[0.7rem] uppercase tracking-wider font-semibold text-muted-foreground">Historical Roles</p>
              <h3 className="mt-1 text-2xl font-bold tracking-tight text-foreground">
                Earlier experience.
              </h3>
            </div>

            <Button
              variant="outline"
              onClick={() => setExpanded(!expanded)}
              className="glass-card rounded-full px-6 text-foreground font-medium border-border/80"
            >
              {expanded ? (
                <>
                  Show Less <ChevronUp className="ml-2 h-4 w-4" />
                </>
              ) : (
                <>
                  View Earlier History <ChevronDown className="ml-2 h-4 w-4" />
                </>
              )}
            </Button>
          </div>

          {expanded && (
            <div className="grid gap-4 mt-6">
              {previousExperiences.map((exp, index) => (
                <PreviousExperienceCard key={`${exp.company}-${exp.title}`} exp={exp} index={index} />
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default WorkExperience;
