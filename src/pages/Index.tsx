import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import WorkExperience from "@/components/WorkExperience";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";

const Index = () => {
  return (
    <div className="relative min-h-screen bg-background text-foreground transition-colors duration-300">
      {/* Ambient backgrounds */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
        <div className="grid-bg absolute inset-0 opacity-70" />
        <div className="orb orb-purple left-[-10%] top-[5%] w-[50vw] h-[50vw] opacity-15 dark:opacity-20 animate-float" />
        <div className="orb orb-cyan right-[-10%] top-[35%] w-[45vw] h-[45vw] opacity-10 dark:opacity-15 animate-float-reverse" />
        <div className="orb orb-pink left-[15%] bottom-[10%] w-[40vw] h-[40vw] opacity-15 dark:opacity-20 animate-float" />
      </div>

      <Navbar />
      <main className="relative z-10">
        <Hero />
        <About />
        <WorkExperience />
        <Skills />
        <Projects />
        <Contact />
      </main>
    </div>
  );
};

export default Index;
