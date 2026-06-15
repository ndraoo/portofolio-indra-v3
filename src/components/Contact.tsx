import { Button } from "@/components/ui/button";
import { ArrowUpRight, Download, Github, Linkedin } from "lucide-react";

const Contact = () => {
  return (
    <footer id="contact" className="relative overflow-hidden px-6 py-20">
      <div className="absolute inset-x-0 top-0 -z-10 h-64 bg-[radial-gradient(circle_at_20%_0%,hsl(18_92%_56%/.1),transparent_32%),radial-gradient(circle_at_90%_20%,hsl(194_60%_45%/.1),transparent_24%)]" />

      <div className="mx-auto max-w-6xl">
        <div className="rounded-[2.25rem] border border-primary/10 bg-[linear-gradient(135deg,hsl(0_0%_100%),hsl(36_56%_94%))] p-8 shadow-strong md:p-10">
          <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end">
            <div className="max-w-3xl">
              <p className="text-sm font-medium uppercase tracking-[0.24em] text-primary/60">
                Let&apos;s Connect
              </p>
              <h2 className="mt-4 text-4xl font-semibold tracking-tight text-foreground md:text-5xl">
                Open for collaboration on web, backend, and mobile product work.
              </h2>
              <p className="mt-5 text-base leading-8 text-muted-foreground md:text-lg">
                If you&apos;re building a product and need someone who can work across frontend, backend, and system flow, I&apos;d be glad to talk.
              </p>
            </div>

            <div className="grid gap-3 sm:grid-cols-3 lg:grid-cols-1">
              <Button
                variant="outline"
                size="lg"
                className="group justify-between rounded-full border-primary/15 bg-white/70 px-5 backdrop-blur"
                onClick={() => window.open("https://github.com/ndraoo", "_blank")}
              >
                <span className="flex items-center gap-2">
                  <Github className="h-5 w-5 transition-transform group-hover:scale-110" />
                  GitHub
                </span>
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
              </Button>

              <Button
                variant="outline"
                size="lg"
                className="group justify-between rounded-full border-primary/15 bg-white/70 px-5 backdrop-blur"
                onClick={() => window.open("https://www.linkedin.com/in/indra-purnomo-a36014291/", "_blank")}
              >
                <span className="flex items-center gap-2">
                  <Linkedin className="h-5 w-5 transition-transform group-hover:scale-110" />
                  LinkedIn
                </span>
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
              </Button>

              <Button
                size="lg"
                className="group justify-between rounded-full px-5 shadow-medium transition-all hover:shadow-strong"
                onClick={() => {
                  const link = document.createElement("a");
                  link.href = "/indra-purnomo.pdf";
                  link.download = "indra-purnomo.pdf";
                  link.click();
                }}
              >
                <span className="flex items-center gap-2">
                  <Download className="h-5 w-5 transition-transform group-hover:translate-y-1" />
                  Resume
                </span>
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
              </Button>
            </div>
          </div>

          <div className="mt-10 border-t border-primary/10 pt-6 text-sm text-muted-foreground">
            (c) {new Date().getFullYear()} Indra Purnomo
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Contact;
