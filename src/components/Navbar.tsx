import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";
import { Sun, Moon, Menu, X, Download } from "lucide-react";
import { cn } from "@/lib/utils";

const navLinks = [
  { name: "About", href: "#about" },
  { name: "Experience", href: "#experience" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

const Navbar = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  // Prevent hydration mismatch
  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      // Section intersection observer-like active state check
      const scrollPosition = window.scrollY + 160;
      for (const link of navLinks) {
        const el = document.getElementById(link.href.substring(1));
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(link.href);
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleDownloadResume = () => {
    const link = document.createElement("a");
    link.href = "/indra-purnomo.pdf";
    link.download = "indra-purnomo.pdf";
    link.click();
  };

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <header
      className={cn(
        "fixed top-0 inset-x-0 z-50 transition-all duration-300 px-6",
        scrolled
          ? "py-3 bg-background/70 backdrop-blur-lg border-b border-border/40 shadow-sm"
          : "py-5 bg-transparent"
      )}
    >
      <div className="mx-auto max-w-6xl flex items-center justify-between">
        <a
          href="#"
          className="text-xl font-bold tracking-tight bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent hover:opacity-85 transition-opacity"
        >
          Indra Purnomo
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={cn(
                "px-4 py-2 rounded-full text-sm font-medium transition-colors hover:text-primary",
                activeSection === link.href
                  ? "text-primary bg-primary/10"
                  : "text-muted-foreground"
              )}
            >
              {link.name}
            </a>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-3">
          {mounted && (
            <Button
              variant="outline"
              size="icon"
              className="rounded-full border-border/60 hover:bg-muted"
              onClick={toggleTheme}
            >
              {theme === "dark" ? (
                <Sun className="h-4 w-4 text-amber-500 animate-pulse-slow" />
              ) : (
                <Moon className="h-4 w-4 text-violet-600" />
              )}
            </Button>
          )}

          <Button
            size="sm"
            onClick={handleDownloadResume}
            className="rounded-full bg-primary hover:bg-primary/90 text-primary-foreground font-medium px-5 flex items-center gap-1.5 shadow-sm transition-all hover:shadow-md"
          >
            <Download className="h-3.5 w-3.5" />
            Resume
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <div className="flex items-center gap-3 md:hidden">
          {mounted && (
            <Button
              variant="outline"
              size="icon"
              className="rounded-full border-border/60"
              onClick={toggleTheme}
            >
              {theme === "dark" ? (
                <Sun className="h-4 w-4 text-amber-500" />
              ) : (
                <Moon className="h-4 w-4 text-violet-600" />
              )}
            </Button>
          )}

          <Button
            variant="outline"
            size="icon"
            className="rounded-full border-border/60"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {isOpen && (
        <div className="absolute top-full left-0 right-0 p-6 bg-background/95 backdrop-blur-xl border-b border-border shadow-xl md:hidden animate-fade-in">
          <nav className="flex flex-col gap-3">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className={cn(
                  "px-4 py-3 rounded-xl text-base font-medium transition-all",
                  activeSection === link.href
                    ? "text-primary bg-primary/10 pl-6"
                    : "text-muted-foreground hover:bg-muted"
                )}
              >
                {link.name}
              </a>
            ))}
            <Button
              onClick={() => {
                handleDownloadResume();
                setIsOpen(false);
              }}
              className="mt-2 w-full rounded-xl bg-primary text-primary-foreground py-3 flex items-center justify-center gap-2"
            >
              <Download className="h-4 w-4" />
              Download Resume
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
