import { ArrowUpRight } from "lucide-react";
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
const imgEllipse7 = "https://www.figma.com/api/mcp/asset/35861b7a-9cec-4125-9a1d-fb178a1c9244";
const imgEllipse10 = "https://www.figma.com/api/mcp/asset/59a00ef3-16cd-4199-adc7-0227334de011";
const imgEllipse8 = "https://www.figma.com/api/mcp/asset/abeb98b8-9cf4-4294-9aca-be9c85e766bf";
const imgEllipse12 = "https://www.figma.com/api/mcp/asset/dcdca66d-5aae-4e44-a5e1-b9b60185bc01";
const imgLine16 = "https://www.figma.com/api/mcp/asset/c98242f4-9657-415e-8234-c26b64d617a2";
const imgLine20 = "https://www.figma.com/api/mcp/asset/cbaa384c-ef26-4ad6-a5fa-da5b5710109a";
const imgLine21 = "https://www.figma.com/api/mcp/asset/e008e55a-6bf5-430d-9bea-458b66105ed0";
const imgLine22 = "https://www.figma.com/api/mcp/asset/602958f0-7181-4700-a067-2d823b2a306b";
const imgLine27 = "https://www.figma.com/api/mcp/asset/0c0a4c37-43f5-430b-87cc-f6ac08de3a72";
const imgLine26 = "https://www.figma.com/api/mcp/asset/2822eae0-f13a-4ddc-a5d7-997562f4018b";

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
    body: "Without a centralized database, client progress data was scattered across individual coach notes, limiting managers' ability to see a complete view of each client's journey.",
    possibility:
      "Enable end-to-end visibility that centralizes session data, standardizes coach inputs, and surfaces inconsistencies for manager review.",
  },
  {
    icon: imgInsight3,
    title: "Analog reduced coaching efficiency",
    body: "Manual tracking processes reduced coaching efficiency by introducing time-intensive documentation and fragmented information flow.",
    possibility:
      "Use user-friendly assessment forms that reduce effort and improve consistency in how coaches capture client information.",
  },
];

const requirements = [
  {
    title: "Seamless Coach Transitions",
    body: "Changes in coaching staff never disrupt the client journey because progress history, notes, and recommendations stay centralized and immediately accessible.",
  },
  {
    title: "AI-Powered Advisory Support",
    body: "AI surfaces recommendations and behavioral patterns as contextual inputs, helping coaches decide faster while keeping human judgment in control.",
  },
  {
    title: "Integrated Pre/Postnatal and General Flows",
    body: "Pre/postnatal journeys are embedded into the core flow so guidance adapts naturally without forcing users into separate systems or modes.",
  },
];

export function BreatheStudioPage() {
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
                  className="rounded-full border px-3 py-1 text-[12px]"
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

      <section className="px-6 md:px-12 lg:px-20 py-[80px]">
        <div className="mx-auto max-w-7xl">
          <p className="text-[16px] uppercase tracking-[2px]">Overview</p>
          <div className="mb-8 mt-2 h-[2px] w-8 bg-[#3e9891]" />
          <div className="hidden lg:flex items-start gap-[45px]">
            <div className="relative h-[474px] w-[598px] shrink-0 overflow-hidden">
              <img
                src={imgOverview}
                alt="Breathe Studio dashboard overview"
                className="absolute h-full left-[-6.43%] max-w-none top-0 w-[118.97%]"
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
                The studio asked us to design a dashboard that would help fitness coaches track their client&apos;s session progress
                more effectively. Coaches needed clear progress visibility across 3, 6, and 9 months, while studio managers needed
                better visibility into coach-client assignments and overall progress.
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
                The studio asked us to design a dashboard that would help fitness coaches track their client&apos;s session progress
                more effectively. Coaches needed clear progress visibility across 3, 6, and 9 months, while studio managers needed
                better visibility into coach-client assignments and overall progress.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 md:px-12 lg:px-20 py-[80px]">
        <div className="mx-auto max-w-7xl">
          <p className="text-[16px] uppercase tracking-[2px]">Design Process</p>
          <div className="mb-6 mt-2 h-[2px] w-8 bg-[#596f57]" />
          <h2 className="mb-4 text-[45px] font-bold leading-[47.406px]">
            A 6 week <span className="text-[#596f57]">end-to-end</span> design sprint
          </h2>
          <p className="mb-10 max-w-[1124px] text-[18px] leading-[29.25px]">
            Prior to the dashboard, the studio relied on analog methods to track client progress, which made coordination between
            coaches difficult and added significant administrative overhead.
          </p>
          <div className="hidden md:block">
            <div className="grid-rows-[max-content] inline-grid leading-[0] place-items-start relative w-full">
              <p className="[word-break:break-word] col-1 font-bold leading-[normal] ml-[7.15%] mt-0 not-italic relative row-1 text-[16px] text-black w-[9%]">
                Research
              </p>
              <p className="[word-break:break-word] col-1 font-bold leading-[normal] ml-[46.12%] mt-[185.98px] not-italic relative row-1 text-[16px] text-black w-[16.33%]">
                Usability Testing Round 1
              </p>
              <p className="[word-break:break-word] col-1 font-bold leading-[normal] ml-[30.68%] mt-[0.9px] not-italic relative row-1 text-[16px] text-black w-[18.83%]">
                Low- Fidelity Design using AI
              </p>
              <p className="[word-break:break-word] col-1 font-bold leading-[normal] ml-[59.45%] mt-[2.21px] not-italic relative row-1 text-[16px] text-black w-[10.34%]">
                Design Iteration
              </p>
              <p className="[word-break:break-word] col-1 font-bold leading-[normal] ml-[73.53%] mt-[171.97px] not-italic relative row-1 text-[16px] text-black w-[16.51%]">
                Usability Testing Round 2
              </p>
              <p className="[word-break:break-word] col-1 font-bold leading-[normal] ml-[88.33%] mt-[3px] not-italic relative row-1 text-[16px] text-black w-[10.15%]">
                Design Handoff
              </p>
              <div className="col-1 h-[14.861px] ml-[57.53%] mt-[2.21px] relative row-1 w-[1.28%]">
                <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgEllipse7} />
              </div>
              <div className="col-1 h-[14.861px] ml-[5.18%] mt-[2.86px] relative row-1 w-[1.27%]">
                <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgEllipse10} />
              </div>
              <div className="col-1 h-[14.861px] ml-[86.21%] mt-[6.75px] relative row-1 w-[1.27%]">
                <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgEllipse8} />
              </div>
              <div className="col-1 h-[14.861px] ml-[27.33%] mt-[4.81px] relative row-1 w-[1.27%]">
                <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgEllipse7} />
              </div>
              <div className="col-1 h-[14.861px] ml-[43.1%] mt-[219.86px] relative row-1 w-[1.28%]">
                <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgEllipse12} />
              </div>
              <div className="col-1 h-[14.861px] ml-[70.13%] mt-[220.75px] relative row-1 w-[1.28%]">
                <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgEllipse12} />
              </div>
              <div className="col-1 flex h-[92.265px] items-center justify-center ml-[58.06%] mt-[28.78px] relative row-1 w-0" style={{ containerType: "size" }}>
                <div className="flex-none h-[22570600cqw] rotate-90 w-[100cqh]">
                  <div className="relative size-full">
                    <div className="absolute inset-[-1.79px_0_0_0]">
                      <img alt="" className="block max-w-none size-full" src={imgLine16} />
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-1 flex h-[92.265px] items-center justify-center ml-[86.69%] mt-[28.59px] relative row-1 w-[1.77636e-15%]" style={{ containerType: "size" }}>
                <div className="flex-none h-[22570600cqw] rotate-90 w-[100cqh]">
                  <div className="relative size-full">
                    <div className="absolute inset-[-1.79px_0_0_0]">
                      <img alt="" className="block max-w-none size-full" src={imgLine16} />
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-1 flex h-[92.265px] items-center justify-center ml-[5.63%] mt-[27.62px] relative row-1 w-0" style={{ containerType: "size" }}>
                <div className="flex-none h-[22570600cqw] rotate-90 w-[100cqh]">
                  <div className="relative size-full">
                    <div className="absolute inset-[-1.79px_0_0_0]">
                      <img alt="" className="block max-w-none size-full" src={imgLine20} />
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-1 flex h-[92.265px] items-center justify-center ml-[43.66%] mt-[118.2px] relative row-1 w-0" style={{ containerType: "size" }}>
                <div className="flex-none h-[22570600cqw] rotate-90 w-[100cqh]">
                  <div className="relative size-full">
                    <div className="absolute inset-[-1.79px_0_0_0]">
                      <img alt="" className="block max-w-none size-full" src={imgLine21} />
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-1 flex h-[92.265px] items-center justify-center ml-[28%] mt-[28.27px] relative row-1 w-0" style={{ containerType: "size" }}>
                <div className="flex-none h-[22570600cqw] rotate-90 w-[100cqh]">
                  <div className="relative size-full">
                    <div className="absolute inset-[-1.79px_0_0_0]">
                      <img alt="" className="block max-w-none size-full" src={imgLine22} />
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-1 flex h-[92.265px] items-center justify-center ml-[19.94%] mt-[118.2px] relative row-1 w-0" style={{ containerType: "size" }}>
                <div className="flex-none h-[22570600cqw] rotate-90 w-[100cqh]">
                  <div className="relative size-full">
                    <div className="absolute inset-[-1.79px_0_0_0]">
                      <img alt="" className="block max-w-none size-full" src={imgLine27} />
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-1 flex h-[92.265px] items-center justify-center ml-[70.78%] mt-[121.14px] relative row-1 w-0" style={{ containerType: "size" }}>
                <div className="flex-none h-[22570600cqw] rotate-90 w-[100cqh]">
                  <div className="relative size-full">
                    <div className="absolute inset-[-1.79px_0_0_0]">
                      <img alt="" className="block max-w-none size-full" src={imgLine27} />
                    </div>
                  </div>
                </div>
              </div>
              <ul className="[word-break:break-word] block col-1 font-normal list-disc mt-[28.75px] not-italic relative row-1 text-[14px] text-black w-[18.4%]">
                <li className="mb-0 ms-[21px]">
                  <span className="leading-[normal]">User Interviews</span>
                </li>
                <li className="mb-0 ms-[21px]">
                  <span className="leading-[normal]">Jobs to be done framework</span>
                </li>
                <li className="ms-[21px]">
                  <span className="leading-[normal]">User Personas</span>
                </li>
              </ul>
              <ul className="[word-break:break-word] block col-1 font-normal list-disc mt-[213.75px] not-italic relative row-1 text-[14px] text-black w-[21.93%]">
                <li className="mb-0 ms-[21px]">
                  <span className="leading-[normal]">Incorporated Version 1.0 feedback into Version 2.0.</span>
                </li>
                <li className="ms-[21px]">
                  <span className="leading-[normal]">Conducted usability testing with stakeholders to refine the experience.</span>
                </li>
              </ul>
              <ul className="[word-break:break-word] block col-1 font-normal mt-[28.75px] not-italic relative row-1 text-[14px] text-black w-[19.06%]">
                <li className="list-disc ms-[21px]">
                  <span className="leading-[normal]">Built Version 1.0 of the dashboard using AI, presented it to the internal team, and iterated to Version 2.0 based on feedback.</span>
                </li>
              </ul>
              <ul className="[word-break:break-word] block col-1 font-normal mt-[173.75px] not-italic relative row-1 text-[14px] text-black w-[14.7%]">
                <li className="list-disc ms-[21px]">
                  <span className="leading-[normal]">User Flow Mapping/ IA Review with Dev team</span>
                </li>
              </ul>
              <ul className="[word-break:break-word] block col-1 font-normal list-disc mt-[30.75px] not-italic relative row-1 text-[14px] text-black w-[22.43%]">
                <li className="mb-0 ms-[21px]">
                  <span className="leading-[normal]">Iterated through two additional versions after Usability Testing Round 1</span>
                </li>
                <li className="ms-[21px]">
                  <span className="leading-[normal]">Refined the UI based on stakeholder feedback.</span>
                </li>
              </ul>
              <ul className="[word-break:break-word] block col-1 font-normal mt-[199.34px] not-italic relative row-1 text-[14px] text-black w-[18.23%]">
                <li className="list-disc ms-[21px]">
                  <span className="leading-[normal]">Led a second round of usability testing to make final design improvements.</span>
                </li>
              </ul>
              <ul className="[word-break:break-word] block col-1 font-normal mt-[30.75px] not-italic relative row-1 text-[14px] text-black w-[12.2%]">
                <li className="list-disc ms-[21px]">
                  <span className="leading-[normal]">Handed off final design prototype and code to the development team.</span>
                </li>
              </ul>
              <div className="col-1 h-0 ml-[1.72%] mt-[120.75px] relative row-1 w-[96.72%]">
                <div className="absolute inset-[-1.79px_0_0_0]">
                  <img alt="" className="block max-w-none size-full" src={imgLine26} />
                </div>
              </div>
              <div className="[word-break:break-word] col-1 font-semibold ml-[5.4%] mt-[135.8px] not-italic relative row-1 text-[#596f57] text-[12px] w-[18.23%]">
                <p className="leading-[normal] mb-0">1 week</p>
              </div>
              <div className="[word-break:break-word] col-1 font-semibold ml-[46.09%] mt-[136.75px] not-italic relative row-1 text-[#596f57] text-[12px] w-[18.23%]">
                <p className="leading-[normal] mb-0">3 week</p>
              </div>
              <div className="[word-break:break-word] col-1 font-semibold ml-[86.56%] mt-[136.75px] not-italic relative row-1 text-[#596f57] text-[12px] w-[3.6%]">
                <p className="leading-[normal] mb-0">6 week</p>
              </div>
              <div className="col-1 flex h-[60px] items-center justify-center ml-0 mt-[82.75px] relative row-1 w-[1.21%]" style={{ containerType: "size" }}>
                <div className="-rotate-90 flex-none h-[100cqw] w-[100cqh]">
                  <p className="[word-break:break-word] font-bold leading-[normal] not-italic relative size-full text-[#596f57] text-[12px] tracking-[2.4px]">STAGE</p>
                </div>
              </div>
            </div>
          </div>

          <div className="md:hidden">
            <div className="space-y-5">
              {[
                ["Research", "User Interviews, JTBD framework, and personas."],
                ["Low-Fidelity Design using AI", "Built v1 and iterated to v2 using team feedback."],
                ["Usability Testing Round 1", "Validated v2 and refined user journeys."],
                ["Design Iteration", "Aligned flow and IA with development."],
                ["Usability Testing Round 2", "Final round to polish interactions and usability."],
                ["Design Handoff", "Delivered final prototype and code handoff."],
              ].map(([title, body]) => (
                <div key={title} className="rounded-xl border border-[#596f57]/20 p-4">
                  <p className="text-[16px] font-bold">{title}</p>
                  <p className="mt-1 text-[14px]">{body}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#fffefb] px-6 md:px-12 lg:px-20 py-[80px]">
        <div className="mx-auto max-w-7xl">
          <p className="text-[16px] uppercase tracking-[2px]">Research Insights</p>
          <div className="mb-6 mt-2 h-[2px] w-8 bg-[#e17f80]" />
          <h2 className="mb-4 text-[45px] font-bold leading-[47.406px]">Manual tracking caused confusion</h2>
          <p className="mb-12 max-w-[966px] text-[18px] leading-[29.25px]">
            Based on user interviews, I created personas and applied the Jobs-to-be-Done framework to identify motivations and
            behavior patterns.
          </p>
          <div className="grid grid-cols-1 gap-10 md:grid-cols-3">
            {insights.map((item) => (
              <article key={item.title} className="flex flex-col gap-8">
                <img src={item.icon} alt={item.title} className="h-[130px] w-[130px]" draggable={false} />
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
            After synthesizing stakeholder requirements, we prioritized the three most critical needs to guide product direction.
          </p>
          <div className="grid grid-cols-1 gap-10 md:grid-cols-3">
            {requirements.map((item) => (
              <article key={item.title} className="rounded-[16px] border border-[#e3e3e3] bg-white p-6 shadow-[0_1px_1.5px_rgba(0,0,0,0.1)]">
                <h3 className="mb-4 text-[30px] font-bold leading-[1.2]">{item.title}</h3>
                <p className="text-[18px] leading-[29.25px]">{item.body}</p>
              </article>
            ))}
          </div>
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
          <img src={imgProtoRound1} alt="Prototype usability testing round 1" className="w-full rounded-[20px]" draggable={false} />
          <p className="mt-8 text-[18px] leading-[29.25px]">
            Feedback from the first version validated the concept and highlighted usability opportunities.{" "}
            <span className="font-bold">
              I restructured key user journeys, refined transitions, and streamlined interactions to improve intuition.
            </span>
          </p>

          <h3 className="mb-4 mt-12 text-[30px] font-bold leading-[47.406px]">Multiple Iterations using AI</h3>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {[
              { src: imgVersion1, label: "Version 1" },
              { src: imgVersion2, label: "Version 2" },
              { src: imgVersion3, label: "Version 3" },
            ].map((version) => (
              <div key={version.label}>
                <p className="mb-3 text-[20px] font-bold">{version.label}</p>
                <img src={version.src} alt={version.label} className="h-auto w-full rounded-[20px]" draggable={false} />
              </div>
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

          <h3 className="mb-4 text-[30px] font-bold leading-[47.406px]">Final Figma Make Version</h3>
          <img src={imgFinalFigmaMake} alt="Final Figma Make version" className="mb-10 w-full rounded-[20px]" draggable={false} />

          <h3 className="mb-3 text-[30px] font-bold leading-[47.406px]">Final Version deployed by the Dev Team</h3>
          <p className="mb-4 text-[18px] leading-[29.25px]">
            Achieving the right UI through prompting required multiple iterations to refine interactions, layout details, and
            overall flow before finalization.
          </p>
          <img src={imgFinalDev} alt="Final deployed dashboard version" className="w-full rounded-[20px]" draggable={false} />
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
