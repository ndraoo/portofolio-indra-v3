import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ChevronDown, ChevronUp, ExternalLink } from "lucide-react";

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
    playstore: "https://play.google.com/store/apps/details?id=id.brightschools.app&pcampaignid=web_share"
  },
  {
    title: "POS Restaurant",
    description: "Restaurant management system with menu and order management.",
    skills: ["Go", "PostgreSQL", "Swagger"],
    link: "#"
  },
  {
    title: "Apotek Online",
    description: "An online pharmacy platform for ordering and managing medications.",
    skills: ["Laravel 9", "React","MySQL", "Tailwind CSS"],
    link: "#"
  },
  {
    title: "Pelalangan Online",
    description: "An online auction platform for buying and selling items.",
    skills: ["Laravel 9", "MySQL", "Bootstrap"],
    link: "#"
  },
  {
    title: "Mosque Financial Monitoring",
    description: "A web application to monitor and manage mosque finances efficiently.",
    skills: ["Laravel 9", "MySQL", "Bootstrap"],
    link: "#"
  },
];

const Projects = () => {
  const [expanded, setExpanded] = useState(false);
  const displayedProjects = expanded ? projects : projects.slice(0, 3);

  return (
    <section id="projects" className="py-20 px-6 bg-gradient-to-b from-background to-secondary/30">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center">Projects</h2>
        <p className="text-muted-foreground text-center mb-16">Things I've built</p>
        
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 top-0 bottom-0 w-px bg-border hidden md:block" />
          
          <div className="grid gap-8">
            {displayedProjects.map((project, index) => (
              <div 
                key={index}
                className="relative md:pl-20 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Timeline dot */}
                <div className="absolute left-6 top-6 w-5 h-5 rounded-full bg-primary border-4 border-background shadow-medium hidden md:block" />
                
                <div className="bg-card rounded-lg p-6 shadow-soft hover:shadow-medium transition-all border border-border group">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                    <div>
                      <h3 className="text-2xl font-semibold mb-2">{project.title}</h3>
                      <p className="text-muted-foreground leading-relaxed">{project.description}</p>
                    </div>
                    {(project.link || project.playstore) && (
                      <Button variant="outline" size="sm" className="flex-shrink-0 self-start">
                        View <ExternalLink className="ml-2 h-4 w-4" />
                      </Button>
                    )}
                  </div>
                  
                  <div className="flex flex-wrap gap-2">
                    {project.skills.map((skill, skillIndex) => (
                      <span 
                        key={skillIndex}
                        className="px-3 py-1 text-sm bg-secondary rounded-full border border-border"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {projects.length > 3 && (
          <div className="flex justify-center mt-12">
            <Button
              variant="outline"
              onClick={() => setExpanded(!expanded)}
              className="group"
            >
              {expanded ? (
                <>
                  Show Less <ChevronUp className="ml-2 h-4 w-4 group-hover:-translate-y-1 transition-transform" />
                </>
              ) : (
                <>
                  View More Projects <ChevronDown className="ml-2 h-4 w-4 group-hover:translate-y-1 transition-transform" />
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
