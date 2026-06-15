import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowUpRight, ChevronDown, ChevronUp, Layers3 } from "lucide-react";

interface Project {
  title: string;
  description: string;
  skills: string[];
  link?: string;
  playstore?: string;
}

const projects: Project[] = [
  {
    title: "Brightschools",
    description: "School management system with parent and teacher portals.",
    skills: ["Go", "PostgreSQL", "Swagger", "Firebase"],
    playstore: "https://play.google.com/store/apps/details?id=id.brightschools.app&pcampaignid=web_share",
  },
  {
    title: "POS Restaurant",
    description: "Restaurant management system with menu and order management.",
    skills: ["Go", "PostgreSQL", "Swagger"],
    link: "#",
  },
  {
    title: "Apotek Online",
    description: "An online pharmacy platform for ordering and managing medications.",
    skills: ["Laravel 9", "React", "MySQL", "Tailwind CSS"],
    link: "#",
  },
  {
    title: "Pelalangan Online",
    description: "An online auction platform for buying and selling items.",
    skills: ["Laravel 9", "MySQL", "Bootstrap"],
    link: "#",
  },
  {
    title: "Mosque Financial Monitoring",
    description: "A web application to monitor and manage mosque finances efficiently.",
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
    <section id="projects" className="relative overflow-hidden px-6 py-24">
      <div className="absolute inset-x-0 top-0 -z-10 h-64 bg-[radial-gradient(circle_at_15%_0%,hsl(18_92%_56%/.1),transparent_34%),radial-gradient(circle_at_88%_15%,hsl(194_60%_45%/.1),transparent_26%)]" />

      <div className="mx-auto max-w-6xl">
        <div className="mb-14 max-w-3xl">
          <Badge
            variant="outline"
            className="border-primary/15 bg-white/70 px-4 py-1.5 text-[0.7rem] uppercase tracking-[0.24em] text-primary"
          >
            Selected Projects
          </Badge>
          <h2 className="mt-5 text-4xl font-semibold tracking-tight text-foreground md:text-5xl">
            Product work across operations, commerce, and education.
          </h2>
          <p className="mt-4 text-lg leading-8 text-muted-foreground">
            A selection of systems I have contributed to, spanning internal tools, business platforms, and mobile-connected products.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
          <article className="rounded-[2rem] border border-primary/10 bg-[linear-gradient(135deg,hsl(0_0%_100%),hsl(36_56%_94%))] p-8 shadow-medium">
            <div className="flex flex-wrap items-center gap-3">
              <Badge className="bg-primary text-primary-foreground">Featured Project</Badge>
              <Badge
                variant="outline"
                className="border-accent/20 bg-accent/10 text-accent"
              >
                Live product
              </Badge>
            </div>

            <div className="mt-6 max-w-2xl">
              <h3 className="text-3xl font-semibold tracking-tight text-foreground">
                {featuredProject.title}
              </h3>
              <p className="mt-4 text-base leading-8 text-muted-foreground md:text-lg">
                {featuredProject.description}
              </p>
            </div>

            <div className="mt-8 rounded-[1.5rem] border border-primary/8 bg-white/70 p-5">
              <div className="flex items-center gap-2 text-sm font-medium uppercase tracking-[0.2em] text-primary/60">
                <Layers3 className="h-4 w-4 text-accent" />
                Stack Snapshot
              </div>

              <div className="mt-4 flex flex-wrap gap-2">
                {featuredProject.skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full border border-primary/10 bg-secondary/45 px-3 py-1.5 text-sm font-medium text-foreground/75"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {hasFeaturedLink && (
              <div className="mt-8">
                <Button
                  onClick={() => window.open(featuredUrl, "_blank")}
                  className="group rounded-full px-6 shadow-strong transition-all hover:-translate-y-0.5 hover:shadow-medium"
                >
                  Open Project
                  <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                </Button>
              </div>
            )}
          </article>

          <div className="grid gap-4">
            {displayedProjects.map((project) => {
              const actionUrl = project.playstore || project.link;
              const hasLink = Boolean(actionUrl && actionUrl !== "#");

              return (
                <article
                  key={project.title}
                  className="rounded-[1.75rem] border border-white/60 bg-white/80 p-6 shadow-soft backdrop-blur transition-all duration-300 hover:-translate-y-1 hover:shadow-medium"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <h3 className="text-2xl font-semibold tracking-tight text-foreground">
                        {project.title}
                      </h3>
                      <p className="mt-3 text-sm leading-7 text-muted-foreground md:text-base">
                        {project.description}
                      </p>
                    </div>

                    {hasLink && (
                      <Button
                        variant="outline"
                        size="icon"
                        className="rounded-full border-primary/15 bg-white/70"
                        onClick={() => window.open(actionUrl, "_blank")}
                      >
                        <ArrowUpRight className="h-4 w-4" />
                      </Button>
                    )}
                  </div>

                  <div className="mt-5 flex flex-wrap gap-2">
                    {project.skills.map((skill) => (
                      <span
                        key={skill}
                        className="rounded-full border border-primary/10 bg-secondary/45 px-3 py-1.5 text-sm font-medium text-foreground/75"
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
              className="group rounded-full border-primary/15 bg-white/70 px-6 backdrop-blur"
            >
              {expanded ? (
                <>
                  Show Less <ChevronUp className="ml-2 h-4 w-4 transition-transform group-hover:-translate-y-1" />
                </>
              ) : (
                <>
                  View More Projects{" "}
                  <ChevronDown className="ml-2 h-4 w-4 transition-transform group-hover:translate-y-1" />
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
