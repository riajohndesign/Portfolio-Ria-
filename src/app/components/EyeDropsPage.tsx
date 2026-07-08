import { Link } from "react-router";

const figmaHero = "https://www.figma.com/api/mcp/asset/95ffc39d-02a6-437b-9868-fb233d2ca54d";
const figmaOverviewArt = "https://www.figma.com/api/mcp/asset/99014319-c2d6-4475-85c3-52eb33c66c46";
const figmaMethodBg = "https://www.figma.com/api/mcp/asset/f1b2028c-028a-4d71-9d4e-fdf91c24e000";
const figmaJourneyMap = "https://www.figma.com/api/mcp/asset/59877d08-8b8d-4335-a800-846135383cf9";
const figmaInsight1 = "https://www.figma.com/api/mcp/asset/c179bea9-4f00-4e40-a839-58ec921a098f";
const figmaInsight2 = "https://www.figma.com/api/mcp/asset/870858c6-6fa9-4b88-b63e-d9012e6c38eb";
const figmaInsight3 = "https://www.figma.com/api/mcp/asset/00fa6b4d-3da5-4216-bbac-f81c0a8c8dbb";
const figmaBlueprint = "https://www.figma.com/api/mcp/asset/c1ecda74-b5b7-41a2-bf71-d10afa57e80f";
const figmaOpportunitiesImage = "https://www.figma.com/api/mcp/asset/ae52d37c-c583-4f26-9963-f481633de16b";
const figmaArrow = "https://www.figma.com/api/mcp/asset/9cc1f93b-2007-47cb-9123-220c5af04855";

export function EyeDropsPage() {
  return (
    <div style={{ minHeight: "100vh", background: "#ffffff", color: "#111111" }}>
      <section className="relative overflow-hidden" style={{ height: "681px" }}>
        <img src={figmaHero} alt="Validose hero" className="absolute inset-0 h-full w-full object-cover" draggable={false} />
        <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(0,0,0,0.78), rgba(0,0,0,0.25) 52%, rgba(0,0,0,0.2))" }} />
        <div className="relative z-10 px-6 md:px-12 lg:px-20 pt-[426px]">
          <div className="max-w-7xl mx-auto">
            <div className="flex gap-2 mb-5">
              {["User Research", "Product Development", "Healthcare"].map((chip) => (
                <span
                  key={chip}
                  className="rounded-full border px-3 py-1 text-[13.91px] font-normal"
                  style={{ color: "#ffffff", borderColor: "rgba(255,255,255,0.79)", background: "rgba(139,137,137,0.12)" }}
                >
                  {chip}
                </span>
              ))}
            </div>
            <h1 className="text-white font-bold leading-[1.02]" style={{ fontSize: "75px", maxWidth: "1212px", letterSpacing: "-0.015em" }}>
              Enhancing Medication Adherence in Clinical Trials
            </h1>
          </div>
        </div>
      </section>

      <section className="px-6 md:px-12 lg:px-20 py-10" style={{ background: "#111111" }}>
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap items-start justify-between gap-8">
            <div>
              <p className="text-[10px] uppercase tracking-[2px] mb-2" style={{ color: "#c4bfb9" }}>Role</p>
              <p className="text-[14px] leading-[19.25px]" style={{ color: "#f5f3ee" }}>Service Designer &amp; UX Researcher</p>
            </div>
            <div className="max-w-[473px]">
              <p className="text-[10px] uppercase tracking-[2px] mb-2" style={{ color: "#c4bfb9" }}>team</p>
              <p className="text-[14px] leading-[19.25px]" style={{ color: "#f5f3ee" }}>Product Manager, Industrial Designer, Designer (Me)</p>
            </div>
            <div>
              <p className="text-[10px] uppercase tracking-[2px] mb-2" style={{ color: "#c4bfb9" }}>Year</p>
              <p className="text-[14px] leading-[19.25px]" style={{ color: "#f5f3ee" }}>2024</p>
            </div>
            <div>
              <p className="text-[10px] uppercase tracking-[2px] mb-2" style={{ color: "#c4bfb9" }}>DOMAIN</p>
              <p className="text-[14px] leading-[19.25px]" style={{ color: "#f5f3ee" }}>Medtech</p>
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 md:px-12 lg:px-20 py-[100px]" style={{ background: "#ffffff" }}>
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
          <div className="max-w-[620px]">
            <p className="text-[16px] uppercase tracking-[2px] mb-1.5">OVERVIEW</p>
            <div className="h-[2px] w-8 mb-10" style={{ background: "#ed5451" }} />
            <h2 className="font-bold mb-10 leading-[47.406px]" style={{ fontSize: "40px" }}>
              <span style={{ color: "#1041eb" }}>50%</span> of patients do not take medication as prescribed
            </h2>
            <p className="text-[20px] leading-[29.25px]">
              In Clinical trials, medication non-adherence is a major issue. Our client was working in the clinical trial
              space and had built a general medication tracker and an app. After launch they realized this space was too
              broad, so they decided to pivot to eye drop adherence. They wanted our help to understand gaps and potential
              opportunity areas in this segment.
            </p>
          </div>
          <div className="w-full flex justify-end items-end">
            <img
              src={figmaOverviewArt}
              alt="Overview illustration"
              className="h-auto w-full max-w-[530px] max-h-[374px] object-contain"
              draggable={false}
            />
          </div>
        </div>
      </section>

      <section className="px-6 md:px-12 lg:px-20 py-[100px]" style={{ background: "#fafafa" }}>
        <div className="max-w-7xl mx-auto">
          <p className="text-[16px] uppercase tracking-[2px] mb-1.5">how might we</p>
          <div className="h-[2px] w-8 mb-10" style={{ background: "#f97007" }} />
          <h2 className="font-bold mb-10 max-w-[1108px] text-[40px] leading-[47.406px]">
            How might we transform at-home dosing into reliable evidence of protocol adherence?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-[100px] gap-y-10">
            {[
              ["85%", "The average failure rate of clinical trials attempting to progress from Phase 1 to Phase 3 approval."],
              ["+2.3X", "The increased size of clinical trial panels that sponsors must fund to mitigate the effects of patient non-adherence."],
              ["30%", "The average number of clinical trials that fail due to patient non-adherence."],
              ["+1.7X", "The average extension in trial duration that sponsors must fund to address the challenges of patient non-adherence."],
            ].map(([value, body]) => (
              <div key={value}>
                <p className="text-[45px] font-bold leading-[47.406px] mb-1" style={{ color: "#0a3cec" }}>{value}</p>
                <p className="text-[18px] leading-[29.25px] max-w-[560px]">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative px-6 md:px-12 lg:px-20 py-[100px]" style={{ background: "#f2f2f2" }}>
        <img src={figmaMethodBg} alt="" className="absolute inset-0 h-full w-full object-cover opacity-40" />
        <div className="relative z-10 max-w-7xl mx-auto">
          <p className="text-[16px] uppercase tracking-[2px] mb-1.5">methodology</p>
          <div className="h-[2px] w-8 mb-10" style={{ background: "#eade08" }} />
          <h2 className="text-[40px] font-bold leading-[47.406px] mb-3">From protocol to practice</h2>
          <p className="text-[18px] leading-[29.25px] max-w-[1117px] mb-10">
            Understanding a problem this layered required more than one lens, so we paired desk research with stakeholder and user interviews to triangulate insights.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-[40px] mb-[40px]">
            <div className="rounded-[20px] border border-[#e3e3e3] bg-white p-[16px] shadow-[0px_0px_4px_2px_rgba(0,0,0,0.05)] min-h-[122px]">
              <p className="text-[20px] font-bold leading-[47.406px]">💬 Interviews with Users <span className="text-[#8d8d8d] font-normal text-[18px]">7 participants</span></p>
              <p className="text-[18px] leading-[29.25px]">Our initial research focused on seven people who use eye drops daily to manage dry eyes.</p>
            </div>
            <div className="rounded-[20px] border border-[#e3e3e3] bg-white p-[16px] shadow-[0px_0px_4px_2px_rgba(0,0,0,0.05)] min-h-[122px]">
              <p className="text-[20px] font-bold leading-[47.406px]">🤝🏻 Interview with Stakeholders <span className="text-[#8d8d8d] font-normal text-[18px]">4 participants</span></p>
              <p className="text-[18px] leading-[29.25px]">We interviewed Principal Investigators (PIs), Clinical Research Coordinators (CRCs), and Clinical Research Associates (CRAs) across the trail team.</p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-[40px] mb-[40px]">
            <div className="rounded-[20px] border border-[#e3e3e3] bg-white p-[16px] shadow-[0px_0px_4px_2px_rgba(0,0,0,0.05)] min-h-[122px]">
              <p className="text-[20px] font-bold leading-[47.406px]">📊 Competitive Analysis <span className="text-[#8d8d8d] font-normal text-[18px]">4 companies</span></p>
              <p className="text-[18px] leading-[29.25px]">To understand the problem, we first studied who was solving it, surveying existing adherence tools for what worked, what didn't, and where opportunity remained.</p>
            </div>
            <div className="opacity-0 rounded-[20px] border border-[#e3e3e3] bg-white p-[16px]" />
          </div>
          <h3 className="text-[28px] font-bold leading-[47.406px] mb-4">Journey Map of a Clinical Trial Patient</h3>
          <img src={figmaJourneyMap} alt="Journey map of clinical trial patient" className="w-full h-auto" draggable={false} />
        </div>
      </section>

      <section className="px-6 md:px-12 lg:px-20 py-[100px]" style={{ background: "#fafafa" }}>
        <div className="max-w-7xl mx-auto">
          <p className="text-[16px] uppercase tracking-[2px] mb-1.5">Research insights</p>
          <div className="h-[2px] w-8 mb-10" style={{ background: "#b612d1" }} />
          <h2 className="text-[40px] font-bold leading-[47.406px] mb-3">Insights that helped shape the concept</h2>
          <p className="text-[18px] leading-[29.25px] max-w-[1117px] mb-12">
            Over six weeks of interviews with participants and clinical research coordinators, three patterns emerged that reframed how we thought about adherence and pointed directly to where a product needed to do more work.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-[40px] min-h-[754px]">
            {[
              {
                image: figmaInsight1,
                title: "When technology adds friction",
                body: "Participants are 60+ and tech-averse, unlikely to adopt an app alongside their existing routine. When technology adds friction instead of removing it, adherence drops and clinical trials fail.",
                synth: "Strip the experience down and surface only what's needed in the moment. The possibilty could be using interfaces that the participants are already familiar using.",
              },
              {
                image: figmaInsight2,
                title: "Clinical Research Coordinators need real time data",
                body: "Self-reported data looks complete, but for this population and medication type, it's structurally unreliable. Without a structured trigger, CRCs only catch non-adherence after the data window has closed. And with manual logging across every participant, the workload itself becomes a source of burnout.",
                synth: "Give CRCs a live view of participant activity, with clear flags when behavior drifts. Make outreach possible in hours, not weeks.",
              },
              {
                image: figmaInsight3,
                title: "Eye drops are easy to get wrong",
                body: "Adherence measurement is unreliable at both ends. Researchers lack accurate tools to track it, which leaves the underlying reasons for poor adherence unclear. And patients themselves often can't tell if a drop went in correctly making technique inconsistent and self-reports unreliable.",
                synth: "Treat each dose as a guided moment, not a logged event. Use clear visual prompts and a quick post-dose check-in to confirm the drop landed. A pressure sensor measures dispensed volume per use capturing both frequency and accuracy.",
              },
            ].map((item) => (
              <article key={item.title} className="flex flex-col gap-[26px]">
                <div className="h-[175px] flex items-center justify-center">
                  <img src={item.image} alt={item.title} className="max-h-full w-auto" draggable={false} />
                </div>
                <div className="flex flex-col gap-[40px]">
                  <div className="flex flex-col gap-[16px]">
                    <h3 className="text-[26px] font-bold leading-[1.2]">{item.title}</h3>
                    <p className="text-[18px] leading-[29.25px]">{item.body}</p>
                  </div>
                  <div className="flex flex-col gap-[8px]">
                    <p className="text-[16px] tracking-[2px] uppercase" style={{ color: "#048574" }}>INSIGHT SYNTHESIS</p>
                    <p className="text-[18px] leading-[29.25px]">{item.synth}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 md:px-12 lg:px-20 py-[100px]" style={{ background: "#f2f2f2" }}>
        <div className="max-w-7xl mx-auto">
          <p className="text-[16px] uppercase tracking-[2px] mb-1.5">deliverable</p>
          <div className="h-[2px] w-8 mb-10" style={{ background: "#0a3cec" }} />
          <h2 className="text-[40px] font-bold leading-[47.406px] mb-3">A three layer connected system</h2>
          <p className="text-[18px] leading-[29.25px] max-w-[1029px] mb-6">
            Our role was to translate research into a defensible MVP. The service blueprint that follows is a design recommendation, a structured foundation for the company to build, test, and refine.
          </p>
          <h3 className="text-[28px] font-bold leading-[47.406px] mb-4">Service Blueprint</h3>
          <img src={figmaBlueprint} alt="Service blueprint" className="w-full h-auto" draggable={false} />
        </div>
      </section>

      <section className="px-6 md:px-12 lg:px-20 py-[80px]" style={{ background: "#000000", color: "#ffffff" }}>
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
          <div>
            <p className="text-[16px] uppercase tracking-[2px] mb-1.5">impact &amp; Learnings</p>
            <div className="h-[2px] w-8 mb-10" style={{ background: "#a7e7da" }} />
            <h2 className="text-[54px] md:text-[56px] font-bold leading-[1.08] mb-6">Opportunities for Improvement</h2>
            <div className="text-[18px] leading-[29.25px] max-w-[652px]">
              <p className="mb-5">
                The research reframed the product from a general tracker into a CRO-ready concept with a defensible clinical use case.
                The findings, service blueprint, and system concept became the foundation for pitching to clinical research organizations and pharma companies, giving the team evidence-backed direction for what to build and what to cut.
              </p>
              <p className="mb-4">Looking back, three things I would have done differently:</p>
              <ul className="list-disc pl-7 space-y-1">
                <li>Expanded the research base : More participants, and a wider stakeholder set across the trial ecosystem (sponsor, PI, monitor, pharmacist).</li>
                <li>Closed the validation loop : taken the proof of concept to a CRO directly for reaction before finalizing recommendations.</li>
                <li>Co-designed with the end client : Partnered with a CRO to shape the solution together, rather than presenting a concept for them to respond to.</li>
              </ul>
            </div>
          </div>
          <img src={figmaOpportunitiesImage} alt="Opportunities concept sketch" className="w-full max-w-[588px] h-auto justify-self-end" draggable={false} />
        </div>
      </section>

      <section className="px-6 md:px-12 lg:px-20 py-[91px]" style={{ background: "#ffffff" }}>
        <div className="max-w-7xl mx-auto border-t border-[#e0ddd6] pt-[60px]">
          <p className="text-[16px] uppercase tracking-[2px] mb-8" style={{ color: "#888888" }}>Next Project</p>
          <Link to="/project/breathe-studio" className="flex items-center justify-between gap-8">
            <div>
              <p className="text-[16px] mb-2" style={{ color: "#c4bfb9" }}>UX Design</p>
              <p className="font-bold leading-[76.958px]" style={{ color: "#111111", fontSize: "61.567px" }}>Breathe Studio</p>
              <p className="text-[16px] mt-1" style={{ color: "#888888" }}>AI powered dashboard helping Wellness Coaches track client progress</p>
            </div>
            <div className="w-16 h-16 rounded-full border border-[#e0ddd6] flex items-center justify-center">
              <img src={figmaArrow} alt="Arrow" className="w-5 h-5" />
            </div>
          </Link>
        </div>
      </section>
    </div>
  );
}
