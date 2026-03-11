import { useState, useEffect } from "react";
import { Link, Outlet, useLocation } from "react-router";
import { ArrowUpRight } from "lucide-react";
import { CustomCursor } from "./CustomCursor";
import { useTheme } from "../contexts/ThemeContext";

export function Layout() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const { theme } = useTheme();
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
    setMenuOpen(false);
  }, [location.pathname]);

  const isHome = location.pathname === "/";
  const showTransparentNav = isHome && !scrolled;

  return (
    <div style={{ minHeight: "100vh", background: "var(--bg)" }}>
      <CustomCursor />

      {/* ─── Nav ─── */}
      <nav
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
        style={{
          background: showTransparentNav ? "transparent" : "var(--nav-bg)",
          backdropFilter: showTransparentNav ? "none" : "blur(16px)",
          boxShadow: scrolled ? "0 1px 0 0 color-mix(in srgb, var(--fg) 8%, transparent)" : "none",
        }}
      >
        <div className="w-full px-6 md:px-12 lg:px-20 h-16 flex items-center justify-between">
          {/* Logo */}
          <Link
            to="/"
            className="font-syne font-bold text-sm tracking-tight transition-opacity hover:opacity-60"
            style={{ color: "var(--fg)" }}
          >
            riajohn.design
          </Link>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-8">
            <a
              href="/#projects"
              className="text-sm transition-opacity hover:opacity-60"
              style={{ color: location.pathname === "/" ? "var(--fg)" : "var(--fg-2)" }}
            >
              Shipped Work
            </a>
            <a
              href="/#about"
              className="text-sm transition-opacity hover:opacity-60"
              style={{ color: "var(--fg-2)" }}
            >
              About Me
            </a>
            <a
              href="https://www.linkedin.com/in/riaannjohn/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm transition-opacity hover:opacity-60 inline-flex items-center gap-1"
              style={{ color: "var(--fg-2)" }}
            >
              LinkedIn <ArrowUpRight className="w-3 h-3" />
            </a>
            <a
              href="#"
              className="text-sm transition-opacity hover:opacity-60 inline-flex items-center gap-1"
              style={{ color: "var(--fg-2)" }}
            >
              Resume <ArrowUpRight className="w-3 h-3" />
            </a>

          </div>

          {/* Mobile: hamburger */}
          <div className="flex items-center gap-3 md:hidden">
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="flex flex-col gap-1.5 p-1"
              style={{ color: "var(--fg)" }}
            >
              <span
                className="block w-5 h-0.5 transition-all duration-300 origin-center"
                style={{
                  background: "var(--fg)",
                  transform: menuOpen ? "rotate(45deg) translateY(5px)" : "none",
                }}
              />
              <span
                className="block w-5 h-0.5 transition-all duration-300"
                style={{
                  background: "var(--fg)",
                  opacity: menuOpen ? 0 : 1,
                }}
              />
              <span
                className="block w-5 h-0.5 transition-all duration-300 origin-center"
                style={{
                  background: "var(--fg)",
                  transform: menuOpen ? "rotate(-45deg) translateY(-5px)" : "none",
                }}
              />
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        <div
          className="md:hidden overflow-hidden transition-all duration-300"
          style={{ maxHeight: menuOpen ? "260px" : "0" }}
        >
          <div
            className="px-6 pb-6 pt-2 flex flex-col gap-5"
            style={{ background: "var(--nav-bg)", backdropFilter: "blur(16px)" }}
          >
            <a href="/#projects" className="text-sm font-medium" style={{ color: "var(--fg)" }}>
              Shipped Work
            </a>
            <a href="/#about" className="text-sm" style={{ color: "var(--fg-2)" }}>
              About Me
            </a>
            <a href="https://www.linkedin.com/in/riaannjohn/" className="text-sm" style={{ color: "var(--fg-2)" }}>
              LinkedIn
            </a>
            <a href="#" className="text-sm inline-flex items-center gap-1" style={{ color: "var(--fg-2)" }}>
              Resume <ArrowUpRight className="w-3 h-3" />
            </a>
          </div>
        </div>
      </nav>

      {/* ─── Page Content ─── */}
      <main className={isHome ? "theme-noir" : "theme-sand"} style={{ background: "var(--bg)", minHeight: "100vh" }}>
        <Outlet />
      </main>

      {/* ─── Footer ─── */}
      <footer style={{ background: "var(--footer-bg)" }}>
        <div className="max-w-7xl mx-auto px-6 md:px-12 pt-20 pb-10">
          {/* Top row */}
          <div className="flex flex-col lg:flex-row items-start lg:items-end justify-between gap-10 mb-16">
            <div>
              <p
                className="font-syne font-bold leading-[0.95] mb-4"
                style={{ color: "var(--footer-fg)", fontSize: "clamp(36px, 5vw, 64px)" }}
              >
                Let's build something
                <br />
                <span style={{ color: "color-mix(in srgb, var(--footer-fg) 35%, transparent)" }}>
                  <em className="not-italic">meaningful</em> together.
                </span>
              </p>
              <p className="text-sm" style={{ color: "color-mix(in srgb, var(--footer-fg) 40%, transparent)" }}>
                Open to full-time roles, freelance, and early-stage collaborations
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href="mailto:hello@riajohn.com"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-medium transition-all hover:opacity-90"
                style={{ background: "var(--footer-fg)", color: "var(--footer-bg)" }}
              >
                Say Hello <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
              <a
                href="https://www.linkedin.com/in/riaannjohn/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-medium transition-all"
                style={{
                  border: "1px solid color-mix(in srgb, var(--footer-fg) 20%, transparent)",
                  color: "color-mix(in srgb, var(--footer-fg) 70%, transparent)",
                }}
              >
                LinkedIn <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Bottom row */}
          <div
            className="pt-8 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4"
            style={{ borderTop: "1px solid color-mix(in srgb, var(--footer-fg) 10%, transparent)" }}
          >
            <p className="text-xs" style={{ color: "color-mix(in srgb, var(--footer-fg) 30%, transparent)" }}>
              © 2025 Ria John · riajohn.design
            </p>
            <div className="flex items-center gap-6">
              {["Behance ↗", "Dribbble ↗", "LinkedIn ↗"].map((link) => (
                <a
                  key={link}
                  href="#"
                  className="text-xs transition-opacity hover:opacity-60"
                  style={{ color: "color-mix(in srgb, var(--footer-fg) 35%, transparent)" }}
                >
                  {link}
                </a>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}