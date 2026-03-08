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
  const isHome = location === "/";

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

  const showSolid = scrolled || !isHome;

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        showSolid
          ? "bg-white/95 backdrop-blur-md shadow-[0_1px_3px_rgba(0,0,0,0.06)]"
          : "bg-transparent"
      }`}
      data-testid="navbar"
    >
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between gap-4">
        <Link
          href="/"
          className="flex items-center gap-2.5 no-underline"
          data-testid="link-logo"
        >
          <div className="w-8 h-8 rounded-md bg-[#1e3a8a] flex items-center justify-center">
            <span className="text-white font-bold text-sm tracking-tight">C</span>
          </div>
          <div className="flex items-baseline gap-1.5">
            <span
              className={`font-bold text-[17px] tracking-tight transition-colors duration-300 ${
                showSolid ? "text-[#1e293b]" : "text-white"
              }`}
            >
              CONTEXT
            </span>
            <span
              className={`text-[11px] font-semibold tracking-wider uppercase transition-colors duration-300 ${
                showSolid ? "text-[#94a3b8]" : "text-white/60"
              }`}
            >
              Lab
            </span>
          </div>
        </Link>

        <div className="hidden md:flex items-center gap-1">
          {NAV_LINKS.map((link) => {
            const isActive = location === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                data-testid={`link-nav-${link.label.toLowerCase()}`}
                className={`px-4 py-2 rounded-md text-[13px] font-medium tracking-wide transition-all duration-200 no-underline ${
                  isActive
                    ? showSolid
                      ? "text-[#1e3a8a] bg-[#eff6ff]"
                      : "text-white bg-white/15"
                    : showSolid
                      ? "text-[#64748b] hover:text-[#1e3a8a] hover:bg-[#f8fafc]"
                      : "text-white/70 hover:text-white hover:bg-white/10"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </div>

        <button
          className={`md:hidden p-2 rounded-md transition-colors ${
            showSolid ? "text-[#334155]" : "text-white"
          }`}
          onClick={() => setMenuOpen(!menuOpen)}
          data-testid="button-mobile-menu"
        >
          {menuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {menuOpen && (
        <div className="md:hidden bg-white border-t border-[#f1f5f9] px-6 py-3 flex flex-col gap-1 shadow-lg">
          {NAV_LINKS.map((link) => {
            const isActive = location === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`px-3 py-2.5 rounded-md text-sm font-medium no-underline transition-colors ${
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
  );
}
