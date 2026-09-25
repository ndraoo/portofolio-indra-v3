import { Code2, Database, Smartphone, Users } from "lucide-react";

const valueCards = [
  { icon: Code2, title: "Product-minded developer", description: "Translating features into user-centered digital applications." },
  { icon: Database, title: "Backend ownership", description: "Connecting databases, secure APIs, and responsive frontends." },
  { icon: Smartphone, title: "Web and mobile delivery", description: "Developing cross-platform apps and web platforms in parallel." },
  { icon: Users, title: "Collaborative mind", description: "Working closely with product owners and developers." },
];

const About = () => <section id="about" className="border-y border-border px-6 py-14 md:px-12"><div className="grid gap-10 md:grid-cols-[0.9fr_1.1fr] md:gap-16"><div><p className="resume-heading mb-3 text-xl">Profile</p><p className="resume-copy text-sm">I specialize in frontend interfaces, API development, and data schema management. My style is about delivering features that work perfectly and scale efficiently.</p><p className="resume-copy mt-4 text-sm">I love building collaboration setups where frontends fit backend payloads. Currently working extensively with Laravel, React.js, React Native, and PostgreSQL.</p></div><div><p className="resume-heading mb-5 text-xl">How I build</p><div className="grid gap-5 sm:grid-cols-2">{valueCards.map(({ icon: Icon, title, description }) => <div key={title} className="flex gap-3"><Icon className="mt-1 h-4 w-4 shrink-0 text-primary" /><div><h3 className="text-sm font-bold text-foreground">{title}</h3><p className="mt-1 text-xs leading-5 text-muted-foreground">{description}</p></div></div>)}</div></div></div></section>;
export default About;
