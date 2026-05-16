import { Link } from "wouter";
import { motion } from "framer-motion";
import { ArrowRight, ChevronDown, Cpu, Globe, Zap, Users } from "lucide-react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { PEOPLE } from "@/lib/data";
import { PROJECTS, getPeopleForProject } from "@/lib/projects";

function HeroSection() {
  return (
    <section className="relative min-h-[100vh] flex items-center justify-center overflow-hidden bg-[#0a1628]">
      <div className="absolute inset-0">
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(circle 600px at 20% 30%, rgba(30, 58, 138, 0.45) 0%, transparent 70%)",
          }}
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(circle 500px at 75% 60%, rgba(37, 99, 235, 0.3) 0%, transparent 65%)",
          }}
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(circle 400px at 60% 15%, rgba(99, 102, 241, 0.2) 0%, transparent 60%)",
          }}
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(circle 350px at 35% 80%, rgba(14, 165, 233, 0.15) 0%, transparent 60%)",
          }}
        />
        <div className="absolute inset-0"
          style={{
            backgroundSize: "64px 64px",
            backgroundImage:
              "linear-gradient(to right, rgba(255,255,255,0.07) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.07) 1px, transparent 1px)",
            maskImage: "radial-gradient(ellipse 75% 65% at 50% 50%, black 10%, transparent 70%)",
            WebkitMaskImage: "radial-gradient(ellipse 75% 65% at 50% 50%, black 10%, transparent 70%)",
          }}
        />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 text-center pt-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <div className="text-white/60 text-sm sm:text-base font-medium tracking-wide mb-2 sm:mb-3">
            Context-Aware Computing Research Group
          </div>

          <h1 className="text-[clamp(2.5rem,6vw,5rem)] font-extrabold text-white leading-[1.1] mb-5 tracking-tight">
            CONTEXT
          </h1>
          <p className="text-[clamp(0.9rem,2.5vw,1.35rem)] text-[#94a3b8] font-light leading-relaxed max-w-2xl mx-auto mb-8 sm:mb-10">
            Advancing context-aware computing, IoT sensing, and intelligent
            systems at the intersection of wireless technology, data science,
            and real-world impact.
          </p>

          <div className="flex flex-wrap justify-center gap-3">
            <Link href="/projects">
              <motion.div
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center gap-2 px-5 sm:px-6 py-2.5 sm:py-3 rounded-lg bg-[#2563eb] text-white text-sm font-semibold tracking-wide cursor-pointer transition-all duration-200 hover:bg-[#1d4ed8]"
                data-testid="button-hero-projects"
              >
                Explore Projects
                <ArrowRight className="w-4 h-4" />
              </motion.div>
            </Link>
            <Link href="/people">
              <motion.div
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center gap-2 px-5 sm:px-6 py-2.5 sm:py-3 rounded-lg border border-white/15 text-white/80 text-sm font-medium tracking-wide cursor-pointer transition-all duration-200 hover:bg-white/5 hover:text-white"
                data-testid="button-hero-people"
              >
                Meet the Team
              </motion.div>
            </Link>
          </div>
        </motion.div>
      </div>

      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/30"
        animate={{ y: [0, 6, 0] }}
        transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
      >
        <ChevronDown className="w-5 h-5" />
      </motion.div>
    </section>
  );
}

function AboutSection() {
  const features = [
    {
      icon: Cpu,
      title: "Context-Aware Systems",
      desc: "Systems that sense, interpret, and intelligently respond to their surrounding environment.",
    },
    {
      icon: Globe,
      title: "IoT & Wireless Sensing",
      desc: "Scalable sensor networks and wireless technologies for real-world data acquisition.",
    },
    {
      icon: Zap,
      title: "Intelligent Applications",
      desc: "Translating research into deployable solutions for disaster, heritage, mobility, and more.",
    },
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-2xl mb-14"
        >
          <p className="text-[#2563eb] text-xs font-semibold uppercase tracking-[0.15em] mb-3">
            About the Lab
          </p>
          <h2 className="text-3xl font-bold text-[#0f172a] mb-5 leading-snug">
            Building the future of context-aware computing
          </h2>
          <p className="text-[#64748b] leading-relaxed">
            Led by Ir. Azkario Rizky Pratama, S.T., M.Eng., Ph.D., IPM at
            Departemen Teknik Elektro dan Teknologi Informasi, Universitas Gadjah Mada,
            CONTEXT Lab brings together researchers in wireless sensing, embedded systems,
            machine learning, and distributed computing to address challenges in
            smart environments, disaster management, cultural heritage, and
            urban mobility.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="group p-6 rounded-xl border border-[#f1f5f9] bg-[#fafbfc] transition-colors duration-200 hover:bg-[#f8fafc] hover:border-[#e2e8f0]"
              data-testid={`feature-card-${i}`}
            >
              <div className="w-10 h-10 rounded-lg bg-[#eff6ff] flex items-center justify-center mb-4">
                <f.icon className="w-5 h-5 text-[#2563eb]" />
              </div>
              <h3 className="font-semibold text-[#0f172a] text-[15px] mb-2">
                {f.title}
              </h3>
              <p className="text-[#64748b] text-sm leading-relaxed">{f.desc}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-14 grid grid-cols-2 md:grid-cols-4 gap-4"
        >
          {[
            { value: String(PROJECTS.length), label: "Active Projects" },
            { value: String(PEOPLE.length), label: "Researchers" },
            { value: String(new Set(PROJECTS.flatMap((p) => p.tags)).size) + "+", label: "Research Areas" },
            { value: String(new Set(PROJECTS.flatMap((p) => p.categories)).size), label: "Categories" },
          ].map((stat) => (
            <div
              key={stat.label}
              className="text-center py-6 rounded-xl border border-[#f1f5f9] bg-white"
              data-testid={`stat-${stat.label.toLowerCase().replace(/\s/g, "-")}`}
            >
              <div className="text-2xl font-bold text-[#1e3a8a] mb-0.5">
                {stat.value}
              </div>
              <div className="text-xs text-[#94a3b8] font-medium tracking-wide">
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

const AVATAR_COLORS = [
  "bg-[#1e3a8a]",
  "bg-[#7c3aed]",
  "bg-[#0891b2]",
  "bg-[#059669]",
  "bg-[#d97706]",
  "bg-[#dc2626]",
  "bg-[#2563eb]",
  "bg-[#4f46e5]",
];

function ProjectsPreview() {
  const preview = PROJECTS.slice(0, 6);

  return (
    <section className="py-24 bg-[#eef2f7]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex items-end justify-between gap-4 mb-10 flex-wrap"
        >
          <div>
            <p className="text-[#2563eb] text-xs font-semibold uppercase tracking-[0.15em] mb-2">
              Research
            </p>
            <h2 className="text-3xl font-bold text-[#0f172a]">Projects</h2>
          </div>
          <Link href="/projects">
            <span className="inline-flex items-center gap-1.5 text-[#2563eb] text-sm font-semibold hover:underline cursor-pointer" data-testid="link-explore-projects">
              View all projects
              <ArrowRight className="w-4 h-4" />
            </span>
          </Link>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
          {preview.map((project, i) => {
            const people = getPeopleForProject(project);
            return (
              <motion.div
                key={project.slug}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.06 }}
                className="min-w-0"
              >
                <Link href={`/projects/${project.slug}`}>
                  <Card
                    className="hover-elevate cursor-pointer h-full w-full border-[#dbe4ee] bg-white group transition-all duration-200 shadow-[0_1px_3px_rgba(0,0,0,0.04)]"
                    data-testid={`home-card-project-${project.slug}`}
                  >
                    <CardHeader className="pb-3">
                      <h3 className="font-bold text-[#0f172a] text-[15px] leading-snug">
                        {project.name}
                      </h3>
                    </CardHeader>
                    <CardContent className="pt-0 flex flex-col gap-4">
                      <p className="text-[#64748b] text-sm leading-relaxed line-clamp-3 break-words">
                        {project.shortDesc}
                      </p>
                      <div className="flex items-center justify-between gap-2 min-w-0">
                        <div className="flex flex-wrap gap-1.5 min-w-0">
                          {project.tags.slice(0, 2).map((tag) => (
                            <Badge
                              key={tag}
                              variant="secondary"
                              className="text-[10px] font-medium bg-[#f1f5f9] text-[#475569] border-none"
                            >
                              {tag}
                            </Badge>
                          ))}
                        </div>
                        <div className="flex items-center gap-1 text-[#94a3b8] flex-shrink-0">
                          <Users className="w-3.5 h-3.5" />
                          <span className="text-[11px] font-medium">{people.length}</span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              </motion.div>
            );
          })}
        </div>

        {PROJECTS.length > 6 && (
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mt-8"
          >
            <Link href="/projects">
              <span
                className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-white border border-[#dbe4ee] text-[#2563eb] text-sm font-semibold cursor-pointer transition-all duration-200 hover:shadow-md hover:border-[#2563eb]/30"
                data-testid="button-explore-more-projects"
              >
                Explore {PROJECTS.length - 6} more projects
                <ArrowRight className="w-4 h-4" />
              </span>
            </Link>
          </motion.div>
        )}
      </div>
    </section>
  );
}

function PeoplePreview() {
  const preview = PEOPLE.slice(0, 6);

  return (
    <section className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex items-end justify-between gap-4 mb-10 flex-wrap"
        >
          <div>
            <p className="text-[#2563eb] text-xs font-semibold uppercase tracking-[0.15em] mb-2">
              Team
            </p>
            <h2 className="text-3xl font-bold text-[#0f172a]">People</h2>
          </div>
          <Link href="/people">
            <span className="inline-flex items-center gap-1.5 text-[#2563eb] text-sm font-semibold hover:underline cursor-pointer" data-testid="link-explore-people">
              View all members
              <ArrowRight className="w-4 h-4" />
            </span>
          </Link>
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
          {preview.map((person, i) => (
            <motion.div
              key={person.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.06 }}
            >
              <a
                href={person.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="no-underline block h-full"
              >
                <Card
                  className="h-full border-[#f1f5f9] bg-[#fafbfc] text-center p-4 hover:border-[#dbeafe] hover:shadow-md transition-all duration-200"
                  data-testid={`home-card-person-${person.id}`}
                >
                  <CardContent className="p-0 flex flex-col items-center gap-2.5">
                    <Avatar className="w-14 h-14">
                      <AvatarImage src={person.photo} alt={person.name} className="object-cover" />
                      <AvatarFallback
                        className={`${AVATAR_COLORS[i % AVATAR_COLORS.length]} text-white font-semibold text-sm`}
                      >
                        {person.initials}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="font-semibold text-[#0f172a] text-[13px] leading-tight">
                        {person.name}
                      </p>
                      <p className="text-[#2563eb] text-[11px] font-medium mt-0.5">
                        {person.role}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </a>
            </motion.div>
          ))}
        </div>

        {PEOPLE.length > 6 && (
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mt-8"
          >
            <Link href="/people">
              <span
                className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-[#eff6ff] border border-[#dbeafe] text-[#2563eb] text-sm font-semibold cursor-pointer transition-all duration-200 hover:shadow-md hover:bg-[#dbeafe]"
                data-testid="button-explore-more-people"
              >
                Meet {PEOPLE.length - 6} more members
                <ArrowRight className="w-4 h-4" />
              </span>
            </Link>
          </motion.div>
        )}
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <ProjectsPreview />
      <PeoplePreview />
      <Footer />
    </div>
  );
}
