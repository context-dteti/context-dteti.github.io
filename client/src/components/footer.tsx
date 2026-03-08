import { Link } from "wouter";

export default function Footer() {
  return (
    <footer className="bg-[#0f172a] text-white">
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          <div>
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-7 h-7 rounded-md bg-[#2563eb] flex items-center justify-center">
                <span className="text-white font-bold text-xs">C</span>
              </div>
              <span className="font-bold text-base tracking-tight">
                CONTEXT Lab
              </span>
            </div>
            <p className="text-[#94a3b8] text-sm leading-relaxed max-w-xs">
              Context-Aware Computing Research Group — advancing intelligent
              systems for the real world through IoT, sensing, and data-driven
              approaches.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-xs uppercase tracking-[0.15em] text-[#64748b] mb-5">
              Navigation
            </h4>
            <ul className="space-y-2.5">
              {[
                { label: "Home", href: "/" },
                { label: "Projects", href: "/projects" },
                { label: "People", href: "/people" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-[#cbd5e1] hover:text-white text-sm transition-colors no-underline"
                    data-testid={`link-footer-${link.label.toLowerCase()}`}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-xs uppercase tracking-[0.15em] text-[#64748b] mb-5">
              Contact
            </h4>
            <address className="not-italic text-[#cbd5e1] text-sm leading-relaxed space-y-1">
              <p>Universitas Gadjah Mada</p>
              <p>Department of Computer Science</p>
              <p>Yogyakarta, Indonesia</p>
              <p className="pt-2">
                <a
                  href="mailto:context@ugm.ac.id"
                  className="text-[#60a5fa] hover:text-[#93c5fd] transition-colors no-underline"
                  data-testid="link-email"
                >
                  context@ugm.ac.id
                </a>
              </p>
            </address>
          </div>
        </div>

        <div className="border-t border-[#1e293b] pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-[#475569] text-xs">
            &copy; {new Date().getFullYear()} CONTEXT Lab — Universitas Gadjah
            Mada
          </p>
          <p className="text-[#475569] text-xs">
            Built with passion for research.
          </p>
        </div>
      </div>
    </footer>
  );
}
