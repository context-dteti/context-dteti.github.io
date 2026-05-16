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
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
    window.scrollTo({ top: 0 });
    setScrolled(false);
  }, [location]);

  const showPill = scrolled || !isHome;

  return (
    <div
      className="fixed top-0 left-0 right-0 z-50"
      style={{
        padding: showPill ? "12px 12px 0" : "0px 0px 0",
        transition: "padding 0.6s cubic-bezier(0.4, 0, 0.2, 1)",
      }}
      data-testid="navbar"
    >
      <nav
        style={{
          maxWidth: showPill ? "1280px" : "100%",
          margin: "0 auto",
          borderRadius: showPill ? (menuOpen ? "20px" : "9999px") : "0px",
          backgroundColor: showPill ? "rgba(255,255,255,0.97)" : "rgba(255,255,255,0)",
          border: showPill ? "1px solid rgba(0,0,0,0.06)" : "1px solid transparent",
          boxShadow: showPill ? "0 1px 2px rgba(0,0,0,0.06), 0 6px 20px rgba(0,0,0,0.06)" : "0 0px 0px rgba(0,0,0,0)",
          backdropFilter: showPill ? "blur(12px)" : "blur(0px)",
          WebkitBackdropFilter: showPill ? "blur(12px)" : "blur(0px)",
          overflow: "hidden",
          transition: `max-width 0.6s cubic-bezier(0.4, 0, 0.2, 1), border-radius ${menuOpen ? "0s" : "0.35s cubic-bezier(0.4, 0, 0.2, 1)"}, background-color 0.5s cubic-bezier(0.4, 0, 0.2, 1), box-shadow 0.5s cubic-bezier(0.4, 0, 0.2, 1), border 0.5s cubic-bezier(0.4, 0, 0.2, 1), backdrop-filter 0.5s cubic-bezier(0.4, 0, 0.2, 1)`,
        }}
      >
        <div className="px-4 sm:px-6 h-14 flex items-center justify-between gap-3">
          <Link
            href="/"
            className="flex items-center gap-2.5 no-underline"
            data-testid="link-logo"
          >
            <div className="w-8 h-8 rounded-lg bg-[#1e3a8a] flex items-center justify-center">
              <span className="text-white font-bold text-sm tracking-tight">C</span>
            </div>
            <div className="flex items-baseline gap-1.5">
              <span
                className="font-bold text-[16px] tracking-tight"
                style={{
                  color: showPill ? "#0f172a" : "#ffffff",
                  transition: "color 0.5s cubic-bezier(0.4, 0, 0.2, 1)",
                }}
              >
                CONTEXT
              </span>
              <span
                className="text-[11px] font-semibold tracking-wider uppercase"
                style={{
                  color: showPill ? "#94a3b8" : "rgba(255,255,255,0.5)",
                  transition: "color 0.5s cubic-bezier(0.4, 0, 0.2, 1)",
                }}
              >
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
                  className={`px-4 py-1.5 rounded-full text-[13px] font-medium tracking-wide no-underline`}
                  style={{
                    color: showPill
                      ? isActive ? "#ffffff" : "#64748b"
                      : isActive ? "#ffffff" : "rgba(255,255,255,0.7)",
                    backgroundColor: showPill
                      ? isActive ? "#2563eb" : "transparent"
                      : isActive ? "rgba(255,255,255,0.15)" : "transparent",
                    transition: "color 0.4s ease, background-color 0.4s ease",
                  }}
                >
                  {link.label}
                </Link>
              );
            })}
          </div>

          <button
            className="md:hidden p-2 rounded-full"
            style={{
              color: showPill ? "#334155" : "#ffffff",
              transition: "color 0.4s ease",
            }}
            onClick={() => setMenuOpen(!menuOpen)}
            data-testid="button-mobile-menu"
          >
            {menuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {menuOpen && (
          <div
            className={`md:hidden border-t px-4 py-3 flex flex-col gap-1 ${
              showPill ? "border-[#f1f5f9]" : "border-white/10"
            }`}
          >
            {NAV_LINKS.map((link) => {
              const isActive = location === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`px-4 py-2.5 rounded-lg text-sm font-medium no-underline transition-colors ${
                    showPill
                      ? isActive
                        ? "text-white bg-[#2563eb]"
                        : "text-[#475569] hover:bg-[#f8fafc] hover:text-[#1e3a8a]"
                      : isActive
                        ? "text-white bg-white/15"
                        : "text-white/70 hover:text-white hover:bg-white/10"
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
