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
      "Fullstack delivery for TalentCloud.Ai across web and mobile.",
    highlights: [
      "Build features with Laravel, Vue.js, React.js, and React Native.",
      "Handle forms from UI to API, business logic, and database.",
      "Collaborate with engineering teams in Malaysia and Indonesia.",
    ],
    stack: ["PHP", "Laravel", "Vue.js", "React.js", "React Native"],
    featured: true,
    active: true,
  },
  {
    title: "Software Engineer",
    company: "Putra Muda Mandiri",
    period: "Apr 2025 - Present",
    location: "Kota Medan, North Sumatra, Indonesia - Remote",
    scope: "Part-time - POS platform and operational backend delivery",
    summary:
      "Part-time product and backend work for operational systems.",
    highlights: [
      "Built restaurant POS features.",
      "Built FCM notification APIs by role and topic.",
      "Maintained notifications, invoices, and attendance endpoints.",
      "Supported architecture, testing, and Git workflow.",
    ],
    stack: ["POS System", "Firebase Cloud Messaging", "Notifications", "Git"],
    active: true,
    employmentType: "Part-time",
  },
  {
    title: "Backend Developer Intern",
    company: "Core Initiative",
    period: "Oct 2024 - Oct 2024",
    location: "Indonesia",
    scope: "Backend feature development",
    summary:
      "Backend feature delivery for account and booking flows.",
    highlights: [
      "Built secure profile and password update features.",
      "Implemented soft delete with Eloquent ORM.",
      "Built recurring booking and room amenity logic.",
    ],
    stack: ["Laravel", "PHP", "MySQL", "Eloquent ORM"],
  },
  {
    title: "Web Development Intern",
    company: "PT Dewan Studio",
    period: "Feb 2023 - Mar 2023",
    location: "Indonesia",
    scope: "Business web applications",
    summary:
      "Worked on Laravel-based internal business tools.",
    highlights: [
      "Built an inventory management website with Laravel 9.",
      "Built a mosque financial monitoring website with Laravel 9.",
    ],
    stack: ["Laravel 9", "PHP", "MySQL"],
  },
];

const currentExperiences = experiences.filter((item) => item.active);
const previousExperiences = experiences.filter((item) => !item.active);

const ExperienceCard = ({ exp, index }: { exp: Experience; index: number }) => {
  const dark = Boolean(exp.featured);

  return (
    <article
      className={cn(
        "h-full rounded-[2.2rem] p-7 animate-fade-in md:p-8",
        dark
          ? "panel-3d-dark stack-offset-dark text-white"
          : "panel-3d stack-offset text-foreground"
      )}
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      <div className="flex flex-wrap gap-2">
        {dark ? (
          <Badge className="chip-3d-dark rounded-full px-4 py-1.5 text-[0.72rem] uppercase tracking-[0.2em] text-white/72">
            Primary Role
          </Badge>
        ) : (
          <Badge
            variant="outline"
            className="chip-3d rounded-full px-4 py-1.5 text-[0.72rem] uppercase tracking-[0.2em] text-foreground"
          >
            Active Role
          </Badge>
        )}

        {exp.employmentType && (
          <Badge
            variant="outline"
            className={cn(
              "rounded-full px-4 py-1.5 text-[0.72rem] uppercase tracking-[0.2em]",
              dark
                ? "border-white/12 bg-white/[0.05] text-white/68"
                : "chip-3d text-foreground/72"
            )}
          >
            {exp.employmentType}
          </Badge>
        )}
      </div>

      <div className="mt-7 flex items-start gap-4">
        <div
          className={cn(
            "rounded-2xl p-3",
            dark ? "border border-white/10 bg-white/[0.06]" : "border border-black/8 bg-black/5"
          )}
        >
          <Briefcase className="h-5 w-5" />
        </div>

        <div>
          <h3 className={cn("text-2xl font-semibold tracking-tight", dark ? "text-white" : "text-foreground")}>
            {exp.title}
          </h3>
          <p className={cn("mt-2 text-base font-medium", dark ? "text-white/72" : "text-foreground/80")}>
            {exp.company}
          </p>
        </div>
      </div>

      <div className="mt-6 flex flex-wrap gap-3 text-sm">
        <div
          className={cn(
            "rounded-full px-4 py-2",
            dark ? "border border-white/10 bg-white/[0.05] text-white/68" : "chip-3d text-foreground/72"
          )}
        >
          {exp.period}
        </div>
        <div
          className={cn(
            "rounded-full px-4 py-2",
            dark ? "border border-white/10 bg-white/[0.05] text-white/68" : "chip-3d text-foreground/72"
          )}
        >
          {exp.location}
        </div>
      </div>

      <div
        className={cn(
          "mt-7 rounded-[1.7rem] border p-5",
          dark ? "border-white/10 bg-white/[0.05]" : "border-black/8 bg-black/[0.025]"
        )}
      >
        <div className={cn("flex items-center gap-2 text-sm uppercase tracking-[0.22em]", dark ? "text-white/46" : "text-foreground/52")}>
          <Sparkles className="h-4 w-4" />
          Impact Snapshot
        </div>
        <p className={cn("mt-3 text-base leading-8", dark ? "text-white/68" : "text-muted-foreground")}>
          {exp.summary}
        </p>
      </div>

      <ul className="mt-6 grid gap-3">
        {exp.highlights.map((item) => (
          <li
            key={item}
            className={cn(
              "flex items-start gap-3 rounded-[1.4rem] border p-4",
              dark ? "border-white/10 bg-white/[0.04]" : "border-black/8 bg-white/70"
            )}
          >
            <CheckCircle2 className={cn("mt-0.5 h-5 w-5 flex-shrink-0", dark ? "text-white" : "text-foreground")} />
            <span className={cn("text-sm leading-7 md:text-[0.95rem]", dark ? "text-white/72" : "text-foreground/80")}>
              {item}
            </span>
          </li>
        ))}
      </ul>

      <div className="mt-6 flex flex-wrap gap-2">
        {exp.stack.map((item) => (
          <span
            key={item}
            className={cn(
              "rounded-full px-3 py-1.5 text-sm font-medium",
              dark ? "border border-white/12 bg-white/[0.05] text-white/72" : "chip-3d text-foreground/74"
            )}
          >
            {item}
          </span>
        ))}
      </div>

      <div className={cn("mt-6 flex items-center gap-2 text-sm", dark ? "text-white/46" : "text-muted-foreground")}>
        <MapPin className="h-4 w-4" />
        <span>{exp.location}</span>
        <span className="opacity-50">/</span>
        <Globe2 className="h-4 w-4" />
        <span>{exp.scope}</span>
      </div>
    </article>
  );
};

const PreviousExperienceCard = ({ exp, index }: { exp: Experience; index: number }) => (
  <article
    className="panel-3d rounded-[1.9rem] p-6 animate-fade-in md:p-7"
    style={{ animationDelay: `${index * 0.08}s` }}
  >
    <div className="flex flex-col gap-5 lg:flex-row lg:items-start lg:justify-between">
      <div className="max-w-2xl">
        <p className="text-xs uppercase tracking-[0.22em] text-foreground/48">{exp.period}</p>
        <h3 className="mt-3 text-2xl font-semibold tracking-tight text-foreground">{exp.title}</h3>
        <p className="mt-2 text-base font-medium text-foreground/78">{exp.company}</p>
        <p className="mt-4 text-sm leading-7 text-muted-foreground md:text-base">{exp.summary}</p>
      </div>

      <div className="flex flex-wrap gap-2 lg:max-w-sm lg:justify-end">
        {exp.stack.map((item) => (
          <span key={item} className="chip-3d rounded-full px-3 py-1.5 text-sm font-medium text-foreground/74">
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
    <section id="experience" className="relative overflow-hidden px-6 py-24">
      <div className="absolute left-[10%] top-20 -z-10 h-52 w-52 rounded-full bg-black/6 blur-3xl" />
      <div className="absolute right-[8%] top-32 -z-10 h-40 w-40 rounded-[2rem] border border-black/6 bg-white/45 blur-2xl" />

      <div className="mx-auto max-w-6xl">
        <div className="mb-14 grid gap-6 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
          <div className="max-w-3xl">
            <Badge
              variant="outline"
              className="chip-3d rounded-full px-4 py-1.5 text-[0.72rem] uppercase tracking-[0.24em] text-foreground"
            >
              Work Experience
            </Badge>
            <h2 className="mt-5 text-4xl font-semibold tracking-tight text-foreground md:text-5xl">
              Current roles and key impact.
            </h2>
            <p className="mt-4 text-lg leading-8 text-muted-foreground">
              Ongoing roles first. Earlier experience below.
            </p>
          </div>

          <div className="grid gap-3 sm:grid-cols-3">
            {[
              { value: "2", label: "current roles" },
              { value: "Fullstack", label: "delivery focus" },
              { value: "Indonesia + Malaysia", label: "team footprint" },
            ].map((item) => (
              <div key={item.label} className="panel-3d rounded-[1.6rem] p-4">
                <p className="text-xs uppercase tracking-[0.22em] text-foreground/48">{item.label}</p>
                <p className="mt-3 text-lg font-semibold text-foreground">{item.value}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          {currentExperiences.map((exp, index) => (
            <ExperienceCard key={`${exp.company}-${exp.title}`} exp={exp} index={index} />
          ))}
        </div>

        <div className="mt-16">
          <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-xs uppercase tracking-[0.22em] text-foreground/48">Earlier Experience</p>
              <h3 className="mt-2 text-2xl font-semibold tracking-tight text-foreground">
                Earlier experience.
              </h3>
            </div>

            <Button
              variant="outline"
              onClick={() => setExpanded(!expanded)}
              className="chip-3d rounded-full px-6 text-foreground"
            >
              {expanded ? (
                <>
                  Show Less <ChevronUp className="ml-2 h-4 w-4" />
                </>
              ) : (
                <>
                  View Earlier Experience <ChevronDown className="ml-2 h-4 w-4" />
                </>
              )}
            </Button>
          </div>

          {expanded && (
            <div className="grid gap-4">
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
