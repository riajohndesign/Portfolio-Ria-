import { useRef } from "react";
import { Link } from "react-router";
import { motion, useInView } from "motion/react";
import { ArrowLeft } from "lucide-react";

function Reveal({ children, delay = 0, className = "" }: { children: React.ReactNode; delay?: number; className?: string }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  return (
    <motion.div ref={ref} className={className}
      initial={{ opacity: 0, y: 24 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </motion.div>
  );
}

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-xs tracking-[0.2em] uppercase mb-4" style={{ color: "var(--fg-3)" }}>
      {children}
    </p>
  );
}

function Divider() {
  return <div className="my-16" style={{ borderTop: "1px solid var(--divider)" }} />;
}

export function BubblePage() {
  return (
    <div style={{ background: "var(--bg)", color: "var(--fg)", minHeight: "100vh" }}>

      {/* ── Hero ── */}
      <section className="px-6 md:px-12 lg:px-20 pt-32 pb-16 max-w-5xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}>
          <Link to="/" className="inline-flex items-center gap-2 text-sm mb-10 transition-opacity duration-200 hover:opacity-60" style={{ color: "var(--fg-2)" }}>
            <ArrowLeft className="w-4 h-4" /> Back to home
          </Link>

          <p className="text-xs tracking-[0.2em] uppercase mb-4" style={{ color: "var(--fg-3)" }}>
            Case Study · MFA Products of Design · 10 Weeks
          </p>
          <h1 className="font-bold leading-[1.05] mb-4" style={{ fontSize: "clamp(40px, 6vw, 72px)", letterSpacing: "-0.02em" }}>
            Bubble
          </h1>
          <p className="text-xl md:text-2xl mb-10" style={{ color: "var(--fg-2)" }}>
            Aid for Subway-Induced Anxiety
          </p>

          {/* Meta + Overview */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 pt-8 items-start" style={{ borderTop: "1px solid var(--divider)" }}>
            <div className="lg:col-span-3 flex flex-col gap-6">
              {[
                { label: "Context", value: "MFA Products of Design" },
                { label: "Timeline", value: "10 Weeks" },
                { label: "Collaborators", value: "Sama Srinivas, Nigel Koen, Roza Pan" },
                { label: "Responsibilities", value: "Design Research, User Testing, Storytelling, User Interviews, Prototyping" },
              ].map((m) => (
                <div key={m.label}>
                  <p className="text-xs tracking-[0.18em] uppercase mb-1" style={{ color: "var(--fg-3)" }}>{m.label}</p>
                  <p className="text-sm font-medium leading-relaxed" style={{ color: "var(--fg)" }}>{m.value}</p>
                </div>
              ))}
            </div>
            <div className="lg:col-span-9">
              <SectionLabel>Overview</SectionLabel>
              <p className="text-base md:text-lg leading-relaxed" style={{ color: "var(--fg)" }}>
                Bubble is a hybrid system that acts as a personal sanctuary and emergency aid, offering immediate relief, long term tools, and community support for those who suffer from acute anxiety and panic disorders in one of the most stressful public transit systems in the world.
              </p>
            </div>
          </div>
        </motion.div>
      </section>

      {/* ── Cover image ── */}
      <section className="px-6 md:px-12 lg:px-20 pb-8 max-w-5xl mx-auto">
        <Reveal>
          <div className="rounded-2xl overflow-hidden">
            <img src="/bubble-02.png" alt="Bubble app overview" className="w-full h-auto block" />
          </div>
        </Reveal>
      </section>

      {/* ── Problem ── */}
      <section className="px-6 md:px-12 lg:px-20 py-8 max-w-5xl mx-auto">
        <Reveal>
          <Divider />
          <SectionLabel>Problem</SectionLabel>
          <h2 className="font-bold mb-8 leading-snug" style={{ fontSize: "clamp(22px, 3vw, 32px)" }}>
            Panic disorders are characterized by unexpected and repeated panic attacks.
          </h2>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
            <div className="p-8 rounded-2xl" style={{ border: "1px solid var(--divider)", background: "var(--bg-2)" }}>
              <p className="font-bold mb-3" style={{ fontSize: "clamp(48px, 6vw, 72px)", color: "var(--fg)", letterSpacing: "-0.02em" }}>31%</p>
              <p className="text-sm leading-relaxed" style={{ color: "var(--fg-2)" }}>
                "About 31% of adults will experience anxiety at some point in their life — it's the most common mental disorder in the US."
              </p>
            </div>
            <div className="p-8 rounded-2xl" style={{ border: "1px solid var(--divider)", background: "var(--bg-2)" }}>
              <p className="font-bold mb-3" style={{ fontSize: "clamp(48px, 6vw, 72px)", color: "var(--fg)", letterSpacing: "-0.02em" }}>4.7%</p>
              <p className="text-sm leading-relaxed" style={{ color: "var(--fg-2)" }}>
                "An estimated 4.7% of US adults experience panic disorder at some time in their lives."
              </p>
            </div>
          </div>

          <h3 className="font-semibold text-lg mb-3" style={{ color: "var(--fg)" }}>What happens during a panic attack?</h3>
          <p className="text-sm mb-6" style={{ color: "var(--fg-2)" }}>Each person experiences symptoms differently and at varying degrees of intensity.</p>
          <div className="flex flex-wrap gap-3 mb-8">
            {["Fast Heartbeat", "Sweating", "Trembling", "Shortness of Breath", "Sense of Terror"].map((s) => (
              <span key={s} className="px-4 py-2 rounded-full text-sm" style={{ border: "1px solid var(--divider)", background: "var(--bg-2)", color: "var(--fg-2)" }}>{s}</span>
            ))}
          </div>
          <p className="text-base md:text-lg leading-relaxed font-medium" style={{ color: "var(--fg)" }}>
            We realized these symptoms could be exacerbated in high trigger environments — placing <em>Vulnerable Individuals</em> in <em>High-Trigger Environments</em> like the NYC subway.
          </p>
        </Reveal>
      </section>

      {/* ── Opportunity ── */}
      <section className="px-6 md:px-12 lg:px-20 py-8 max-w-5xl mx-auto">
        <Reveal>
          <Divider />
          <SectionLabel>Opportunity</SectionLabel>
          <h2 className="font-bold mb-10 leading-snug" style={{ fontSize: "clamp(22px, 3vw, 32px)" }}>
            How might we improve supportive responses for people who experience panic attacks on the New York City subway?
          </h2>
          <div className="rounded-2xl overflow-hidden">
            <img src="/bubble-05.png" alt="Research and interviews" className="w-full h-auto block" />
          </div>
        </Reveal>
      </section>

      {/* ── Research ── */}
      <section className="px-6 md:px-12 lg:px-20 py-8 max-w-5xl mx-auto">
        <Reveal>
          <Divider />
          <SectionLabel>Research</SectionLabel>
          <p className="text-base md:text-lg leading-relaxed mb-10" style={{ color: "var(--fg-2)" }}>
            Following initial secondary research, we conducted a survey to gather insights into individuals' experiences in the subway, receiving over <strong style={{ color: "var(--fg)" }}>50 responses</strong>. To deepen our understanding, we selected four respondents for in-depth, one-hour interviews to explore their perspectives and behaviors in greater detail. Additionally, we conducted on-site interviews at <strong style={{ color: "var(--fg)" }}>Union Square Subway Station</strong> to supplement our findings with real-time, contextual observations and firsthand accounts.
          </p>

          <SectionLabel>Insights from the Interviews</SectionLabel>
          <div className="flex flex-col gap-4">
            {[
              "Rush hour and late-night hours emerged as the most common trigger times for anxiety in the subway.",
              "Individuals tended to focus intensely on their immediate environment as a way to manage their discomfort.",
              "While coping mechanisms varied, most were solitary and aimed at managing symptoms independently.",
              "The symptom escalation phase was consistently identified as the most distressing and memorable part of a panic attack experience.",
            ].map((insight, i) => (
              <div key={i} className="flex gap-4 p-5 rounded-xl" style={{ background: "var(--bg-2)", border: "1px solid var(--divider)" }}>
                <span className="font-bold text-sm flex-shrink-0 mt-0.5" style={{ color: "var(--fg-3)" }}>{String(i + 1).padStart(2, "0")}</span>
                <p className="text-sm leading-relaxed" style={{ color: "var(--fg-2)" }}>{insight}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </section>

      {/* ── User Journey & Persona ── */}
      <section className="px-6 md:px-12 lg:px-20 py-8 max-w-5xl mx-auto">
        <Reveal>
          <Divider />
          <SectionLabel>User Journey & Persona</SectionLabel>
          <div className="rounded-2xl overflow-hidden">
            <img src="/bubble-01.png" alt="User journey and persona — Yuga Gao" className="w-full h-auto block" />
          </div>
        </Reveal>
      </section>

      {/* ── Solution ── */}
      <section className="px-6 md:px-12 lg:px-20 py-8 max-w-5xl mx-auto">
        <Reveal>
          <Divider />
          <SectionLabel>Solution</SectionLabel>
          <p className="text-base md:text-lg leading-relaxed mb-6" style={{ color: "var(--fg-2)" }}>
            Based on our primary and secondary research, we found that <strong style={{ color: "var(--fg)" }}>Nature and Music</strong> have proven to be extremely beneficial in relieving panic attack symptoms. We developed two interventions:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
            <div className="p-6 rounded-2xl" style={{ border: "1px solid var(--divider)", background: "var(--bg-2)" }}>
              <p className="font-semibold mb-2" style={{ color: "var(--fg)" }}>Physical Intervention</p>
              <p className="text-sm leading-relaxed" style={{ color: "var(--fg-2)" }}>An AR experience using subway car screens to immerse users in calming nature visuals — creating a temporary "bubble" away from the triggering environment.</p>
            </div>
            <div className="p-6 rounded-2xl" style={{ border: "1px solid var(--divider)", background: "var(--bg-2)" }}>
              <p className="font-semibold mb-2" style={{ color: "var(--fg)" }}>Digital Intervention</p>
              <p className="text-sm leading-relaxed" style={{ color: "var(--fg-2)" }}>A mobile app with an SOS feature for immediate panic attack support, voice note saving, calming sounds, and a routine-building dashboard.</p>
            </div>
          </div>
          <div className="rounded-2xl overflow-hidden">
            <img src="/bubble-03.png" alt="Prototype and user testing" className="w-full h-auto block" />
          </div>
        </Reveal>
      </section>

      {/* ── User Testing Insights ── */}
      <section className="px-6 md:px-12 lg:px-20 py-8 max-w-5xl mx-auto">
        <Reveal>
          <Divider />
          <SectionLabel>Insights from User Testing</SectionLabel>
          <div className="flex flex-col gap-4">
            {[
              { title: "Nature-Inspired Visuals Promote Calm", body: "Users consistently reported feeling calmer when exposed to visuals of nature. Environments that incorporate large, open spaces and gentle, moving elements were especially effective in reducing anxiety." },
              { title: "Immersive, Yet Aware Experiences", body: "While users appreciated immersive environments, they emphasized the importance of remaining aware of their physical surroundings, especially in a public space like the subway. This balance is essential for fostering a sense of safety and feeling grounded." },
              { title: "Quick Access to Emergency Support", body: "There was a strong preference for easy and immediate access to the SOS page — such as through a widget, lock screen shortcut, or direct app link — especially during the early signs of a panic attack." },
              { title: "Calendar-Like Dashboard for Routine Building", body: "Users responded positively to a dashboard modeled after a calendar, allowing them to plan and structure their daily routines. They noted that having a consistent routine helped them manage anxious thoughts and reduces the likelihood of panic attacks." },
            ].map((insight, i) => (
              <div key={i} className="flex gap-4 p-5 rounded-xl" style={{ background: "var(--bg-2)", border: "1px solid var(--divider)" }}>
                <span className="font-bold text-sm flex-shrink-0 mt-0.5" style={{ color: "var(--fg-3)" }}>{String(i + 1).padStart(2, "0")}</span>
                <div>
                  <p className="text-sm font-semibold mb-1" style={{ color: "var(--fg)" }}>{insight.title}</p>
                  <p className="text-sm leading-relaxed" style={{ color: "var(--fg-2)" }}>{insight.body}</p>
                </div>
              </div>
            ))}
          </div>
        </Reveal>
      </section>

      {/* ── Prototype Refinements ── */}
      <section className="px-6 md:px-12 lg:px-20 py-8 max-w-5xl mx-auto">
        <Reveal>
          <Divider />
          <SectionLabel>Prototype Refinements</SectionLabel>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div className="p-6 rounded-2xl" style={{ border: "1px solid var(--divider)", background: "var(--bg-2)" }}>
              <p className="font-semibold mb-3" style={{ color: "var(--fg)" }}>Digital</p>
              <ul className="flex flex-col gap-2">
                {["Reorganized the SOS navigation", "Bubble SOS widget on lock screen", "Dashboard for quick access", "SOS at the middle of the navigation", "Spotify / Apple Music integration", "Deep Breathing feature", "Calming sounds recommendations"].map((item) => (
                  <li key={item} className="text-sm flex gap-2" style={{ color: "var(--fg-2)" }}>
                    <span style={{ color: "var(--fg-3)" }}>+</span> {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="p-6 rounded-2xl" style={{ border: "1px solid var(--divider)", background: "var(--bg-2)" }}>
              <p className="font-semibold mb-3" style={{ color: "var(--fg)" }}>Physical</p>
              <ul className="flex flex-col gap-2">
                {["Screen opacity fades in and out as train approaches subway station", "Door window would not be the screen"].map((item) => (
                  <li key={item} className="text-sm flex gap-2" style={{ color: "var(--fg-2)" }}>
                    <span style={{ color: "var(--fg-3)" }}>+</span> {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="rounded-2xl overflow-hidden">
            <img src="/bubble-04.png" alt="Digital and physical prototype refinements" className="w-full h-auto block" />
          </div>
        </Reveal>
      </section>

      {/* ── Back ── */}
      <section className="px-6 md:px-12 lg:px-20 py-16 max-w-5xl mx-auto">
        <Reveal>
          <Link to="/" className="inline-flex items-center gap-2 text-sm font-medium transition-opacity duration-200 hover:opacity-60" style={{ color: "var(--fg-2)" }}>
            <ArrowLeft className="w-4 h-4" /> Back to home
          </Link>
        </Reveal>
      </section>
    </div>
  );
}
