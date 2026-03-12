import { useParams, Link } from "wouter";
import { motion } from "framer-motion";
import ReactMarkdown from "react-markdown";
import { ArrowLeft, ChevronLeft, ChevronRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { PROJECTS, getProjectBySlug, getPeopleForProject } from "@/lib/projects";

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

export default function ProjectDetailPage() {
  const { slug } = useParams<{ slug: string }>();
  const project = getProjectBySlug(slug ?? "");

  if (!project) {
    return (
      <div className="min-h-screen flex flex-col bg-[#eef2f7]">
        <Navbar />
        <div className="flex-1 flex items-center justify-center px-6">
          <div className="text-center">
            <h1 className="text-3xl font-bold text-[#0f172a] mb-3">Project not found</h1>
            <Link href="/projects">
              <span className="inline-flex items-center gap-2 text-[#2563eb] text-sm font-semibold cursor-pointer hover:underline">
                <ArrowLeft className="w-4 h-4" />
                Back to Projects
              </span>
            </Link>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  const people = getPeopleForProject(project);
  const currentIndex = PROJECTS.findIndex((p) => p.slug === project.slug);
  const prevProject = currentIndex > 0 ? PROJECTS[currentIndex - 1] : null;
  const nextProject = currentIndex < PROJECTS.length - 1 ? PROJECTS[currentIndex + 1] : null;

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
            <Link href="/projects">
              <span className="inline-flex items-center gap-1.5 text-[#2563eb] text-sm font-medium cursor-pointer hover:underline mb-4">
                <ArrowLeft className="w-4 h-4" />
                All Projects
              </span>
            </Link>
            <h1 className="text-3xl font-bold text-[#0f172a] mt-3">{project.name}</h1>
          </motion.div>
        </div>
      </section>

      <section className="py-10">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid lg:grid-cols-[1fr_320px] gap-8">
            {/* Main content */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.1 }}
              className="space-y-8"
            >
              {project.videoUrl && (
                <div className="relative w-full aspect-video bg-[#0f172a] rounded-xl overflow-hidden shadow-lg">
                  <iframe
                    className="absolute inset-0 w-full h-full"
                    src={project.videoUrl}
                    title={`${project.name} Video`}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
              )}

              <div className="bg-white rounded-xl border border-[#dbe4ee] p-6 sm:p-8 shadow-[0_1px_3px_rgba(0,0,0,0.04)]">
                <div className="prose prose-slate max-w-none prose-headings:text-[#0f172a] prose-p:text-[#475569] prose-p:leading-[1.8] prose-li:text-[#475569] prose-strong:text-[#1e293b] prose-h2:text-lg prose-h2:mt-8 prose-h2:mb-3">
                  <ReactMarkdown>{project.body}</ReactMarkdown>
                </div>
              </div>
            </motion.div>

            {/* Sidebar */}
            <motion.aside
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.2 }}
              className="space-y-5"
            >
              {/* Navigation */}
              <div className="flex gap-2">
                {prevProject ? (
                  <Link href={`/projects/${prevProject.slug}`}>
                    <span className="flex-1 inline-flex items-center gap-1.5 px-4 py-2.5 rounded-lg bg-[#2563eb] text-white text-sm font-semibold cursor-pointer transition-colors hover:bg-[#1d4ed8]">
                      <ChevronLeft className="w-4 h-4" />
                      Prev Project
                    </span>
                  </Link>
                ) : (
                  <span className="flex-1 inline-flex items-center gap-1.5 px-4 py-2.5 rounded-lg bg-[#e2e8f0] text-[#94a3b8] text-sm font-semibold cursor-default">
                    <ChevronLeft className="w-4 h-4" />
                    Prev Project
                  </span>
                )}
                {nextProject ? (
                  <Link href={`/projects/${nextProject.slug}`}>
                    <span className="flex-1 inline-flex items-center justify-end gap-1.5 px-4 py-2.5 rounded-lg bg-[#2563eb] text-white text-sm font-semibold cursor-pointer transition-colors hover:bg-[#1d4ed8]">
                      Next Project
                      <ChevronRight className="w-4 h-4" />
                    </span>
                  </Link>
                ) : (
                  <span className="flex-1 inline-flex items-center justify-end gap-1.5 px-4 py-2.5 rounded-lg bg-[#e2e8f0] text-[#94a3b8] text-sm font-semibold cursor-default">
                    Next Project
                    <ChevronRight className="w-4 h-4" />
                  </span>
                )}
              </div>

              {/* Funder */}
              {project.funder && (
                <div className="bg-white rounded-xl border border-[#dbe4ee] p-5 shadow-[0_1px_3px_rgba(0,0,0,0.04)]">
                  <h4 className="text-xs font-semibold uppercase tracking-[0.12em] text-[#94a3b8] mb-2">
                    Funder
                  </h4>
                  <p className="text-[#0f172a] text-sm font-medium">{project.funder}</p>
                </div>
              )}

              {/* Categories */}
              {project.categories.length > 0 && (
                <div className="bg-white rounded-xl border border-[#dbe4ee] p-5 shadow-[0_1px_3px_rgba(0,0,0,0.04)]">
                  <h4 className="text-xs font-semibold uppercase tracking-[0.12em] text-[#94a3b8] mb-3">
                    Categories
                  </h4>
                  <div className="flex flex-wrap gap-1.5">
                    {project.categories.map((cat) => (
                      <Badge
                        key={cat}
                        variant="secondary"
                        className="text-[11px] font-medium bg-[#eff6ff] text-[#2563eb] border-none"
                      >
                        {cat}
                      </Badge>
                    ))}
                  </div>
                </div>
              )}

              {/* Tags */}
              {project.tags.length > 0 && (
                <div className="bg-white rounded-xl border border-[#dbe4ee] p-5 shadow-[0_1px_3px_rgba(0,0,0,0.04)]">
                  <h4 className="text-xs font-semibold uppercase tracking-[0.12em] text-[#94a3b8] mb-3">
                    Tags
                  </h4>
                  <div className="flex flex-wrap gap-1.5">
                    {project.tags.map((tag) => (
                      <Badge
                        key={tag}
                        variant="secondary"
                        className="text-[11px] font-medium bg-[#f1f5f9] text-[#475569] border-none"
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </div>
              )}

              {/* Team */}
              {people.length > 0 && (
                <div className="bg-white rounded-xl border border-[#dbe4ee] p-5 shadow-[0_1px_3px_rgba(0,0,0,0.04)]">
                  <h4 className="text-xs font-semibold uppercase tracking-[0.12em] text-[#94a3b8] mb-3">
                    Team
                  </h4>
                  <div className="flex flex-col gap-2.5">
                    {people.map((person, i) => (
                      <div key={person.id} className="flex items-center gap-3">
                        <Avatar className="w-8 h-8">
                          <AvatarFallback
                            className={`${AVATAR_COLORS[i % AVATAR_COLORS.length]} text-white text-[11px] font-semibold`}
                          >
                            {person.initials}
                          </AvatarFallback>
                        </Avatar>
                        <div className="min-w-0">
                          <p className="font-medium text-[#0f172a] text-sm leading-tight truncate">
                            {person.name}
                          </p>
                          <p className="text-[#94a3b8] text-[11px] truncate">
                            {person.role}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </motion.aside>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
