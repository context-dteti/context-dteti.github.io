import { useState, useEffect, useRef } from "react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";
import {
  Menu,
  X,
  ChevronDown,
  ExternalLink,
  Wifi,
  CloudRain,
  Map,
  FlaskConical,
  Radio,
  Users,
  Database,
  Layers,
} from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";

const NAV_LINKS = [
  { label: "About", href: "#about" },
  { label: "Video", href: "#video" },
  { label: "People", href: "#people" },
  { label: "Projects", href: "#projects" },
];

const PROJECTS = [
  {
    id: 1,
    name: "Hyperbase",
    shortDesc:
      "A high-performance, distributed database engine designed for real-time context-aware applications. Hyperbase leverages edge computing principles to deliver sub-millisecond query performance even in resource-constrained IoT environments.",
    tags: ["Database", "Distributed Systems", "IoT"],
    icon: Database,
    color: "bg-blue-50 text-blue-700",
    iconBg: "bg-blue-100",
  },
  {
    id: 2,
    name: "INSPIRASI Project: Disaster",
    shortDesc:
      "An intelligent sensor-based platform for real-time disaster prediction and early warning systems. Uses multimodal environmental sensing combined with machine learning models to detect landslide, flood, and earthquake precursors.",
    tags: ["Disaster Management", "Sensing", "ML"],
    icon: CloudRain,
    color: "bg-sky-50 text-sky-700",
    iconBg: "bg-sky-100",
  },
  {
    id: 3,
    name: "MiniWeather Station",
    shortDesc:
      "A compact, low-cost, solar-powered weather monitoring node deployable at scale across urban and rural environments. Provides hyperlocal meteorological data for agriculture, urban planning, and climate research.",
    tags: ["IoT", "Weather", "Embedded"],
    icon: Wifi,
    color: "bg-teal-50 text-teal-700",
    iconBg: "bg-teal-100",
  },
  {
    id: 4,
    name: "Borobudur Navigation App",
    shortDesc:
      "A context-aware indoor and outdoor navigation system for the Borobudur heritage site. Combines computer vision, spatial mapping, and cultural data to deliver an immersive, accessible visitor experience.",
    tags: ["Navigation", "Heritage", "AR"],
    icon: Map,
    color: "bg-amber-50 text-amber-700",
    iconBg: "bg-amber-100",
  },
  {
    id: 5,
    name: "SmarLab",
    shortDesc:
      "A smart laboratory management ecosystem that monitors equipment usage, environmental conditions, and occupancy in real time. Enables energy-efficient operation and predictive maintenance through IoT sensors and an intelligent dashboard.",
    tags: ["Smart Building", "IoT", "Energy"],
    icon: FlaskConical,
    color: "bg-violet-50 text-violet-700",
    iconBg: "bg-violet-100",
  },
  {
    id: 6,
    name: "UWB Indoor Localization",
    shortDesc:
      "Ultra-Wideband (UWB)-based centimeter-accurate indoor positioning system. Designed for asset tracking, robot navigation, and personnel safety in GPS-denied environments like hospitals, warehouses, and smart factories.",
    tags: ["UWB", "Localization", "RTLS"],
    icon: Radio,
    color: "bg-rose-50 text-rose-700",
    iconBg: "bg-rose-100",
  },
  {
    id: 7,
    name: "CSI Context-Aware",
    shortDesc:
      "Leverages Wi-Fi Channel State Information (CSI) as a passive sensing modality to recognize human activities, detect presence, and infer contextual states — all without cameras or wearable devices.",
    tags: ["Wi-Fi Sensing", "CSI", "Context"],
    icon: Layers,
    color: "bg-indigo-50 text-indigo-700",
    iconBg: "bg-indigo-100",
  },
  {
    id: 8,
    name: "People Mobility",
    shortDesc:
      "A crowd dynamics and human mobility analysis platform that fuses GPS traces, Wi-Fi probe data, and social signals to model movement patterns in urban spaces, enabling smarter city planning and emergency response.",
    tags: ["Mobility", "Urban", "Analytics"],
    icon: Users,
    color: "bg-orange-50 text-orange-700",
    iconBg: "bg-orange-100",
  },
];

const PEOPLE = [
  {
    id: 1,
    name: "Dr. Azka Maulana",
    role: "Principal Investigator",
    affiliation: "Universitas Gadjah Mada",
    initials: "AM",
    color: "bg-blue-600",
  },
  {
    id: 2,
    name: "Rizky Pratama",
    role: "PhD Researcher",
    affiliation: "Computer Science Dept.",
    initials: "RP",
    color: "bg-indigo-500",
  },
  {
    id: 3,
    name: "Siti Nurhaliza",
    role: "PhD Researcher",
    affiliation: "Electrical Engineering Dept.",
    initials: "SN",
    color: "bg-violet-500",
  },
  {
    id: 4,
    name: "Ahmad Fauzi",
    role: "Research Engineer",
    affiliation: "IoT & Embedded Systems",
    initials: "AF",
    color: "bg-sky-500",
  },
  {
    id: 5,
    name: "Dewi Rahayu",
    role: "MSc Student",
    affiliation: "Computer Networks",
    initials: "DR",
    color: "bg-teal-500",
  },
  {
    id: 6,
    name: "Budi Santoso",
    role: "MSc Student",
    affiliation: "Signal Processing",
    initials: "BS",
    color: "bg-cyan-500",
  },
  {
    id: 7,
    name: "Nurul Hidayah",
    role: "Research Assistant",
    affiliation: "Data Science Lab",
    initials: "NH",
    color: "bg-blue-400",
  },
  {
    id: 8,
    name: "Fajar Wibianto",
    role: "Research Assistant",
    affiliation: "Wireless Communications",
    initials: "FW",
    color: "bg-indigo-400",
  },
];

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (href: string) => {
    setMenuOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <a
          href="#"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
          className="flex items-center gap-2"
          data-testid="link-logo"
        >
          <div className="w-8 h-8 rounded-md bg-blue-700 flex items-center justify-center">
            <span className="text-white font-bold text-sm">C</span>
          </div>
          <span
            className={`font-bold text-lg tracking-tight transition-colors ${
              scrolled ? "text-slate-800" : "text-white"
            }`}
          >
            CONTEXT
          </span>
          <span
            className={`text-xs font-medium px-2 py-0.5 rounded-full transition-colors ${
              scrolled
                ? "bg-blue-100 text-blue-700"
                : "bg-white/20 text-white/90"
            }`}
          >
            Lab
          </span>
        </a>

        <div className="hidden md:flex items-center gap-1">
          {NAV_LINKS.map((link) => (
            <button
              key={link.href}
              onClick={() => scrollTo(link.href)}
              data-testid={`link-nav-${link.label.toLowerCase()}`}
              className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                scrolled
                  ? "text-slate-600 hover:text-blue-700 hover:bg-blue-50"
                  : "text-white/80 hover:text-white hover:bg-white/10"
              }`}
            >
              {link.label}
            </button>
          ))}
          <Button
            size="sm"
            className="ml-2 bg-blue-700 hover:bg-blue-800 text-white"
            data-testid="button-contact"
          >
            Contact Us
          </Button>
        </div>

        <button
          className={`md:hidden p-2 rounded-md transition-colors ${
            scrolled ? "text-slate-700" : "text-white"
          }`}
          onClick={() => setMenuOpen(!menuOpen)}
          data-testid="button-mobile-menu"
        >
          {menuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {menuOpen && (
        <div className="md:hidden bg-white border-b border-slate-200 px-6 py-4 flex flex-col gap-1">
          {NAV_LINKS.map((link) => (
            <button
              key={link.href}
              onClick={() => scrollTo(link.href)}
              className="text-left px-3 py-2 rounded-md text-sm font-medium text-slate-700 hover:bg-blue-50 hover:text-blue-700 transition-colors"
              data-testid={`link-mobile-${link.label.toLowerCase()}`}
            >
              {link.label}
            </button>
          ))}
        </div>
      )}
    </nav>
  );
}

function HeroSection() {
  const scrollTo = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900"
        style={{
          backgroundImage:
            "radial-gradient(circle at 20% 50%, rgba(37, 99, 235, 0.4) 0%, transparent 60%), radial-gradient(circle at 80% 20%, rgba(99, 102, 241, 0.3) 0%, transparent 50%)",
        }}
      />
      <div className="absolute inset-0 opacity-10">
        {Array.from({ length: 20 }).map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full border border-white/30"
            style={{
              width: `${Math.random() * 200 + 50}px`,
              height: `${Math.random() * 200 + 50}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              transform: "translate(-50%, -50%)",
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 text-white/80 text-sm font-medium mb-8">
            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
            Context-Aware Computing Research Group
          </div>

          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            CONTEXT
            <span className="block text-blue-300 text-3xl md:text-4xl font-light mt-2">
              Research Laboratory
            </span>
          </h1>

          <p className="text-lg md:text-xl text-white/70 max-w-2xl mx-auto leading-relaxed mb-10">
            Advancing the frontiers of context-aware computing, IoT sensing, and
            intelligent systems at the intersection of wireless technology, data
            science, and real-world applications.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <Button
              size="lg"
              className="bg-white text-blue-800 font-semibold px-8"
              onClick={() => scrollTo("#projects")}
              data-testid="button-hero-projects"
            >
              Explore Projects
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white/30 text-white px-8 bg-transparent"
              onClick={() => scrollTo("#about")}
              data-testid="button-hero-about"
            >
              Learn More
            </Button>
          </div>
        </motion.div>
      </div>

      <button
        onClick={() => scrollTo("#about")}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/50 hover:text-white/80 transition-colors"
        data-testid="button-scroll-down"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
        >
          <ChevronDown className="w-7 h-7" />
        </motion.div>
      </button>
    </section>
  );
}

function AboutSection() {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center gap-3 mb-4">
            <span className="w-10 h-0.5 bg-blue-600" />
            <span className="text-blue-600 text-sm font-semibold uppercase tracking-widest">
              About
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-6">
            About CONTEXT Lab
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <p className="text-slate-600 text-lg leading-relaxed mb-6">
              The <strong className="text-slate-800">CONTEXT Laboratory</strong>{" "}
              at Universitas Gadjah Mada is a research group dedicated to
              developing innovative context-aware computing systems that
              understand and respond intelligently to their environment.
            </p>
            <p className="text-slate-600 leading-relaxed mb-6">
              Led by Dr. Azka Maulana, our group combines expertise in wireless
              sensing, embedded systems, machine learning, and distributed
              computing to tackle real-world challenges in smart environments,
              disaster management, cultural heritage preservation, and urban
              mobility.
            </p>
            <p className="text-slate-600 leading-relaxed">
              We believe that the next generation of computing will be deeply
              integrated with the physical world — sensing context, adapting
              behavior, and empowering communities with intelligence that is
              local, efficient, and human-centered.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid grid-cols-2 gap-4"
          >
            {[
              { value: "8+", label: "Active Projects" },
              { value: "15+", label: "Publications" },
              { value: "12", label: "Researchers" },
              { value: "5+", label: "Industry Partners" },
            ].map((stat) => (
              <div
                key={stat.label}
                className="bg-slate-50 rounded-lg p-6 text-center border border-slate-100"
                data-testid={`stat-${stat.label.toLowerCase().replace(/\s/g, "-")}`}
              >
                <div className="text-3xl font-bold text-blue-700 mb-1">
                  {stat.value}
                </div>
                <div className="text-sm text-slate-500 font-medium">
                  {stat.label}
                </div>
              </div>
            ))}

            <div className="col-span-2 bg-blue-700 rounded-lg p-6 text-white">
              <div className="text-sm font-semibold uppercase tracking-widest text-blue-200 mb-2">
                Research Focus
              </div>
              <div className="flex flex-wrap gap-2">
                {[
                  "IoT Sensing",
                  "Indoor Positioning",
                  "Context Awareness",
                  "Edge Computing",
                  "Smart Environments",
                ].map((tag) => (
                  <span
                    key={tag}
                    className="px-2 py-1 rounded bg-white/15 text-white text-xs font-medium"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function VideoSection() {
  return (
    <section id="video" className="py-24 bg-slate-50">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <span className="w-10 h-0.5 bg-blue-600" />
            <span className="text-blue-600 text-sm font-semibold uppercase tracking-widest">
              Video
            </span>
            <span className="w-10 h-0.5 bg-blue-600" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
            Lab Overview
          </h2>
          <p className="text-slate-500 max-w-xl mx-auto">
            Watch our research overview and learn about the work we do in the
            CONTEXT Laboratory.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="max-w-3xl mx-auto"
        >
          <div className="relative rounded-xl overflow-hidden shadow-lg border border-slate-200 bg-slate-900 aspect-video">
            <iframe
              className="absolute inset-0 w-full h-full"
              src="https://www.youtube.com/embed/dQw4w9WgXcQ"
              title="CONTEXT Lab Overview"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              data-testid="video-embed"
            />
          </div>
          <p className="text-center text-sm text-slate-400 mt-3">
            CONTEXT Research Group — Lab Overview and Research Introduction
          </p>
        </motion.div>
      </div>
    </section>
  );
}

function PeopleSection() {
  return (
    <section id="people" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <div className="flex items-center gap-3 mb-4">
            <span className="w-10 h-0.5 bg-blue-600" />
            <span className="text-blue-600 text-sm font-semibold uppercase tracking-widest">
              People
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800">
            Our Team
          </h2>
          <p className="text-slate-500 mt-3 max-w-xl">
            A multidisciplinary team of researchers, engineers, and students
            working together to advance context-aware computing.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-5">
          {PEOPLE.map((person, i) => (
            <motion.div
              key={person.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.07 }}
              data-testid={`card-person-${person.id}`}
            >
              <Card className="hover-elevate cursor-pointer text-center p-5 border-slate-200">
                <CardContent className="p-0 flex flex-col items-center gap-3">
                  <Avatar className="w-16 h-16">
                    <AvatarFallback
                      className={`${person.color} text-white font-semibold text-lg`}
                    >
                      {person.initials}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <p
                      className="font-semibold text-slate-800 text-sm leading-tight"
                      data-testid={`text-person-name-${person.id}`}
                    >
                      {person.name}
                    </p>
                    <p className="text-blue-600 text-xs font-medium mt-0.5">
                      {person.role}
                    </p>
                    <p className="text-slate-400 text-xs mt-0.5">
                      {person.affiliation}
                    </p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectsSection() {
  return (
    <section id="projects" className="py-24 bg-slate-50">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <div className="flex items-center gap-3 mb-4">
            <span className="w-10 h-0.5 bg-blue-600" />
            <span className="text-blue-600 text-sm font-semibold uppercase tracking-widest">
              Projects
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800">
            Research Projects
          </h2>
          <p className="text-slate-500 mt-3 max-w-xl">
            Our ongoing and completed research projects spanning IoT, sensing,
            localization, and intelligent systems.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {PROJECTS.map((project, i) => {
            const Icon = project.icon;
            return (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.06 }}
                data-testid={`card-project-${project.id}`}
              >
                <Card className="hover-elevate cursor-pointer h-full border-slate-200 bg-white">
                  <CardHeader className="pb-3">
                    <div className="flex items-start gap-3">
                      <div
                        className={`w-10 h-10 rounded-lg ${project.iconBg} flex items-center justify-center flex-shrink-0`}
                      >
                        <Icon className={`w-5 h-5 ${project.color.split(" ")[1]}`} />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3
                          className="font-bold text-slate-800 text-base leading-snug"
                          data-testid={`text-project-name-${project.id}`}
                        >
                          {project.name}
                        </h3>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <p className="text-slate-500 text-sm leading-relaxed mb-4">
                      {project.shortDesc}
                    </p>
                    <div className="flex flex-wrap gap-1.5">
                      {project.tags.map((tag) => (
                        <Badge
                          key={tag}
                          variant="secondary"
                          className="text-xs"
                          data-testid={`badge-tag-${project.id}-${tag.toLowerCase().replace(/\s/g, "-")}`}
                        >
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-slate-900 text-white py-12">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-10 mb-10">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-md bg-blue-600 flex items-center justify-center">
                <span className="text-white font-bold text-sm">C</span>
              </div>
              <span className="font-bold text-lg">CONTEXT Lab</span>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed">
              Context-Aware Computing Research Group, advancing intelligent
              systems for the real world.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-sm uppercase tracking-widest text-slate-400 mb-4">
              Navigation
            </h4>
            <ul className="space-y-2">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-slate-300 hover:text-white text-sm transition-colors"
                    data-testid={`link-footer-${link.label.toLowerCase()}`}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-sm uppercase tracking-widest text-slate-400 mb-4">
              Contact
            </h4>
            <address className="not-italic text-slate-300 text-sm leading-relaxed space-y-1">
              <p>Universitas Gadjah Mada</p>
              <p>Department of Computer Science</p>
              <p>Yogyakarta, Indonesia</p>
              <p className="mt-3">
                <a
                  href="mailto:context@ugm.ac.id"
                  className="text-blue-400 hover:text-blue-300 transition-colors"
                  data-testid="link-email"
                >
                  context@ugm.ac.id
                </a>
              </p>
            </address>
          </div>
        </div>

        <Separator className="bg-slate-700 mb-6" />

        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-slate-500">
          <p>
            &copy; {new Date().getFullYear()} CONTEXT Lab — Universitas Gadjah
            Mada. All rights reserved.
          </p>
          <p>Built with passion for research.</p>
        </div>
      </div>
    </footer>
  );
}

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <VideoSection />
      <PeopleSection />
      <ProjectsSection />
      <Footer />
    </div>
  );
}
