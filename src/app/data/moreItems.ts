export interface MoreItem {
  id: string;
  title: string;
  subtitle: string;
  category: string;
  year: string;
  role: string;
  overview: string;
  challenge: string;
  process: { phase: string; description: string }[];
  outcome: string;
}

export const moreItems: MoreItem[] = [
  {
    id: "bubble",
    title: "Bubble",
    subtitle: "Aid for Subway Induced Anxiety",
    category: "Case Study",
    year: "2024",
    role: "UX Researcher & Product Designer",
    overview:
      "Bubble is a concept product designed to help commuters manage anxiety triggered by subway environments — crowded platforms, unexpected delays, and sensory overload. This case study explores how design can create moments of calm in one of the world's most stressful shared spaces.",
    challenge:
      "Subway-induced anxiety is a widely experienced but rarely designed-for condition. Existing coping mechanisms are either invisible (breathing techniques) or conspicuous (noise-cancelling headphones). The challenge was to design something that felt supportive without drawing attention, and practical enough to use mid-commute.",
    process: [
      {
        phase: "Research & Discovery",
        description:
          "Conducted diary studies and contextual interviews with 12 regular subway commuters who self-reported anxiety symptoms. Mapped triggers across the full commute journey — from the platform wait to the ride itself.",
      },
      {
        phase: "Insight Synthesis",
        description:
          "Identified three core anxiety triggers: unpredictability (not knowing when the train arrives), crowding (loss of personal space), and sensory overload (noise, smell, heat). Reframed the design brief around 'creating a sense of control in uncontrollable environments'.",
      },
      {
        phase: "Concept Development",
        description:
          "Developed Bubble — a soft wearable wristband that delivers subtle haptic breathing cues on demand, paired with a minimal app for real-time train tracking and crowd density alerts. Prototyped and tested across 3 rounds of user testing.",
      },
    ],
    outcome:
      "Bubble was validated as a concept with strong user resonance, particularly for the haptic-guided breathing feature. The project was presented as a design research case study and informed subsequent work on inclusive transit design.",
  },
  {
    id: "serene",
    title: "Serene",
    subtitle: "A Breathing Belt for New Moms",
    category: "Case Study",
    year: "2024",
    role: "UX Researcher & Product Designer",
    overview:
      "Serene is a wearable breathing support device designed specifically for postpartum women navigating the physical and emotional demands of new motherhood. The belt uses gentle biofeedback to guide breathing rhythm, helping new moms regulate stress in real time without requiring screens or interruption.",
    challenge:
      "Postpartum anxiety affects up to 20% of new mothers, yet most interventions require active effort — apps, therapy sessions, or conscious practice. New moms rarely have uninterrupted moments. The design challenge was to create something that works passively, hands-free, and during the natural rhythms of caregiving.",
    process: [
      {
        phase: "Research",
        description:
          "Conducted in-depth interviews with 10 postpartum women between 2 weeks and 6 months after birth. Mapped the daily caregiving routine to identify stress peaks and opportunities for passive intervention.",
      },
      {
        phase: "Co-design",
        description:
          "Ran two co-design workshops with new moms and a lactation consultant. Explored form factors, placement, and interaction models. The abdominal belt emerged as the preferred form — familiar from pregnancy and easy to wear under clothing.",
      },
      {
        phase: "Prototype & Test",
        description:
          "Built a lo-fi wearable prototype using a vibration motor and elastic fabric. Tested three breathing rhythm patterns across 6 participants during nighttime feeding sessions. Iterated based on comfort, intrusiveness, and perceived calm.",
      },
    ],
    outcome:
      "Serene was shortlisted in a healthcare design brief and received strong feedback from clinical advisors for its non-screen, passive-intervention approach. The research is being used to inform a broader maternal health design toolkit.",
  },
  {
    id: "envisioning-the-future-you",
    title: "Envisioning the Future You",
    subtitle: "Facilitation Workshop",
    category: "Facilitation",
    year: "2023",
    role: "Lead Facilitator & Experience Designer",
    overview:
      "A futures-thinking workshop designed to help participants articulate a vivid, grounded vision of their personal and professional future self. The session uses speculative design tools, narrative exercises, and reflective prompts to move people from abstract aspiration to concrete intention.",
    challenge:
      "Most goal-setting exercises produce vague intentions that don't stick. The challenge was to design a workshop experience that bypassed self-censorship, activated genuine imagination, and ended with artifacts participants could carry forward as personal anchors.",
    process: [
      {
        phase: "Workshop Design",
        description:
          "Designed a 3-hour workshop arc structured in three acts: Letting Go (releasing current identity constraints), Imagining Forward (building a rich sensory future narrative), and Grounding Back (translating the vision into present-day signals and decisions).",
      },
      {
        phase: "Facilitation",
        description:
          "Facilitated multiple cohorts across university and early-career professional contexts. Used guided visualisation, artifact creation (a 'future day in my life' storyboard), and peer-sharing to build emotional resonance and accountability.",
      },
      {
        phase: "Iteration",
        description:
          "Refined the session arc across 4 cohorts based on facilitator reflection and participant feedback. Key iterations included shortening the opening exercise and adding a physical artifact (a 'future postcard' written to their present self).",
      },
    ],
    outcome:
      "The workshop has been delivered to 80+ participants across university, startup, and community settings. Participants consistently report increased clarity and motivation. The facilitation guide is now used by two other facilitators independently.",
  },
  {
    id: "carrom-club",
    title: "Carrom Club",
    subtitle: "Facilitation Workshop",
    category: "Facilitation",
    year: "2023",
    role: "Lead Facilitator & Experience Designer",
    overview:
      "Carrom Club is a community facilitation session that uses the game of carrom as a metaphor and medium for exploring collaboration, strategy, and cultural identity. Designed for diverse groups, it creates a shared playful context that lowers social barriers and opens space for meaningful conversation.",
    challenge:
      "Facilitating conversations about identity, belonging, and collaboration in diverse groups is difficult when participants don't share a common frame of reference. Carrom — a game with deep cultural roots across South Asia, the Middle East, and East Africa — provided an unexpected but powerful shared object that bridged backgrounds.",
    process: [
      {
        phase: "Concept & Design",
        description:
          "Designed the session around three phases: Play (unstructured games to build familiarity), Reflect (structured questions about strategy, decision-making, and memory tied to the game), and Connect (open conversation about what the game brings up personally and culturally).",
      },
      {
        phase: "Piloting",
        description:
          "Piloted with a mixed-background university group of 16 participants. Observed how the game naturally surfaced stories, humour, and cultural pride. Used this data to sharpen the reflection prompts and pacing.",
      },
      {
        phase: "Scaling",
        description:
          "Iterated the session into a 90-minute format suitable for team-building, orientation, and community events. Created a facilitator kit with setup instructions, prompt cards, and debrief questions.",
      },
    ],
    outcome:
      "Carrom Club has been run across university orientation events, design studios, and community centres. It consistently generates high engagement and cross-cultural connection. The facilitator kit has been adopted by two community organisations independently.",
  },
];
