import { useEffect, useState } from "react";
import { ArrowUpRight, ChevronLeft, ChevronRight } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { Link } from "react-router";

const imgHero = "/breathe-hero-v3.png";
const imgOverview = "/breathe-overview-v2.png";
const imgInsight1 = "/breathe-insight-communication-v2.png";
const imgInsight2 = "/breathe-insight-visibility-v2.png";
const imgInsight3 = "/breathe-insight-efficiency-v2.png";
const imgInsightsBoard = "/breathe-insights-board-v4.png";
const imgFlowBoard = "/breathe-jtbd-board-v4.png";
const imgProtoRound1 = "/breathe-prototype-round1-v5.mp4";
const imgVersion1 = "/breathe-version-1-v2.png";
const imgVersion2 = "/breathe-version-2-v2.png";
const imgVersion3 = "/breathe-version-3-v2.png";
const videoFinalDev = "/breathe-final-dev-team-v2.mp4";
const imgDesignProcessTimeline = "/breathe-design-timeline-v3.png";
const imgReqIcon1 = "/breathe-req-transition-v2.png";
const imgReqIcon2 = "/breathe-req-ai-v2.png";
const imgReqIcon3 = "/breathe-req-flows-v2.png";
const imgInformationArchitecture = "/breathe-information-architecture-v6.png";
const finalCarouselImages = [
  "/breathe-final-carousel-1-hq.png",
  "/breathe-final-carousel-2-hq.png",
  "/breathe-final-carousel-3-hq.png",
  "/breathe-final-carousel-4-hq.png",
  "/breathe-final-carousel-5-hq.png",
];

const insights = [
  {
    icon: imgInsight1,
    title: "Communication gaps when coach shifts change",
    body: "With client progress tracked manually, the studio lacked a standardized system for continuity, forcing secondary coaches to rebuild context from scratch when stepping in.",
    possibility:
      "Streamline coaching workflows by replacing fragmented manual documentation with a shared system of record for client progress and insights.",
  },
  {
    icon: imgInsight2,
    title: "Managers were operating without full visibility",
    body: "Without a centralized database, client progress data was scattered across individual coach notes, limiting manager’s ability to see a complete view of each client’s journey.",
    possibility:
      "Enable end-to-end visibility of client progress that centralizes session data, standardizes coach inputs, and surfaces inconsistencies in documentation for manager review.",
  },
  {
    icon: imgInsight3,
    title: "Analog reduced coaching efficiency",
    body: "Manual tracking processes reduced coaching efficiency by introducing time-intensive documentation and fragmented information flow.",
    possibility:
      "User friendly assessment forms that reduce effort and improve consistency in how coaches capture client information.",
  },
];

const requirements = [
  {
    icon: imgReqIcon1,
    title: "Seamless Coach Transitions",
    body:
      "The experience was designed so that changes in coaching staff never disrupt the client journey. Whether a session is led by a primary coach, substitute, or newly onboarded coach, all relevant client context remains immediately accessible. By centralizing progress history, session notes, and recommendations, the system minimizes transition friction and enables a consistent, continuous experience for every client.",
  },
  {
    icon: imgReqIcon2,
    title: "AI-Powered Advisory Support",
    body:
      "AI surfaces relevant recommendations and behavioural patterns such as suggesting progressive overload, flagging adherence risks, to support coaches in their decision-making. Rather than acting autonomously, these insights are presented as contextual inputs, allowing coaches to apply their own expertise and clinical judgment before taking action.",
  },
  {
    icon: imgReqIcon3,
    title: "Integrated Pre/Postnatal and General User Flows",
    body:
      "Rather than treating pre/postnatal care as separate or configurable paths, we embedded these journeys directly into the main product experience. This ensures that users receive contextually relevant guidance without needing to switch modes or navigate different systems. The core flow adapts naturally based on user stage, allowing personalized experiences while maintaining a single, cohesive interface for both clients and coaches.",
  },
];

function RevealBlock({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.05, margin: "0px 0px -10% 0px" }}
      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </motion.div>
  );
}

export function BreatheStudioPage() {
  const iterationVersions = [
    { src: imgVersion1, label: "Version 1" },
    { src: imgVersion2, label: "Version 2" },
    { src: imgVersion3, label: "Version 3" },
  ];
  const [activeFinalSlide, setActiveFinalSlide] = useState(0);
  const [zoomImage, setZoomImage] = useState<{ src: string; alt: string } | null>(null);

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setZoomImage(null);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  return (
    <div style={{ minHeight: "100vh", background: "#ffffff", color: "#111111" }}>
      <style>{`
        @keyframes breatheArrowMove {
          0% { transform: translateX(0); }
          50% { transform: translateX(4px); }
          100% { transform: translateX(0); }
        }
      `}</style>
      <section className="relative overflow-hidden bg-[#596f57]" style={{ height: "681px" }}>
        <img
          src={imgHero}
          alt="Breathe Studio hero visual"
          className="absolute inset-0 h-full w-full cursor-zoom-in object-cover object-center"
          style={{ imageRendering: "auto" }}
          draggable={false}
          onClick={() => setZoomImage({ src: imgHero, alt: "Breathe Studio hero visual" })}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#596f57] via-[#596f57]/92 to-transparent" />
        <motion.div
          className="relative z-10 px-6 md:px-12 lg:px-20 pt-[426px]"
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="max-w-7xl mx-auto">
            <div className="mb-4 flex gap-2">
              {["UX Design", "AI Tools", "Dashboard"].map((chip) => (
                <span
                  key={chip}
                  className="rounded-full border px-3 py-1 text-[12px] transition-transform duration-300 hover:-translate-y-0.5"
                  style={{ color: "rgba(255,255,255,0.85)", borderColor: "rgba(255,255,255,0.22)", background: "rgba(255,255,255,0.12)" }}
                >
                  {chip}
                </span>
              ))}
            </div>
            <h1 className="max-w-[760px] text-[50px] font-bold leading-[1.02] text-white">
              AI-Powered Dashboard for Coaches to Track Client Performance
            </h1>
          </div>
        </motion.div>
      </section>

      <section className="px-6 md:px-12 lg:px-20 py-10" style={{ background: "#e0ddd6" }}>
        <RevealBlock className="mx-auto flex max-w-7xl flex-wrap items-start gap-12 lg:gap-20">
          <div>
            <p className="mb-2 text-[10px] uppercase tracking-[2px]">Role</p>
            <p className="text-[14px] text-[#596f57]">UX Designer (End to End)</p>
          </div>
          <div>
            <p className="mb-2 text-[10px] uppercase tracking-[2px]">Team</p>
            <p className="text-[14px] text-[#596f57]">Product Manager, UX Designer, 2 Developers</p>
          </div>
          <div>
            <p className="mb-2 text-[10px] uppercase tracking-[2px]">Year</p>
            <p className="text-[14px] text-[#596f57]">2025</p>
          </div>
          <div>
            <p className="mb-2 text-[10px] uppercase tracking-[2px]">Domain</p>
            <p className="text-[14px] text-[#596f57]">Health &amp; Fitness</p>
          </div>
        </RevealBlock>
      </section>

      <section className="bg-white px-6 md:px-12 lg:px-20 py-[80px]">
        <RevealBlock className="mx-auto max-w-7xl">
          <p className="text-[16px] uppercase tracking-[2px]">Overview</p>
          <div className="mb-8 mt-2 h-[2px] w-8 bg-[#3e9891]" />
          <div className="hidden lg:flex items-start gap-[40px]">
            <div className="relative h-[450px] w-[560px] shrink-0 overflow-hidden">
              <img
                src={imgOverview}
                alt="Breathe Studio dashboard overview"
                className="absolute inset-0 h-full w-full cursor-zoom-in object-cover"
                draggable={false}
                onClick={() => setZoomImage({ src: imgOverview, alt: "Breathe Studio dashboard overview" })}
              />
            </div>
            <div className="w-[607px]">
              <h2 className="mb-6 text-[45px] font-bold leading-[47.406px]">From Analog Tracking to an AI-Powered Dashboard</h2>
              <p className="text-[18px] leading-[29.25px]">
                Breathe Studio is a fitness studio in Mumbai. Their roster includes clients on packaged session plans (6, 12, 24,
                or 36 sessions) as well as pregnant clients enrolled in pre/post natal programs.
              </p>
              <p className="mt-4 text-[18px] leading-[29.25px]">
                The studio asked us to design a dashboard that would help fitness coaches track their client’s session progress more
                effectively. Coaches needed a clear visual representation of client progress over 3, 6, and 9 months to better
                understand performance trends and improvements over time. The dashboard also needed to support studio managers by
                giving them visibility into coach-client assignments, making it easier to track which coach was assigned to each
                client and monitor overall coaching progress.
              </p>
            </div>
          </div>
          <div className="lg:hidden">
            <img
              src={imgOverview}
              alt="Breathe Studio dashboard overview"
              className="w-full cursor-zoom-in object-cover"
              draggable={false}
              onClick={() => setZoomImage({ src: imgOverview, alt: "Breathe Studio dashboard overview" })}
            />
            <div className="mt-8 max-w-[607px]">
              <h2 className="mb-6 text-[36px] font-bold leading-[1.1]">From Analog Tracking to an AI-Powered Dashboard</h2>
              <p className="text-[18px] leading-[29.25px]">
                Breathe Studio is a fitness studio in Mumbai. Their roster includes clients on packaged session plans (6, 12, 24,
                or 36 sessions) as well as pregnant clients enrolled in pre/post natal programs.
              </p>
              <p className="mt-4 text-[18px] leading-[29.25px]">
                The studio asked us to design a dashboard that would help fitness coaches track their client’s session progress more
                effectively. Coaches needed a clear visual representation of client progress over 3, 6, and 9 months to better
                understand performance trends and improvements over time. The dashboard also needed to support studio managers by
                giving them visibility into coach-client assignments, making it easier to track which coach was assigned to each
                client and monitor overall coaching progress.
              </p>
            </div>
          </div>
        </RevealBlock>
      </section>

      <section className="px-6 md:px-12 lg:px-20 py-[80px]">
        <RevealBlock className="mx-auto max-w-7xl">
          <p className="text-[16px] uppercase tracking-[2px]">DeSIGN process</p>
          <div className="mb-6 mt-2 h-[2px] w-8 bg-[#596f57]" />
          <h2 className="mb-4 text-[45px] font-bold leading-[47.406px]">
            A 6 week <span className="text-[#596f57]">end-to-end</span> design sprint
          </h2>
          <p className="mb-24 max-w-[1124px] text-[18px] leading-[29.25px]">
            Prior to the dashboard, the studio relied on analog methods to track client progress, which made coordination between
            coaches difficult. Coaches also had to manually log and communicate progress after each session, which was time-consuming
            and added significant administrative overhead to their workflow. As a result, less time was spent on actual coaching and
            client interaction, and clients lacked a clear, consistent view of their progress over time.
          </p>
          <div className="mt-16 overflow-x-auto">
            <img
              src={imgDesignProcessTimeline}
              alt="6 week design process timeline"
              className="h-auto w-[1280px] max-w-none cursor-zoom-in md:mx-auto md:w-full md:max-w-[1280px]"
              draggable={false}
              style={{ imageRendering: "auto" }}
              onClick={() => setZoomImage({ src: imgDesignProcessTimeline, alt: "6 week design process timeline" })}
            />
          </div>
        </RevealBlock>
      </section>

      <section className="bg-[#ffffff] px-6 md:px-12 lg:px-20 py-[80px]">
        <RevealBlock className="mx-auto max-w-7xl">
          <p className="text-[16px] uppercase tracking-[2px]">Research Insights</p>
          <div className="mb-6 mt-2 h-[2px] w-8 bg-[#e17f80]" />
          <h2 className="mb-4 text-[45px] font-bold leading-[47.406px]">Manual tracking caused confusion</h2>
          <p className="mb-12 max-w-[966px] text-[18px] leading-[29.25px]">
            Based on user interviews, I created user personas and applied the Jobs-to-be-Done framework to understand user
            motivations and behaviours.
          </p>
          <div className="grid grid-cols-1 gap-10 md:grid-cols-3">
            {insights.map((item) => (
              <article key={item.title} className="flex flex-col gap-8 rounded-[16px] p-3 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_8px_30px_rgba(0,0,0,0.08)]">
                <img
                  src={item.icon}
                  alt={item.title}
                  className="h-[88px] w-[88px] cursor-zoom-in"
                  draggable={false}
                  onClick={() => setZoomImage({ src: item.icon, alt: item.title })}
                />
                <div className="space-y-4">
                  <h3 className="text-[30px] font-bold leading-[1.2]">{item.title}</h3>
                  <p className="text-[18px] leading-[29.25px]">{item.body}</p>
                </div>
                <div className="space-y-2">
                  <p className="text-[16px] uppercase tracking-[2px] text-[#038216]">Possibility</p>
                  <p className="text-[18px] leading-[29.25px]">{item.possibility}</p>
                </div>
              </article>
            ))}
          </div>
          <img
            src={imgFlowBoard}
            alt="Jobs To Be Done coach experience board"
            className="mt-12 block h-auto w-full max-w-[1120px] mx-auto cursor-zoom-in"
            draggable={false}
            style={{ imageRendering: "auto" }}
            onClick={() => setZoomImage({ src: imgFlowBoard, alt: "Jobs To Be Done coach experience board" })}
          />
          <img
            src={imgInsightsBoard}
            alt="Research synthesis board"
            className="mt-10 block h-auto w-full max-w-[1120px] mx-auto cursor-zoom-in"
            draggable={false}
            style={{ imageRendering: "auto" }}
            onClick={() => setZoomImage({ src: imgInsightsBoard, alt: "Research synthesis board" })}
          />
        </RevealBlock>
      </section>

      <section className="bg-[#ffffff] px-6 md:px-12 lg:px-20 py-[80px]">
        <RevealBlock className="mx-auto max-w-7xl">
          <p className="text-[16px] uppercase tracking-[2px]">Design Requirements</p>
          <div className="mb-6 mt-2 h-[2px] w-8 bg-[#048574]" />
          <h2 className="mb-4 text-[45px] font-bold leading-[47.406px]">Seamless continuity, faster coordination, and full visibility</h2>
          <p className="mb-10 max-w-[1117px] text-[18px] leading-[29.25px]">
            After synthesizing stakeholder requirements, we prioritized the three most critical needs to guide the product direction.
          </p>
          <div className="grid grid-cols-1 gap-10 md:grid-cols-3">
            {requirements.map((item) => (
              <article key={item.title} className="flex flex-col gap-6">
                <img
                  src={item.icon}
                  alt={item.title}
                  className="h-[96px] w-[96px] cursor-zoom-in"
                  draggable={false}
                  onClick={() => setZoomImage({ src: item.icon, alt: item.title })}
                />
                <h3 className="text-[30px] font-bold leading-[1.2] md:min-h-[108px]">{item.title}</h3>
                <p className="text-[18px] leading-[29.25px]">{item.body}</p>
              </article>
            ))}
          </div>
          <h3 className="mb-4 mt-14 text-[42px] font-bold leading-[47.406px] md:text-[30px]">Information Architecture Mapping</h3>
          <img
            src={imgInformationArchitecture}
            alt="Information Architecture Mapping"
            className="mx-auto h-auto w-full max-w-[1280px] cursor-zoom-in border border-black/10 bg-white"
            draggable={false}
            style={{ imageRendering: "auto" }}
            onClick={() => setZoomImage({ src: imgInformationArchitecture, alt: "Information Architecture Mapping" })}
          />
        </RevealBlock>
      </section>

      <section className="bg-[#ffffff] px-6 md:px-12 lg:px-20 py-[80px]">
        <RevealBlock className="mx-auto max-w-7xl">
          <p className="text-[16px] uppercase tracking-[2px]">Prototyping with AI &amp; Usability Testing</p>
          <div className="mb-6 mt-2 h-[2px] w-8 bg-[#3e9891]" />
          <h2 className="mb-4 text-[45px] font-bold leading-[47.406px]">Rapid Dashboard Design with Figma Make</h2>
          <p className="mb-10 max-w-[1120px] text-[18px] leading-[29.25px]">
            After finalizing IA and user flows, I built the dashboard as a live prototype in Figma Make. Version 1 evolved
            through multiple usability-feedback cycles before final handoff.
          </p>
          <h3 className="mb-4 text-[30px] font-bold leading-[47.406px]">Prototype Usability Testing Round 1</h3>
          <video
            className="w-full transition-transform duration-500 hover:scale-[1.01]"
            autoPlay
            loop
            muted
            playsInline
            preload="metadata"
          >
            <source src={imgProtoRound1} type="video/mp4" />
          </video>
          <p className="mt-8 text-[18px] leading-[29.25px]">
            Feedback from the first version validated the concept and highlighted usability opportunities.{" "}
            <span className="font-bold">
              I restructured key user journeys, refined transitions, and streamlined interactions to improve intuition.
            </span>
          </p>

          <h3 className="mb-4 mt-12 text-[30px] font-bold leading-[47.406px]">Multiple Iterations using AI</h3>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {iterationVersions.map((version) => (
              <article key={version.label} className="rounded-[20px] border border-black/10 bg-white p-3 md:p-4">
                <p className="mb-3 text-[20px] font-bold">{version.label}</p>
                <img
                  src={version.src}
                  alt={version.label}
                  className="h-auto w-full cursor-zoom-in object-contain"
                  draggable={false}
                  style={{ imageRendering: "auto" }}
                  onClick={() => setZoomImage({ src: version.src, alt: version.label })}
                />
              </article>
            ))}
          </div>

          <div className="mt-10">
            <p className="text-[18px] font-bold leading-[29.25px]">Learnings from using AI</p>
            <ol className="mt-2 list-decimal space-y-1 pl-6 text-[18px] leading-[29.25px]">
              <li>Enabled rapid prototyping and faster stakeholder feedback loops.</li>
              <li>Allowed quicker iteration and collaborative brainstorming.</li>
              <li>Reduced manual screen-design time via functional prototype generation.</li>
              <li>Improved developer handoff through reusable front-end code.</li>
              <li>Accelerated the overall design-development workflow.</li>
            </ol>
          </div>
        </RevealBlock>
      </section>

      <section className="px-6 md:px-12 lg:px-20 py-[80px]">
        <RevealBlock className="mx-auto max-w-7xl">
          <p className="text-[16px] uppercase tracking-[2px]">Final Designs</p>
          <div className="mb-6 mt-2 h-[2px] w-8 bg-[#7c5cbf]" />
          <h2 className="mb-3 text-[45px] font-bold leading-[47.406px]">The final version that was deployed</h2>
          <p className="mb-8 text-[18px] leading-[29.25px]">
            After six weeks of design and development, we deployed the first dashboard version and started live testing with
            coaches and clients to guide future improvements.
          </p>
          <h3 className="mb-4 text-[30px] font-bold leading-[47.406px]">Final Figma Make Version</h3>
          <div className="mb-10">
            <div className="relative mx-auto w-full max-w-[1180px]">
              <img
                src={finalCarouselImages[activeFinalSlide]}
                alt={`Final Figma Make Version ${activeFinalSlide + 1}`}
                className="mx-auto h-auto max-h-[860px] w-full cursor-zoom-in object-contain"
                draggable={false}
                onClick={() =>
                  setZoomImage({
                    src: finalCarouselImages[activeFinalSlide],
                    alt: `Final Figma Make Version ${activeFinalSlide + 1}`,
                  })
                }
              />
              <button
                type="button"
                aria-label="Previous slide"
                onClick={() => setActiveFinalSlide((prev) => (prev - 1 + finalCarouselImages.length) % finalCarouselImages.length)}
                className="absolute left-3 top-1/2 -translate-y-1/2 rounded-full bg-black/70 p-2 text-white transition hover:bg-black/85"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>
              <button
                type="button"
                aria-label="Next slide"
                onClick={() => setActiveFinalSlide((prev) => (prev + 1) % finalCarouselImages.length)}
                className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full bg-black/70 p-2 text-white transition hover:bg-black/85"
              >
                <ChevronRight className="h-5 w-5" />
              </button>
            </div>
            <div className="mt-3 flex items-center justify-center gap-2">
              {finalCarouselImages.map((_, idx) => (
                <button
                  key={idx}
                  type="button"
                  aria-label={`Go to slide ${idx + 1}`}
                  onClick={() => setActiveFinalSlide(idx)}
                  className="h-2.5 w-2.5 rounded-full transition"
                  style={{ background: idx === activeFinalSlide ? "#111111" : "#cfcfcf" }}
                />
              ))}
            </div>
          </div>

          <h3 className="mb-3 text-[30px] font-bold leading-[47.406px]">Final Version deployed by the Dev Team</h3>
          <p className="mb-4 text-[18px] leading-[29.25px]">
            Achieving the right UI through prompting required multiple iterations to refine interactions, layout details, and
            overall flow before finalization.
          </p>
          <video
            className="w-full transition-transform duration-500 hover:scale-[1.01]"
            autoPlay
            loop
            muted
            playsInline
            preload="metadata"
          >
            <source src={videoFinalDev} type="video/mp4" />
          </video>
        </RevealBlock>
      </section>

      <section className="bg-[#596f57] px-6 md:px-12 lg:px-20 py-[80px] text-white">
        <RevealBlock className="mx-auto max-w-7xl">
          <p className="text-[16px] uppercase tracking-[2px]">Impact &amp; Learnings</p>
          <div className="mb-6 mt-2 h-[2px] w-8 bg-[#a7e7da]" />
          <h2 className="mb-4 text-[40px] font-bold leading-[47.406px]">Opportunities for Improvement</h2>
          <p className="max-w-[1111px] text-[18px] leading-[29.25px]">
            This project showed how AI can accelerate prototyping, strengthen collaboration with engineering, and speed up
            validation cycles through interactive concepts.
          </p>
          <p className="mt-6 text-[18px] font-bold leading-[29.25px]">What I Would Do Differently</p>
          <ul className="mt-2 list-disc space-y-1 pl-6 text-[18px] leading-[29.25px]">
            <li>Use AI mainly for ideation, prototyping, and workflow exploration.</li>
            <li>Avoid using raw AI outputs as final UI direction.</li>
            <li>Validate user flows early before heavy visual polish.</li>
            <li>Define stronger design-system guardrails earlier.</li>
            <li>Treat AI outputs as starting points, then refine with design judgment.</li>
            <li>Set clearer prompts and constraints up front for more relevant results.</li>
          </ul>
        </RevealBlock>
      </section>

      <section className="bg-white px-6 md:px-12 lg:px-20 py-[92px]">
        <RevealBlock className="mx-auto max-w-7xl border-t border-black/30 pt-[60px]">
          <p className="mb-8 text-[16px] uppercase tracking-[2px]">Next Project</p>
          <Link to="/project/validose" className="group flex items-center justify-between gap-6">
            <div>
              <p className="text-[16px] text-[#c4bfb9]">UX Design</p>
              <h3 className="text-[clamp(34px,6vw,61px)] font-bold leading-[1.05]">Medication Adherence in Clinical Trials</h3>
              <p className="text-[16px] text-[#777]">
                AI powered dashboard helping Wellness Coaches track client progress
              </p>
            </div>
            <span className="flex h-16 w-16 items-center justify-center rounded-full border border-black">
              <ArrowUpRight className="h-5 w-5" />
              <ArrowUpRight className="h-5 w-5 -ml-3 opacity-0 group-hover:opacity-100" style={{ animation: "breatheArrowMove 1.1s ease-in-out infinite" }} />
            </span>
          </Link>
        </RevealBlock>
      </section>
      <AnimatePresence>
        {zoomImage && (
          <motion.div
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setZoomImage(null)}
          >
            <motion.img
              src={zoomImage.src}
              alt={zoomImage.alt}
              className="max-h-[92vh] max-w-[92vw] object-contain"
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.96, opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={(event) => event.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
