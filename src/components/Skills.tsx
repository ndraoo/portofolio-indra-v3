const skills = [
  "React", "Javascript", "MySQL", "Go", "Tailwind CSS",
  "Firebase", "Laravel", "PostgreSQL", "Bootstrap", "Github",
  "Docker", "PHP", "REST API", "Figma", "Swagger",
];

const Skills = () => {
  return (
    <section className="py-20 px-6 bg-secondary/30 overflow-hidden">
      <div className="max-w-6xl mx-auto mb-12">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center">Skills & Technologies</h2>
        <p className="text-muted-foreground text-center">Tools I work with</p>
      </div>
      
      <div className="relative">
        {/* Left scroll */}
        <div className="flex gap-6 mb-6 animate-scroll-left">
          {[...skills, ...skills].map((skill, index) => (
            <div
              key={`left-${index}`}
              className="flex-shrink-0 px-8 py-4 bg-card rounded-full border border-border shadow-soft hover:shadow-medium transition-all hover:scale-105"
            >
              <span className="text-lg font-medium whitespace-nowrap">{skill}</span>
            </div>
          ))}
        </div>
        
        {/* Right scroll */}
        <div className="flex gap-6 animate-scroll-right">
          {[...skills, ...skills].map((skill, index) => (
            <div
              key={`right-${index}`}
              className="flex-shrink-0 px-8 py-4 bg-card rounded-full border border-border shadow-soft hover:shadow-medium transition-all hover:scale-105"
            >
              <span className="text-lg font-medium whitespace-nowrap">{skill}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
