import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { PEOPLE } from "@/lib/data";
import { PROJECTS } from "@/lib/projects";

const ROLE_ORDER: Record<string, number> = {
  "Principal Investigator": 0,
  "Co-Investigator": 1,
  "Researcher": 2,
  "Student": 3,
};

const SORTED_PEOPLE = [...PEOPLE].sort((a, b) => {
  const ra = ROLE_ORDER[a.role] ?? 99;
  const rb = ROLE_ORDER[b.role] ?? 99;
  if (ra !== rb) return ra - rb;
  return a.name.localeCompare(b.name, "id");
});

function getProjectsForPerson(personId: number) {
  return PROJECTS.filter((p) => p.people.includes(personId));
}

const MAX_PROJECTS_SHOWN = 3;

export default function PeoplePage() {
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
              Team
            </p>
            <h1 className="text-3xl font-bold text-[#0f172a] mb-3">People</h1>
            <p className="text-[#64748b] max-w-lg text-[15px] leading-relaxed">
              A multidisciplinary team of researchers, engineers, and students
              working together to advance context-aware computing.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-10">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {SORTED_PEOPLE.map((person, i) => {
              const projects = getProjectsForPerson(person.id);
              const extraProjects = projects.length - MAX_PROJECTS_SHOWN;
              return (
                <motion.div
                  key={person.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: i * 0.06 }}
                  data-testid={`card-person-${person.id}`}
                >
                  <a
                    href={person.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="no-underline block h-full group"
                  >
                    <div className="h-full bg-white rounded-xl border border-[#dbe4ee] shadow-[0_1px_3px_rgba(0,0,0,0.04)] overflow-hidden hover:shadow-lg hover:border-[#dbeafe] transition-all duration-300">
                      {/* Photo */}
                      <div className="relative w-full aspect-[4/5] overflow-hidden bg-[#f1f5f9]">
                        <img
                          src={person.photo}
                          alt={person.name}
                          className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                        />
                      </div>

                      {/* Info */}
                      <div className="p-4">
                        <h3 className="font-bold text-[#0f172a] text-sm leading-snug mb-0.5">
                          {person.name}
                        </h3>
                        <p className="text-[#2563eb] text-xs font-medium">
                          {person.role}
                        </p>

                        {projects.length > 0 && (
                          <div className="mt-3">
                            <div className="flex flex-wrap gap-1.5">
                              {projects.slice(0, MAX_PROJECTS_SHOWN).map((proj) => (
                                <Badge
                                  key={proj.slug}
                                  variant="secondary"
                                  className="text-[10px] font-medium bg-[#f1f5f9] text-[#475569] border-none"
                                  title={proj.name}
                                >
                                  {proj.name.length > 25 ? proj.name.slice(0, 25).trimEnd() + "…" : proj.name}
                                </Badge>
                              ))}
                              {extraProjects > 0 && (
                                <Badge
                                  variant="secondary"
                                  className="text-[10px] font-medium bg-[#eff6ff] text-[#2563eb] border-none"
                                >
                                  +{extraProjects}
                                </Badge>
                              )}
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  </a>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
