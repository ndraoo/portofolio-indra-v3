import { Button } from "@/components/ui/button";
import { ArrowUpRight, Download, Github, Linkedin } from "lucide-react";

const Contact = () => {
  return (
    <footer id="contact" className="relative overflow-hidden px-6 py-20">
      <div className="absolute inset-x-0 top-0 -z-10 h-64 bg-[radial-gradient(circle_at_20%_0%,hsl(0_0%_100%/.5),transparent_30%),radial-gradient(circle_at_90%_20%,hsl(331_74%_63%/.2),transparent_24%)]" />

      <div className="mx-auto max-w-6xl">
        <div className="panel-3d-dark stack-offset-dark rounded-[2.4rem] p-8 text-white md:p-10">
          <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end">
            <div className="max-w-3xl">
              <p className="text-sm font-medium uppercase tracking-[0.24em] text-white/50">
                Let&apos;s Connect
              </p>
              <h2 className="mt-4 text-4xl font-semibold tracking-tight text-white md:text-5xl">
                Open for web, backend, and mobile work.
              </h2>
              <p className="mt-5 text-base leading-8 text-white/66 md:text-lg">
                Available for collaboration and product development.
              </p>
            </div>

            <div className="grid gap-3 sm:grid-cols-3 lg:grid-cols-1">
              <Button
                variant="outline"
                size="lg"
                className="chip-3d rounded-full justify-between px-5 text-foreground"
                onClick={() => window.open("https://github.com/ndraoo", "_blank")}
              >
                <span className="flex items-center gap-2">
                  <Github className="h-5 w-5" />
                  GitHub
                </span>
                <ArrowUpRight className="h-4 w-4" />
              </Button>

              <Button
                variant="outline"
                size="lg"
                className="chip-3d rounded-full justify-between px-5 text-foreground"
                onClick={() => window.open("https://www.linkedin.com/in/indra-purnomo-a36014291/", "_blank")}
              >
                <span className="flex items-center gap-2">
                  <Linkedin className="h-5 w-5" />
                  LinkedIn
                </span>
                <ArrowUpRight className="h-4 w-4" />
              </Button>

              <Button
                size="lg"
                className="chip-3d rounded-full justify-between px-5 text-foreground transition-all hover:-translate-y-0.5"
                onClick={() => {
                  const link = document.createElement("a");
                  link.href = "/indra-purnomo.pdf";
                  link.download = "indra-purnomo.pdf";
                  link.click();
                }}
              >
                <span className="flex items-center gap-2">
                  <Download className="h-5 w-5" />
                  Resume
                </span>
                <ArrowUpRight className="h-4 w-4" />
              </Button>
            </div>
          </div>

          <div className="mt-10 border-t border-white/10 pt-6 text-sm text-white/48">
            (c) {new Date().getFullYear()} Indra Purnomo
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Contact;
