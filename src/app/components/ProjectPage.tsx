import { useRef } from "react";
import { useParams, Link, Navigate } from "react-router";
import { motion, useInView, useScroll, useTransform } from "motion/react";
import { ArrowLeft, ArrowUpRight, ImageIcon } from "lucide-react";
import { projects } from "../data/projects";
import { ImageWithFallback } from "./figma/ImageWithFallback";

/* ─── Section reveal wrapper ─── */
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
  const inView = useInView(ref, { once: true, margin: "-80px" });
  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{ opacity: 0, y: 28 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.75, delay, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </motion.div>
  );
}

/* ─── Gallery placeholder slot ─── */
function GallerySlot({
  label,
  hint,
  aspect,
  accent,
  index,
}: {
  label: string;
  hint: string;
  aspect: "wide" | "square" | "tall";
  accent: string;
  index: number;
}) {
  const aspectMap = { wide: "aspect-video", square: "aspect-square", tall: "aspect-[3/4]" };
  return (
    <div
      className={`${aspectMap[aspect]} rounded-2xl relative overflow-hidden group transition-all duration-300`}
      style={{
        background: "var(--bg-2)",
        border: "1.5px dashed var(--divider)",
      }}
    >
      {/* Hover accent fill */}
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-5 transition-opacity duration-500"
        style={{ background: accent }}
      />

      <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">
        <div
          className="w-10 h-10 rounded-xl flex items-center justify-center mb-3"
          style={{ background: "var(--surface)", border: "1px solid var(--divider)" }}
        >
          <ImageIcon className="w-4 h-4" style={{ color: "var(--fg-3)" }} />
        </div>
        <p className="text-sm font-medium mb-1" style={{ color: "var(--fg-2)" }}>
          {label}
        </p>
        <p className="text-xs leading-relaxed max-w-xs" style={{ color: "var(--fg-3)" }}>
          {hint}
        </p>
      </div>

      <div
        className="absolute top-4 left-4 text-[10px] tracking-widest uppercase font-syne"
        style={{ color: "var(--fg-3)" }}
      >
        Fig. {String(index + 1).padStart(2, "0")}
      </div>
    </div>
  );
}

export function ProjectPage() {
  const { id } = useParams();
  const project = projects.find((p) => p.id === id);

  if (!project) return <Navigate to="/" replace />;

  const nextProject = project.nextProject
    ? projects.find((p) => p.id === project.nextProject)
    : null;

  // Hero parallax
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll();
  const heroImgY = useTransform(scrollY, [0, 600], [0, 120]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.4 }}
    >
      {/* ─── Hero ─── */}
      <div
        ref={heroRef}
        className="relative overflow-hidden"
        style={{ height: "80vh", minHeight: "560px" }}
      >
        {/* Parallax image */}
        <motion.div
          className="absolute inset-x-0 -top-16 bottom-0"
          style={{ y: heroImgY }}
        >
          <ImageWithFallback
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover"
          />
        </motion.div>

        {/* Gradient */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to top, rgba(0,0,0,0.88) 0%, rgba(0,0,0,0.4) 45%, rgba(0,0,0,0.25) 100%)",
          }}
        />

        {/* Back button */}
        <div className="absolute top-[80px] left-6 md:left-12 z-10">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-sm transition-opacity hover:opacity-70 group"
            style={{ color: "rgba(255,255,255,0.75)" }}
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-0.5 transition-transform" />
            Back to work
          </Link>
        </div>

        {/* Title */}
        <div className="absolute bottom-0 left-0 right-0 px-6 md:px-12 pb-12 z-10">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-wrap gap-2 mb-5">
              {project.category.map((cat) => (
                <span
                  key={cat}
                  className="text-xs px-3 py-1.5 rounded-full backdrop-blur-sm"
                  style={{
                    background: "rgba(255,255,255,0.12)",
                    color: "rgba(255,255,255,0.85)",
                    border: "1px solid rgba(255,255,255,0.22)",
                  }}
                >
                  {cat}
                </span>
              ))}
            </div>
            <h1
              className="font-syne font-bold text-white leading-[1.0] mb-3"
              style={{ fontSize: "clamp(40px, 7vw, 88px)" }}
            >
              {project.title}
            </h1>
            <p style={{ color: "rgba(255,255,255,0.6)", fontSize: "clamp(15px, 1.5vw, 20px)" }}>
              {project.subtitle}
            </p>
          </div>
        </div>
      </div>

      {/* ─── Metadata bar ─── */}
      <div style={{ background: "var(--fg)" }}>
        <div className="max-w-7xl mx-auto px-6 md:px-12 py-8 md:py-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-10">
            {[
              { label: "Role", value: project.role },
              { label: "Year", value: project.year },
              { label: "Type", value: project.category[0] },
              { label: "Tools", value: project.tools.join(" · ") },
            ].map((item) => (
              <div key={item.label}>
                <p
                  className="text-[10px] tracking-[0.2em] uppercase mb-2"
                  style={{ color: "color-mix(in srgb, var(--bg) 45%, transparent)" }}
                >
                  {item.label}
                </p>
                <p className="text-sm leading-snug" style={{ color: "var(--bg)" }}>
                  {item.value}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ─── Case Study Content ─── */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-16 md:py-24">

        {/* Tagline */}
        <Reveal className="mb-20 md:mb-28">
          <div className="w-8 h-0.5 mb-8" style={{ background: project.accent }} />
          <p
            className="font-syne font-bold leading-[1.1] max-w-4xl"
            style={{ fontSize: "clamp(26px, 3.5vw, 48px)", color: "var(--fg)" }}
          >
            "{project.tagline}"
          </p>
        </Reveal>

        {/* Overview + Challenge */}
        <Reveal className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20 mb-20 md:mb-24">
          <div>
            <p
              className="text-[10px] tracking-[0.2em] uppercase mb-5"
              style={{ color: "var(--fg-2)" }}
            >
              Overview
            </p>
            <p className="text-base md:text-lg leading-relaxed" style={{ color: "var(--fg)" }}>
              {project.overview}
            </p>
          </div>
          <div>
            <p
              className="text-[10px] tracking-[0.2em] uppercase mb-5"
              style={{ color: "var(--fg-2)" }}
            >
              The Challenge
            </p>
            <p className="text-base md:text-lg leading-relaxed" style={{ color: "var(--fg)" }}>
              {project.challenge}
            </p>
          </div>
        </Reveal>

        {/* ─── Key Insights ─── */}
        <Reveal className="mb-20 md:mb-24">
          <p
            className="text-[10px] tracking-[0.2em] uppercase mb-8"
            style={{ color: "var(--fg-2)" }}
          >
            Key Insights
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {project.insights.map((insight, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.55, delay: i * 0.07, ease: [0.16, 1, 0.3, 1] }}
                className="rounded-2xl p-6 md:p-7"
                style={{
                  background: "var(--surface)",
                  border: "1px solid var(--divider)",
                }}
              >
                <div
                  className="w-5 h-0.5 mb-5"
                  style={{ background: project.accent }}
                />
                <p
                  className="font-syne font-semibold mb-3 text-base"
                  style={{ color: "var(--fg)" }}
                >
                  {insight.title}
                </p>
                <p className="text-sm leading-relaxed" style={{ color: "var(--fg-2)" }}>
                  {insight.body}
                </p>
              </motion.div>
            ))}
          </div>
        </Reveal>

        {/* ─── Process ─── */}
        <Reveal className="mb-20 md:mb-24">
          <p
            className="text-[10px] tracking-[0.2em] uppercase mb-8"
            style={{ color: "var(--fg-2)" }}
          >
            Design Process
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {project.process.map((phase, i) => (
              <motion.div
                key={phase.phase}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.65, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="rounded-2xl p-7 md:p-8 flex flex-col"
                style={{ background: "var(--surface)", border: "1px solid var(--divider)" }}
              >
                <p
                  className="font-syne font-bold mb-5 leading-none"
                  style={{ fontSize: "52px", color: "var(--divider)" }}
                >
                  {String(i + 1).padStart(2, "0")}
                </p>
                <div className="w-5 h-0.5 mb-5" style={{ background: project.accent }} />
                <p
                  className="font-syne font-semibold mb-3"
                  style={{ fontSize: "16px", color: "var(--fg)" }}
                >
                  {phase.phase}
                </p>
                <p className="text-sm leading-relaxed flex-1" style={{ color: "var(--fg-2)" }}>
                  {phase.description}
                </p>
              </motion.div>
            ))}
          </div>
        </Reveal>

        {/* ─── Gallery ─── */}
        <Reveal className="mb-20 md:mb-24">
          <div className="flex items-center justify-between mb-8">
            <p
              className="text-[10px] tracking-[0.2em] uppercase"
              style={{ color: "var(--fg-2)" }}
            >
              Project Gallery
            </p>
            <p className="text-xs" style={{ color: "var(--fg-3)" }}>
              Replace with your actual mockups
            </p>
          </div>

          {/* Large slot */}
          <div className="mb-4">
            <GallerySlot
              label={project.gallery[0].label}
              hint={project.gallery[0].hint}
              aspect="wide"
              accent={project.accent}
              index={0}
            />
          </div>

          {/* Two smaller slots */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {project.gallery.slice(1).map((slot, i) => (
              <GallerySlot
                key={slot.label}
                label={slot.label}
                hint={slot.hint}
                aspect="square"
                accent={project.accent}
                index={i + 1}
              />
            ))}
          </div>
        </Reveal>

        {/* ─── Design Decisions ─── */}
        <Reveal className="mb-20 md:mb-24">
          <p
            className="text-[10px] tracking-[0.2em] uppercase mb-8"
            style={{ color: "var(--fg-2)" }}
          >
            Key Design Decisions
          </p>
          <div className="space-y-4">
            {project.designDecisions.map((dd, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.08 }}
                className="rounded-2xl p-7 md:p-8 flex flex-col md:flex-row gap-6 md:gap-10"
                style={{ background: "var(--bg-2)", border: "1px solid var(--divider)" }}
              >
                <div className="md:w-1/3">
                  <div
                    className="inline-flex items-center gap-2 text-xs font-syne font-medium px-3 py-1.5 rounded-full mb-4"
                    style={{
                      background: `color-mix(in srgb, ${project.accent} 12%, transparent)`,
                      color: project.accent,
                    }}
                  >
                    Decision {String(i + 1).padStart(2, "0")}
                  </div>
                  <p
                    className="font-syne font-semibold leading-snug"
                    style={{ color: "var(--fg)", fontSize: "15px" }}
                  >
                    {dd.decision}
                  </p>
                </div>
                <div className="md:w-2/3">
                  <p
                    className="text-[10px] tracking-[0.15em] uppercase mb-3"
                    style={{ color: "var(--fg-3)" }}
                  >
                    Rationale
                  </p>
                  <p className="text-sm leading-relaxed" style={{ color: "var(--fg-2)" }}>
                    {dd.rationale}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </Reveal>

        {/* ─── Impact Metrics ─── */}
        <Reveal className="mb-20 md:mb-24">
          <p
            className="text-[10px] tracking-[0.2em] uppercase mb-8"
            style={{ color: "var(--fg-2)" }}
          >
            Impact & Metrics
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {project.metrics.map((m, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.94 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.55, delay: i * 0.08 }}
                className="rounded-2xl p-7"
                style={{ background: "var(--surface)", border: "1px solid var(--divider)" }}
              >
                <p
                  className="font-syne font-bold mb-2 leading-none"
                  style={{ fontSize: "clamp(36px, 5vw, 52px)", color: project.accent }}
                >
                  {m.value}
                </p>
                <p className="font-medium text-sm mb-1.5" style={{ color: "var(--fg)" }}>
                  {m.label}
                </p>
                {m.context && (
                  <p className="text-xs" style={{ color: "var(--fg-3)" }}>
                    {m.context}
                  </p>
                )}
              </motion.div>
            ))}
          </div>
        </Reveal>

        {/* ─── Outcome ─── */}
        <Reveal className="mb-20 md:mb-28">
          <div
            className="rounded-2xl md:rounded-3xl overflow-hidden"
            style={{ background: "var(--fg)" }}
          >
            <div className="p-8 md:p-14 lg:p-16">
              <div className="flex items-center gap-3 mb-8">
                <div
                  className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0"
                  style={{ background: project.accent }}
                >
                  <div className="w-1.5 h-1.5 rounded-full" style={{ background: "var(--bg)" }} />
                </div>
                <p
                  className="text-[10px] tracking-[0.2em] uppercase"
                  style={{ color: "color-mix(in srgb, var(--bg) 45%, transparent)" }}
                >
                  Outcome
                </p>
              </div>
              <p
                className="font-syne font-medium leading-relaxed"
                style={{
                  fontSize: "clamp(18px, 2.2vw, 26px)",
                  color: "var(--bg)",
                }}
              >
                {project.outcome}
              </p>
            </div>
          </div>
        </Reveal>

        {/* ─── Learnings (template) ─── */}
        <Reveal className="mb-20 md:mb-28">
          <div
            className="rounded-2xl p-8 md:p-10"
            style={{ background: "var(--bg-2)", border: "1px solid var(--divider)" }}
          >
            <p
              className="text-[10px] tracking-[0.2em] uppercase mb-6"
              style={{ color: "var(--fg-2)" }}
            >
              Reflections & Learnings
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <p className="font-syne font-semibold mb-3" style={{ color: "var(--fg)", fontSize: "15px" }}>
                  What went well
                </p>
                <p className="text-sm leading-relaxed italic" style={{ color: "var(--fg-3)" }}>
                  Add your reflections here — what you're proud of, what worked, what you'd do
                  again on the next project.
                </p>
              </div>
              <div>
                <p className="font-syne font-semibold mb-3" style={{ color: "var(--fg)", fontSize: "15px" }}>
                  What I'd do differently
                </p>
                <p className="text-sm leading-relaxed italic" style={{ color: "var(--fg-3)" }}>
                  Add honest reflections here — constraints you'd push back on, assumptions you'd
                  question earlier, things you'd prioritize differently.
                </p>
              </div>
            </div>
          </div>
        </Reveal>

        {/* ─── Next Project ─── */}
        {nextProject && (
          <div style={{ borderTop: "1px solid var(--divider)", paddingTop: "60px" }}>
            <p
              className="text-[10px] tracking-[0.2em] uppercase mb-8"
              style={{ color: "var(--fg-2)" }}
            >
              Next Project
            </p>
            <Link
              to={`/project/${nextProject.id}`}
              className="group flex items-center justify-between gap-6"
            >
              <div>
                <p className="text-sm mb-2" style={{ color: "var(--fg-3)" }}>
                  {nextProject.category[0]}
                </p>
                <h3
                  className="font-syne font-bold leading-tight transition-opacity group-hover:opacity-50"
                  style={{ fontSize: "clamp(28px, 5vw, 64px)", color: "var(--fg)" }}
                >
                  {nextProject.title}
                </h3>
                <p className="text-sm mt-2" style={{ color: "var(--fg-2)" }}>
                  {nextProject.subtitle}
                </p>
              </div>
              <div
                className="flex-shrink-0 w-14 h-14 md:w-16 md:h-16 rounded-full flex items-center justify-center transition-all duration-300 group-hover:scale-110"
                style={{
                  border: "1.5px solid var(--divider)",
                  background: "transparent",
                }}
              >
                <ArrowUpRight className="w-5 h-5" style={{ color: "var(--fg)" }} />
              </div>
            </Link>
          </div>
        )}
      </div>
    </motion.div>
  );
}
