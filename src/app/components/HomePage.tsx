import { useState, useRef, useEffect } from "react";
import { Link } from "react-router";
import { motion, useInView, useScroll, useTransform } from "motion/react";
import { ArrowUpRight, ArrowDown } from "lucide-react";
import { projects } from "../data/projects";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Marquee } from "./Marquee";

/* ─── Gradient blob background — follows cursor via rAF ─── */
function GradientBlobs({ opacity = 1 }: { opacity?: number }) {
  const b1 = useRef<HTMLDivElement>(null);
  const b2 = useRef<HTMLDivElement>(null);
  const b3 = useRef<HTMLDivElement>(null);
  const b4 = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let tx = 0.65, ty = 0.3;
    let cx = 0.65, cy = 0.3;
    let raf: number;

    const onMove = (e: MouseEvent) => {
      tx = e.clientX / window.innerWidth;
      ty = e.clientY / window.innerHeight;
    };

    const tick = () => {
      cx += (tx - cx) * 0.06;
      cy += (ty - cy) * 0.06;
      const vw = window.innerWidth;
      const vh = window.innerHeight;
      // Map cursor position across full viewport
      const dx = (cx - 0.5) * vw;
      const dy = (cy - 0.5) * vh;
      if (b1.current) b1.current.style.transform = `translate(${dx * 0.8}px, ${dy * 0.8}px)`;
      if (b2.current) b2.current.style.transform = `translate(${dx * 0.55}px, ${dy * 0.55}px)`;
      if (b3.current) b3.current.style.transform = `translate(${dx * 0.35}px, ${dy * 0.35}px)`;
      if (b4.current) b4.current.style.transform = `translate(${dx * 0.2}px, ${dy * 0.2}px)`;
      raf = requestAnimationFrame(tick);
    };

    window.addEventListener("mousemove", onMove);
    raf = requestAnimationFrame(tick);
    return () => {
      window.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <div
      className="absolute inset-0 overflow-hidden pointer-events-none select-none"
      style={{ opacity }}
    >
      <div ref={b1} className="absolute" style={{
        top: "-15%", right: "-5%", width: "65vw", height: "65vw",
        maxWidth: "700px", maxHeight: "700px", borderRadius: "50%",
        background: "radial-gradient(circle at 40% 40%, rgba(155, 28, 55, 0.85) 0%, rgba(120, 18, 40, 0.5) 40%, transparent 70%)",
        filter: "blur(60px)",
      }} />
      <div ref={b2} className="absolute" style={{
        top: "0%", right: "8%", width: "55vw", height: "55vw",
        maxWidth: "600px", maxHeight: "600px", borderRadius: "50%",
        background: "radial-gradient(circle at 50% 50%, rgba(68, 18, 120, 0.75) 0%, rgba(45, 10, 90, 0.4) 45%, transparent 70%)",
        filter: "blur(80px)",
      }} />
      <div ref={b3} className="absolute" style={{
        top: "15%", right: "-8%", width: "30vw", height: "30vw",
        maxWidth: "320px", maxHeight: "320px", borderRadius: "50%",
        background: "radial-gradient(circle at 50% 50%, rgba(180, 50, 100, 0.45) 0%, transparent 70%)",
        filter: "blur(50px)",
      }} />
      <div ref={b4} className="absolute" style={{
        top: "35%", right: "-15%", width: "40vw", height: "40vw",
        maxWidth: "420px", maxHeight: "420px", borderRadius: "50%",
        background: "radial-gradient(circle at 50% 50%, rgba(30, 12, 80, 0.55) 0%, transparent 70%)",
        filter: "blur(70px)",
      }} />
    </div>
  );
}

/* ─── Greeting typing component ─── */
function GreetingTyping() {
  const full = "Hello, I am Ria";
  const [displayed, setDisplayed] = useState("");
  const [done, setDone] = useState(false);

  useEffect(() => {
    if (done) return;
    if (displayed.length < full.length) {
      const t = setTimeout(() => setDisplayed(full.slice(0, displayed.length + 1)), 80);
      return () => clearTimeout(t);
    } else {
      setDone(true);
    }
  }, [displayed, done]);

  return (
    <span>
      {displayed}
      {!done && (
        <span
          className="inline-block w-[2px] ml-0.5 align-middle"
          style={{
            height: "0.75em",
            background: "currentColor",
            borderRadius: "1px",
            animation: "cursor-blink 1s step-end infinite",
          }}
        />
      )}
    </span>
  );
}

/* ─── Typing word component — cycles through words, stops permanently at "Designer." ─── */
const TYPING_WORDS = ["Researcher.", "Storyteller.", "Strategist.", "Designer."];

function TypingWord() {
  const [wordIndex, setWordIndex] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [phase, setPhase] = useState<"typing" | "pausing" | "deleting">("typing");

  useEffect(() => {
    const current = TYPING_WORDS[wordIndex];

    if (phase === "typing") {
      if (displayed.length < current.length) {
        const t = setTimeout(() => setDisplayed(current.slice(0, displayed.length + 1)), 72);
        return () => clearTimeout(t);
      }
      const t = setTimeout(() => setPhase("pausing"), 1400);
      return () => clearTimeout(t);
    }

    if (phase === "pausing") {
      const t = setTimeout(() => setPhase("deleting"), 400);
      return () => clearTimeout(t);
    }

    if (phase === "deleting") {
      if (displayed.length > 0) {
        const t = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 38);
        return () => clearTimeout(t);
      } else {
        setWordIndex((i) => (i + 1) % TYPING_WORDS.length);
        setPhase("typing");
      }
    }
  }, [displayed, phase, wordIndex]);

  return (
    <span>
      {displayed}
      <span
        className="inline-block w-[3px] ml-1 align-middle"
        style={{
          height: "0.8em",
          background: "rgba(160,160,160,0.6)",
          borderRadius: "1px",
          animation: "cursor-blink 1s step-end infinite",
        }}
      />
      <style>{`
        @keyframes cursor-blink {
          0%, 100% { opacity: 1; }
          50%       { opacity: 0; }
        }
      `}</style>
    </span>
  );
}

/* ─── & More — accordion ─── */
const MORE_ITEMS = [
  {
    title: "Case Studies",
    description: "Deep-dive documents and process writeups from key projects.",
    attachments: [
      { label: "ARPA-H · Mobile Medical Van", href: "#" },
      { label: "Validose · Medication Adherence Device", href: "#" },
      { label: "ET Tube · Medical Device Research", href: "#" },
    ],
  },
  {
    title: "Facilitation",
    description: "Workshop planning, session guides, and facilitation artefacts.",
    attachments: [
      { label: "Design Sprint Playbook", href: "#" },
      { label: "Journey Mapping Workshop Deck", href: "#" },
    ],
  },
  {
    title: "Writing",
    description: "Articles and essays on design, systems thinking, and research.",
    attachments: [
      { label: "On designing for ambiguity", href: "#" },
      { label: "Why 0→1 needs more designers", href: "#" },
    ],
  },
  {
    title: "Speaking",
    description: "Talks, panels, and conference appearances.",
    attachments: [
      { label: "Figma Config 2024 — Lightning Talk", href: "#" },
    ],
  },
];

function MoreAccordionItem({
  item,
  index,
  open,
  onToggle,
}: {
  item: (typeof MORE_ITEMS)[0];
  index: number;
  open: boolean;
  onToggle: () => void;
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.07, ease: [0.16, 1, 0.3, 1] }}
      style={{ borderBottom: "1px solid rgba(255,255,255,0.1)" }}
    >
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between py-5 text-left group"
      >
        <span
          className="font-medium tracking-tight transition-colors duration-200"
          style={{
            fontSize: "clamp(16px, 1.5vw, 20px)",
            color: open ? "#ffffff" : "rgba(255,255,255,0.7)",
          }}
        >
          {item.title}
        </span>
        <motion.span
          animate={{ rotate: open ? 45 : 0 }}
          transition={{ duration: 0.25, ease: "easeInOut" }}
          className="flex-shrink-0 ml-4"
          style={{ color: "rgba(255,255,255,0.5)" }}
        >
          <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
            <line x1="9" y1="2" x2="9" y2="16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            <line x1="2" y1="9" x2="16" y2="9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          </svg>
        </motion.span>
      </button>

      <motion.div
        initial={false}
        animate={{ height: open ? "auto" : 0, opacity: open ? 1 : 0 }}
        transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
        style={{ overflow: "hidden" }}
      >
        <div className="pb-6">
          <p className="text-sm mb-4" style={{ color: "rgba(255,255,255,0.45)" }}>
            {item.description}
          </p>
          <div className="flex flex-col gap-2">
            {item.attachments.map((att, i) => (
              <a
                key={i}
                href={att.href}
                className="inline-flex items-center gap-2.5 w-fit group/link"
                style={{ color: "rgba(255,255,255,0.65)" }}
              >
                <span
                  className="flex-shrink-0 w-7 h-7 rounded-lg flex items-center justify-center transition-colors duration-200 group-hover/link:bg-white/10"
                  style={{ border: "1px solid rgba(255,255,255,0.15)" }}
                >
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                    <path d="M2.5 9.5L9.5 2.5M9.5 2.5H4.5M9.5 2.5V7.5" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
                <span className="text-sm transition-colors duration-200 group-hover/link:text-white">
                  {att.label}
                </span>
              </a>
            ))}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

function MoreSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section
      className="px-6 md:px-12 py-20 md:py-28"
      style={{ background: "#111111" }}
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20"
        >
          {/* Left label */}
          <div className="lg:col-span-4">
            <p
              className="text-xs tracking-[0.2em] uppercase mb-4"
              style={{ color: "rgba(255,255,255,0.35)" }}
            >
              Beyond the work
            </p>
            <h2
              className="font-bold leading-[1.05]"
              style={{
                fontSize: "clamp(36px, 5vw, 64px)",
                color: "#ffffff",
                letterSpacing: "-0.02em",
              }}
            >
              &amp;More
            </h2>
            <p className="mt-4 text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.4)" }}>
              Case studies, facilitation, writing, and speaking engagements.
            </p>
          </div>

          {/* Right accordion */}
          <div
            className="lg:col-span-8"
            style={{ borderTop: "1px solid rgba(255,255,255,0.1)" }}
          >
            {MORE_ITEMS.map((item, i) => (
              <MoreAccordionItem
                key={item.title}
                item={item}
                index={i}
                open={openIndex === i}
                onToggle={() => setOpenIndex(openIndex === i ? null : i)}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

/* ─── Approach Card (own component for hooks) ─── */
const APPROACH = [
  {
    number: "01",
    title: "Research First",
    body: "Every project starts with understanding people — their behaviors, motivations, and the context they live in. I don't design assumptions, I design with evidence.",
  },
  {
    number: "02",
    title: "Systems Thinking",
    body: "Good design solves the problem in front of you and the ones around it. I think in systems — from components to content to the end-to-end experience.",
  },
  {
    number: "03",
    title: "Designed to Ship",
    body: "Beautiful ideas that don't reach users don't count. I design with constraints, collaborate with engineering, and care about what actually launches.",
  },
];

function ApproachCard({ item, delay }: { item: (typeof APPROACH)[0]; delay: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 32 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay, ease: [0.16, 1, 0.3, 1] }}
      className="rounded-2xl p-7 md:p-8"
      style={{ background: "var(--surface)", border: "1px solid var(--divider)" }}
    >
      <p
        className="font-syne font-bold mb-5 leading-none"
        style={{ fontSize: "56px", color: "var(--fg-2)" }}
      >
        {item.number}
      </p>
      <h3
        className="font-syne font-semibold mb-3"
        style={{ fontSize: "18px", color: "var(--fg)" }}
      >
        {item.title}
      </h3>
      <p className="text-sm leading-relaxed" style={{ color: "var(--fg-2)" }}>
        {item.body}
      </p>
    </motion.div>
  );
}

/* ─── Project Card ─── */
function ProjectCard({
  project,
  className = "",
  index,
}: {
  project: (typeof projects)[0];
  className?: string;
  index: number;
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const [hovered, setHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 8;
    const y = ((e.clientY - rect.top) / rect.height - 0.5) * -8;
    setTilt({ x: y, y: x });
  };

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, delay: index * 0.08, ease: [0.16, 1, 0.3, 1] }}
      className={className}
      style={{ perspective: "1000px" }}
      onMouseMove={handleMouseMove}
      onMouseLeave={() => { setTilt({ x: 0, y: 0 }); setHovered(false); }}
      onMouseEnter={() => setHovered(true)}
    >
      <Link
        to={`/project/${project.id}`}
        data-cursor="view"
        className="group relative flex flex-col overflow-hidden h-full"
        style={{
          borderRadius: "20px",
          transform: `rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
          transition: hovered ? "transform 0.1s ease" : "transform 0.5s ease",
          willChange: "transform",
        }}
      >
        <div className="absolute inset-0 overflow-hidden" style={{ borderRadius: "20px" }}>
          <ImageWithFallback
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover"
            style={{
              transition: "transform 0.7s cubic-bezier(0.16,1,0.3,1)",
              transform: hovered ? "scale(1.06)" : "scale(1)",
            }}
          />
          {/* Base dark tint */}
          <div className="absolute inset-0" style={{ background: "rgba(0,0,0,0.25)" }} />
          {/* Bottom gradient for text legibility */}
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(to top, rgba(0,0,0,0.82) 0%, rgba(0,0,0,0.1) 55%, rgba(0,0,0,0.0) 100%)",
            }}
          />
          <div
            className="absolute inset-0 transition-opacity duration-500"
            style={{ background: "rgba(0,0,0,0.15)", opacity: hovered ? 1 : 0 }}
          />
        </div>

        <div className="relative z-10 flex items-start justify-between p-5 md:p-6">
          <div className="flex flex-wrap gap-2">
            {project.category.slice(0, 2).map((cat) => (
              <span
                key={cat}
                className="text-xs px-3 py-1 rounded-full backdrop-blur-sm"
                style={{
                  background: "rgba(255,255,255,0.12)",
                  color: "rgba(255,255,255,0.85)",
                  border: "1px solid rgba(255,255,255,0.18)",
                }}
              >
                {cat}
              </span>
            ))}
          </div>
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={hovered ? { scale: 1, opacity: 1 } : { scale: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="w-9 h-9 rounded-full bg-white flex items-center justify-center flex-shrink-0"
          >
            <ArrowUpRight className="w-4 h-4 text-black" />
          </motion.div>
        </div>

        <div className="flex-1" />

        <div className="relative z-10 p-5 md:p-6">
          <p
            className="font-syne text-xs tracking-widest uppercase mb-3"
            style={{ color: project.accent }}
          >
            {project.year}
          </p>
          <h3
            className="font-syne font-bold text-white leading-tight mb-1.5"
            style={{ fontSize: "clamp(20px, 2.5vw, 28px)" }}
          >
            {project.title}
          </h3>
          <p className="text-sm" style={{ color: "rgba(255,255,255,0.55)" }}>
            {project.subtitle}
          </p>
        </div>
      </Link>
    </motion.div>
  );
}

/* ─── Specialty tags ─── */
const SPECIALTIES = [
  "Early-stage (0→1)",
  "Healthcare",
  "Finance",
  "AI-driven Systems",
  "Venture-backed",
  "Product Strategy",
];

/* ─── HomePage ─── */
export function HomePage() {
  const { scrollY } = useScroll();
  const heroOpacity = useTransform(scrollY, [0, 400], [1, 0]);
  const heroScale = useTransform(scrollY, [0, 400], [1, 0.97]);
  const heroY = useTransform(scrollY, [0, 400], [0, 60]);

  return (
    <div>
      {/* ════════════════════════════════════════
          HERO — Full bleed, gradient blobs, stacked type
         ════════════════════════════════════════ */}
      <section className="relative min-h-screen overflow-hidden bg-black flex flex-col">
        {/* Gradient blobs */}
        <GradientBlobs />

        {/* Vignette bottom */}
        <div
          className="absolute bottom-0 left-0 right-0 h-40 pointer-events-none z-10"
          style={{ background: "linear-gradient(to top, rgba(0,0,0,0.9) 0%, transparent 100%)" }}
        />

        {/* Stacked hero type — positioned at bottom of screen */}
        <motion.div
          style={{ opacity: heroOpacity, scale: heroScale, y: heroY }}
          className="relative z-20 flex-1 flex flex-col justify-center items-start px-6 md:px-12 lg:px-20 pb-32 pt-32 max-w-[100vw]"
        >
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="text-left"
          >
            <div style={{ overflow: "hidden", paddingBottom: "0.5em" }}>
              <motion.p
                initial={{ y: "108%" }}
                animate={{ y: 0 }}
                transition={{ duration: 1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
                className="font-bold block"
                style={{
                  fontSize: "165px",
                  fontFamily: "'DM Sans', sans-serif",
                  color: "#D0D0D0",
                  letterSpacing: "-0.02em",
                  lineHeight: 1.05,
                }}
              >
                <TypingWord />
              </motion.p>
            </div>

            {/* Tagline */}
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 1.0, ease: [0.16, 1, 0.3, 1] }}
              className="mt-6 text-white"
              style={{ fontSize: "clamp(18px, 2vw, 28px)", maxWidth: "680px", lineHeight: 1.5 }}
            >
              AI Product Designer specializing in 0→1 products, turning ambiguity into scalable, intelligent user experiences.
            </motion.p>
          </motion.div>

          {/* Scroll cue */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.4, duration: 0.7 }}
            className="flex items-center gap-3 mt-16"
          >
            <div
              className="w-7 h-7 rounded-full border flex items-center justify-center"
              style={{ borderColor: "rgba(255,255,255,0.2)" }}
            >
              <ArrowDown className="w-3 h-3 text-white/50" />
            </div>
            <span className="text-xs tracking-[0.2em] uppercase text-white/30">
              Scroll to explore
            </span>
          </motion.div>
        </motion.div>
      </section>


      {/* ─── Marquee ─── */}
      <div style={{ background: "var(--bg)" }}>
        <Marquee />
      </div>

      {/* ════════════════════════════════════════
          SHIPPED WORK
         ════════════════════════════════════════ */}
      <section
        id="projects"
        className="px-4 md:px-8 lg:px-12 py-20 md:py-28 max-w-7xl mx-auto"
      >
        <div className="flex items-center gap-4 mb-8 px-2">
          <span
            className="font-syne font-semibold text-xs tracking-[0.2em] uppercase flex-shrink-0"
            style={{ color: "var(--fg)" }}
          >
            Shipped Work
          </span>
          <div className="flex-1 h-px" style={{ background: "var(--divider)" }} />
          <span className="text-xs flex-shrink-0" style={{ color: "var(--fg-3)" }}>
            2023 – 2024
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
          <ProjectCard project={projects[0]} index={0} className="lg:col-span-2 h-[460px] md:h-[560px]" />
          <ProjectCard project={projects[1]} index={1} className="h-[360px] md:h-[560px]" />
          <ProjectCard project={projects[2]} index={2} className="h-[340px] md:h-[420px]" />
          <ProjectCard project={projects[3]} index={3} className="h-[340px] md:h-[420px]" />
          <ProjectCard project={projects[4]} index={4} className="h-[340px] md:h-[420px]" />
        </div>
      </section>

      {/* ════════════════════════════════════════
          ABOUT ME
         ════════════════════════════════════════ */}
      <section id="about" className="px-6 md:px-12 py-24 md:py-32 max-w-7xl mx-auto">
        <div
          className="pt-16 grid grid-cols-1 lg:grid-cols-12 gap-12 md:gap-16"
          style={{ borderTop: "1px solid var(--divider)" }}
        >
          {/* Left */}
          <div className="lg:col-span-4">
            <p
              className="text-xs tracking-[0.2em] uppercase mb-8"
              style={{ color: "var(--fg-2)" }}
            >
              About Me
            </p>
            <h2
              className="font-syne font-bold leading-[1.05] mb-8"
              style={{ fontSize: "clamp(28px, 3.5vw, 42px)", color: "var(--fg)" }}
            >
              I design with curiosity and intention.
            </h2>

            {/* Profile photo */}
            <div className="aspect-[4/5] rounded-2xl mb-6 overflow-hidden">
              <img
                src="/profile.png"
                alt="Ria John — Product Designer"
                className="w-full h-full object-cover object-top"
              />
            </div>

            <a
              href="#"
              className="inline-flex items-center gap-2 text-sm font-medium rounded-full px-5 py-2.5 transition-all duration-300"
              style={{ border: "1px solid var(--divider)", color: "var(--fg)" }}
            >
              View Resume <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Right */}
          <div className="lg:col-span-8 lg:pl-8 flex flex-col justify-center">
            <p className="text-base md:text-lg leading-relaxed mb-6" style={{ color: "var(--fg)" }}>
              I'm a Product Designer specializing in early-stage (0→1) product development across
              healthcare, finance, and venture-backed environments. I combine research, product
              strategy, and AI-driven systems design to create meaningful, scalable solutions.
            </p>
            <p
              className="text-base md:text-lg leading-relaxed mb-12"
              style={{ color: "var(--fg-2)" }}
            >
              Whether I'm mapping a service blueprint, facilitating a co-design workshop, or
              building a component library — I'm always asking the same question: does this
              actually serve the human on the other end?
            </p>

            {/* Skills */}
            <div className="mb-12">
              <p
                className="text-xs tracking-[0.2em] uppercase mb-5"
                style={{ color: "var(--fg-3)" }}
              >
                Skills & Tools
              </p>
              <div className="flex flex-wrap gap-2">
                {[
                  "UX Research", "Product Design", "Design Systems", "Service Design",
                  "Content Strategy", "Prototyping", "User Testing", "Journey Mapping",
                  "Figma", "FigJam", "AI-driven Design", "Healthcare UX",
                  "Workshop Facilitation", "0→1 Product Development",
                ].map((skill) => (
                  <span
                    key={skill}
                    className="text-sm px-4 py-1.5 rounded-full"
                    style={{
                      background: "var(--bg-2)",
                      color: "var(--fg-2)",
                      border: "1px solid var(--divider)",
                    }}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Experience */}
            <div>
              <p
                className="text-xs tracking-[0.2em] uppercase mb-5"
                style={{ color: "var(--fg-3)" }}
              >
                Experience
              </p>
              <div className="space-y-0">
                {[
                  { role: "Product Designer", company: "Add your current role", year: "2024–Present" },
                  { role: "UX Designer", company: "Add your previous role", year: "2022–2024" },
                  { role: "Design Intern", company: "Add your internship", year: "2021–2022" },
                ].map((exp, i) => (
                  <div
                    key={i}
                    className="flex items-start justify-between py-4"
                    style={{ borderBottom: "1px solid var(--divider)" }}
                  >
                    <div>
                      <p className="text-sm font-medium" style={{ color: "var(--fg)" }}>
                        {exp.role}
                      </p>
                      <p className="text-sm mt-0.5" style={{ color: "var(--fg-2)" }}>
                        {exp.company}
                      </p>
                    </div>
                    <p className="text-xs flex-shrink-0 ml-4 mt-0.5" style={{ color: "var(--fg-2)" }}>
                      {exp.year}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════
          APPROACH
         ════════════════════════════════════════ */}
      <section
        className="px-6 md:px-12 py-20 md:py-28"
        style={{ background: "var(--bg-2)" }}
      >
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-4 mb-14">
            <span
              className="font-syne font-semibold text-xs tracking-[0.2em] uppercase"
              style={{ color: "var(--fg)" }}
            >
              My Approach
            </span>
            <div className="flex-1 h-px" style={{ background: "var(--divider)" }} />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {APPROACH.map((item, i) => (
              <ApproachCard key={item.number} item={item} delay={i * 0.1} />
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════
          & MORE — accordion
         ════════════════════════════════════════ */}
      <MoreSection />

      {/* ════════════════════════════════════════
          CONTACT CTA
         ════════════════════════════════════════ */}
      <section className="px-6 md:px-12 pb-24 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="relative rounded-3xl overflow-hidden"
          style={{ background: "var(--fg)" }}
        >
          <div className="p-10 md:p-16 flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
            <div>
              <p
                className="text-xs tracking-[0.2em] uppercase mb-4"
                style={{ color: "color-mix(in srgb, var(--bg) 50%, transparent)" }}
              >
                Get in touch
              </p>
              <h2
                className="font-syne font-bold leading-tight"
                style={{ fontSize: "clamp(28px, 4vw, 48px)", color: "var(--bg)" }}
              >
                Have a project in mind?
                <br />
                Let's talk.
              </h2>
            </div>
            <a
              href="mailto:hello@riajohn.design"
              className="inline-flex items-center gap-2.5 px-8 py-4 rounded-full text-sm font-medium transition-all duration-300 hover:opacity-85 flex-shrink-0"
              style={{ background: "var(--bg)", color: "var(--fg)" }}
            >
              Say Hello <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
        </motion.div>
      </section>
    </div>
  );
}