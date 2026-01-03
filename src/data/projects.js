"use client";

// Central project data used by the Works list page and individual project pages.
// Update this file with your real case-study content.

export const projects = [
  {
    id: "coach-canvas",
    title: "CoachCanvas – Club & Player Management App",
    category: "Android Development",
    year: "2025",
    featured: true,
    summary:
      "A mobile app that helps football coaches and players manage their entire club environment in one place — from onboarding and squads, to match preparation and performance reviews.",
    description:
      "CoachCanvas replaces scattered WhatsApp groups, spreadsheets, and ad-hoc tools with a structured system that still feels simple for non-technical coaches and players. It focuses on clear information hierarchy, multi-role onboarding, club creation and management, and state-aware navigation that always takes users to the right place based on their role and status.",
    image: "/images/coachcanvas.png",
    technologies: [
      "React Native",
      "TypeScript",
      "Firebase Authentication",
      "Firestore",
      "Firebase Storage",
      "React Navigation",
      "Gradle",
      "Android Studio",
      "Metro bundler",
      "Figma",
    ],
    liveUrl: "",
    githubUrl: "",
    role: "End-to-end Product Designer & Developer",
    responsibilities: [
      "Designed and implemented multi-step onboarding wizards for coaches and players, capturing rich club and player profiles.",
      "Built club creation and management flows, including visual identity, squads, and member approval workflows.",
      "Implemented a secure join-code based onboarding system that connects players to the correct club with branded previews.",
      "Designed role-specific home experiences for managers and players, reflecting states like pending approval or active membership.",
      "Structured Firestore collections and services for users, clubs, players, and join requests with clear separation of concerns.",
      "Set up and debugged the Android build and signing pipeline, producing stable release APKs for real devices.",
    ],
    highlights: [
      "Multi-role onboarding that feels like a guided conversation rather than a form, tailored separately for coaches and players.",
      "Club creation with real identity — logos, jersey colors, and descriptions that carry through the entire experience.",
      "Join-code and approval workflow that lets coaches fully review rich player profiles before accepting them into the club.",
      "Navigation that adapts to auth state, profile completion, club membership, and join-request status without dead-ends.",
      "Production-ready Android build demonstrating a complete pipeline from design and architecture through to distribution.",
    ],
    screenshots: [
      {
        src: "/images/coachcanvas-loading.png",
        alt: "CoachCanvas onboarding and loading experience",
        placement: "overview",
      },
      {
        src: "/images/coachcanvas-home.png",
        alt: "CoachCanvas manager and player home screens",
        placement: "features",
      },
      {
        src: "/images/coachcanvas-MH.png",
        alt: "CoachCanvas match history and stats screens",
        placement: "features",
      },
      {
        src: "/images/coachcanvas-formation.png",
        alt: "CoachCanvas formation and lineup management screens",
        placement: "process",
      },
    ],
  },
  {
    id: "flexsave-smart-savings",
    title: "FlexSave – Smart Savings App",
    category: "UX Design",
    year: "2024",
    featured: true,
    summary:
      "A 5-day university UI/UX design project: conceptualized a flexible savings app from scratch and delivered a complete mobile interface design focused on making saving feel approachable and motivating.",
    description:
      "FlexSave was a rapid design sprint completed during university coursework. The challenge was to identify a real user problem, ideate a solution, and design a complete mobile app interface—all within 5 days. I chose to tackle the rigid, overwhelming nature of traditional budgeting apps by designing a savings companion that feels lightweight and flexible. The design emphasizes clear progress visualization, simple goal creation, and a mobile-first experience that makes saving feel achievable rather than restrictive.",
    image: "/images/flexsave.png",
    technologies: [
      "Figma",
      "UI Design",
      "UX Research",
      "Prototyping",
      "Design Systems",
    ],
    liveUrl: "",
    githubUrl: "",
    role: "UI/UX Designer",
    responsibilities: [
      "Identified user pain points around rigid budgeting tools and conceptualized a flexible savings approach.",
      "Designed complete mobile app interface including dashboard, goal creation flows, and progress visualization.",
      "Created a cohesive design system with reusable components, color palette, and typography.",
      "Built interactive prototypes for key user flows to demonstrate interactions and micro-animations.",
      "Delivered high-fidelity designs ready for handoff within the 5-day timeline.",
    ],
    highlights: [
      "Rapid ideation and problem-solving: from concept to complete design in 5 days.",
      "Goal cards with clear progress states and visual feedback that makes saving feel rewarding.",
      "Mobile-first design with focus on thumb reach zones and one-handed usability.",
      "Clean, approachable visual language that removes intimidation from financial planning.",
    ],
    screenshots: [
      {
        src: "/images/flexsave/fs-all-coups.png",
        alt: "FlexSave all coupons view - main dashboard showing available savings opportunities",
        placement: "overview",
      },
      {
        src: "/images/flexsave/fs-add-coupon.png",
        alt: "FlexSave add coupon flow - interface for adding new savings opportunities",
        placement: "features",
      },
      {
        src: "/images/flexsave/fs-coup1.png",
        alt: "FlexSave coupon detail screen - individual savings opportunity view",
        placement: "features",
      },
      {
        src: "/images/flexsave/fs-coup2.png",
        alt: "FlexSave coupon interaction screen - engaging with savings offers",
        placement: "features",
      },
      {
        src: "/images/flexsave/fs-posts.png",
        alt: "FlexSave social feed - community posts and savings tips",
        placement: "process",
      },
    ],
  },
  {
    id: "brightspace-learning-experience",
    title: "Brightspace – Learning Experience Concept",
    category: "UX Design",
    year: "2023",
    featured: true,
    summary:
      "A UX case study and interactive prototype focused on simplifying student workflows, improving visual hierarchy, and reducing friction in daily tasks.",
    description:
      "Brightspace explores how a student portal can feel calmer and more focused. The concept reorganizes key actions like checking deadlines, modules, and messages into a clearer, more visual structure.",
    image: "/images/brightspace.png",
    technologies: ["Figma", "Prototyping", "User Research", "UI Design"],
    liveUrl: "",
    githubUrl: "",
    role: "UX & UI Designer",
    responsibilities: [
      "Mapped the current student journey and identified key friction points.",
      "Redesigned the information architecture for the dashboard and modules.",
      "Built high-fidelity prototypes in Figma for usability walkthroughs.",
    ],
    highlights: [
      "Card-based dashboard that surfaces the next important action.",
      "Cleaner visual hierarchy for deadlines and assessments.",
      "Prototype designed to support quick user testing sessions.",
    ],
  },
  {
    id: "portfolio-v3",
    title: "Portfolio v3 – Interactive Personal Site",
    category: "Frontend Development",
    year: "2025",
    featured: true,
    summary:
      "An experimental portfolio with theme switching, animated backgrounds, and scroll-snapped sections designed to feel playful yet minimal.",
    description:
      "This portfolio is both a playground and a personal brand piece. It experiments with animated backgrounds, a Ghost Mouse theme, and glassmorphism while still keeping the content focused and readable.",
    image: "/images/logo.png",
    technologies: ["Next.js", "React", "Framer Motion", "Tailwind CSS"],
    liveUrl: "",
    githubUrl: "",
    role: "Frontend Developer · Visual Design",
    responsibilities: [
      "Architected the layout system and theme context.",
      "Implemented animated hero, works, and about sections with Framer Motion.",
      "Designed and tuned the Ghost Mouse background and glass UI elements.",
    ],
    highlights: [
      "Theme switching with a playful Ghost Mouse experience.",
      "Scroll-snapped home sections for a slide-like feel.",
      "Reusable layout and theme contexts for consistent spacing and color.",
    ],
  },
  {
    id: "android-expense-tracker",
    title: "Android Expense Tracker",
    category: "Android Development",
    year: "2023",
    summary:
      "A mobile app concept for tracking daily expenses with category breakdowns, simple input flows, and an interface tuned for one-handed use.",
    description:
      "The Android Expense Tracker experiment focuses on making expense input as fast as possible. The interface is optimized for quick-add actions and simple visual breakdowns rather than complex budgeting rules.",
    image: "",
    technologies: ["React Native", "JavaScript", "Firebase"],
    liveUrl: "",
    githubUrl: "",
    role: "Mobile Developer",
    responsibilities: [
      "Built core screens and navigation structure in React Native.",
      "Integrated Firebase as a simple backend for storing expenses.",
      "Explored input patterns that work well on small screens.",
    ],
    highlights: [
      "Quick-add flow with minimal required fields.",
      "Simple category visualization instead of heavy analytics.",
      "Concept built to explore mobile UX patterns.",
    ],
  },
  {
    id: "ghost-mouse-interaction",
    title: "Ghost Mouse Interaction",
    category: "Creative Digital Media",
    year: "2025",
    summary:
      "A creative digital media experiment using shaders and mouse trails to create an ambient, interactive background that reacts to user movement.",
    description:
      "Ghost Mouse is a shader-based background built with Three.js and GLSL. It turns mouse movement into an ethereal trail that softly blends into the page, used here as a theme in the portfolio.",
    image: "",
    technologies: ["Three.js", "GLSL", "WebGL", "JavaScript"],
    liveUrl: "",
    githubUrl: "",
    role: "Creative Technologist",
    responsibilities: [
      "Implemented the shader pipeline and render targets.",
      "Tuned intensity for hero vs. global background usage.",
      "Integrated the background with the theme system.",
    ],
    highlights: [
      "Interactive trail that feels ambient rather than distracting.",
      "Intensity controls for different pages and contexts.",
      "Bridges visual experimentation with real product UI.",
    ],
  },
];

export function getProjectById(id) {
  return projects.find((p) => p.id === id);
}
