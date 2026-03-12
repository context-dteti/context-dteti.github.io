import { Link } from "wouter";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Users } from "lucide-react";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { PROJECTS, getPeopleForProject, type Project } from "@/lib/projects";

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const people = getPeopleForProject(project);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.06 }}
    >
      <Link href={`/projects/${project.slug}`}>
        <Card
          className="hover-elevate cursor-pointer h-full border-[#dbe4ee] bg-white group transition-all duration-200 shadow-[0_1px_3px_rgba(0,0,0,0.04)]"
          data-testid={`card-project-${project.slug}`}
        >
          <CardHeader className="pb-3">
            <div className="flex items-center justify-between gap-3">
              <h3 className="font-bold text-[#0f172a] text-[15px] leading-snug truncate">
                {project.name}
              </h3>
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#f1f5f9] flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                <ArrowRight className="w-3.5 h-3.5 text-[#64748b]" />
              </div>
            </div>
          </CardHeader>
          <CardContent className="pt-0 flex flex-col gap-4">
            <p className="text-[#64748b] text-sm leading-relaxed line-clamp-3">
              {project.shortDesc}
            </p>

            <div className="flex items-center justify-between gap-2">
              <div className="flex flex-wrap gap-1.5">
                {project.tags.slice(0, 2).map((tag) => (
                  <Badge
                    key={tag}
                    variant="secondary"
                    className="text-[10px] font-medium bg-[#f1f5f9] text-[#475569] border-none"
                  >
                    {tag}
                  </Badge>
                ))}
                {project.tags.length > 2 && (
                  <Badge
                    variant="secondary"
                    className="text-[10px] font-medium bg-[#f1f5f9] text-[#94a3b8] border-none"
                  >
                    +{project.tags.length - 2}
                  </Badge>
                )}
              </div>
              <div className="flex items-center gap-1 text-[#94a3b8]">
                <Users className="w-3.5 h-3.5" />
                <span className="text-[11px] font-medium">{people.length}</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </Link>
    </motion.div>
  );
}

export default function ProjectsPage() {
  return (
    <div className="min-h-screen bg-[#eef2f7]">
      <Navbar />

      <section className="pt-28 pb-6 bg-white border-b border-[#e2e8f0]">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
          >
            <p className="text-[#2563eb] text-xs font-semibold uppercase tracking-[0.15em] mb-2">
              Research
            </p>
            <h1 className="text-3xl font-bold text-[#0f172a] mb-3">Projects</h1>
            <p className="text-[#64748b] max-w-lg text-[15px] leading-relaxed">
              Ongoing and completed research projects in IoT, context-aware
              sensing, localization, and intelligent systems.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-10">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {PROJECTS.map((project, i) => (
              <ProjectCard key={project.slug} project={project} index={i} />
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
