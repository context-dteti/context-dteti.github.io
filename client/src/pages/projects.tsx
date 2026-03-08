import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Play, X, Users } from "lucide-react";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { PROJECTS, getPeopleForProject, type Project } from "@/lib/data";

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

function ProjectCard({
  project,
  index,
  onClick,
}: {
  project: Project;
  index: number;
  onClick: () => void;
}) {
  const Icon = project.icon;
  const people = getPeopleForProject(project);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.06 }}
    >
      <Card
        className="hover-elevate cursor-pointer h-full border-[#e2e8f0] bg-white group transition-all duration-200"
        onClick={onClick}
        data-testid={`card-project-${project.id}`}
      >
        <CardHeader className="pb-3">
          <div className="flex items-center justify-between gap-3">
            <div className="flex items-center gap-3 min-w-0">
              <div className="w-10 h-10 rounded-lg bg-[#eff6ff] flex items-center justify-center flex-shrink-0">
                <Icon className="w-5 h-5 text-[#2563eb]" />
              </div>
              <h3
                className="font-bold text-[#0f172a] text-[15px] leading-snug truncate"
                data-testid={`text-project-name-${project.id}`}
              >
                {project.name}
              </h3>
            </div>
            <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#f1f5f9] flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200">
              <Play className="w-3.5 h-3.5 text-[#64748b] ml-0.5" />
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
                  data-testid={`badge-tag-${project.id}-${tag.toLowerCase().replace(/\s/g, "-")}`}
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
    </motion.div>
  );
}

function ProjectModal({
  project,
  open,
  onClose,
}: {
  project: Project | null;
  open: boolean;
  onClose: () => void;
}) {
  if (!project) return null;
  const people = getPeopleForProject(project);
  const Icon = project.icon;

  return (
    <Dialog open={open} onOpenChange={(v) => !v && onClose()}>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto p-0 gap-0" data-testid="dialog-project">
        <div className="relative w-full aspect-video bg-[#0f172a] rounded-t-lg overflow-hidden">
          <iframe
            className="absolute inset-0 w-full h-full"
            src={project.videoUrl}
            title={`${project.name} Video`}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            data-testid="video-embed"
          />
        </div>

        <div className="p-6">
          <DialogHeader className="mb-4">
            <div className="flex items-center gap-3 mb-2">
              <div className="w-9 h-9 rounded-lg bg-[#eff6ff] flex items-center justify-center flex-shrink-0">
                <Icon className="w-4.5 h-4.5 text-[#2563eb]" />
              </div>
              <DialogTitle className="text-xl font-bold text-[#0f172a]">
                {project.name}
              </DialogTitle>
            </div>
            <div className="flex flex-wrap gap-1.5 mt-1">
              {project.tags.map((tag) => (
                <Badge
                  key={tag}
                  variant="secondary"
                  className="text-[10px] font-medium bg-[#eff6ff] text-[#2563eb] border-none"
                >
                  {tag}
                </Badge>
              ))}
            </div>
          </DialogHeader>

          <DialogDescription className="text-[#475569] text-sm leading-relaxed mb-6">
            {project.fullDesc}
          </DialogDescription>

          <div>
            <h4 className="text-xs font-semibold uppercase tracking-[0.15em] text-[#94a3b8] mb-3">
              Team Members
            </h4>
            <div className="flex flex-col gap-2">
              {people.map((person, i) => (
                <div
                  key={person.id}
                  className="flex items-center gap-3 p-2.5 rounded-lg bg-[#f8fafc] border border-[#f1f5f9]"
                  data-testid={`dialog-person-${person.id}`}
                >
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
                      {person.role} — {person.affiliation}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}

export default function ProjectsPage() {
  const [selected, setSelected] = useState<Project | null>(null);

  return (
    <div className="min-h-screen bg-[#fafbfc]">
      <Navbar />

      <section className="pt-28 pb-6 bg-white border-b border-[#f1f5f9]">
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
              sensing, localization, and intelligent systems. Click any project
              to see the video and details.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-10">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {PROJECTS.map((project, i) => (
              <ProjectCard
                key={project.id}
                project={project}
                index={i}
                onClick={() => setSelected(project)}
              />
            ))}
          </div>
        </div>
      </section>

      <ProjectModal
        project={selected}
        open={!!selected}
        onClose={() => setSelected(null)}
      />

      <Footer />
    </div>
  );
}
