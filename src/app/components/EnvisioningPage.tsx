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
    <div className={`overflow-hidden rounded-2xl ${className}`}>
      <img
        src={src}
        alt={alt}
        className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
      />
    </div>
  );
}

export function EnvisioningPage() {
  return (
    <div style={{ background: "var(--bg)", color: "var(--fg)", minHeight: "100vh" }}>

      {/* ── Full-width banner ── */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
        className="w-full overflow-hidden"
        style={{ maxHeight: "420px" }}
      >
        <img
          src="/ev-01.png"
          alt="Envisioning the Future You event banner"
          className="w-full h-full object-cover"
          style={{ maxHeight: "420px" }}
        />
      </motion.div>

      {/* ── Text section ── */}
      <section className="px-6 md:px-12 lg:px-20 py-12 max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
        >
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-sm mb-8 transition-opacity duration-200 hover:opacity-60"
            style={{ color: "var(--fg-2)" }}
          >
            <ArrowLeft className="w-4 h-4" />
            Back to home
          </Link>

          {/* Meta row */}
          <div className="flex flex-wrap gap-6 mb-8 text-sm" style={{ color: "var(--fg-2)" }}>
            <span>
              <span className="font-semibold" style={{ color: "var(--fg)" }}>Role</span>
              {" "}· Facilitator
            </span>
            <span>
              <span className="font-semibold" style={{ color: "var(--fg)" }}>Timeline</span>
              {" "}· 2024
            </span>
            <span>
              <span className="font-semibold" style={{ color: "var(--fg)" }}>Collaborators</span>
              {" "}· Rohitha Ramala, Cyrnie Abarca
            </span>
          </div>

          {/* Overview */}
          <p className="text-base md:text-lg leading-relaxed max-w-3xl" style={{ color: "var(--fg-2)" }}>
            Facilitated a career development workshop for early-career women designers in partnership with Women in Design and Products of Design. The program featured tailored vision-boarding exercises designed to promote career clarity through guided self-reflection and goal-setting. Participants reported increased confidence and a clearer sense of direction in their professional paths. Additionally, I organized structured networking opportunities with senior designers, which led to the development of ongoing mentor-mentee relationships and expanded access to industry mentorship.
          </p>
        </motion.div>
      </section>

      {/* ── Photo grid — 2 columns × 3 rows ── */}
      <section className="px-6 md:px-12 lg:px-20 pb-4 max-w-5xl mx-auto">
        <Reveal>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <GalleryImg src="/ev-05.png" alt="Participants at workshop table" className="aspect-[4/3]" />
            <GalleryImg src="/ev-02.png" alt="Facilitator with participants" className="aspect-[4/3]" />
          </div>
        </Reveal>
      </section>

      <section className="px-6 md:px-12 lg:px-20 py-4 max-w-5xl mx-auto">
        <Reveal>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <GalleryImg src="/ev-04.png" alt="Vision boarding materials on table" className="aspect-[4/3]" />
            <GalleryImg src="/ev-10.png" alt="Participants working at the table" className="aspect-[4/3]" />
          </div>
        </Reveal>
      </section>

      <section className="px-6 md:px-12 lg:px-20 py-4 max-w-5xl mx-auto">
        <Reveal>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <GalleryImg src="/ev-06.png" alt="Vision board collage process" className="aspect-[4/3]" />
            <GalleryImg src="/ev-07.png" alt="Team presenting at Products of Design" className="aspect-[4/3]" />
          </div>
        </Reveal>
      </section>

      {/* ── Bottom: portrait poster + closeup ── */}
      <section className="px-6 md:px-12 lg:px-20 py-4 pb-20 max-w-5xl mx-auto">
        <Reveal>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4" style={{ height: "520px" }}>
            <GalleryImg src="/ev-08.png" alt="Envisioning the Future You event poster" className="h-full" />
            <GalleryImg src="/ev-09.png" alt="Vision board — Who Are You Close Up" className="h-full" />
          </div>
        </Reveal>
      </section>

      {/* ── Back ── */}
      <section className="px-6 md:px-12 lg:px-20 py-12 max-w-5xl mx-auto">
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
