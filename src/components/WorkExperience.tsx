import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ChevronDown, ChevronUp, Briefcase } from "lucide-react";

interface Experience {
  title: string;
  company: string;
  period: string;
  description: string;
}

const experiences: Experience[] = [
  {
    title: "Backend Developer",
    company: "Putra Muda Mandiri",
    period: "Apr 2025 - Currently",
    description: `• Developed a POS (Point of Sale) system for restaurants with dynamic menu and order management features.
• Developed backend APIs using Firebase Cloud Messaging to schedule and send push notifications based on user roles and topics.
• Developed and maintained new features, including notifications, invoices, and attendance (presences) endpoints.
• Contributed to backend system architecture, endpoint testing, and collaborated closely with cross-functional teams.
• Followed clean code principles and utilized Git for version control and collaborative development.`
  },
  {
    title: "Backend Developer Intern",
    company: "Core Initiative",
    period: "Oct 2024 - Oct 2024",
    description: `• Developed secure backend features for user profile updates and password changes, implementing validation and encryption for data protection.
• Implemented soft delete functionality using Eloquent ORM, enabling reversible data removal and improving data safety.
• Built a recurring booking management system that allows users to schedule repeated reservations with optimized database queries.
• Designed and managed backend logic for room amenities, enabling dynamic configuration and integration with the booking system.`
  },
  {
    title: "Web Development Intern",
    company: "PT Dewan Studio",
    period: "Feb 2023 - Mar 2023",
    description: `• Developed an Inventory Management website using Laravel 9.
• Developed a Financial Monitoring website for a mosque using Laravel 9.`
  },
];

const WorkExperience = () => {
  const [expanded, setExpanded] = useState(false);
  const displayedExperiences = expanded ? experiences : experiences.slice(0, 2);

  return (
    <section id="experience" className="py-20 px-6 bg-gradient-to-b from-secondary/30 to-background">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center">Work Experience</h2>
        <p className="text-muted-foreground text-center mb-16">My professional journey</p>
        
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 top-0 bottom-0 w-px bg-border" />
          
          <div className="space-y-8">
            {displayedExperiences.map((exp, index) => (
              <div 
                key={index} 
                className="relative pl-20 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Timeline dot */}
                <div className="absolute left-6 top-2 w-5 h-5 rounded-full bg-primary border-4 border-background shadow-medium" />
                
                <div className="bg-card rounded-lg p-6 shadow-soft hover:shadow-medium transition-all border border-border">
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-lg bg-secondary">
                      <Briefcase className="h-5 w-5" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold mb-1">{exp.title}</h3>
                      <p className="text-muted-foreground mb-2">{exp.company} • {exp.period}</p>
                      <div className="text-sm leading-relaxed whitespace-pre-line">{exp.description}</div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {experiences.length > 2 && (
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
                  View More Experience <ChevronDown className="ml-2 h-4 w-4 group-hover:translate-y-1 transition-transform" />
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
