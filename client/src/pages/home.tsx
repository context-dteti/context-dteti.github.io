import { Link } from "wouter";
import { motion } from "framer-motion";
import { ArrowRight, ChevronDown, Cpu, Globe, Zap } from "lucide-react";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

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
        <div className="absolute inset-0 opacity-[0.07]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' stroke='%23ffffff' stroke-width='0.5'%3E%3Ccircle cx='20' cy='20' r='0.8'/%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center pt-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/10 bg-white/5 text-white/60 text-xs font-medium tracking-wide mb-8 backdrop-blur-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            Context-Aware Computing Research Group
          </div>

          <h1 className="text-[clamp(2.5rem,6vw,5rem)] font-extrabold text-white leading-[1.1] mb-5 tracking-tight">
            CONTEXT
          </h1>
          <p className="text-[clamp(1rem,2.5vw,1.35rem)] text-[#94a3b8] font-light leading-relaxed max-w-2xl mx-auto mb-10">
            Advancing context-aware computing, IoT sensing, and intelligent
            systems at the intersection of wireless technology, data science,
            and real-world impact.
          </p>

          <div className="flex flex-wrap justify-center gap-3">
            <Link href="/projects">
              <motion.div
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-[#2563eb] text-white text-sm font-semibold tracking-wide cursor-pointer transition-all duration-200 hover:bg-[#1d4ed8]"
                data-testid="button-hero-projects"
              >
                Explore Projects
                <ArrowRight className="w-4 h-4" />
              </motion.div>
            </Link>
            <Link href="/people">
              <motion.div
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-white/15 text-white/80 text-sm font-medium tracking-wide cursor-pointer transition-all duration-200 hover:bg-white/5 hover:text-white"
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
      <div className="max-w-6xl mx-auto px-6">
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
            Led by Dr. Azka Maulana at Universitas Gadjah Mada, CONTEXT Lab
            brings together researchers in wireless sensing, embedded systems,
            machine learning, and distributed computing to address challenges in
            smart environments, disaster management, cultural heritage, and
            urban mobility.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
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
            { value: "8+", label: "Active Projects" },
            { value: "15+", label: "Publications" },
            { value: "12", label: "Researchers" },
            { value: "5+", label: "Industry Partners" },
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

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <Footer />
    </div>
  );
}
