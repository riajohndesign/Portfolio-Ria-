import { useRef } from "react";
import { useParams, Link, Navigate } from "react-router";
import { motion, useInView } from "motion/react";
import { ArrowLeft } from "lucide-react";
import { moreItems } from "../data/moreItems";

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

export function MoreItemPage() {
  const { id } = useParams<{ id: string }>();
  const item = moreItems.find((m) => m.id === id);

  if (!item) return <Navigate to="/" replace />;

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

          <p
            className="text-xs tracking-[0.2em] uppercase mb-4"
            style={{ color: "var(--fg-3)" }}
          >
            {item.category} · {item.year}
          </p>

          <h1
            className="font-bold leading-[1.05] mb-4"
            style={{
              fontSize: "clamp(36px, 5vw, 64px)",
              color: "var(--fg)",
              letterSpacing: "-0.02em",
            }}
          >
            {item.title}
          </h1>

          <p
            className="text-lg md:text-xl mb-6"
            style={{ color: "var(--fg-2)" }}
          >
            {item.subtitle}
          </p>

          <p
            className="text-sm"
            style={{ color: "var(--fg-3)" }}
          >
            Role: {item.role}
          </p>
        </motion.div>
      </section>

      {/* ── Divider ── */}
      <div className="px-6 md:px-12 lg:px-20 max-w-5xl mx-auto">
        <div style={{ borderTop: "1px solid var(--divider)" }} />
      </div>

      {/* ── Overview ── */}
      <section className="px-6 md:px-12 lg:px-20 py-16 max-w-5xl mx-auto">
        <Reveal>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            <div className="lg:col-span-3">
              <p className="text-xs tracking-[0.2em] uppercase" style={{ color: "var(--fg-3)" }}>
                Overview
              </p>
            </div>
            <div className="lg:col-span-9">
              <p className="text-base md:text-lg leading-relaxed" style={{ color: "var(--fg)" }}>
                {item.overview}
              </p>
            </div>
          </div>
        </Reveal>
      </section>

      {/* ── Challenge ── */}
      <section
        className="px-6 md:px-12 lg:px-20 py-16"
        style={{ background: "var(--bg-2)" }}
      >
        <div className="max-w-5xl mx-auto">
          <Reveal>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
              <div className="lg:col-span-3">
                <p className="text-xs tracking-[0.2em] uppercase" style={{ color: "var(--fg-3)" }}>
                  The Challenge
                </p>
              </div>
              <div className="lg:col-span-9">
                <p className="text-base md:text-lg leading-relaxed" style={{ color: "var(--fg)" }}>
                  {item.challenge}
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── Process ── */}
      <section className="px-6 md:px-12 lg:px-20 py-16 max-w-5xl mx-auto">
        <Reveal>
          <p className="text-xs tracking-[0.2em] uppercase mb-10" style={{ color: "var(--fg-3)" }}>
            Process
          </p>
        </Reveal>
        <div className="space-y-0">
          {item.process.map((step, i) => (
            <Reveal key={i} delay={i * 0.1}>
              <div
                className="grid grid-cols-1 lg:grid-cols-12 gap-8 py-10"
                style={{ borderTop: "1px solid var(--divider)" }}
              >
                <div className="lg:col-span-3 flex items-start gap-4">
                  <span
                    className="text-xs font-medium flex-shrink-0 mt-1"
                    style={{ color: "var(--fg-3)" }}
                  >
                    0{i + 1}
                  </span>
                  <p className="font-semibold" style={{ color: "var(--fg)" }}>
                    {step.phase}
                  </p>
                </div>
                <div className="lg:col-span-9">
                  <p className="text-base leading-relaxed" style={{ color: "var(--fg-2)" }}>
                    {step.description}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ── Outcome ── */}
      <section
        className="px-6 md:px-12 lg:px-20 py-16"
        style={{ background: "var(--bg-2)" }}
      >
        <div className="max-w-5xl mx-auto">
          <Reveal>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
              <div className="lg:col-span-3">
                <p className="text-xs tracking-[0.2em] uppercase" style={{ color: "var(--fg-3)" }}>
                  Outcome
                </p>
              </div>
              <div className="lg:col-span-9">
                <p className="text-base md:text-lg leading-relaxed" style={{ color: "var(--fg)" }}>
                  {item.outcome}
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── Back link ── */}
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
