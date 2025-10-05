import { Button } from "@/components/ui/button";
import { Github, Linkedin, Download } from "lucide-react";

const Contact = () => {
  return (
    <footer id="contact" className="py-16 px-6 bg-gradient-to-b from-secondary/30 to-background border-t border-border">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Let's Connect</h2>
        <p className="text-muted-foreground mb-8">
          Feel free to reach out for collaborations or just a friendly chat
        </p>
        
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          <Button
            variant="outline"
            size="lg"
            className="group"
            onClick={() => window.open("https://github.com/ndraoo", "_blank")}
          >
            <Github className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
            GitHub
          </Button>
          
          <Button
            variant="outline"
            size="lg"
            className="group"
            onClick={() => window.open("https://www.linkedin.com/in/indra-purnomo-a36014291/", "_blank")}
          >
            <Linkedin className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
            LinkedIn
          </Button>
          
          <Button
            size="lg"
            className="group shadow-medium hover:shadow-strong transition-all"
            onClick={() => {
              // Download resume file
              const link = document.createElement('a');
              link.href = '/indra-purnomo.pdf';
              link.download = 'indra-purnomo.pdf';
              link.click();
            }}
          >
            <Download className="mr-2 h-5 w-5 group-hover:translate-y-1 transition-transform" />
            Get My Resume
          </Button>
        </div>
        
        <div className="pt-8 border-t border-border">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Indra
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Contact;
