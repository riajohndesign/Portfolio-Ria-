export interface ProcessPhase {
  phase: string;
  description: string;
}

export interface Insight {
  title: string;
  body: string;
}

export interface Metric {
  value: string;
  label: string;
  context?: string;
}

export interface GallerySlot {
  label: string;
  hint: string;
  aspect: "wide" | "square" | "tall";
}

export interface DesignDecision {
  decision: string;
  rationale: string;
}

export interface Project {
  id: string;
  title: string;
  subtitle: string;
  category: string[];
  year: string;
  role: string;
  tools: string[];
  image: string;
  accent: string;
  tagline: string;
  overview: string;
  challenge: string;
  process: ProcessPhase[];
  insights: Insight[];
  gallery: GallerySlot[];
  designDecisions: DesignDecision[];
  metrics: Metric[];
  outcome: string;
  nextProject: string;
}

export const projects: Project[] = [
  {
    id: "breathe-studio",
    title: "Breathe Studio",
    subtitle: "AI-Powered Coach Dashboard",
    category: ["UX Design", "AI Tools", "Dashboard"],
    year: "2024",
    role: "UX Designer",
    tools: ["Figma", "FigJam", "Maze", "ChatGPT"],
    image:
      "https://images.unsplash.com/photo-1575388902449-6bca946ad549?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWxsbmVzcyUyMGFwcCUyMGRhc2hib2FyZCUyMFVJJTIwZGVzaWdufGVufDF8fHx8MTc3MjU4MDAyOXww&ixlib=rb-4.1.0&q=80&w=1080",
    accent: "#4B9E7A",
    tagline: "Empowering wellness coaches with AI-driven client insights.",
    overview:
      "Breathe Studio is a wellness coaching platform that connects coaches with clients to improve breathing, mindfulness, and overall health. I was tasked with designing a comprehensive dashboard that would help coaches track client progress, surface AI-generated insights, and manage their practice more efficiently.",
    challenge:
      "Coaches were managing client data across multiple disconnected tools — spreadsheets, note-taking apps, and session recordings. The lack of centralized AI-assisted insights meant coaches spent more time on admin than actual coaching.",
    process: [
      {
        phase: "Discovery & Research",
        description:
          "Conducted interviews with 8 coaches and 12 clients to understand current workflows, pain points, and mental models. Created journey maps and identified opportunities for AI integration.",
      },
      {
        phase: "Define & Architect",
        description:
          "Synthesized research into 3 core user personas and prioritized features using a MoSCoW framework. Defined the information architecture and mapped key AI touchpoints.",
      },
      {
        phase: "Design & Test",
        description:
          "Created wireframes and high-fidelity prototypes in Figma. Ran 3 rounds of usability testing with coaches to validate and refine the design. Built a cohesive component library.",
      },
    ],
    insights: [
      {
        title: "Admin overload is real",
        body: "Coaches spent an average of 3+ hours per week on manual client tracking — time that directly came at the expense of actual coaching sessions.",
      },
      {
        title: "AI needs to show its work",
        body: "AI suggestions were only trusted when coaches could see the underlying data and session history. Black-box recommendations created friction, not efficiency.",
      },
      {
        title: "Narrative context is critical",
        body: "Session history wasn't just data — it was a story. Coaches needed to understand a client's arc over time, not just isolated metrics.",
      },
      {
        title: "Mobile access is non-negotiable",
        body: "Coaches work on-the-go and between sessions. A desktop-only tool would have low adoption no matter how powerful it was.",
      },
    ],
    gallery: [
      {
        label: "Dashboard Overview",
        hint: "Main coach dashboard — client list, AI insight panel, and session overview",
        aspect: "wide",
      },
      {
        label: "Client Profile",
        hint: "Individual client view with session history, progress metrics, and notes",
        aspect: "square",
      },
      {
        label: "AI Insights Panel",
        hint: "Real-time AI recommendations with supporting data and coach actions",
        aspect: "square",
      },
    ],
    designDecisions: [
      {
        decision: "Lead with client health score, not session count",
        rationale:
          "Session count felt like a productivity metric for coaches. A synthesized health score better reflected whether the coaching was actually working.",
      },
      {
        decision: "AI suggestions appear inline with client data",
        rationale:
          "Initially considered a separate AI panel, but testing showed coaches ignored it. Embedding AI within context (e.g., next to declining breathing scores) doubled engagement.",
      },
      {
        decision: "Design for mobile-first, optimize for desktop",
        rationale:
          "Most check-ins happen on mobile between sessions. The desktop view handles deep admin. This split reduced scope while serving the actual use cases.",
      },
    ],
    metrics: [
      { value: "40%", label: "Reduction in admin time", context: "Post-launch coach survey" },
      { value: "30%", label: "Increase in client capacity", context: "Average per coach" },
      { value: "8", label: "Coach interviews", context: "Discovery phase" },
    ],
    outcome:
      "The dashboard reduced coach administrative time by an estimated 40%, with coaches reporting they could now manage 30% more clients without burnout. The AI insights panel became the most-used feature, helping coaches proactively identify clients who needed extra attention before they churned.",
    nextProject: "othain-jersey-tech",
  },
  {
    id: "othain-jersey-tech",
    title: "OThain / Jersey Tech",
    subtitle: "Full Website Redesign",
    category: ["UX Design", "Content Strategy", "Design System"],
    year: "2024",
    role: "UX Designer & Content Strategist",
    tools: ["Figma", "FigJam", "Notion", "Webflow"],
    image:
      "https://images.unsplash.com/photo-1476357471311-43c0db9fb2b4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWJzaXRlJTIwcmVkZXNpZ24lMjBVWCUyMGRlc2lnbiUyMHByb2Nlc3N8ZW58MXx8fHwxNzcyNTgwMDMwfDA&ixlib=rb-4.1.0&q=80&w=1080",
    accent: "#4B72D4",
    tagline: "Rebuilding a tech brand from the ground up — components to content.",
    overview:
      "OThain / Jersey Tech needed a complete digital transformation. Their existing website failed to communicate their value proposition, lacked a coherent design language, and had a content strategy that wasn't resonating with their target audience. I led the full redesign starting from their component library all the way to their messaging framework.",
    challenge:
      "The existing site was built without a design system, resulting in inconsistent UI patterns and a fragmented brand identity. The content was technically accurate but failed to speak to customer needs — all features, no benefits.",
    process: [
      {
        phase: "Audit & Research",
        description:
          "Performed a comprehensive UX and content audit of the existing site, analyzed 5 competitor websites, and conducted stakeholder interviews to align on business goals and audience segments.",
      },
      {
        phase: "Content Strategy",
        description:
          "Developed a new content framework based on Jobs-to-be-Done methodology. Created messaging hierarchies for each page and wrote content guidelines establishing a clear, confident brand voice.",
      },
      {
        phase: "Design System & Execution",
        description:
          "Built a scalable design system from scratch — including typography, color, spacing tokens, and 60+ components. Applied the system to redesign all key pages with full responsive layouts.",
      },
    ],
    insights: [
      {
        title: "Value prop buried below the fold",
        body: "Visitors left within 10 seconds because the core value proposition wasn't visible without scrolling. The hero was decorative, not communicative.",
      },
      {
        title: "4 different button styles, 0 consistency",
        body: "The existing site had accumulated 4 different button variants and no consistent typographic hierarchy — eroding user trust through visual noise.",
      },
      {
        title: "Customers need proof, not promises",
        body: "Qualitative research revealed customers wanted to see real case studies within the first 2 scroll sections — and the existing site had none above the fold.",
      },
      {
        title: "Local expertise was invisible",
        body: "The company's biggest differentiator — deep local market knowledge — was buried on the About page. It needed to be a headline, not a footnote.",
      },
    ],
    gallery: [
      {
        label: "Homepage — New Design",
        hint: "Full homepage redesign with clear hero, social proof, and value proposition",
        aspect: "wide",
      },
      {
        label: "Component Library",
        hint: "Design system — button variants, cards, typography, and color tokens",
        aspect: "square",
      },
      {
        label: "Services Page",
        hint: "Services page layout with case study previews and CTAs",
        aspect: "square",
      },
    ],
    designDecisions: [
      {
        decision: "Lead with the problem customers have, not the service offered",
        rationale:
          "Reframing the homepage copy from 'We offer X' to 'Struggling with Y? Here's how we help' reduced bounce rate significantly in A/B testing.",
      },
      {
        decision: "One design system, strict usage rules",
        rationale:
          "Rather than allowing component variations per page, strict design tokens enforced consistency and made future updates 3x faster to implement.",
      },
    ],
    metrics: [
      { value: "65%", label: "Improvement in engagement", context: "Post-launch analytics" },
      { value: "60+", label: "Components built", context: "Full design system" },
      { value: "3", label: "Months redesign timeline", context: "Audit to launch" },
    ],
    outcome:
      "The redesigned website launched with a 65% improvement in user engagement metrics and a significant drop in bounce rate. The new design system has accelerated future development velocity and ensured brand consistency across all digital touchpoints.",
    nextProject: "arpa-h",
  },
  {
    id: "arpa-h",
    title: "ARPA-H",
    subtitle: "Mobile Medical Van · Rural Healthcare Access",
    category: ["User Research", "Service Design", "Healthcare"],
    year: "2023",
    role: "UX Researcher & Early Designer",
    tools: ["Figma", "FigJam", "Miro", "Atlas.ti"],
    image:
      "https://images.unsplash.com/photo-1726161832268-65e47103db6c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxydXJhbCUyMGNvbW11bml0eSUyMG91dHJlYWNoJTIwdmFuJTIwaGVhbHRoY2FyZXxlbnwxfHx8fDE3NzI1ODAwMzN8MA&ixlib=rb-4.1.0&q=80&w=1080",
    accent: "#D4714A",
    tagline: "Bringing primary care to the communities that need it most.",
    overview:
      "ARPA-H (Advanced Research Projects Agency for Health) is a government initiative aimed at accelerating healthcare breakthroughs. I was part of the early design team exploring how a mobile medical van could deliver primary care to rural and underserved communities across America.",
    challenge:
      "Over 60 million Americans live in rural areas with limited healthcare access. Existing solutions — including telehealth — often fail due to poor connectivity and low digital literacy. The challenge was to design a physical and digital service that would work in severely constrained real-world environments.",
    process: [
      {
        phase: "Field Research",
        description:
          "Conducted ethnographic research in 3 rural communities, interviewing residents, local clinic staff, and community health workers. Documented existing healthcare access patterns and barriers.",
      },
      {
        phase: "Service Blueprint",
        description:
          "Mapped the end-to-end service journey for both patients and healthcare providers. Identified critical touchpoints where design could meaningfully improve the mobile care experience.",
      },
      {
        phase: "Early Concept Design",
        description:
          "Developed initial concepts for the van's interior layout, patient check-in flow, and digital health record integration. Created low-fidelity prototypes for stakeholder validation.",
      },
    ],
    insights: [
      {
        title: "Trust is the biggest barrier",
        body: "Rural residents are deeply skeptical of unfamiliar healthcare providers. Community trust is built through local connectors — not apps or marketing.",
      },
      {
        title: "Chronic conditions, zero care",
        body: "Many residents had 2–3 unmanaged chronic conditions but saw a doctor less than once a year. The gap between need and access was staggering.",
      },
      {
        title: "Check-in friction causes abandonment",
        body: "Insurance verification, paperwork, and long wait times caused people to leave before receiving care — even when they showed up at the van.",
      },
      {
        title: "Community health workers are the key",
        body: "CHWs were the most trusted healthcare connectors in these communities. Any effective service design needed to center their role, not sideline it.",
      },
    ],
    gallery: [
      {
        label: "Service Blueprint",
        hint: "End-to-end service journey map across patient, CHW, and clinical provider lanes",
        aspect: "wide",
      },
      {
        label: "Van Interior Layout",
        hint: "Early spatial design concept for the mobile medical unit interior",
        aspect: "square",
      },
      {
        label: "Check-in Flow",
        hint: "Simplified patient registration flow designed for low-literacy environments",
        aspect: "square",
      },
    ],
    designDecisions: [
      {
        decision: "Design check-in for zero digital literacy",
        rationale:
          "Instead of a kiosk or app-based check-in, designed a CHW-assisted verbal intake process with minimal paperwork — meeting patients where they actually are.",
      },
      {
        decision: "Build the service blueprint before any screen design",
        rationale:
          "Starting with the physical and relational service layer revealed that most friction points had nothing to do with digital interfaces.",
      },
    ],
    metrics: [
      { value: "3", label: "Rural communities researched", context: "Ethnographic fieldwork" },
      { value: "12+", label: "Stakeholders interviewed", context: "Residents, CHWs, clinicians" },
      { value: "4", label: "Key service touchpoints mapped", context: "Service blueprint" },
    ],
    outcome:
      "The early research and design work established a clear foundation for ARPA-H's mobile health initiative. Key insights were incorporated into the program brief, and the service blueprint became a primary reference for the technical development team moving into the next phase.",
    nextProject: "validose",
  },
  {
    id: "validose",
    title: "Validose",
    subtitle: "Medication Adherence Device",
    category: ["User Research", "Product Development", "Healthcare"],
    year: "2023",
    role: "UX Researcher & Product Designer",
    tools: ["Figma", "FigJam", "Maze", "IDEO Methods"],
    image:
      "https://images.unsplash.com/photo-1695048441368-e913925d1e54?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZWRpY2F0aW9uJTIwZGV2aWNlJTIwcGlsbCUyMGhlYWx0aCUyMHRlY2h8ZW58MXx8fHwxNzcyNTgwMDMwfDA&ixlib=rb-4.1.0&q=80&w=1080",
    accent: "#7C5CBF",
    tagline: "Making it easier to take the right medication at the right time.",
    overview:
      "Medication non-adherence is responsible for approximately 125,000 deaths and $300 billion in preventable healthcare costs annually in the US. Validose set out to address this with a smart medication adherence device. I led user research and early product development to define what that device should be.",
    challenge:
      "The core challenge was understanding why people don't take their medications as prescribed. The reasons are deeply personal and varied — from forgetfulness to side effects to complex multi-drug regimens. Any solution needed to account for this human complexity.",
    process: [
      {
        phase: "Discovery Research",
        description:
          "Conducted 15 in-depth interviews with patients managing chronic conditions and 5 interviews with pharmacists and physicians. Used diary studies to capture real-world medication behaviors over 2 weeks.",
      },
      {
        phase: "Problem Framing",
        description:
          "Synthesized research into key behavioral archetypes and identified the most addressable barriers to adherence. Reframed the challenge from 'remind people to take pills' to 'reduce the friction that causes people to give up'.",
      },
      {
        phase: "Concept Development",
        description:
          "Developed 6 device concepts through co-design workshops with patients. Validated concepts through rapid prototyping and guerrilla testing. Defined product requirements and interaction principles.",
      },
    ],
    insights: [
      {
        title: "Non-adherence is mostly intentional",
        body: "75% of missed doses were intentional — people stopped taking medications due to side effects, cost, or feeling better. Reminders don't solve any of these problems.",
      },
      {
        title: "Routine disruption is the #1 trigger",
        body: "The biggest situational trigger for missing doses was disruption to daily routine — travel, weekends, and holidays consistently broke established habits.",
      },
      {
        title: "People want less friction, not more reminders",
        body: "Participants didn't want another notification. They wanted the experience of taking medications to feel effortless and integrated into existing behavior.",
      },
      {
        title: "Caregivers are an invisible stakeholder",
        body: "Many patients had a family member managing or monitoring their medication, but no existing product gave caregivers meaningful, non-intrusive visibility.",
      },
    ],
    gallery: [
      {
        label: "Research Synthesis",
        hint: "Affinity map and behavioral archetypes from the diary study and interviews",
        aspect: "wide",
      },
      {
        label: "Device Concept Sketches",
        hint: "6 concept directions from co-design workshops with patients",
        aspect: "square",
      },
      {
        label: "Interaction Model",
        hint: "Interaction principles and product requirements for the MVP device",
        aspect: "square",
      },
    ],
    designDecisions: [
      {
        decision: "Design for the caregiver, not just the patient",
        rationale:
          "Including a lightweight caregiver visibility feature differentiated Validose from pure reminder apps and addressed a real unmet need discovered in research.",
      },
      {
        decision: "Prioritize friction reduction over feature richness",
        rationale:
          "Every feature proposed was evaluated against one question: does this make it easier to take the medication, or does it add complexity? Many early ideas were cut.",
      },
    ],
    metrics: [
      { value: "15", label: "Patient interviews", context: "Discovery phase" },
      { value: "6", label: "Device concepts developed", context: "Co-design workshops" },
      { value: "2wk", label: "Diary study duration", context: "Real-world behavior capture" },
    ],
    outcome:
      "Research insights and product concepts were used to define Validose's MVP roadmap and investor pitch. The behavioral framework developed became the foundation for the product team's ongoing design work and has guided every major product decision since.",
    nextProject: "et-tube",
  },
  {
    id: "et-tube",
    title: "ET Tube",
    subtitle: "Medical Device Design Research",
    category: ["Design Research", "Healthcare", "Medical Devices"],
    year: "2023",
    role: "Design Researcher",
    tools: ["FigJam", "Miro", "Dovetail", "Literature Review"],
    image:
      "https://images.unsplash.com/photo-1766299892693-2370a8d47e23?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZWRpY2FsJTIwZGV2aWNlJTIwaG9zcGl0YWwlMjBlcXVpcG1lbnQlMjBkZXNpZ258ZW58MXx8fHwxNzcyNTgwMDMxfDA&ixlib=rb-4.1.0&q=80&w=1080",
    accent: "#C94F4F",
    tagline: "Understanding a critical problem in emergency airway management.",
    overview:
      "Endotracheal (ET) tube holders are critical medical devices used to secure breathing tubes in intubated patients. Current holders cause skin pressure injuries, accidental extubations, and significant discomfort. This project focused on deep design research to understand the problem space and generate actionable insights for a redesigned ET tube holder.",
    challenge:
      "The ET tube holder market hadn't seen significant innovation in decades, yet clinicians regularly reported serious issues. The challenge was to build a rigorous, evidence-based understanding of the failure modes, user needs, and true design opportunities.",
    process: [
      {
        phase: "Literature Review",
        description:
          "Conducted a systematic review of clinical literature on ET tube complications, accidental extubation rates, and skin injury outcomes. Built a comprehensive evidence base for the design research.",
      },
      {
        phase: "Contextual Inquiry",
        description:
          "Observed ICU nurses and respiratory therapists during tube management procedures. Documented workarounds, adaptations, and critical workflow moments. Interviewed 12 clinicians.",
      },
      {
        phase: "Insight Synthesis",
        description:
          "Organized findings into an affinity map identifying 4 major opportunity areas. Developed 'How Might We' questions and design principles to guide future redesign efforts.",
      },
    ],
    insights: [
      {
        title: "Accidental extubation is a silent crisis",
        body: "Accidental extubation occurs in 1–3% of intubated ICU patients and often requires emergency re-intubation — a life-threatening procedure. Current holders are a direct contributing factor.",
      },
      {
        title: "Nurses spend 5–10 min per shift just checking the holder",
        body: "Time spent monitoring and adjusting the tube holder every shift represented a significant nursing burden that better design could eliminate.",
      },
      {
        title: "Moisture causes most skin injuries",
        body: "The biggest source of pressure injuries wasn't mechanical force — it was moisture trapped under adhesive-based holders. This pointed to a material and ventilation design opportunity.",
      },
      {
        title: "Clinicians improvise constantly",
        body: "Nurses had developed elaborate workarounds: folded gauze under the holder, extra tape in specific patterns. These workarounds were the real design brief.",
      },
    ],
    gallery: [
      {
        label: "Contextual Inquiry Notes",
        hint: "Annotated observations from ICU clinical observation sessions",
        aspect: "wide",
      },
      {
        label: "Affinity Map",
        hint: "Synthesized research organized into 4 key opportunity areas",
        aspect: "square",
      },
      {
        label: "Design Principles Framework",
        hint: "How Might We questions and design principles for future redesign",
        aspect: "square",
      },
    ],
    designDecisions: [
      {
        decision: "Let clinician workarounds define the design brief",
        rationale:
          "Rather than starting from functional requirements, mapping the actual workarounds nurses used revealed more precise, actionable design opportunities.",
      },
      {
        decision: "Frame insights for an engineering audience",
        rationale:
          "The primary output needed to bridge clinical insight and mechanical engineering. Every finding was paired with a specific, testable design direction.",
      },
    ],
    metrics: [
      { value: "12", label: "Clinicians interviewed", context: "ICU nurses + RTs" },
      { value: "4", label: "Opportunity areas identified", context: "Affinity map synthesis" },
      { value: "1–3%", label: "Accidental extubation rate", context: "Clinical literature" },
    ],
    outcome:
      "The research produced a comprehensive insights report and design brief that identified key opportunity areas for ET tube holder redesign — including improved fixation mechanisms, pressure distribution, and clinical workflow integration — providing a strong evidentiary foundation for future product development.",
    nextProject: "breathe-studio",
  },
];
