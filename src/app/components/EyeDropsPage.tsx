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
  return <p className="text-xs tracking-[0.2em] uppercase mb-4" style={{ color: "var(--fg-3)" }}>{children}</p>;
}

function Divider() {
  return <div className="my-16" style={{ borderTop: "1px solid var(--divider)" }} />;
}

function Card({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={`rounded-2xl p-6 ${className}`} style={{ border: "1px solid var(--divider)", background: "var(--bg-2)" }}>
      {children}
    </div>
  );
}

export function EyeDropsPage() {
  return (
    <div style={{ background: "var(--bg)", color: "var(--fg)", minHeight: "100vh" }}>

      {/* ── Hero ── */}
      <section className="px-6 md:px-12 lg:px-20 pt-32 pb-16 max-w-5xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}>
          <Link to="/" className="inline-flex items-center gap-2 text-sm mb-10 transition-opacity hover:opacity-60" style={{ color: "var(--fg-2)" }}>
            <ArrowLeft className="w-4 h-4" /> Back to home
          </Link>

          <div className="flex flex-wrap gap-2 mb-6">
            {["User Research", "Healthcare", "Clinical Trials", "Service Design"].map(t => (
              <span key={t} className="text-xs px-3 py-1 rounded-full" style={{ border: "1px solid var(--divider)", color: "var(--fg-2)" }}>{t}</span>
            ))}
          </div>

          <h1 className="font-bold leading-[1.05] mb-3" style={{ fontSize: "clamp(40px, 6vw, 72px)", letterSpacing: "-0.02em" }}>
            Eye Drops Adherence
          </h1>
          <p className="text-xl md:text-2xl mb-10" style={{ color: "var(--fg-2)" }}>Medication Adherence Device</p>

          {/* Meta strip */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-px mb-10 rounded-2xl overflow-hidden" style={{ border: "1px solid var(--divider)" }}>
            {[
              { k: "Role", v: "UX Researcher & Product Designer" },
              { k: "Year", v: "2024" },
              { k: "Type", v: "User Research" },
              { k: "Tools", v: "Figma · FigJam · Maze · IDEO Methods" },
            ].map((m, i) => (
              <div key={i} className="px-5 py-4" style={{ background: "var(--bg-2)" }}>
                <p className="text-xs tracking-[0.14em] uppercase mb-1" style={{ color: "var(--fg-3)" }}>{m.k}</p>
                <p className="text-sm leading-snug" style={{ color: "var(--fg)" }}>{m.v}</p>
              </div>
            ))}
          </div>

          {/* NDA notice */}
          <div className="flex items-start gap-3 px-4 py-3 rounded-xl" style={{ border: "1px solid var(--divider)", background: "var(--bg-2)" }}>
            <div className="w-1.5 h-1.5 rounded-full mt-1.5 flex-shrink-0" style={{ background: "var(--fg-3)" }} />
            <p className="text-sm leading-relaxed" style={{ color: "var(--fg-2)" }}>
              Some project artifacts have been omitted or recreated due to NDA. All recreated artifacts reflect the actual structure and content of the original research.
            </p>
          </div>
        </motion.div>
      </section>

      {/* ── Overview ── */}
      <section className="px-6 md:px-12 lg:px-20 py-8 max-w-5xl mx-auto">
        <Reveal>
          <p className="font-light leading-snug mb-10" style={{ fontSize: "clamp(22px, 3vw, 32px)", letterSpacing: "-0.015em", color: "var(--fg)" }}>
            "Making it easier to get the right data<br />from the right patients at the right time."
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div>
              <p className="text-xs tracking-[0.12em] uppercase mb-3" style={{ color: "var(--fg-3)" }}>Overview</p>
              <p className="text-base leading-relaxed" style={{ color: "var(--fg-2)" }}>
                This project started as a general medication adherence tracker. Through research, we found a much more specific and urgent problem: clinical trials tracking eyedrop treatments couldn't trust the data they were collecting. Participants self-reported, coordinators found out too late, and nobody had visibility into whether the drops were even being used correctly.
              </p>
              <p className="text-base leading-relaxed mt-4" style={{ color: "var(--fg-2)" }}>
                I was part of a small collaborative team that used research to figure out what the product should actually become — and built the case for pivoting it toward clinical research organizations.
              </p>
            </div>
            <div>
              <p className="text-xs tracking-[0.12em] uppercase mb-3" style={{ color: "var(--fg-3)" }}>The Challenge</p>
              <p className="text-base leading-relaxed" style={{ color: "var(--fg-2)" }}>
                The core challenge wasn't building a tracker. It was understanding why the existing approach was structurally broken — for coordinators who needed live data, investigators who needed defensible data, and elderly patients who weren't going to use an app on top of managing a medical condition.
              </p>
              <p className="text-base leading-relaxed mt-4" style={{ color: "var(--fg-2)" }}>
                Any solution had to work invisibly for patients, while giving clinical teams real-time visibility that could actually change outcomes.
              </p>
            </div>
          </div>
        </Reveal>
      </section>

      {/* ── Stats ── */}
      <section className="px-6 md:px-12 lg:px-20 py-8 max-w-5xl mx-auto">
        <Reveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              { num: "5", label: "Stakeholder interviews", sub: "4 CRCs · 1 Principal Investigator" },
              { num: "3", label: "Research methods", sub: "Interviews · Secondary research · Service blueprinting" },
              { num: "4", label: "Core findings", sub: "Each mapped to a direct design decision" },
            ].map(s => (
              <Card key={s.label} className="text-center">
                <p className="font-light mb-2" style={{ fontSize: "48px", letterSpacing: "-0.03em", color: "var(--fg)" }}>{s.num}</p>
                <p className="text-xs tracking-[0.08em] uppercase mb-1" style={{ color: "var(--fg-3)" }}>{s.label}</p>
                <p className="text-sm" style={{ color: "var(--fg-2)" }}>{s.sub}</p>
              </Card>
            ))}
          </div>
        </Reveal>
      </section>

      {/* ── My Contribution ── */}
      <section className="px-6 md:px-12 lg:px-20 py-8 max-w-5xl mx-auto">
        <Reveal>
          <Divider />
          <SectionLabel>My Contribution</SectionLabel>
          <h2 className="font-semibold mb-8" style={{ fontSize: "clamp(20px, 2.5vw, 26px)", letterSpacing: "-0.02em" }}>What I worked on</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <p className="text-base leading-relaxed" style={{ color: "var(--fg-2)" }}>
              My contributions sat mostly in the discovery and synthesis phases. I led the secondary research — digging into FDA compliance requirements, existing adherence tools on the market, and published literature on how elderly patients manage medication day to day. That groundwork shaped the questions we brought into interviews.
            </p>
            <div>
              <p className="text-base leading-relaxed" style={{ color: "var(--fg-2)" }}>
                During the stakeholder sessions, I co-conducted interviews and handled documentation — capturing the exact language coordinators used to describe their frustrations, which became the backbone of the findings.
              </p>
              <p className="text-base leading-relaxed mt-4" style={{ color: "var(--fg-2)" }}>
                After interviews wrapped, I took the lead on synthesis and built the service blueprint — mapping how CROs operate across a full trial and identifying exactly where a connected device could fit in without disrupting what already works.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {[
              { ownership: "Led independently", title: "Secondary research", body: "FDA compliance, market landscape, elderly adherence literature" },
              { ownership: "Collaborative", title: "Stakeholder interviews", body: "Co-conducted sessions, led note-taking and documentation" },
              { ownership: "Led independently", title: "Research synthesis", body: "Identified four core findings, each connected to a design decision" },
              { ownership: "Led independently", title: "Service blueprint", body: "Mapped CRO lifecycle to find where the product fits" },
            ].map((c, i) => (
              <div key={i} className="rounded-xl p-4" style={{ border: "1px solid var(--divider)", background: "var(--bg-2)", borderLeft: i !== 1 ? "2px solid var(--fg)" : "2px solid var(--divider)" }}>
                <p className="text-xs tracking-[0.1em] uppercase mb-2" style={{ color: "var(--fg-3)" }}>{c.ownership}</p>
                <p className="text-sm font-semibold mb-1" style={{ color: "var(--fg)" }}>{c.title}</p>
                <p className="text-xs leading-relaxed" style={{ color: "var(--fg-2)" }}>{c.body}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </section>

      {/* ── Research Process ── */}
      <section className="px-6 md:px-12 lg:px-20 py-8 max-w-5xl mx-auto">
        <Reveal>
          <Divider />
          <SectionLabel>Research · Process</SectionLabel>
          <h2 className="font-semibold mb-8" style={{ fontSize: "clamp(20px, 2.5vw, 26px)", letterSpacing: "-0.02em" }}>How we approached it</h2>
          <div>
            {[
              { n: "01", title: "Secondary research — understand the landscape first", body: "Before talking to anyone, I spent time understanding the clinical trial world. FDA 21 CFR Part 11 requirements, what other adherence tools existed, and what the published literature said about how elderly patients manage eyedrops. This gave us a foundation to ask much sharper questions in interviews — and it surfaced regulatory constraints that never came up in conversation but turned out to be non-negotiable." },
              { n: "02", title: "Stakeholder interviews — find the real workflow, not the ideal one", body: "We spoke to 4 Clinical Research Coordinators and 1 Principal Investigator. The goal wasn't to understand what they wished the process was — it was to understand what it actually looked like on a normal Tuesday. The gap between those two things is where the real design problems lived. Every coordinator described the same structural problem, just in different words." },
              { n: "03", title: "Synthesis — connect every finding to a decision", body: "I synthesized interview notes and secondary research into four core findings. The principle throughout: every finding had to connect to a specific design decision. Research that doesn't change something isn't research — it's documentation. Each insight below traces directly to a feature, constraint, or architectural choice in the concept." },
              { n: "04", title: "Service blueprint — map the whole system before designing any piece of it", body: "I built a service blueprint to map how CROs operate across a full trial lifecycle — from setup through closeout — across five stakeholder lanes. The blueprint answered a specific question: where does a connected device actually fit, and where would it cause friction? Several of the most important concept decisions came directly from the blueprint, not the interviews." },
            ].map((step, i, arr) => (
              <div key={step.n} className="flex gap-6 py-6" style={{ borderBottom: i < arr.length - 1 ? "1px solid var(--divider)" : "none" }}>
                <span className="font-light flex-shrink-0 w-12" style={{ fontSize: "32px", letterSpacing: "-0.03em", color: "var(--divider)" }}>{step.n}</span>
                <div>
                  <p className="text-sm font-semibold mb-2" style={{ color: "var(--fg)" }}>{step.title}</p>
                  <p className="text-sm leading-relaxed" style={{ color: "var(--fg-2)" }}>{step.body}</p>
                </div>
              </div>
            ))}
          </div>
        </Reveal>
      </section>

      {/* ── Stakeholders ── */}
      <section className="px-6 md:px-12 lg:px-20 py-8 max-w-5xl mx-auto">
        <Reveal>
          <Divider />
          <SectionLabel>Research · Who We Spoke To</SectionLabel>
          <h2 className="font-semibold mb-8" style={{ fontSize: "clamp(20px, 2.5vw, 26px)", letterSpacing: "-0.02em" }}>The people closest to the problem</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              { abbr: "PI", role: "Principal Investigator", focus: "Trial integrity · regulatory submission", n: "n = 1", insight: "Surfaced the regulatory stakes. Adherence data that can't be defended creates real submission risk — the kind that can delay or invalidate a trial. This made data integrity the non-negotiable constraint for the whole system." },
              { abbr: "CRC", role: "Clinical Research Coordinator", focus: "Day-to-day participant tracking", n: "n = 4", insight: "The most revealing conversations. Every coordinator described the same problem in different words: non-adherence surfaces too late to act on, there's no real trigger for intervention, and self-reporting can't be trusted. These four interviews built the case for everything." },
              { abbr: "P", role: "Trial Participant (60+)", focus: "Daily medication routine at home", n: "Proxy — CRC accounts + literature", insight: "Not interviewed directly at this stage. Their behavior was characterized through what coordinators observed and what secondary research described about elderly medication adherence. The absence of direct participant research is a known gap — and a clear next step." },
            ].map(s => (
              <Card key={s.role}>
                <div className="w-11 h-11 rounded-full flex items-center justify-center text-xs font-semibold mb-4" style={{ border: "1px solid var(--divider)", background: "var(--bg)", color: "var(--fg-2)" }}>{s.abbr}</div>
                <p className="text-sm font-semibold mb-1" style={{ color: "var(--fg)" }}>{s.role}</p>
                <p className="text-xs mb-3" style={{ color: "var(--fg-3)" }}>{s.focus}</p>
                <p className="text-xs font-semibold uppercase tracking-wider mb-2 pt-3" style={{ borderTop: "1px solid var(--divider)", color: "var(--fg-3)" }}>{s.n}</p>
                <p className="text-xs leading-relaxed" style={{ color: "var(--fg-2)" }}>{s.insight}</p>
              </Card>
            ))}
          </div>
        </Reveal>
      </section>

      {/* ── Findings ── */}
      <section className="px-6 md:px-12 lg:px-20 py-8 max-w-5xl mx-auto">
        <Reveal>
          <Divider />
          <SectionLabel>Research · Key Findings</SectionLabel>
          <h2 className="font-semibold mb-3" style={{ fontSize: "clamp(20px, 2.5vw, 26px)", letterSpacing: "-0.02em" }}>What we learned — and what we did about it</h2>
          <p className="text-sm mb-8" style={{ color: "var(--fg-2)" }}>Four things came through clearly across the interviews and literature review. Each one changed something about the direction of the concept.</p>

          <div className="rounded-2xl overflow-hidden" style={{ border: "1px solid var(--divider)" }}>
            <div className="px-5 py-3" style={{ borderBottom: "1px solid var(--divider)", background: "var(--bg-2)" }}>
              <p className="text-xs font-semibold" style={{ color: "var(--fg-2)" }}>Finding → Implication</p>
            </div>
            {[
              { title: "Participants are mostly over 60 — and technology just makes things harder", body: "CRCs described the same profile every time: older patients willing to follow instructions but not going to navigate an app on top of managing a medical condition. Any product that put active burden on participants was going to fail at adoption — not from unwillingness, but because the ask was wrong from the start.", imp: "→ The device had to work without the patient ever knowing it was there. No app, no logging, no check-ins." },
              { title: "By the time CRCs know something's wrong, the window has usually passed", body: "Non-adherence surfaces through self-reported logs and scheduled check-ins — both far too slow. By the time a coordinator identifies a problem, the affected data window has often already closed. There's no structured trigger for when to reach out. It's guesswork and routine calls.", imp: "→ Real-time visibility wasn't a nice feature. It was the condition under which this product becomes clinically useful at all." },
              { title: "Eyedrops are uniquely easy to do wrong without realizing it", body: "Unlike pills, eyedrops require technique — angle, pressure, volume. Participants were logging doses they weren't confident went in correctly. The data coming back to coordinators was structurally misleading, not just incomplete.", imp: "→ Knowing the bottle was pressed isn't enough. You need to know if the drop actually went in — which means measuring volume, not just events." },
              { title: "The real problem isn't missing data — it's data you can't trust", body: "The biggest reframe wasn't a specific finding. It was recognizing what the whole system was actually producing. Self-reporting with this population, for this medication, was generating data that looked complete but wasn't reliable. Making self-reporting easier wasn't the answer.", imp: "→ The product had to replace self-reporting entirely, not improve it." },
            ].map((f, i, arr) => (
              <div key={i} className="grid" style={{ gridTemplateColumns: "48px 1fr", borderBottom: i < arr.length - 1 ? "1px solid var(--divider)" : "none" }}>
                <div className="flex items-center justify-center text-sm font-semibold" style={{ borderRight: "1px solid var(--divider)", background: "var(--bg-2)", color: "var(--fg-3)" }}>
                  {String(i + 1).padStart(2, "0")}
                </div>
                <div className="p-5">
                  <p className="text-sm font-semibold mb-2" style={{ color: "var(--fg)" }}>{f.title}</p>
                  <p className="text-sm leading-relaxed mb-3" style={{ color: "var(--fg-2)" }}>{f.body}</p>
                  <p className="text-xs font-medium pt-3" style={{ borderTop: "1px solid var(--divider)", color: "#4ade80" }}>{f.imp}</p>
                </div>
              </div>
            ))}
          </div>
        </Reveal>
      </section>

      {/* ── Affinity Map ── */}
      <section className="px-6 md:px-12 lg:px-20 py-8 max-w-5xl mx-auto">
        <Reveal>
          <div className="rounded-2xl overflow-hidden p-6" style={{ border: "1px solid var(--divider)", background: "var(--bg-2)" }}>
            <div className="flex items-center justify-between mb-5">
              <p className="text-xs font-semibold uppercase tracking-widest" style={{ color: "var(--fg-3)" }}>Research synthesis — affinity map</p>
              <p className="text-xs italic" style={{ color: "var(--fg-3)" }}>Recreated — original omitted per NDA</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
              {[
                { label: "Participant behavior", color: "#4ade80", bg: "rgba(74,222,128,0.08)", tags: ["Self-reports even when unsure dose worked", "60+ — avoids new technology", "Eyedrop technique inconsistent"], quote: '"She just presses the bottle and hopes for the best"' },
                { label: "CRC workflow gaps", color: "#60a5fa", bg: "rgba(96,165,250,0.08)", tags: ["No structured trigger for intervention", "Check-ins on fixed schedule only", "Finds out too late to act"], quote: '"By the time I know, the window\'s already closed"' },
                { label: "Data trustworthiness", color: "#fb923c", bg: "rgba(251,146,60,0.08)", tags: ["Self-report doesn't equal reality", "Volume of dose never measured", "Technique invisible to the system"], quote: '"We don\'t actually know if the drop went in"' },
                { label: "Regulatory & compliance", color: "#f87171", bg: "rgba(248,113,113,0.08)", tags: ["Submission risk if data is challenged", "21 CFR Part 11 archiving required", "PI needs defensible audit trail"], quote: '"If adherence is questioned we have nothing to show"' },
              ].map(col => (
                <div key={col.label} className="rounded-xl p-3" style={{ background: col.bg, border: `1px solid ${col.color}22` }}>
                  <p className="text-xs font-semibold uppercase tracking-wider mb-3 pb-2" style={{ borderBottom: "1px solid var(--divider)", color: col.color }}>{col.label}</p>
                  {col.tags.map(t => (
                    <div key={t} className="rounded px-2 py-1.5 mb-1.5 text-xs leading-snug" style={{ background: col.bg, border: `1px solid ${col.color}44`, color: col.color }}>{t}</div>
                  ))}
                  <div className="mt-2 px-3 py-2 rounded text-xs leading-relaxed italic" style={{ background: "var(--bg-2)", color: "var(--fg-2)", borderLeft: `2px solid var(--divider)` }}>{col.quote}</div>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </section>

      {/* ── Quotes ── */}
      <section className="px-6 md:px-12 lg:px-20 py-8 max-w-5xl mx-auto">
        <Reveal>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="pl-6" style={{ borderLeft: "2px solid var(--fg)" }}>
              <p className="font-light leading-relaxed mb-3" style={{ fontSize: "clamp(16px, 2vw, 20px)", color: "var(--fg)" }}>"We ask them to log their drops every day. But half the time they forget, and half the time they log it even when they weren't sure they did it right."</p>
              <p className="text-xs" style={{ color: "var(--fg-3)" }}>— CRC, interview 01</p>
            </div>
            <div className="flex flex-col gap-4">
              {[
                { q: '"By the time I know there\'s a problem, the window for that data has already closed."', by: "— CRC, interview 03" },
                { q: '"If the adherence data gets challenged during submission, we have nothing to show. That\'s the risk we\'re carrying."', by: "— Principal Investigator, interview" },
              ].map((q, i) => (
                <div key={i} className="pl-5" style={{ borderLeft: "1px solid var(--divider)" }}>
                  <p className="text-sm leading-relaxed mb-1" style={{ color: "var(--fg)" }}>{q.q}</p>
                  <p className="text-xs" style={{ color: "var(--fg-3)" }}>{q.by}</p>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </section>

      {/* ── Reframe ── */}
      <section className="px-6 md:px-12 lg:px-20 py-8 max-w-5xl mx-auto">
        <Reveal>
          <div className="rounded-2xl p-8 md:p-12 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12" style={{ background: "var(--fg)", color: "var(--bg)" }}>
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest mb-4 opacity-40">Before research</p>
              <p className="text-base font-light leading-relaxed opacity-50 italic">"Participants aren't logging their adherence. We need to make self-reporting easier."</p>
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest mb-4 opacity-40">After research</p>
              <p className="text-lg font-light leading-relaxed">"Even when they do log, the data can't be trusted. Self-reporting needs to be replaced, not improved."</p>
            </div>
          </div>
        </Reveal>
      </section>

      {/* ── Service Blueprint ── */}
      <section className="px-6 md:px-12 lg:px-20 py-8 max-w-5xl mx-auto">
        <Reveal>
          <Divider />
          <SectionLabel>Synthesis Artifact · Service Blueprint</SectionLabel>
          <h2 className="font-semibold mb-3" style={{ fontSize: "clamp(20px, 2.5vw, 26px)", letterSpacing: "-0.02em" }}>Mapping where the product could actually fit</h2>
          <p className="text-sm leading-relaxed mb-6" style={{ color: "var(--fg-2)" }}>I built the service blueprint to answer a specific question: where in a clinical trial does a connected adherence device make sense, and where would it get in the way? Five lanes, five phases — from trial setup all the way through closeout.</p>

          <div className="overflow-x-auto rounded-2xl" style={{ border: "1px solid var(--divider)" }}>
            <table className="w-full" style={{ minWidth: "720px", borderCollapse: "collapse" }}>
              <thead>
                <tr>
                  <th className="text-left px-4 py-3 text-xs uppercase tracking-wider" style={{ border: "1px solid var(--divider)", background: "var(--bg-2)", color: "var(--fg-3)", minWidth: "130px" }}>Lane</th>
                  {[
                    { label: "Trial Setup", color: "#4ade80", bg: "rgba(74,222,128,0.08)" },
                    { label: "Onboarding", color: "#60a5fa", bg: "rgba(96,165,250,0.08)" },
                    { label: "Active Trial", color: "#fb923c", bg: "rgba(251,146,60,0.08)" },
                    { label: "Intervention", color: "#f87171", bg: "rgba(248,113,113,0.08)" },
                    { label: "Closeout", color: "#4ade80", bg: "rgba(74,222,128,0.08)" },
                  ].map(h => (
                    <th key={h.label} className="px-3 py-3 text-xs uppercase tracking-wider" style={{ border: "1px solid var(--divider)", background: h.bg, color: h.color }}>{h.label}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {[
                  { lane: "Participant", sub: "60+ patient at home", cells: ["Enrolled by site", "Receives device + brief demo · Uses as normal eyedrop bottle", "Device records silently — no action needed ★", "Receives call from CRC if flagged", "Returns device at trial end"] },
                  { lane: "CRC", sub: "Clinical Research Coordinator", cells: ["Configures trial in dashboard · Sets alert thresholds", "Ships device to participant · Logs participant in system", "Monitors dashboard daily · Reviews dose volume accuracy", "⚠ Pattern-based alert triggers · Contacts participant, logs action", "Exports adherence report for PI"] },
                  { lane: "PI / Sponsor", sub: "Trial governance", cells: ["Defines protocol + dosing schedule · IRB approval", "Reviews onboarding SOP", "Weekly adherence summary", "Notified of protocol deviations", "✓ Reviews full dataset for submission"] },
                  { lane: "Smart Device", sub: "Physical product", cells: ["Provisioned + assigned to participant", "Paired to cloud on first use", "Measures volume per dose · Auto-syncs every use event ★", "Continues passive sync", "De-provisioned, data archived"] },
                  { lane: "Platform", sub: "CRO backend", cells: ["Protocol + thresholds stored", "Participant profile + device ID linked", "Stores dose events in real time · Alert logic runs continuously", "⚠ Pushes alert to CRC dashboard · Logs intervention record", "✓ Archives per FDA 21 CFR Part 11"] },
                ].map((row, ri) => (
                  <tr key={ri}>
                    <td className="px-4 py-3 text-xs font-semibold" style={{ border: "1px solid var(--divider)", background: "var(--bg-2)", color: "var(--fg)" }}>
                      {row.lane}
                      <div className="text-xs font-normal mt-0.5" style={{ color: "var(--fg-3)" }}>{row.sub}</div>
                    </td>
                    {row.cells.map((cell, ci) => (
                      <td key={ci} className="px-3 py-3 text-xs leading-relaxed align-top" style={{ border: "1px solid var(--divider)", color: "var(--fg-2)", background: "var(--bg)" }}>
                        {cell.split(" · ").map((part, pi) => (
                          <div key={pi} className="mb-1 last:mb-0 px-2 py-1 rounded text-xs" style={{
                            background: part.includes("★") ? "var(--fg)" : part.includes("⚠") ? "rgba(248,113,113,0.12)" : part.includes("✓") ? "rgba(74,222,128,0.08)" : "var(--bg-2)",
                            color: part.includes("★") ? "var(--bg)" : part.includes("⚠") ? "#f87171" : part.includes("✓") ? "#4ade80" : "var(--fg-2)",
                            border: "1px solid var(--divider)"
                          }}>
                            {part}
                          </div>
                        ))}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-6 flex flex-col gap-4">
            {[
              { title: "The participant layer was the only one that should be invisible.", body: "Every other lane required active design decisions. Keeping participants out of the digital workflow wasn't a simplification — the blueprint made it an architectural requirement." },
              { title: "The intervention phase had no structure in existing workflows.", body: "Coordinators were acting on instinct. The alert logic in the dashboard concept was designed specifically to fill that gap — giving CRCs a clear, consistent trigger instead of a gut feeling." },
              { title: "Regulatory archiving never came up in interviews — but it's non-negotiable.", body: "Secondary research combined with the closeout lane made clear that FDA 21 CFR Part 11 compliance needed to be designed in from day one. This wasn't a retrofit. It was a structural decision." },
            ].map((item, i) => (
              <div key={i} className="flex gap-4 py-4" style={{ borderBottom: "1px solid var(--divider)" }}>
                <span className="flex-shrink-0 text-sm" style={{ color: "var(--fg-3)" }}>—</span>
                <p className="text-sm leading-relaxed" style={{ color: "var(--fg-2)" }}>
                  <strong style={{ color: "var(--fg)" }}>{item.title}</strong> {item.body}
                </p>
              </div>
            ))}
          </div>
        </Reveal>
      </section>

      {/* ── Research Traceability ── */}
      <section className="px-6 md:px-12 lg:px-20 py-8 max-w-5xl mx-auto">
        <Reveal>
          <Divider />
          <SectionLabel>Synthesis · Research Traceability</SectionLabel>
          <h2 className="font-semibold mb-3" style={{ fontSize: "clamp(20px, 2.5vw, 26px)", letterSpacing: "-0.02em" }}>Every decision traces back to a finding</h2>
          <p className="text-sm mb-6" style={{ color: "var(--fg-2)" }}>One of the core principles of the synthesis was making sure design decisions didn't float free of evidence. Here's the direct thread from what we heard to what we built.</p>

          <div className="rounded-2xl overflow-hidden" style={{ border: "1px solid var(--divider)" }}>
            <div className="grid px-4 py-3" style={{ gridTemplateColumns: "1fr 40px 1fr", background: "var(--bg-2)", borderBottom: "1px solid var(--divider)" }}>
              <p className="text-xs uppercase tracking-widest font-semibold" style={{ color: "var(--fg-3)" }}>Research finding</p>
              <div />
              <p className="text-xs uppercase tracking-widest font-semibold" style={{ color: "var(--fg-3)" }}>Design decision</p>
            </div>
            {[
              { src: "Finding 01", finding: "Participants are 60+, tech-averse, won't manage an app alongside their medication routine", decision: "No participant-facing app. Device operates silently — zero active steps required" },
              { src: "Finding 02", finding: "CRCs find out about non-adherence after the data window has already closed. No structured intervention trigger exists", decision: "Always-on passive sync + pattern-based alert logic built around when CRCs can actually act" },
              { src: "Finding 03", finding: "Participants can't tell if eyedrops were administered correctly. Technique failure is invisible in existing data", decision: "Pressure sensor measures dispensed volume per use — captures both frequency and administration accuracy" },
              { src: "Finding 04", finding: "Self-reported data looks complete but is structurally unreliable for this population and medication type", decision: "Replace self-reporting entirely with passive device measurement as the primary data source" },
              { src: "Blueprint — closeout lane", finding: "FDA 21 CFR Part 11 archiving requirements never surfaced in interviews but are non-negotiable for CRO adoption", decision: "Compliance-ready data structure designed in from day one — not retrofitted after development" },
            ].map((row, i, arr) => (
              <div key={i} className="grid items-start" style={{ gridTemplateColumns: "1fr 40px 1fr", borderBottom: i < arr.length - 1 ? "1px solid var(--divider)" : "none", background: "var(--bg)" }}>
                <div className="p-4">
                  <p className="text-xs uppercase tracking-wider mb-1.5" style={{ color: "var(--fg-3)" }}>{row.src}</p>
                  <p className="text-sm leading-relaxed" style={{ color: "var(--fg)" }}>{row.finding}</p>
                </div>
                <div className="flex items-center justify-center h-full" style={{ color: "var(--fg-3)", borderLeft: "1px solid var(--divider)", borderRight: "1px solid var(--divider)" }}>→</div>
                <div className="p-4">
                  <p className="text-xs uppercase tracking-wider mb-1.5" style={{ color: "var(--fg-3)" }}>Decision</p>
                  <p className="text-sm font-semibold leading-relaxed" style={{ color: "var(--fg)" }}>{row.decision}</p>
                </div>
              </div>
            ))}
          </div>
        </Reveal>
      </section>

      {/* ── Concept ── */}
      <section className="px-6 md:px-12 lg:px-20 py-8 max-w-5xl mx-auto">
        <Reveal>
          <Divider />
          <SectionLabel>Concept · System Architecture</SectionLabel>
          <h2 className="font-semibold mb-3" style={{ fontSize: "clamp(20px, 2.5vw, 26px)", letterSpacing: "-0.02em" }}>What the research pointed toward</h2>
          <p className="text-sm leading-relaxed mb-8" style={{ color: "var(--fg-2)" }}>The concept is a connected system with three layers. Each layer serves one stakeholder. Each does one job. The design principle throughout: don't ask anything of the wrong person.</p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
            {[
              { name: "Smart device", desc: "Houses the eyedrop vial. Pressure sensor measures dispensed volume on each use. Syncs automatically — no patient action." },
              { name: "Always-on sync", desc: "Passive Bluetooth + cloud transmission. Every dose event timestamped and sent. Zero participant involvement." },
              { name: "CRC dashboard", desc: "Real-time adherence monitoring. Dose volume accuracy per participant. Alert logic built around when CRCs can actually intervene." },
            ].map((step, i) => (
              <div key={i} className="flex flex-col items-start">
                <Card className="w-full">
                  <p className="text-sm font-semibold mb-2" style={{ color: "var(--fg)" }}>{step.name}</p>
                  <p className="text-xs leading-relaxed" style={{ color: "var(--fg-2)" }}>{step.desc}</p>
                </Card>
                {i < 2 && <div className="hidden md:block text-center w-full mt-2 text-lg" style={{ color: "var(--fg-3)" }}>→</div>}
              </div>
            ))}
          </div>

          <div className="grid grid-cols-3 gap-4">
            {[
              { who: "Patient", num: "0", desc: "Actions required. Just use the bottle." },
              { who: "CRC", num: "1", desc: "Dashboard. One place to see everything, act on what matters.", highlight: true },
              { who: "Platform", num: "∞", desc: "Runs continuously in the background. Always collecting, always alerting." },
            ].map(s => (
              <div key={s.who} className="text-center p-5 rounded-2xl" style={{ border: `1px solid ${s.highlight ? "var(--fg)" : "var(--divider)"}`, background: "var(--bg-2)" }}>
                <p className="text-xs uppercase tracking-widest mb-2" style={{ color: "var(--fg-3)" }}>{s.who}</p>
                <p className="font-light mb-2" style={{ fontSize: "28px", color: s.highlight ? "var(--fg)" : "var(--fg-3)" }}>{s.num}</p>
                <p className="text-xs leading-relaxed" style={{ color: "var(--fg-2)" }}>{s.desc}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </section>

      {/* ── Outcome ── */}
      <section className="px-6 md:px-12 lg:px-20 py-8 max-w-5xl mx-auto">
        <Reveal>
          <Divider />
          <SectionLabel>Outcome</SectionLabel>
          <div className="rounded-2xl p-8 md:p-12" style={{ background: "var(--fg)", color: "var(--bg)" }}>
            <p className="text-xs uppercase tracking-widest mb-4 opacity-40">Outcome</p>
            <p className="text-base md:text-xl font-light leading-relaxed opacity-90">
              The research reframed the product from a general tracker into a CRO-ready concept with a defensible clinical use case. The findings, service blueprint, and system concept became the foundation for pitching to clinical research organizations and pharma companies — giving the team a research-grounded argument for what the product should become and why it would actually work in a clinical setting.
            </p>
          </div>
        </Reveal>
      </section>

      {/* ── Next Steps ── */}
      <section className="px-6 md:px-12 lg:px-20 py-8 max-w-5xl mx-auto">
        <Reveal>
          <Divider />
          <SectionLabel>Next Steps</SectionLabel>
          <h2 className="font-semibold mb-3" style={{ fontSize: "clamp(20px, 2.5vw, 26px)", letterSpacing: "-0.02em" }}>What would need to happen before development</h2>
          <p className="text-sm mb-6" style={{ color: "var(--fg-2)" }}>The concept was built to be pitched, not shipped. These are the research and validation steps that would need to follow a successful pitch.</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              { n: "01", title: "Research with actual participants", body: "We never spoke directly to the 60+ patients at the center of this. That's the most important gap — understanding how they interact with the device, whether passive operation holds in practice, and what the onboarding experience feels like before any hardware commitment." },
              { n: "02", title: "Broader CRO validation", body: "Five interviews gave a strong directional signal for a pitch-stage concept — but they represent a narrow slice of the CRO landscape. Different trial types, therapy areas, and organization sizes would need to be included before treating the findings as generalizable." },
              { n: "03", title: "Hardware feasibility", body: "Volume measurement via pressure sensor is technically plausible but unvalidated against the range of eyedrop formulations and bottle types across real clinical trials. Engineering feasibility needs to be confirmed before prototype work begins." },
              { n: "04", title: "Pilot with a CRO partner", body: "A structured pilot would surface edge cases that research alone can't predict — connectivity gaps, alert calibration, how coordinators adapt their workflow around a new tool. That's where the concept gets properly stress-tested against reality." },
            ].map(s => (
              <Card key={s.n}>
                <p className="font-light mb-4" style={{ fontSize: "32px", color: "var(--divider)", letterSpacing: "-0.03em" }}>{s.n}</p>
                <p className="text-sm font-semibold mb-2" style={{ color: "var(--fg)" }}>{s.title}</p>
                <p className="text-sm leading-relaxed" style={{ color: "var(--fg-2)" }}>{s.body}</p>
              </Card>
            ))}
          </div>
        </Reveal>
      </section>

      {/* ── Reflections ── */}
      <section className="px-6 md:px-12 lg:px-20 py-8 max-w-5xl mx-auto">
        <Reveal>
          <Divider />
          <SectionLabel>Reflections &amp; Learnings</SectionLabel>
          <h2 className="font-semibold mb-6" style={{ fontSize: "clamp(20px, 2.5vw, 26px)", letterSpacing: "-0.02em" }}>What I'd take from this</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <p className="text-sm font-semibold mb-3" style={{ color: "var(--fg)" }}>What worked well</p>
              <p className="text-sm leading-relaxed" style={{ color: "var(--fg-2)" }}>Pairing secondary research with interviews gave the work real credibility. Going into conversations already knowing the regulatory landscape meant we could ask sharper questions and push past surface-level answers. The service blueprint was also genuinely useful — it surfaced things the interviews never would have, especially around the intervention phase gap and regulatory archiving. Having a shared artifact helped the team make decisions with confidence rather than opinion.</p>
            </div>
            <div>
              <p className="text-sm font-semibold mb-3" style={{ color: "var(--fg)" }}>What I'd do differently</p>
              <p className="text-sm leading-relaxed" style={{ color: "var(--fg-2)" }}>I'd push harder to include even a few direct conversations with trial participants earlier in the process. We characterized the 60+ experience entirely through proxy — CRC accounts and literature — which gave us enough to work with, but left a real gap. The most consequential design decision we made (no participant-facing interface) was grounded in secondhand accounts. That's a vulnerability worth naming, and something I'd address at the very start next time.</p>
            </div>
          </div>
        </Reveal>
      </section>

      {/* ── Back ── */}
      <section className="px-6 md:px-12 lg:px-20 py-16 max-w-5xl mx-auto">
        <Reveal>
          <Link to="/" className="inline-flex items-center gap-2 text-sm font-medium transition-opacity hover:opacity-60" style={{ color: "var(--fg-2)" }}>
            <ArrowLeft className="w-4 h-4" /> Back to home
          </Link>
        </Reveal>
      </section>
    </div>
  );
}
