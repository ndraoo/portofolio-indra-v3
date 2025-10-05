import Hero from "@/components/Hero";
import WorkExperience from "@/components/WorkExperience";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <WorkExperience />
      <Skills />
      <Projects />
      <Contact />
    </div>
  );
};

export default Index;
