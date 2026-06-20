import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowUpRight, ChevronDown, ChevronUp, Layers3, FolderGit2 } from "lucide-react";

interface Project {
  title: string;
  period?: string;
  association?: string;
  description: string;
  skills: string[];
  link?: string;
  playstore?: string;
}

const projects: Project[] = [
  {
    title: "LangitHub Mobile",
    period: "Sep 2025 - Present",
    association: "Associated with Putra Muda Mandiri",
    description:
      "A comprehensive Islamic super-app containing Al-Quran digital, prayer schedules, Hijri calendars, and animated Qiblah compass indicators.",
    skills: ["Mushaf/Quran", "Prayer Times", "Hijri Calendar", "Qiblah Compass", "React Native"],
  },
  {
    title: "Brightschools",
    description: "Multi-role school administrative database and communication portal for parents and teachers.",
    skills: ["Go", "PostgreSQL", "Swagger", "Firebase Notifications"],
    playstore: "https://play.google.com/store/apps/details?id=id.brightschools.app&pcampaignid=web_share",
  },
  {
    title: "POS Restaurant",
    description: "High-concurrency point-of-sale inventory and transaction dashboard for restaurants.",
    skills: ["Go", "PostgreSQL", "Swagger API"],
    link: "#",
  },
  {
    title: "Apotek Online",
    description: "Online medicine inventory and sales portal containing authentication and reports.",
    skills: ["Laravel 9", "React.js", "MySQL", "Tailwind CSS"],
    link: "#",
  },
  {
    title: "Pelelangan Online",
    description: "Online bid auction application featuring real-time state changes and status logs.",
    skills: ["Laravel 9", "MySQL", "Bootstrap"],
    link: "#",
  },
  {
    title: "Mosque Financial Monitoring",
    description: "Administrative balance sheet tracker and audit reporter designed for local communities.",
    skills: ["Laravel 9", "MySQL", "Bootstrap"],
    link: "#",
  },
];

const Projects = () => {
  const [expanded, setExpanded] = useState(false);
  const [featuredProject, ...otherProjects] = projects;
  const displayedProjects = expanded ? otherProjects : otherProjects.slice(0, 3);
  const featuredUrl = featuredProject.playstore || featuredProject.link;
  const hasFeaturedLink = Boolean(featuredUrl && featuredUrl !== "#");

  return (
    <section id="projects" className="relative px-6 py-28 overflow-hidden">
      <div className="mx-auto max-w-6xl">
        <div className="mb-12 max-w-3xl">
          <Badge
            variant="outline"
            className="interactive-badge mb-4 rounded-full px-4 py-1.5 text-[0.72rem] uppercase tracking-[0.24em] font-semibold text-foreground/80"
          >
            <FolderGit2 className="h-3 w-3 mr-1.5 text-primary" />
            Selected Projects
          </Badge>
          <h2 className="mt-5 text-4xl font-extrabold tracking-tight text-foreground md:text-5xl">
            Selected <span className="gradient-text">projects</span>.
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground font-normal">
            Mobile applications, backend APIs, and multi-tenant administrative systems.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr] items-stretch">
          {/* Featured Project */}
          <article className="glass-card-dark rounded-[2.5rem] p-8 text-white shadow-2xl relative overflow-hidden flex flex-col justify-between">
            <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent" />
            
            <div>
              <div className="flex flex-wrap items-center gap-2.5">
                <Badge className="rounded-full bg-white/10 px-3.5 py-1 text-[0.7rem] uppercase tracking-wider font-semibold text-white border border-white/15">
                  Featured Product
                </Badge>
                <Badge
                  variant="outline"
                  className="rounded-full border border-white/10 bg-white/5 px-3.5 py-1 text-[0.7rem] uppercase tracking-wider font-semibold text-white/70"
                >
                  Live Production
                </Badge>
              </div>

              <div className="mt-8">
                {(featuredProject.period || featuredProject.association) && (
                  <div className="mb-4 flex flex-wrap gap-2 text-xs">
                    {featuredProject.period && (
                      <span className="rounded-full bg-white/5 border border-white/10 px-3 py-1 text-white/60">
                        {featuredProject.period}
                      </span>
                    )}
                    {featuredProject.association && (
                      <span className="rounded-full bg-white/5 border border-white/10 px-3 py-1 text-white/60">
                        {featuredProject.association}
                      </span>
                    )}
                  </div>
                )}
                <h3 className="text-3xl font-extrabold tracking-tight text-white leading-tight">
                  {featuredProject.title}
                </h3>
                <p className="mt-4 text-sm leading-relaxed text-white/70">
                  {featuredProject.description}
                </p>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-white/10">
              <div className="rounded-2xl border border-white/5 bg-white/[0.02] p-5">
                <div className="flex items-center gap-2 text-[0.7rem] uppercase tracking-[0.2em] font-semibold text-white/40">
                  <Layers3 className="h-4 w-4 text-white/60" />
                  Stack Snapshots
                </div>

                <div className="mt-3 flex flex-wrap gap-1.5">
                  {featuredProject.skills.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-full bg-white/5 border border-white/10 px-2.5 py-1 text-[0.7rem] font-semibold text-white/80"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {hasFeaturedLink && (
                <div className="mt-6">
                  <Button
                    onClick={() => window.open(featuredUrl, "_blank")}
                    className="rounded-full px-6 bg-white text-black hover:bg-white/90 font-semibold shadow-md flex items-center gap-1.5 transition-all hover:scale-[1.02]"
                  >
                    Open Live Project
                    <ArrowUpRight className="h-4 w-4" />
                  </Button>
                </div>
              )}
            </div>
          </article>

          {/* Other Projects Grid */}
          <div className="flex flex-col gap-4">
            {displayedProjects.map((project) => {
              const actionUrl = project.playstore || project.link;
              const hasLink = Boolean(actionUrl && actionUrl !== "#");

              return (
                <article
                  key={project.title}
                  className="glass-card rounded-2xl p-5 border-border/40 hover-lift flex flex-col justify-between h-full"
                >
                  <div>
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        {(project.period || project.association) && (
                          <div className="mb-2 flex flex-wrap gap-2 text-xs">
                            {project.period && (
                              <span className="rounded-full bg-muted border border-border/40 px-2.5 py-1 text-[0.65rem] font-semibold uppercase tracking-wider text-foreground/80">
                                {project.period}
                              </span>
                            )}
                          </div>
                        )}
                        <h3 className="text-lg font-bold tracking-tight text-foreground">{project.title}</h3>
                        <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
                          {project.description}
                        </p>
                      </div>

                      {hasLink && (
                        <Button
                          variant="outline"
                          size="icon"
                          className="rounded-full flex-shrink-0 hover:bg-primary/5 hover:text-primary border-border/80"
                          onClick={() => window.open(actionUrl, "_blank")}
                        >
                          <ArrowUpRight className="h-4 w-4" />
                        </Button>
                      )}
                    </div>
                  </div>

                  <div className="mt-5 flex flex-wrap gap-1.5 pt-4 border-t border-border/30">
                    {project.skills.map((skill) => (
                      <span
                        key={skill}
                        className="rounded-full bg-muted border border-border/20 px-2.5 py-1 text-[0.65rem] font-semibold text-foreground/75"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </article>
              );
            })}
          </div>
        </div>

        {otherProjects.length > 3 && (
          <div className="mt-12 flex justify-center">
            <Button
              variant="outline"
              onClick={() => setExpanded(!expanded)}
              className="glass-card rounded-full px-6 text-foreground font-semibold border-border/80 hover-lift"
            >
              {expanded ? (
                <>
                  Show Less <ChevronUp className="ml-2 h-4 w-4" />
                </>
              ) : (
                <>
                  View More Projects <ChevronDown className="ml-2 h-4 w-4" />
                </>
              )}
            </Button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;
