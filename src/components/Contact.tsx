import { Button } from "@/components/ui/button";
import { Download, Github, Linkedin } from "lucide-react";

const Contact = () => {
  return (
    <footer id="contact" className="border-t border-border bg-gradient-to-b from-secondary/30 to-background px-6 py-16">
      <div className="mx-auto max-w-4xl text-center">
        <h2 className="mb-4 text-3xl font-bold md:text-4xl">Let&apos;s Connect</h2>
        <p className="mb-8 text-muted-foreground">
          Feel free to reach out for collaborations, product work, or a good technical conversation.
        </p>

        <div className="mb-12 flex flex-wrap justify-center gap-4">
          <Button
            variant="outline"
            size="lg"
            className="group"
            onClick={() => window.open("https://github.com/ndraoo", "_blank")}
          >
            <Github className="mr-2 h-5 w-5 transition-transform group-hover:scale-110" />
            GitHub
          </Button>

          <Button
            variant="outline"
            size="lg"
            className="group"
            onClick={() => window.open("https://www.linkedin.com/in/indra-purnomo-a36014291/", "_blank")}
          >
            <Linkedin className="mr-2 h-5 w-5 transition-transform group-hover:scale-110" />
            LinkedIn
          </Button>

          <Button
            size="lg"
            className="group shadow-medium transition-all hover:shadow-strong"
            onClick={() => {
              const link = document.createElement("a");
              link.href = "/indra-purnomo.pdf";
              link.download = "indra-purnomo.pdf";
              link.click();
            }}
          >
            <Download className="mr-2 h-5 w-5 transition-transform group-hover:translate-y-1" />
            Get My Resume
          </Button>
        </div>

        <div className="border-t border-border pt-8">
          <p className="text-sm text-muted-foreground">(c) {new Date().getFullYear()} Indra</p>
        </div>
      </div>
    </footer>
  );
};

export default Contact;
