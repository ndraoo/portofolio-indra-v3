import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";

const Hero = () => {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="min-h-screen flex items-center justify-center px-6 py-20 bg-gradient-to-b from-background to-secondary/30">
      <div className="max-w-5xl mx-auto text-center animate-fade-in">
        <h1 className="text-6xl md:text-8xl font-bold mb-6 tracking-tight">
          Hi, I'm <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent">Indra Purnomo</span>
        </h1>
        <p className="text-2xl md:text-3xl text-muted-foreground mb-8 font-light">
          Junior Backend Developer
        </p>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-12 leading-relaxed">
         I am Indra Purnomo, a backend development with 1 year of experience specializing in Laravel, JavaScript, and Golang. 
          I focus on building efficient, secure, and scalable APIs to support modern web applications. Currently, my focus lies 
          in backend development, and I have a passion for learning new things.
        </p>
        <Button 
          onClick={() => scrollToSection("contact")}
          size="lg"
          className="group shadow-strong hover:shadow-medium transition-all"
        >
          Get In Touch
          <ArrowDown className="ml-2 h-4 w-4 group-hover:translate-y-1 transition-transform" />
        </Button>
      </div>
    </section>
  );
};

export default Hero;
