import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X } from "lucide-react";

const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "Projects", href: "/projects" },
  { label: "People", href: "/people" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [location] = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
    window.scrollTo({ top: 0 });
  }, [location]);

  return (
    <div className="fixed top-0 left-0 right-0 z-50 px-4 sm:px-6 pt-4" data-testid="navbar">
      <nav
        className={`max-w-5xl mx-auto rounded-full bg-white/95 backdrop-blur-md transition-shadow duration-300 ${
          scrolled
            ? "shadow-[0_4px_20px_rgba(0,0,0,0.10)]"
            : "shadow-[0_2px_12px_rgba(0,0,0,0.08)]"
        }`}
      >
        <div className="px-5 sm:px-6 h-14 flex items-center justify-between gap-4">
          <Link
            href="/"
            className="flex items-center gap-2.5 no-underline"
            data-testid="link-logo"
          >
            <div className="w-8 h-8 rounded-lg bg-[#1e3a8a] flex items-center justify-center">
              <span className="text-white font-bold text-sm tracking-tight">C</span>
            </div>
            <div className="flex items-baseline gap-1.5">
              <span className="font-bold text-[16px] tracking-tight text-[#0f172a]">
                CONTEXT
              </span>
              <span className="text-[11px] font-semibold tracking-wider uppercase text-[#94a3b8]">
                Lab
              </span>
            </div>
          </Link>

          <div className="hidden md:flex items-center gap-0.5">
            {NAV_LINKS.map((link) => {
              const isActive = location === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  data-testid={`link-nav-${link.label.toLowerCase()}`}
                  className={`px-4 py-1.5 rounded-full text-[13px] font-medium tracking-wide transition-all duration-200 no-underline ${
                    isActive
                      ? "text-[#1e3a8a] bg-[#eff6ff]"
                      : "text-[#64748b] hover:text-[#1e3a8a] hover:bg-[#f8fafc]"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </div>

          <button
            className="md:hidden p-2 rounded-full text-[#334155] hover:bg-[#f1f5f9] transition-colors"
            onClick={() => setMenuOpen(!menuOpen)}
            data-testid="button-mobile-menu"
          >
            {menuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {menuOpen && (
          <div className="md:hidden border-t border-[#f1f5f9] px-5 py-3 flex flex-col gap-1 rounded-b-2xl">
            {NAV_LINKS.map((link) => {
              const isActive = location === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`px-4 py-2.5 rounded-lg text-sm font-medium no-underline transition-colors ${
                    isActive
                      ? "text-[#1e3a8a] bg-[#eff6ff]"
                      : "text-[#475569] hover:bg-[#f8fafc] hover:text-[#1e3a8a]"
                  }`}
                  data-testid={`link-mobile-${link.label.toLowerCase()}`}
                >
                  {link.label}
                </Link>
              );
            })}
          </div>
        )}
      </nav>
    </div>
  );
}
