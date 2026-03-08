import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { PEOPLE, PROJECTS } from "@/lib/data";

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

function getProjectsForPerson(personId: number) {
  return PROJECTS.filter((p) => p.people.includes(personId));
}

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
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {PEOPLE.map((person, i) => {
              const projects = getProjectsForPerson(person.id);
              return (
                <motion.div
                  key={person.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: i * 0.06 }}
                  data-testid={`card-person-${person.id}`}
                >
                  <Card className="h-full border-[#dbe4ee] bg-white shadow-[0_1px_3px_rgba(0,0,0,0.04)]">
                    <CardContent className="p-5 flex flex-col gap-4">
                      <div className="flex items-center gap-3">
                        <Avatar className="w-12 h-12">
                          <AvatarFallback
                            className={`${AVATAR_COLORS[i % AVATAR_COLORS.length]} text-white font-semibold text-sm`}
                          >
                            {person.initials}
                          </AvatarFallback>
                        </Avatar>
                        <div className="min-w-0">
                          <p
                            className="font-semibold text-[#0f172a] text-sm leading-tight"
                            data-testid={`text-person-name-${person.id}`}
                          >
                            {person.name}
                          </p>
                          <p className="text-[#2563eb] text-xs font-medium mt-0.5">
                            {person.role}
                          </p>
                          <p className="text-[#94a3b8] text-[11px] mt-0.5">
                            {person.affiliation}
                          </p>
                        </div>
                      </div>

                      {projects.length > 0 && (
                        <div>
                          <p className="text-[10px] font-semibold uppercase tracking-[0.12em] text-[#94a3b8] mb-2">
                            Projects
                          </p>
                          <div className="flex flex-wrap gap-1.5">
                            {projects.map((proj) => (
                              <Badge
                                key={proj.id}
                                variant="secondary"
                                className="text-[10px] font-medium bg-[#f1f5f9] text-[#475569] border-none"
                              >
                                {proj.name}
                              </Badge>
                            ))}
                          </div>
                        </div>
                      )}
                    </CardContent>
                  </Card>
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
