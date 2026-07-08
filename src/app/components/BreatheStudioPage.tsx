import { useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { Link } from "react-router";

const imgHero = "https://www.figma.com/api/mcp/asset/43078e9a-541e-4ede-b4d9-fbee70f6fb4d";
const imgOverview = "https://www.figma.com/api/mcp/asset/fc8d9acc-c769-44b7-8378-28e09039c515";
const imgInsight1 = "https://www.figma.com/api/mcp/asset/a0c95de2-ea2a-4ec6-8a5a-820cc4645380";
const imgInsight2 = "https://www.figma.com/api/mcp/asset/2da17df2-4bf3-4649-b24b-9e36277a0a1d";
const imgInsight3 = "https://www.figma.com/api/mcp/asset/c8f41035-c7bf-4e8f-bea4-e0e6c28e77e6";
const imgInsightsBoard = "https://www.figma.com/api/mcp/asset/d92cfaef-dc11-4b8c-a159-1f4e56665a79";
const imgFlowBoard = "https://www.figma.com/api/mcp/asset/8b7fbf13-c89a-4a6b-869c-f0b8679f0237";
const imgProtoRound1 = "https://www.figma.com/api/mcp/asset/5db7d578-f127-499f-9c2b-1372422d6f5e";
const imgVersion1 = "https://www.figma.com/api/mcp/asset/0d2f95f0-c7d2-46eb-af68-3848d3d3b072";
const imgVersion2 = "https://www.figma.com/api/mcp/asset/05b81bc5-15a0-4f62-8306-ab31d38b883f";
const imgVersion3 = "https://www.figma.com/api/mcp/asset/648cee6a-776a-4621-9251-d72c988444fd";
const imgFinalFigmaMake = "https://www.figma.com/api/mcp/asset/e2cbd0bc-ca83-4b75-b7e2-a9fa8bf5c485";
const imgFinalDev = "https://www.figma.com/api/mcp/asset/1a0df7f3-fad2-477c-80ae-90973b78b44e";
const imgDesignProcessTimeline = "https://www.figma.com/api/mcp/asset/e4b1aaf9-f842-4664-8b76-0356bb9d0d71";
const imgReqIcon1 = "https://www.figma.com/api/mcp/asset/dfd36d7f-32cf-4177-b86a-a16ad749e694";
const imgReqIcon2 = "https://www.figma.com/api/mcp/asset/1871f9e3-b036-4cd3-8ab5-0d266f97d838";
const imgReqIcon3 = "https://www.figma.com/api/mcp/asset/f782a758-178c-4bde-96fb-10b90723777d";
const imgInformationArchitecture = "/breathe-information-architecture-v2.png";

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

export function BreatheStudioPage() {
  const iterationVersions = [
    { src: imgVersion1, label: "Version 1" },
    { src: imgVersion2, label: "Version 2" },
    { src: imgVersion3, label: "Version 3" },
  ];
  const [activeIteration, setActiveIteration] = useState(0);
  const [activeFinalView, setActiveFinalView] = useState<"figma" | "dev">("figma");

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
        <img src={imgHero} alt="Breathe Studio hero visual" className="absolute right-0 top-0 h-full w-[64%] object-cover" draggable={false} />
        <div className="absolute inset-0 bg-gradient-to-r from-[#596f57] via-[#596f57]/92 to-transparent" />
        <div className="relative z-10 px-6 md:px-12 lg:px-20 pt-[426px]">
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
        </div>
      </section>

      <section className="px-6 md:px-12 lg:px-20 py-10" style={{ background: "#e0ddd6" }}>
        <div className="mx-auto flex max-w-7xl flex-wrap items-start gap-12 lg:gap-20">
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
        </div>
      </section>

      <section className="bg-white px-6 md:px-12 lg:px-20 py-[80px]">
        <div className="mx-auto max-w-7xl">
          <p className="text-[16px] uppercase tracking-[2px]">Overview</p>
          <div className="mb-8 mt-2 h-[2px] w-8 bg-[#3e9891]" />
          <div className="hidden lg:flex items-start gap-[40px]">
            <div className="relative h-[450px] w-[560px] shrink-0 overflow-hidden">
              <img
                src={imgOverview}
                alt="Breathe Studio dashboard overview"
                className="absolute inset-0 h-full w-full object-cover"
                draggable={false}
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
            <img src={imgOverview} alt="Breathe Studio dashboard overview" className="w-full rounded-[8px] object-cover" draggable={false} />
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
        </div>
      </section>

      <section className="px-6 md:px-12 lg:px-20 py-[80px]">
        <div className="mx-auto max-w-7xl">
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
              className="h-auto w-[1280px] max-w-none md:w-full md:max-w-[1280px] md:mx-auto"
              draggable={false}
              style={{ imageRendering: "auto" }}
            />
          </div>
        </div>
      </section>

      <section className="bg-[#fffefb] px-6 md:px-12 lg:px-20 py-[80px]">
        <div className="mx-auto max-w-7xl">
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
                <img src={item.icon} alt={item.title} className="h-[88px] w-[88px]" draggable={false} />
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
            src={imgInsightsBoard}
            alt="Research synthesis board"
            className="mt-12 block h-auto w-full rounded-[20px] object-cover"
            draggable={false}
          />
          <img
            src={imgFlowBoard}
            alt="Information architecture and flow board"
            className="mt-10 block h-auto w-full rounded-[20px] object-cover"
            draggable={false}
          />
        </div>
      </section>

      <section className="bg-[#fffefb] px-6 md:px-12 lg:px-20 py-[80px]">
        <div className="mx-auto max-w-7xl">
          <p className="text-[16px] uppercase tracking-[2px]">Design Requirements</p>
          <div className="mb-6 mt-2 h-[2px] w-8 bg-[#048574]" />
          <h2 className="mb-4 text-[45px] font-bold leading-[47.406px]">Seamless continuity, faster coordination, and full visibility</h2>
          <p className="mb-10 max-w-[1117px] text-[18px] leading-[29.25px]">
            After synthesizing stakeholder requirements, we prioritized the three most critical needs to guide the product direction.
          </p>
          <div className="grid grid-cols-1 gap-10 md:grid-cols-3">
            {requirements.map((item) => (
              <article key={item.title} className="flex flex-col gap-6">
                <img src={item.icon} alt={item.title} className="h-[96px] w-[96px]" draggable={false} />
                <h3 className="text-[42px] font-bold leading-[1.05] md:text-[40px] lg:text-[40px]">{item.title}</h3>
                <p className="text-[18px] leading-[29.25px]">{item.body}</p>
              </article>
            ))}
          </div>
          <h3 className="mb-4 mt-14 text-[42px] font-bold leading-[47.406px] md:text-[30px]">Information Architecture Mapping</h3>
          <img
            src={imgInformationArchitecture}
            alt="Information Architecture Mapping"
            className="h-auto w-full rounded-[20px] border border-black/10 bg-white"
            draggable={false}
            style={{ imageRendering: "auto" }}
          />
        </div>
      </section>

      <section className="bg-[#fffefb] px-6 md:px-12 lg:px-20 py-[80px]">
        <div className="mx-auto max-w-7xl">
          <p className="text-[16px] uppercase tracking-[2px]">Prototyping with AI &amp; Usability Testing</p>
          <div className="mb-6 mt-2 h-[2px] w-8 bg-[#3e9891]" />
          <h2 className="mb-4 text-[45px] font-bold leading-[47.406px]">Rapid Dashboard Design with Figma Make</h2>
          <p className="mb-10 max-w-[1120px] text-[18px] leading-[29.25px]">
            After finalizing IA and user flows, I built the dashboard as a live prototype in Figma Make. Version 1 evolved
            through multiple usability-feedback cycles before final handoff.
          </p>
          <h3 className="mb-4 text-[30px] font-bold leading-[47.406px]">Prototype Usability Testing Round 1</h3>
          <img src={imgProtoRound1} alt="Prototype usability testing round 1" className="w-full rounded-[20px] transition-transform duration-500 hover:scale-[1.01]" draggable={false} />
          <p className="mt-8 text-[18px] leading-[29.25px]">
            Feedback from the first version validated the concept and highlighted usability opportunities.{" "}
            <span className="font-bold">
              I restructured key user journeys, refined transitions, and streamlined interactions to improve intuition.
            </span>
          </p>

          <h3 className="mb-4 mt-12 text-[30px] font-bold leading-[47.406px]">Multiple Iterations using AI</h3>
          <div className="rounded-[20px] border border-black/10 bg-white p-4 md:p-6">
            <div className="mb-4 flex flex-wrap gap-2">
              {iterationVersions.map((version, idx) => (
                <button
                  key={version.label}
                  type="button"
                  onClick={() => setActiveIteration(idx)}
                  className="rounded-full px-4 py-1.5 text-[14px] transition-all duration-300"
                  style={{
                    background: activeIteration === idx ? "#111111" : "#f2f2f2",
                    color: activeIteration === idx ? "#ffffff" : "#111111",
                  }}
                >
                  {version.label}
                </button>
              ))}
            </div>
            <AnimatePresence mode="wait">
              <motion.img
                key={iterationVersions[activeIteration].src}
                src={iterationVersions[activeIteration].src}
                alt={iterationVersions[activeIteration].label}
                className="h-auto w-full rounded-[20px]"
                draggable={false}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.22 }}
              />
            </AnimatePresence>
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
        </div>
      </section>

      <section className="px-6 md:px-12 lg:px-20 py-[80px]">
        <div className="mx-auto max-w-7xl">
          <p className="text-[16px] uppercase tracking-[2px]">Final Designs</p>
          <div className="mb-6 mt-2 h-[2px] w-8 bg-[#7c5cbf]" />
          <h2 className="mb-3 text-[45px] font-bold leading-[47.406px]">The final version that was deployed</h2>
          <p className="mb-8 text-[18px] leading-[29.25px]">
            After six weeks of design and development, we deployed the first dashboard version and started live testing with
            coaches and clients to guide future improvements.
          </p>

          <div className="mb-4 flex flex-wrap items-center gap-2">
            <button
              type="button"
              onClick={() => setActiveFinalView("figma")}
              className="rounded-full px-4 py-1.5 text-[14px] transition-all duration-300"
              style={{ background: activeFinalView === "figma" ? "#111111" : "#f2f2f2", color: activeFinalView === "figma" ? "#fff" : "#111" }}
            >
              Final Figma Make Version
            </button>
            <button
              type="button"
              onClick={() => setActiveFinalView("dev")}
              className="rounded-full px-4 py-1.5 text-[14px] transition-all duration-300"
              style={{ background: activeFinalView === "dev" ? "#111111" : "#f2f2f2", color: activeFinalView === "dev" ? "#fff" : "#111" }}
            >
              Final Dev Team Version
            </button>
          </div>
          <AnimatePresence mode="wait">
            <motion.img
              key={activeFinalView}
              src={activeFinalView === "figma" ? imgFinalFigmaMake : imgFinalDev}
              alt={activeFinalView === "figma" ? "Final Figma Make version" : "Final deployed dashboard version"}
              className="mb-10 w-full rounded-[20px]"
              draggable={false}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.22 }}
            />
          </AnimatePresence>

          <h3 className="mb-3 text-[30px] font-bold leading-[47.406px]">Final Version deployed by the Dev Team</h3>
          <p className="mb-4 text-[18px] leading-[29.25px]">
            Achieving the right UI through prompting required multiple iterations to refine interactions, layout details, and
            overall flow before finalization.
          </p>
          <img src={imgFinalDev} alt="Final deployed dashboard version" className="w-full rounded-[20px] transition-transform duration-500 hover:scale-[1.01]" draggable={false} />
        </div>
      </section>

      <section className="bg-[#596f57] px-6 md:px-12 lg:px-20 py-[80px] text-white">
        <div className="mx-auto max-w-7xl">
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
        </div>
      </section>

      <section className="bg-white px-6 md:px-12 lg:px-20 py-[92px]">
        <div className="mx-auto max-w-7xl border-t border-black/30 pt-[60px]">
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
        </div>
      </section>
    </div>
  );
}
