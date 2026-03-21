import { useRef } from "react";
import { Link } from "react-router";
import { motion, useInView } from "motion/react";
import { ArrowLeft, ArrowUpRight } from "lucide-react";

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

function GalleryImg({ src, alt, className = "" }: { src: string; alt: string; className?: string }) {
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

export function CarromClubPage() {
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
            Facilitation · Community · 2024–Present
          </p>

          <h1
            className="font-bold leading-[1.05] mb-4"
            style={{ fontSize: "clamp(40px, 6vw, 72px)", color: "var(--fg)", letterSpacing: "-0.02em" }}
          >
            Carrom Club
          </h1>

          <p className="text-xl md:text-2xl mb-10" style={{ color: "var(--fg-2)" }}>
            NYC – Community & Culture Through Play
          </p>

          <div className="flex flex-wrap gap-8 pt-8" style={{ borderTop: "1px solid var(--divider)" }}>
            {[
              { label: "Role", value: "Co-Founder" },
              { label: "Timeline", value: "2024 – Present" },
              { label: "Social", value: "@thecarromclubnyc", href: "https://instagram.com/thecarromclubnyc" },
            ].map((m) => (
              <div key={m.label}>
                <p className="text-xs tracking-[0.18em] uppercase mb-1" style={{ color: "var(--fg-3)" }}>{m.label}</p>
                {m.href ? (
                  <a
                    href={m.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-sm font-medium hover:underline underline-offset-4"
                    style={{ color: "var(--fg)" }}
                  >
                    {m.value} <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                ) : (
                  <p className="text-sm font-medium" style={{ color: "var(--fg)" }}>{m.value}</p>
                )}
              </div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* ── Overview ── */}
      <section className="px-6 md:px-12 lg:px-20 py-16" style={{ background: "var(--bg-2)" }}>
        <div className="max-w-5xl mx-auto">
          <Reveal>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
              <div className="lg:col-span-3">
                <p className="text-xs tracking-[0.2em] uppercase" style={{ color: "var(--fg-3)" }}>Overview</p>
              </div>
              <div className="lg:col-span-9">
                <p className="text-base md:text-lg leading-relaxed" style={{ color: "var(--fg)" }}>
                  Co-founded a community-led carrom club in New York City with the goal of creating a welcoming space for South Asian creatives and allies. The club regularly partners with local South Asian artists, designers, and musicians to host gatherings that blend traditional games with art, music, and conversation.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── Brand ── */}
      <section className="px-6 md:px-12 lg:px-20 py-16 max-w-5xl mx-auto">
        <Reveal>
          <p className="text-xs tracking-[0.2em] uppercase mb-8" style={{ color: "var(--fg-3)" }}>
            Brand & Identity
          </p>
          {/* Row: wide poster + circle logo */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <GalleryImg src="/cc-01.png" alt="Carrom Club x Fontainhas poster" className="aspect-square" />
            <GalleryImg src="/cc-02.png" alt="Carrom Club logo" className="aspect-square" />
          </div>
        </Reveal>
      </section>

      {/* ── Gallery row 1 ── */}
      <section className="px-6 md:px-12 lg:px-20 py-4 max-w-5xl mx-auto">
        <Reveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <GalleryImg src="/cc-03.png" alt="Carrom Club at Fontainhas" className="aspect-square" />
            <GalleryImg src="/cc-04.png" alt="Iced coffee with Carrom Club flyer" className="aspect-square" />
            <GalleryImg src="/cc-05.png" alt="Carrom board pieces closeup" className="aspect-square" />
          </div>
        </Reveal>
      </section>

      {/* ── Gallery row 2: wide + portrait ── */}
      <section className="px-6 md:px-12 lg:px-20 py-4 max-w-5xl mx-auto">
        <Reveal>
          <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
            <GalleryImg src="/cc-06.png" alt="Carrom board in play" className="md:col-span-7 aspect-[4/3]" />
            <GalleryImg src="/cc-07.png" alt="Family at carrom event" className="md:col-span-5 aspect-[4/3]" />
          </div>
        </Reveal>
      </section>

      {/* ── Gallery row 3 ── */}
      <section className="px-6 md:px-12 lg:px-20 py-4 max-w-5xl mx-auto">
        <Reveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <GalleryImg src="/cc-08.png" alt="Woman playing carrom" className="aspect-square" />
            <GalleryImg src="/cc-09.png" alt="Event gathering" className="aspect-square" />
            <GalleryImg src="/cc-10.png" alt="Group playing carrom" className="aspect-square" />
          </div>
        </Reveal>
      </section>

      {/* ── Gallery row 4: two full group photos ── */}
      <section className="px-6 md:px-12 lg:px-20 py-4 max-w-5xl mx-auto">
        <Reveal>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <GalleryImg src="/cc-11.png" alt="Group photo — ok sign" className="aspect-[4/3]" />
            <GalleryImg src="/cc-12.png" alt="Large group photo" className="aspect-[4/3]" />
          </div>
        </Reveal>
      </section>

      {/* ── Impact ── */}
      <section className="px-6 md:px-12 lg:px-20 py-20 mt-8" style={{ background: "var(--bg-2)" }}>
        <div className="max-w-5xl mx-auto">
          <Reveal>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              {[
                { value: "15+", label: "South Asian collaborators" },
                { value: "5+", label: "Events hosted" },
                { value: "200+", label: "Attendees" },
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
              To date, we've partnered with over 15 South Asian collaborators and hosted 5+ events with 200+ attendees. Our growing Instagram community continues to reflect a vibrant interest in reimagining cultural spaces through joy, connection, and collaboration.
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
