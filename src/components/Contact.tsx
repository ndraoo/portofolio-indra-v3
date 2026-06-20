import { Button } from "@/components/ui/button";
import { ArrowUpRight, Download, Github, Linkedin, Send, Mail } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const Contact = () => {
  return (
    <footer id="contact" className="relative px-6 pb-16 pt-24 overflow-hidden">
      <div className="mx-auto max-w-6xl">
        <div className="glass-card-dark rounded-[2.5rem] p-8 text-white md:p-12 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent" />
          
          <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] items-center">
            {/* Left side: Pitch */}
            <div className="max-w-2xl">
              <Badge
                variant="outline"
                className="rounded-full bg-white/10 px-4 py-1.5 text-[0.72rem] uppercase tracking-[0.24em] font-semibold text-white/90 border border-white/10"
              >
                <Send className="h-3 w-3 mr-1.5 text-violet-400" />
                Let&apos;s Connect
              </Badge>
              <h2 className="mt-6 text-4xl font-extrabold tracking-tight text-white md:text-5xl leading-tight">
                Open for web, backend, and <span className="bg-gradient-to-r from-violet-400 to-indigo-300 bg-clip-text text-transparent">mobile</span> work.
              </h2>
              <p className="mt-5 text-sm leading-relaxed text-white/60">
                Have an idea, project requirements, or contract openings? Let&apos;s build collaborative, high-performance features.
              </p>
              
              <div className="mt-8 flex items-center gap-3">
                <div className="rounded-xl bg-white/5 border border-white/10 p-3 text-violet-400">
                  <Mail className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-[0.65rem] uppercase tracking-wider text-white/40">Email Address</p>
                  <a 
                    href="mailto:indraprnm104@gmail.com" 
                    className="text-sm font-bold text-white hover:text-violet-300 transition-colors"
                  >
                    indraprnm104@gmail.com
                  </a>
                </div>
              </div>
            </div>

            {/* Right side: Channels */}
            <div className="grid gap-3.5 sm:grid-cols-3 lg:grid-cols-1">
              <Button
                variant="outline"
                size="lg"
                className="rounded-2xl border-white/10 bg-white/[0.04] hover:bg-white/[0.08] hover:border-white/20 justify-between px-6 text-white h-14"
                onClick={() => window.open("https://github.com/ndraoo", "_blank")}
              >
                <span className="flex items-center gap-3 font-semibold text-sm">
                  <Github className="h-5 w-5 text-violet-400" />
                  GitHub
                </span>
                <ArrowUpRight className="h-4 w-4 text-white/40" />
              </Button>

              <Button
                variant="outline"
                size="lg"
                className="rounded-2xl border-white/10 bg-white/[0.04] hover:bg-white/[0.08] hover:border-white/20 justify-between px-6 text-white h-14"
                onClick={() => window.open("https://www.linkedin.com/in/indra-purnomo-a36014291/", "_blank")}
              >
                <span className="flex items-center gap-3 font-semibold text-sm">
                  <Linkedin className="h-5 w-5 text-blue-400" />
                  LinkedIn
                </span>
                <ArrowUpRight className="h-4 w-4 text-white/40" />
              </Button>

              <Button
                variant="outline"
                size="lg"
                className="rounded-2xl border-white/15 bg-white text-black hover:bg-white/90 justify-between px-6 h-14"
                onClick={() => {
                  const link = document.createElement("a");
                  link.href = "/indra-purnomo.pdf";
                  link.download = "indra-purnomo.pdf";
                  link.click();
                }}
              >
                <span className="flex items-center gap-3 font-bold text-sm">
                  <Download className="h-5 w-5 text-violet-600" />
                  Get Resume
                </span>
                <ArrowUpRight className="h-4 w-4 text-black/55" />
              </Button>
            </div>
          </div>

          <div className="mt-12 pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/40">
            <p>&copy; {new Date().getFullYear()} Indra Purnomo. All rights reserved.</p>
            <p className="flex items-center gap-1.5">
              <span>Medan</span>
              <span className="h-1 w-1 rounded-full bg-white/20" />
              <span>BSD</span>
              <span className="h-1 w-1 rounded-full bg-white/20" />
              <span>Malaysia Cooperation</span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Contact;
