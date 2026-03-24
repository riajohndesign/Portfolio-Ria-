import { useRef } from "react";
import { Link } from "react-router";
import { motion, useInView } from "motion/react";
import { ArrowLeft } from "lucide-react";

function Reveal({
  children,
  delay = 0,
  className = "",
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{ opacity: 0, y: 24 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </motion.div>
  );
}

function GalleryImg({
  src,
  alt,
  className = "",
}: {
  src: string;
  alt: string;
  className?: string;
}) {
  return (
    <div className={`rounded-2xl overflow-hidden ${className}`}>
      <img
        src={src}
        alt={alt}
        className="w-full h-auto block transition-transform duration-700 hover:scale-105"
      />
    </div>
  );
}

export function EnvisioningPage() {
  return (
    <div style={{ background: "var(--bg)", color: "var(--fg)", minHeight: "100vh" }}>

      {/* ── Hero ── */}
      <section className="px-6 md:px-12 lg:px-20 pt-32 pb-20 max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-sm mb-10 transition-opacity duration-200 hover:opacity-60"
            style={{ color: "var(--fg-2)" }}
          >
            <ArrowLeft className="w-4 h-4" />
            Back to home
          </Link>

          <p className="text-xs tracking-[0.2em] uppercase mb-4" style={{ color: "var(--fg-3)" }}>
            Facilitation · Workshop · 2025
          </p>

          <h1
            className="font-bold leading-[1.05] mb-4"
            style={{ fontSize: "clamp(40px, 6vw, 72px)", color: "var(--fg)", letterSpacing: "-0.02em" }}
          >
            Envisioning the Future You
          </h1>

          <p className="text-xl md:text-2xl mb-10" style={{ color: "var(--fg-2)" }}>
            A vision boarding workshop for Women & Non-Binary creatives
          </p>

          {/* Meta + Overview */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 pt-8 items-start" style={{ borderTop: "1px solid var(--divider)" }}>
            <div className="lg:col-span-3 flex flex-col gap-6">
              {[
                { label: "Role", value: "Facilitator & Organizer" },
                { label: "Venue", value: "SVA Products of Design, 7th Floor" },
                { label: "Date", value: "March 23, 2025 · 10AM–1PM" },
                { label: "Hosted with", value: "SVA POD × WID NYC" },
              ].map((m) => (
                <div key={m.label}>
                  <p className="text-xs tracking-[0.18em] uppercase mb-1" style={{ color: "var(--fg-3)" }}>{m.label}</p>
                  <p className="text-sm font-medium" style={{ color: "var(--fg)" }}>{m.value}</p>
                </div>
              ))}
            </div>
            <div className="lg:col-span-9">
              <p className="text-xs tracking-[0.2em] uppercase mb-4" style={{ color: "var(--fg-3)" }}>Overview</p>
              <p className="text-base md:text-lg leading-relaxed" style={{ color: "var(--fg)" }}>
                Envisioning the Future You was a collaborative vision boarding workshop hosted at SVA Products of Design in partnership with Women in Design NYC. Open to Women and Non-Binary participants, the session brought together industry professionals and emerging designers to reflect, envision, and articulate where they see themselves — through imagery, intention, and community.
              </p>
              <p className="text-base md:text-lg leading-relaxed mt-4" style={{ color: "var(--fg-2)" }}>
                Participants explored personal frameworks like a career-focused SWOT analysis and filled out reflective templates around future titles, locations, and industries — grounding big dreams in structured thinking.
              </p>
            </div>
          </div>
        </motion.div>
      </section>

      {/* ── Promotional ── */}
      <section className="px-6 md:px-12 lg:px-20 py-4 max-w-5xl mx-auto">
        <Reveal>
          <p className="text-xs tracking-[0.2em] uppercase mb-6" style={{ color: "var(--fg-3)" }}>
            Event Identity
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-start">
            <GalleryImg src="/ev-08.png" alt="Envisioning the Future You event poster" className="md:col-span-1" />
            <div className="md:col-span-2 flex flex-col gap-4">
              <GalleryImg src="/ev-01.png" alt="Envisioning the Future You event banner" />
            </div>
          </div>
        </Reveal>
      </section>

      {/* ── Workshop in action ── */}
      <section className="px-6 md:px-12 lg:px-20 py-4 max-w-5xl mx-auto">
        <Reveal>
          <p className="text-xs tracking-[0.2em] uppercase mb-6 mt-8" style={{ color: "var(--fg-3)" }}>
            Workshop in Action
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-start">
            <GalleryImg src="/ev-05.png" alt="Participants at workshop table" />
            <GalleryImg src="/ev-03.png" alt="Facilitator speaking to group" />
            <GalleryImg src="/ev-07.png" alt="Team presenting at Products of Design" />
          </div>
        </Reveal>
      </section>

      {/* ── Full-width facilitation shot ── */}
      <section className="px-6 md:px-12 lg:px-20 py-4 max-w-5xl mx-auto">
        <Reveal>
          <GalleryImg src="/ev-02.png" alt="Facilitator guiding workshop discussion" className="w-full" />
        </Reveal>
      </section>

      {/* ── Materials ── */}
      <section className="px-6 md:px-12 lg:px-20 py-4 max-w-5xl mx-auto">
        <Reveal>
          <p className="text-xs tracking-[0.2em] uppercase mb-6 mt-8" style={{ color: "var(--fg-3)" }}>
            Workshop Materials
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-start">
            <GalleryImg src="/ev-04.png" alt="Vision boarding materials on table" />
            <GalleryImg src="/ev-06.png" alt="Collage and vision board process" />
          </div>
        </Reveal>
      </section>

      {/* ── Vision Boards ── */}
      <section className="px-6 md:px-12 lg:px-20 py-4 max-w-5xl mx-auto">
        <Reveal>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-start">
            <GalleryImg src="/ev-10.png" alt="Participants working on vision boards" />
            <GalleryImg src="/ev-09.png" alt="Vision board closeup — 'Who Are You'" />
          </div>
        </Reveal>
      </section>

      {/* ── Frameworks / Templates ── */}
      <section className="px-6 md:px-12 lg:px-20 py-4 max-w-5xl mx-auto">
        <Reveal>
          <p className="text-xs tracking-[0.2em] uppercase mb-6 mt-8" style={{ color: "var(--fg-3)" }}>
            Frameworks & Templates
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-start">
            <GalleryImg src="/ev-11.png" alt="Personal SWOT analysis framework" />
            <GalleryImg src="/ev-12.png" alt="Titles, Locations, Industries template" />
          </div>
        </Reveal>
      </section>

      {/* ── Impact ── */}
      <section className="px-6 md:px-12 lg:px-20 py-20 mt-12" style={{ background: "var(--bg-2)" }}>
        <div className="max-w-5xl mx-auto">
          <Reveal>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              {[
                { value: "30+", label: "Participants" },
                { value: "2", label: "Institutions" },
                { value: "3hrs", label: "Of deep reflection" },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="p-8 rounded-2xl"
                  style={{ border: "1px solid var(--divider)", background: "var(--bg)" }}
                >
                  <p
                    className="font-bold mb-2"
                    style={{ fontSize: "clamp(36px, 4vw, 52px)", color: "var(--fg)", letterSpacing: "-0.02em" }}
                  >
                    {stat.value}
                  </p>
                  <p className="text-sm" style={{ color: "var(--fg-2)" }}>{stat.label}</p>
                </div>
              ))}
            </div>
            <p className="text-base md:text-lg leading-relaxed text-center" style={{ color: "var(--fg-2)" }}>
              A space where Women and Non-Binary designers came together to dream loudly, map their futures, and leave with clarity — and a vision board to prove it.
            </p>
          </Reveal>
        </div>
      </section>

      {/* ── Back ── */}
      <section className="px-6 md:px-12 lg:px-20 py-16 max-w-5xl mx-auto">
        <Reveal>
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-sm font-medium transition-opacity duration-200 hover:opacity-60"
            style={{ color: "var(--fg-2)" }}
          >
            <ArrowLeft className="w-4 h-4" />
            Back to home
          </Link>
        </Reveal>
      </section>
    </div>
  );
}
