import { useEffect, useState, type ImgHTMLAttributes, type ReactNode } from "react";
import { AnimatePresence, motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router";

const imgHero = "/othain-hero-v4.png";
const imgBefore = "/othain-before-v2.png";
const imgAfter = "/othain-after-v3.png";
const imgSiteAuditAnnotated = "/othain-site-audit-annotated.png";
const imgCompetitiveAudit = "/othain-competitive-audit-v2.png";
const imgVisualIdentityOne = "/othain-visual-identity-1-v2.png";
const imgVisualIdentityTwo = "/othain-visual-identity-2-v2.png";
const imgContentAuditSitemap = "/othain-content-audit-sitemap-v2.png";
const imgRapidProtoOne = "/othain-rapid-proto-1-v2.png";
const imgRapidProtoTwo = "/othain-rapid-proto-2-v2.png";
const imgDeliverableOne = "https://www.figma.com/api/mcp/asset/046a04d7-fa82-4f64-954e-3c9c7c991b3e";
const imgDeliverableTwo = "https://www.figma.com/api/mcp/asset/893bb582-12e5-4dc3-8119-12af3d3cff45";
const imgProblemIcon1 = "/othain-problem-icon-1.png";
const imgProblemIcon2 = "/othain-problem-icon-2.png";
const imgProblemIcon3 = "/othain-problem-icon-3.png";

function RevealBlock({ children, className = "" }: { children: ReactNode; className?: string }) {
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

type ZoomableImageProps = {
  src: string;
  alt: string;
  onZoom: (image: { src: string; alt: string }) => void;
  className?: string;
} & Omit<ImgHTMLAttributes<HTMLImageElement>, "src" | "alt" | "className" | "onClick">;

function ZoomableImage({ src, alt, onZoom, className = "", style, loading, decoding, ...rest }: ZoomableImageProps) {
  return (
    <img
      src={src}
      alt={alt}
      className={`${className} cursor-zoom-in`}
      loading={loading ?? "lazy"}
      decoding={decoding ?? "async"}
      style={{ imageRendering: "auto", ...style }}
      onClick={() => onZoom({ src, alt })}
      {...rest}
    />
  );
}

export function OthainPage() {
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
      <section className="relative overflow-hidden" style={{ minHeight: "779px" }}>
        <ZoomableImage src={imgHero} alt="Othain hero" className="absolute inset-0 h-full w-full object-cover" loading="eager" onZoom={setZoomImage} />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
        <motion.div
          className="relative z-10 px-6 md:px-12 lg:px-20 pt-[520px] pb-8"
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="max-w-7xl mx-auto">
            <div className="mb-4 flex flex-wrap gap-2">
              {["UX Design", "Content Strategy", "Website Redesign"].map((chip) => (
                <span
                  key={chip}
                  className="rounded-full border px-3 py-1 text-[12px]"
                  style={{ color: "rgba(255,255,255,0.85)", borderColor: "rgba(255,255,255,0.5)", background: "rgba(255,255,255,0.12)" }}
                >
                  {chip}
                </span>
              ))}
            </div>
            <h1 className="max-w-[1060px] text-[50px] font-bold leading-[1.1] text-white">
              Rebuilding Othain&apos;s website to improve trust and conversions
            </h1>
          </div>
        </motion.div>
      </section>

      <section className="px-6 md:px-12 lg:px-20 py-10" style={{ background: "#111111" }}>
        <RevealBlock className="mx-auto max-w-7xl">
          <div className="grid grid-cols-2 gap-x-8 gap-y-10 lg:grid-cols-4 lg:gap-x-14">
            <div className="w-full max-w-[260px] lg:justify-self-center">
            <p className="mb-2 text-[10px] uppercase tracking-[2px] text-white">Role</p>
            <p className="text-[14px] text-white">UX Designer (End to End)</p>
            </div>
            <div className="w-full max-w-[260px] lg:justify-self-center">
            <p className="mb-2 text-[10px] uppercase tracking-[2px] text-white">Team</p>
            <p className="text-[14px] text-white">Product Manager, 2 Developers</p>
            </div>
            <div className="w-full max-w-[260px] lg:justify-self-center">
            <p className="mb-2 text-[10px] uppercase tracking-[2px] text-white">Year</p>
            <p className="text-[14px] text-white">2026</p>
            </div>
            <div className="w-full max-w-[260px] lg:justify-self-center">
            <p className="mb-2 text-[10px] uppercase tracking-[2px] text-white">Domain</p>
            <p className="text-[14px] text-white">Technology</p>
            </div>
          </div>
        </RevealBlock>
      </section>

      <section className="px-6 md:px-12 lg:px-20 py-[80px] bg-white">
        <RevealBlock className="mx-auto max-w-7xl">
          <p className="text-[16px] uppercase tracking-[2px]">OVERVIEW</p>
          <div className="mb-8 mt-2 h-[2px] w-8 bg-[#1041eb]" />
          <h2 className="mb-6 text-[45px] font-bold leading-[47.406px]">Redesigning for Clarity &amp; Conversion</h2>
          <p className="mb-10 max-w-[1280px] text-[18px] leading-[29.25px]">
            Jersey Tech Partners (JTP) and Othain are IT consulting firms providing technology and business solutions. I led the rebrand and
            website redesign for both companies, covering brand identity, information architecture, and UI design. While each website reflected
            its own brand, both followed the same content structure. This case study focuses on improving clarity, trust, and conversion by
            restructuring the information architecture and creating a more intuitive user experience.
          </p>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            <div>
              <p className="mb-2 text-[25px] font-bold text-[#0352d2]">Before</p>
              <div className="compare-scrollbar h-[420px] md:h-[560px] w-full overflow-y-auto overflow-x-hidden bg-white">
                <ZoomableImage src={imgBefore} alt="Before redesign homepage" className="block h-auto w-full" onZoom={setZoomImage} />
              </div>
            </div>
            <div>
              <p className="mb-2 text-[25px] font-bold text-[#0352d2]">After</p>
              <div className="compare-scrollbar h-[420px] md:h-[560px] w-full overflow-y-auto overflow-x-hidden bg-white">
                <ZoomableImage src={imgAfter} alt="After redesign homepage" className="block h-auto w-full" onZoom={setZoomImage} />
              </div>
            </div>
          </div>
        </RevealBlock>
      </section>

      <section className="px-6 md:px-12 lg:px-20 py-[80px] bg-[#fafafa]">
        <RevealBlock className="mx-auto max-w-7xl">
          <p className="text-[16px] uppercase tracking-[2px]">THE PROBLEM</p>
          <div className="mb-8 mt-2 h-[2px] w-8 bg-[#2b5ec9]" />
          <p className="mb-10 text-[18px] leading-[29.25px]">
            Using Nielsen&apos;s usability heuristics, I evaluated the existing website to identify usability issues that impacted clarity, trust, and
            conversion. The audit revealed three key problems:
          </p>
          <div className="mb-12 grid grid-cols-1 gap-10 md:grid-cols-3">
            {[
              {
                icon: imgProblemIcon1,
                title: "Weak Visual Hierarchy & Readability",
                body: "Dense content, inconsistent typography, and an outdated interface made information difficult to scan and reduced overall readability.",
              },
              {
                icon: imgProblemIcon2,
                title: "Unclear Value Proposition",
                body: "The homepage didn't clearly communicate what the company does or why it stands out, making it difficult for visitors to quickly understand its services.",
              },
              {
                icon: imgProblemIcon3,
                title: "Confusing Information Architecture & Navigation",
                body: "Navigation and content organization lacked clear structure, making it harder for users to find relevant information and take the next step.",
              },
            ].map((item) => (
              <article key={item.title} className="flex flex-col gap-4">
                <ZoomableImage src={item.icon} alt={item.title} className="h-[87px] w-[87px]" onZoom={setZoomImage} />
                <h3 className="text-[30px] font-bold leading-[1.2]">{item.title}</h3>
                <p className="text-[18px] leading-[29.25px]">{item.body}</p>
              </article>
            ))}
          </div>
          <h3 className="mb-4 text-[30px] font-bold leading-[47.406px]">Site Audit of Existing Website</h3>
          <ZoomableImage
            src={imgSiteAuditAnnotated}
            alt="Annotated homepage, about, and services audit with red issue markings"
            className="mx-auto w-full max-w-[1024px]"
            onZoom={setZoomImage}
          />
        </RevealBlock>
      </section>

      <section className="px-6 md:px-12 lg:px-20 py-[80px] bg-white">
        <RevealBlock className="mx-auto max-w-7xl">
          <p className="text-[16px] uppercase tracking-[2px]">STRATEGY</p>
          <div className="mb-8 mt-2 h-[2px] w-8 bg-[#2f60cd]" />
          <h2 className="mb-4 text-[45px] font-bold leading-[47.406px]">Goals and Approach</h2>
          <p className="mb-10 text-[18px] leading-[29.25px]">
            Before redesigning the website, I translated the business goals into clear UX objectives that would guide design decisions.
          </p>
          <div className="grid grid-cols-1 gap-10 md:grid-cols-3">
            {[
              ["01", "Establish Brand Identity", "The existing website no longer reflected the company's expertise or growth.", "Create a contemporary, cohesive visual system that builds trust from the first interaction."],
              ["02", "Improve clarity", "Visitors struggled to quickly understand the company's services.", "Communicate the value proposition clearly above the fold and improve content hierarchy for easier scanning."],
              ["03", "Increase conversions", "The website provided little guidance toward contacting the company.", "Create a clear user journey with prominent calls-to-action and a simplified navigation structure."],
            ].map(([num, title, body, goal]) => (
              <article key={num} className="flex h-full flex-col gap-4">
                <p className="text-[72px] font-bold leading-[1] text-[#2f60cd]">{num}</p>
                <h3 className="min-h-[72px] text-[30px] font-bold leading-[1.2]">{title}</h3>
                <p className="min-h-[120px] text-[18px] leading-[29.25px]">{body}</p>
                <p className="-mt-2 text-[16px] uppercase tracking-[2px] text-[#0a3cec]">UX GOAL</p>
                <p className="text-[18px] leading-[29.25px]">{goal}</p>
              </article>
            ))}
          </div>
        </RevealBlock>
      </section>

      <section className="px-6 md:px-12 lg:px-20 py-[80px] bg-white">
        <RevealBlock className="mx-auto max-w-7xl">
          <p className="text-[16px] uppercase tracking-[2px]">DESIGN PROCESS</p>
          <div className="mb-8 mt-2 h-[2px] w-8 bg-[#2f60cd]" />
          <h2 className="mb-10 text-[45px] font-bold leading-[47.406px]">Evolving the Brand While Preserving Its Identity</h2>

          <h3 className="mb-4 text-[30px] font-bold leading-[47.406px]">Competitive Audit</h3>
          <p className="mb-8 text-[18px] leading-[29.25px]">
            I conducted a competitive audit of regional IT consulting firms to understand common visual patterns and identify opportunities for differentiation. While many competitors relied on generic corporate aesthetics, the goal for JTP and Othain was to create a modern, approachable, and credible brand that reflected their expertise while making complex technology services feel more accessible.
          </p>
          <ZoomableImage src={imgCompetitiveAudit} alt="Competitive audit board" className="mb-10 h-auto w-full" onZoom={setZoomImage} />

          <h3 className="mb-4 text-[30px] font-bold leading-[47.406px]">Content Audit & Sitemap Restructuring</h3>
          <p className="text-[18px] leading-[29.25px] mb-4">
            I conducted a content audit of the existing website to evaluate page hierarchy, navigation, and content organization. The information architecture was then restructured around users&apos; primary goals understanding the company&apos;s services, exploring its expertise, and contacting the team, creating a more intuitive navigation and reducing friction throughout the site.
          </p>
          <p className="text-[18px] font-bold leading-[29.25px]">Key Improvements</p>
          <ul className="mb-8 list-disc pl-7 text-[18px] leading-[29.25px]">
            <li>Simplified the primary navigation by consolidating overlapping content into clear categories.</li>
            <li>Reorganized services pages to better reflect the company&apos;s offerings and improve discoverability.</li>
            <li>Established a logical content hierarchy with clearer page relationships and user flows.</li>
            <li>Made key actions, such as contacting the company, more visible and accessible across the site.</li>
          </ul>
          <ZoomableImage src={imgContentAuditSitemap} alt="Content audit and sitemap" className="mb-10 h-auto w-full" onZoom={setZoomImage} />

          <h3 className="mb-4 text-[30px] font-bold leading-[47.406px]">Visual Identity</h3>
          <p className="mb-8 text-[18px] leading-[29.25px]">
            I established a visual design system by refining the existing logos, defining a typography scale, introducing a modern color palette, and standardizing reusable UI components. These foundations improved consistency, readability, and scalability while ensuring both brands maintained a cohesive and recognizable identity across their digital experiences.
          </p>
          <div className="mb-10 grid grid-cols-1 gap-3 md:grid-cols-2">
            <div className="h-[320px] md:h-[380px] w-full overflow-hidden bg-white">
              <ZoomableImage src={imgVisualIdentityOne} alt="Visual identity board one" className="h-full w-full object-cover object-top" onZoom={setZoomImage} />
            </div>
            <div className="h-[320px] md:h-[380px] w-full overflow-hidden bg-white">
              <ZoomableImage src={imgVisualIdentityTwo} alt="Visual identity board two" className="h-full w-full object-contain object-center" onZoom={setZoomImage} />
            </div>
          </div>

          <h3 className="mb-4 text-[30px] font-bold leading-[47.406px]">Rapid Prototyping with AI</h3>
          <ul className="mb-8 list-disc pl-7 text-[18px] leading-[29.25px]">
            <li>Used Figma Make to quickly generate multiple UI concepts based on the new brand direction and information architecture.</li>
            <li>Explored different layouts and visual directions to gather early stakeholder feedback without investing time in high-fidelity designs.</li>
            <li>Selected the strongest concept as a foundation before moving into Figma for detailed design.</li>
            <li>Refined the interface by improving visual hierarchy, spacing, typography, alignment, and component consistency areas where AI-generated designs lacked the necessary precision.</li>
            <li>Iterated on the final design to create a polished, production-ready experience aligned with project goals.</li>
          </ul>
          <p className="mb-8 text-[18px] font-bold leading-[29.25px]">
            Outcome: AI accelerated ideation and feedback, while Figma enabled the level of craftsmanship and refinement needed for the final design.
          </p>
          <div className="grid grid-cols-1 gap-6">
            <ZoomableImage src={imgRapidProtoOne} alt="Rapid prototype set one" className="h-auto w-full" onZoom={setZoomImage} />
            <ZoomableImage src={imgRapidProtoTwo} alt="Rapid prototype set two" className="h-auto w-full" onZoom={setZoomImage} />
          </div>
        </RevealBlock>
      </section>

      <section className="px-6 md:px-12 lg:px-20 py-[80px] bg-white">
        <RevealBlock className="mx-auto max-w-7xl">
          <p className="text-[16px] uppercase tracking-[2px]">deliverable</p>
          <div className="mb-8 mt-2 h-[2px] w-8 bg-[#7c5cbf]" />
          <h2 className="mb-10 text-[45px] font-bold leading-[47.406px]">From Brand System to Implementation</h2>
          <ZoomableImage src={imgDeliverableOne} alt="Brand system deliverable" className="mb-10 h-auto w-full" onZoom={setZoomImage} />
          <h3 className="mb-4 text-[30px] font-bold leading-[47.406px]">Scaling the Design Across Both Brands (Othain & Jersey Tech Partners)</h3>
          <p className="mb-8 text-[18px] leading-[29.25px]">
            I established a visual design system by refining the existing logos, defining a typography scale, introducing a modern color palette, and standardizing reusable UI components. These foundations improved consistency, readability, and scalability while ensuring both brands maintained a cohesive and recognizable identity across their digital experiences.
          </p>
          <ZoomableImage src={imgDeliverableTwo} alt="Implemented design recording" className="h-auto w-full" onZoom={setZoomImage} />
        </RevealBlock>
      </section>

      <section className="bg-[#2f60cd] px-6 md:px-12 lg:px-20 py-[80px] text-white">
        <RevealBlock className="mx-auto max-w-7xl">
          <p className="text-[16px] uppercase tracking-[2px]">impact &amp; Learnings</p>
          <div className="mb-8 mt-2 h-[2px] w-8 bg-[#a7e7da]" />
          <h2 className="mb-6 text-[40px] font-bold leading-[47.406px]">Opportunities for Improvement</h2>
          <ul className="list-disc pl-7 text-[18px] leading-[29.25px]">
            <li>AI accelerated exploration, not execution. It was valuable for early direction and feedback, but final quality required Figma refinement.</li>
            <li>A strong design system created consistency across both brands and made scaling faster and cleaner.</li>
            <li>Branding updates improved perceived credibility and better matched how both companies operate today.</li>
          </ul>
          <p className="mt-6 text-[18px] font-bold leading-[29.25px]">What Could Be Improved</p>
          <ul className="list-disc pl-7 text-[18px] leading-[29.25px]">
            <li>Validate redesigned flows through usability testing and post-launch analytics.</li>
            <li>Expand design-system documentation and component coverage for future scalability.</li>
          </ul>
        </RevealBlock>
      </section>

      <section className="bg-white px-6 md:px-12 lg:px-20 py-[91px]">
        <RevealBlock className="mx-auto max-w-7xl border-t border-black/30 pt-[60px]">
          <p className="mb-8 text-[16px] uppercase tracking-[2px]" style={{ color: "#888888" }}>Next Project</p>
          <Link to="/project/validose" className="group flex items-center justify-between gap-8">
            <div>
              <p className="mb-2 text-[16px]" style={{ color: "#c4bfb9" }}>UX Design</p>
              <p className="text-[clamp(34px,6vw,61px)] font-bold leading-[1.05]">Medication Adherence in Clinical Trials</p>
              <p className="mt-1 text-[16px]" style={{ color: "#888888" }}>AI powered dashboard helping Wellness Coaches track client progress</p>
            </div>
            <span className="flex h-16 w-16 items-center justify-center rounded-full border border-black">
              <ArrowUpRight className="h-5 w-5" />
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
