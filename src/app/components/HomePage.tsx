import { useState, useRef, useEffect } from "react";
import { Link } from "react-router";
import { motion, useInView, useScroll, useTransform, AnimatePresence } from "motion/react";
import { ArrowUpRight, ArrowDown, Lock } from "lucide-react";
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
      { label: "Bubble · Aid for Subway Induced Anxiety", href: "/more/bubble" },
      { label: "Serene · A Breathing Belt for New Moms", href: "/more/serene" },
    ],
  },
  {
    title: "Facilitation",
    description: "Workshop planning, session guides, and facilitation artefacts.",
    attachments: [
      { label: "Envisioning the future you", href: "/more/envisioning-the-future-you" },
      { label: "Carrom Club", href: "/more/carrom-club" },
    ],
  },
  {
    title: "Writing",
    titleHref: "https://medium.com/@riaannjohn",
    description: "Articles and essays on design, systems thinking, and research.",
    attachments: [],
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
          {item.titleHref ? (
            <a
              href={item.titleHref}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="hover:underline underline-offset-4"
            >
              {item.title}
            </a>
          ) : (
            item.title
          )}
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
            {item.attachments.map((att, i) => {
              const isInternal = att.href.startsWith("/");
              const inner = (
                <>
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
                </>
              );
              return isInternal ? (
                <Link
                  key={i}
                  to={att.href}
                  className="inline-flex items-center gap-2.5 w-fit group/link"
                  style={{ color: "rgba(255,255,255,0.65)" }}
                >
                  {inner}
                </Link>
              ) : (
                <a
                  key={i}
                  href={att.href}
                  className="inline-flex items-center gap-2.5 w-fit group/link"
                  style={{ color: "rgba(255,255,255,0.65)" }}
                >
                  {inner}
                </a>
              );
            })}
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
              style={{ color: "rgba(255,255,255,0.72)" }}
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
            <p className="mt-4 text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.78)" }}>
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
  const isComingSoon = project.comingSoon === true;
  const blurImage = project.id === "et-tube";

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
      className={`relative ${className}`}
      style={{ perspective: "1000px" }}
      onMouseMove={isComingSoon ? undefined : handleMouseMove}
      onMouseLeave={() => { setTilt({ x: 0, y: 0 }); setHovered(false); }}
      onMouseEnter={() => setHovered(true)}
    >
      <div
        className="group relative flex flex-col overflow-hidden h-full"
        style={{
          borderRadius: "20px",
          transform: isComingSoon ? "none" : `rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
          transition: isComingSoon ? "none" : hovered ? "transform 0.1s ease" : "transform 0.5s ease",
          willChange: "transform",
        }}
      >
        <div className="absolute inset-0 overflow-hidden" style={{ borderRadius: "20px" }}>
          <ImageWithFallback
            src={project.image}
            alt={project.title}
            className={`w-full h-full object-cover ${blurImage ? "blur-[3px]" : ""}`}
            style={{
              transition: "transform 0.7s cubic-bezier(0.16,1,0.3,1)",
              transform: hovered && !isComingSoon ? "scale(1.06)" : "scale(1)",
            }}
          />
          {/* Base dark tint */}
          <div className="absolute inset-0" style={{ background: isComingSoon ? "rgba(0,0,0,0.5)" : "rgba(0,0,0,0.25)" }} />
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
            style={{ background: "rgba(0,0,0,0.15)", opacity: hovered && !isComingSoon ? 1 : 0 }}
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
          {isComingSoon ? (
            <div
              className="inline-flex items-center gap-1.5 text-[11px] px-3 py-1 rounded-full"
              style={{
                background: "rgba(255,255,255,0.14)",
                border: "1px solid rgba(255,255,255,0.22)",
                color: "rgba(255,255,255,0.92)",
              }}
            >
              <Lock className="w-3 h-3" />
              Coming Soon
            </div>
          ) : (
            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              animate={hovered ? { scale: 1, opacity: 1 } : { scale: 0, opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="w-9 h-9 rounded-full bg-white flex items-center justify-center flex-shrink-0"
            >
              <ArrowUpRight className="w-4 h-4 text-black" />
            </motion.div>
          )}
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
            {isComingSoon ? "Coming Soon" : project.subtitle}
          </p>
        </div>
      </div>
      {!isComingSoon && (
        <Link
          to={`/project/${project.id}`}
          data-cursor="view"
          className="absolute inset-0 z-20"
          aria-label={`Open ${project.title} case study`}
        />
      )}
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

/* ─── Testimonials Carousel ─── */
const TESTIMONIALS = [
  {
    name: "Jacob Kritzinger",
    title: "Medical Technologies Design Engineer",
    relationship: "Jacob managed Ria directly",
    photo: "/testimonial-jacob.png",
    initials: "JK",
    quote:
      "It is with great enthusiasm that I recommend Ria. As a skilled User Experience Designer, she combines technical expertise with an insatiable curiosity, consistently seeking to expand her knowledge across disciplines—from architectural design to the rapid prototyping of medical products. Her proactive, go-getter attitude and remarkable ability to glean valuable insights from every experience truly set her apart in the field.",
  },
  {
    name: "Heba Jaleel",
    title: "Design Strategist at Edenic Energy | Brand & Product",
    relationship: "Heba worked with Ria on the same team",
    photo: "/testimonial-heba.png",
    initials: "HJ",
    quote:
      "During my time at the School of Visual Arts, I had the pleasure of working with Ria on several group projects. What stood out to me most was her passion, work ethic, and collaborative spirit. Ria is not only eager to learn but also brings a thoughtful and unique perspective to every challenge. She's the kind of teammate you can always count on—reliable, proactive, and genuinely committed to delivering strong outcomes. Ria is a valuable asset to any team—always fostering a productive and collaborative environment.",
  },
];

function TestimonialsCarousel() {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return;
    const t = setInterval(() => {
      setDirection(1);
      setIndex((i) => (i + 1) % TESTIMONIALS.length);
    }, 5000);
    return () => clearInterval(t);
  }, [paused]);

  const go = (next: number) => {
    setDirection(next > index ? 1 : -1);
    setIndex(next);
  };

  const t = TESTIMONIALS[index];

  return (
    <section className="px-6 md:px-12 py-20 md:py-28 max-w-7xl mx-auto">
      <div className="flex items-center gap-4 mb-14">
        <span className="font-syne font-semibold text-xs tracking-[0.2em] uppercase" style={{ color: "var(--fg)" }}>
          Testimonials
        </span>
        <div className="flex-1 h-px" style={{ background: "var(--divider)" }} />
      </div>

      <div
        className="relative overflow-hidden rounded-2xl"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
        style={{ border: "1px solid var(--divider)", background: "rgba(255,255,255,0.06)" }}
      >
        <AnimatePresence initial={false} custom={direction} mode="wait">
          <motion.div
            key={t.name}
            custom={direction}
            variants={{
              enter: (d: number) => ({ x: d > 0 ? 60 : -60, opacity: 0 }),
              center: { x: 0, opacity: 1 },
              exit: (d: number) => ({ x: d > 0 ? -60 : 60, opacity: 0 }),
            }}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="p-8 md:p-12"
          >
            <div className="mb-5">
              <p className="text-sm font-semibold" style={{ color: "var(--fg)" }}>{t.name}</p>
              <p className="text-xs mt-0.5" style={{ color: "rgba(255,255,255,0.35)" }}>{t.title}</p>
              <p className="text-xs mt-1 italic" style={{ color: "rgba(255,255,255,0.35)" }}>{t.relationship}</p>
            </div>
            <p className="text-base md:text-lg leading-relaxed" style={{ color: "var(--fg-2)" }}>
              "{t.quote}"
            </p>
          </motion.div>
        </AnimatePresence>

        {/* Dots */}
        <div className="flex justify-center gap-2 pb-6">
          {TESTIMONIALS.map((_, i) => (
            <button
              key={i}
              onClick={() => go(i)}
              className="rounded-full transition-all duration-300"
              style={{
                width: i === index ? "20px" : "8px",
                height: "8px",
                background: i === index ? "var(--fg)" : "var(--divider)",
              }}
              aria-label={`Testimonial ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

type AboutBotEntry = {
  question: string;
  answer: string;
  keywords: string[];
  suggestions: string[];
};

const ABOUT_BOT_ENTRIES: AboutBotEntry[] = [
  {
    question: "What do you specialize in?",
    answer:
      "I am a Service and Experience Designer with 5 years of experience across healthcare, medtech, and AI-enabled products. I specialize in journey mapping, service blueprinting, UX research, and scalable design systems for complex, multi-stakeholder environments.",
    keywords: ["specialize", "specialization", "focus", "niche", "expertise"],
    suggestions: ["What experience do you have?", "Which industries do you work in?", "What methods do you use?"],
  },
  {
    question: "Which industries do you work in?",
    answer:
      "My strongest domain experience is in healthcare and medtech, including venture-backed and government-funded initiatives. I have also worked across AI automation and digital product experiences for early-stage teams.",
    keywords: ["industry", "industries", "healthcare", "finance", "domain", "domains"],
    suggestions: ["What experience do you have?", "What is your current role?", "How do you work with teams?"],
  },
  {
    question: "What is your design process?",
    answer:
      "I typically start with discovery and research, map the end-to-end system, prototype quickly, test early, and then refine for implementation with engineering constraints in mind.",
    keywords: ["process", "workflow", "approach", "method", "research", "prototype"],
    suggestions: ["How do you use AI in your work?", "What methods do you use?", "What tools do you use?"],
  },
  {
    question: "How do you use AI in your work?",
    answer:
      "I use AI to accelerate ideation and rapid prototyping, validate concepts faster with stakeholders, and improve handoff quality—while still applying design judgment for final UX quality.",
    keywords: ["ai", "llm", "automation", "prototype", "figma make", "cursor"],
    suggestions: ["What AI tools do you use?", "How do you collaborate with engineering?", "What is your current role?"],
  },
  {
    question: "What methods do you use?",
    answer:
      "I use journey mapping, service blueprinting (front-stage and back-stage), systems and ecosystem mapping, qualitative interviews, contextual inquiry, usability testing, participatory workshops, and design sprints.",
    keywords: ["methods", "methodologies", "usability", "journey", "blueprint", "workshop", "service blueprint", "ecosystem"],
    suggestions: ["What tools do you use?", "How do you work with teams?", "What experience do you have?"],
  },
  {
    question: "What tools do you use?",
    answer:
      "My core stack includes Figma, FigJam, Miro, Jira, Confluence, Asana, Sketch, and Adobe Creative Suite. For AI workflows, I use Claude, ChatGPT, Vizcom, Midjourney, and Cursor to accelerate synthesis, prototyping, and documentation.",
    keywords: ["tools", "tooling", "figma", "miro", "jira", "cursor", "software", "confluence", "asana", "adobe", "sketch"],
    suggestions: ["How do you use AI in your work?", "What methods do you use?", "What education do you have?"],
  },
  {
    question: "What experience do you have?",
    answer:
      "I currently work as a UX Designer at Jersey Technology Partners (July 2025–present), leading AI automation workflow redesign. Before that, I was an Experience Designer at 10XBeta (June 2024–July 2025), a Product and Experience Designer as an independent consultant (Sept 2022–May 2024), and a Designer at Bearings World (Jan 2021–May 2022).",
    keywords: ["experience", "background", "resume", "career", "worked", "history", "timeline"],
    suggestions: ["What is your current role?", "Can you summarize your resume?", "What leadership work have you done?"],
  },
  {
    question: "What is your current role?",
    answer:
      "I am a UX Designer at Jersey Technology Partners on the AI Automation team. I map current-state operations, redesign them into AI-assisted service workflows, and build reusable workflow and interface patterns so teams can scale new use cases faster.",
    keywords: ["current role", "current", "role", "job", "position", "jersey tech", "jersey technology partners"],
    suggestions: ["What experience do you have?", "How do you collaborate with teams?", "What methods do you use?"],
  },
  {
    question: "How do you work with teams?",
    answer:
      "I work cross-functionally with PMs, engineers, clinicians, operations leads, and stakeholders. I facilitate discovery workshops, align teams around shared service artifacts, and translate research into implementation-ready blueprints, workflows, and documentation.",
    keywords: ["team", "teams", "collaboration", "stakeholders", "engineering", "pm", "cross-functional", "workshops"],
    suggestions: ["What methods do you use?", "What leadership work have you done?", "Can you summarize your resume?"],
  },
  {
    question: "What education do you have?",
    answer:
      "I have an MFA in Products of Design from the School of Visual Arts (2022–2024) and a BFA in Interior Design from Virginia Commonwealth University (2016–2020).",
    keywords: ["education", "degree", "mfa", "bfa", "school", "college", "university", "sva", "vcu"],
    suggestions: ["What experience do you have?", "What do you specialize in?", "What methods do you use?"],
  },
  {
    question: "What leadership work have you done?",
    answer:
      "I founded and lead Carrom Club NYC, designing end-to-end community experiences with 5+ events and 200+ attendees, growing the audience by 40%. I also led and facilitated a Women in Design NYC co-creation workshop for 20 early-career designers with 95% participant satisfaction.",
    keywords: ["leadership", "lead", "facilitator", "facilitation", "community", "carrom", "women in design", "workshop lead"],
    suggestions: ["Can you summarize your resume?", "How do you work with teams?", "What experience do you have?"],
  },
  {
    question: "Can you summarize your resume?",
    answer:
      "Ria is a Service and Experience Designer with 5 years of experience in healthcare and medtech systems. She has led AI automation and service workflow design at Jersey Technology Partners, delivered cross-functional service strategy at 10XBeta, consulted for startups, and built component-driven systems at Bearings World, with an MFA from SVA and strong expertise in journey mapping, service blueprinting, and research synthesis.",
    keywords: ["resume summary", "summarize resume", "summary", "cv", "profile", "bio"],
    suggestions: ["What is your current role?", "What methods do you use?", "What leadership work have you done?"],
  },
];

const ABOUT_BOT_DEFAULT_SUGGESTIONS = [
  "What do you specialize in?",
  "Can you summarize your resume?",
  "Which industries do you work in?",
  "What experience do you have?",
  "What education do you have?",
];

function getAboutBotReply(question: string) {
  const normalized = question.toLowerCase().trim();
  const matched = ABOUT_BOT_ENTRIES.find((entry) =>
    entry.keywords.some((keyword) => normalized.includes(keyword))
  );

  if (matched) {
    return { answer: matched.answer, suggestions: matched.suggestions };
  }

  return {
    answer:
      "I can help with Ria's portfolio and resume details, including experience, education, methods, tools, and domain focus. Try one of the suggested prompts below.",
    suggestions: ABOUT_BOT_DEFAULT_SUGGESTIONS,
  };
}

function AboutChatbotSection() {
  const [messages, setMessages] = useState<Array<{ role: "bot" | "user"; text: string }>>([
    {
      role: "bot",
      text: "Hi, I am Ria's portfolio assistant. Ask me about her portfolio and resume, including experience, education, tools, and process.",
    },
  ]);
  const [suggestions, setSuggestions] = useState(ABOUT_BOT_DEFAULT_SUGGESTIONS);
  const [input, setInput] = useState("");

  const askQuestion = (rawQuestion: string) => {
    const question = rawQuestion.trim();
    if (!question) return;

    const reply = getAboutBotReply(question);

    setMessages((prev) => [
      ...prev,
      { role: "user", text: question },
      { role: "bot", text: reply.answer },
    ]);
    setSuggestions(reply.suggestions);
    setInput("");
  };

  return (
    <section
      id="about"
      className="px-6 md:px-12 py-24 md:py-32"
      style={{ background: "linear-gradient(180deg, #090909 0%, #131313 100%)" }}
    >
      <div className="max-w-7xl mx-auto">
        <div
          className="pt-16 grid grid-cols-1 lg:grid-cols-12 gap-12 md:gap-16"
          style={{ borderTop: "1px solid var(--divider)" }}
        >
          <div className="lg:col-span-4">
            <p
              className="text-xs tracking-[0.2em] uppercase mb-8"
              style={{ color: "rgba(255,255,255,0.72)" }}
            >
              About Me
            </p>
            <h2
              className="font-syne font-bold leading-[1.05] mb-4"
              style={{ fontSize: "clamp(28px, 3.5vw, 42px)", color: "#FFFFFF" }}
            >
              Ask Me Anything
            </h2>
            <p className="text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.78)" }}>
              Ask about my work, story, and strengths. I can also suggest what to ask next.
            </p>
          </div>

          <div className="lg:col-span-8">
            <div
              className="rounded-2xl p-5 md:p-6"
              style={{
                border: "1px solid rgba(255,255,255,0.14)",
                background: "rgba(255,255,255,0.035)",
                boxShadow: "0 18px 40px rgba(0,0,0,0.35)",
              }}
            >
              <div className="mb-4 flex items-center justify-between">
                <p className="text-xs uppercase tracking-[0.2em]" style={{ color: "rgba(255,255,255,0.62)" }}>
                  Portfolio Chat
                </p>
                <span
                  className="rounded-full px-2.5 py-1 text-[11px]"
                  style={{ background: "rgba(102,211,143,0.15)", color: "#9CE3B6", border: "1px solid rgba(102,211,143,0.45)" }}
                >
                  Personalized
                </span>
              </div>
              <div className="max-h-[420px] overflow-auto pr-1 space-y-3">
                {messages.map((message, idx) => (
                  <div
                    key={idx}
                    className={`flex ${message.role === "user" ? "justify-end" : "justify-start"}`}
                  >
                    {message.role === "bot" && (
                      <div
                        className="mr-2 h-8 w-8 shrink-0 overflow-hidden rounded-full self-end"
                        style={{ border: "1px solid rgba(255,255,255,0.28)" }}
                      >
                        <img src="/profile.png" alt="Ria icon" className="h-full w-full object-cover object-top" />
                      </div>
                    )}
                    <div
                      className="max-w-[85%] rounded-2xl px-4 py-3 text-sm md:text-[15px] leading-relaxed"
                      style={{
                        background: message.role === "user" ? "#4f6550" : "rgba(255,255,255,0.09)",
                        color: "#F3F5F8",
                        border: message.role === "user" ? "1px solid rgba(255,255,255,0.2)" : "1px solid rgba(255,255,255,0.12)",
                      }}
                    >
                      {message.text}
                    </div>
                  </div>
                ))}
              </div>

              <form
                className="mt-5 flex gap-2"
                onSubmit={(event) => {
                  event.preventDefault();
                  askQuestion(input);
                }}
              >
                <input
                  value={input}
                  onChange={(event) => setInput(event.target.value)}
                  placeholder="Ask about role, tools, process, experience..."
                  className="flex-1 rounded-xl px-4 py-3 text-sm outline-none"
                  style={{
                    background: "rgba(255,255,255,0.08)",
                    color: "#F3F5F8",
                    border: "1px solid rgba(255,255,255,0.2)",
                  }}
                />
                <button
                  type="submit"
                  className="rounded-xl px-4 py-3 text-sm font-medium transition-colors hover:bg-[#6f8d70]"
                  style={{ background: "#5e7a5f", color: "#ffffff" }}
                >
                  Ask
                </button>
              </form>

              <p className="mt-4 text-xs uppercase tracking-[0.18em]" style={{ color: "rgba(255,255,255,0.6)" }}>
                Suggested starters
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                {suggestions.map((suggestion) => (
                  <button
                    key={suggestion}
                    type="button"
                    onClick={() => askQuestion(suggestion)}
                    className="rounded-full px-3 py-1.5 text-xs md:text-sm transition-colors hover:bg-white/20"
                    style={{
                      background: "rgba(255,255,255,0.08)",
                      color: "#E7EBF2",
                      border: "1px solid rgba(255,255,255,0.16)",
                    }}
                  >
                    {suggestion}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

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
                  color: "#F3F5F8",
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
              className="mt-6"
              style={{ color: "#E5EAF2", fontSize: "clamp(18px, 2vw, 28px)", maxWidth: "900px", lineHeight: 1.5 }}
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
              style={{ borderColor: "rgba(255,255,255,0.55)" }}
            >
              <ArrowDown className="w-3 h-3" style={{ color: "#E5EAF2" }} />
            </div>
            <span className="text-xs tracking-[0.2em] uppercase" style={{ color: "#D8DEE9" }}>
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
          <ProjectCard project={projects[3]} index={2} className="h-[340px] md:h-[420px]" />
          <ProjectCard project={projects[2]} index={3} className="h-[340px] md:h-[420px]" />
          <ProjectCard project={projects[4]} index={4} className="h-[340px] md:h-[420px]" />
        </div>
      </section>

      {/* ════════════════════════════════════════
          ABOUT ME (CHATBOT STYLE)
         ════════════════════════════════════════ */}
      <AboutChatbotSection />

      {/* ════════════════════════════════════════
          TESTIMONIALS
         ════════════════════════════════════════ */}
      <TestimonialsCarousel />

      {/* ════════════════════════════════════════
          & MORE — accordion
         ════════════════════════════════════════ */}
      <MoreSection />

    </div>
  );
}