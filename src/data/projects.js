// Central project data used by the Works list page and individual project pages.
// Update this file with your real case-study content.
// Note: This is a data file, not a component, so "use client" is not needed.

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
    image: "/images/coachcanvas/coachcanvas.png",
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
    caseStudy: {
      eyebrow: "Flagship product case study",
      timeline: "2025",
      status: "Android release build",
      problem:
        "Grassroots football clubs often run on scattered WhatsApp threads, spreadsheets, informal approvals, and coach memory. That creates friction for onboarding, player management, and match preparation.",
      opportunity:
        "Create a structured club workspace that still feels simple enough for non-technical coaches and players to use every week.",
      users: ["Club managers", "Football coaches", "Players waiting to join a club"],
      productThinking: [
        "Separated coach and player onboarding so each role only sees the decisions that matter to them.",
        "Mapped the app around user state: unauthenticated, profile incomplete, club owner, pending join request, approved player.",
        "Made club identity visible across the experience so a join code feels connected to a real team, not a generic form.",
      ],
      designDecisions: [
        "Designed onboarding as a guided sequence instead of a long form.",
        "Used branded club previews to build trust before a player submits a join request.",
        "Kept home screens role-specific so managers and players land on different priorities.",
      ],
      engineeringDecisions: [
        "Built state-aware navigation with React Navigation so users always land in the correct flow.",
        "Structured Firestore around users, clubs, players, and join requests to keep ownership boundaries clear.",
        "Handled Android build, signing, and release APK debugging to move beyond prototype status.",
      ],
      outcome:
        "CoachCanvas demonstrates the full product loop: problem framing, UX flows, mobile UI, backend structure, role-based logic, and release preparation.",
      reflection:
        "The biggest learning was that mobile product quality depends as much on state design as visual design. The app needed to understand where each user was in the club journey before any screen could feel simple.",
    },
    screenshots: [
      {
        src: "/images/coachcanvas/coachcanvas-loading.png",
        alt: "CoachCanvas onboarding and loading experience",
        placement: "overview",
      },
      {
        src: "/images/coachcanvas/coachcanvas-home.png",
        alt: "CoachCanvas manager and player home screens",
        placement: "features",
      },
      {
        src: "/images/coachcanvas/coachcanvas-MH.png",
        alt: "CoachCanvas match history and stats screens",
        placement: "features",
      },
      {
        src: "/images/coachcanvas/coachcanvas-formation.png",
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
    image: "/images/flexsave/flexsave.png",
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
    caseStudy: {
      eyebrow: "Five-day UX sprint",
      timeline: "5 days",
      status: "High-fidelity prototype",
      problem:
        "Many budgeting products feel rigid and punitive, which makes saving feel like restriction rather than progress.",
      opportunity:
        "Design a lightweight savings companion that helps users feel in control without overwhelming them with financial complexity.",
      users: ["Students", "Young professionals", "Casual savers"],
      productThinking: [
        "Focused the concept around small, visible progress instead of heavy budgeting rules.",
        "Prioritized fast goal creation and clear reward moments for mobile use.",
        "Kept the scope tight enough to produce a complete prototype inside the sprint window.",
      ],
      designDecisions: [
        "Used progress-led goal cards to make status understandable at a glance.",
        "Designed for thumb reach and short sessions rather than long planning workflows.",
        "Created a softer visual language to reduce the intimidation common in finance apps.",
      ],
      engineeringDecisions: [
        "Prepared reusable component patterns and interaction states for eventual implementation.",
        "Designed screens with consistent spacing and hierarchy so handoff would be straightforward.",
      ],
      outcome:
        "The project shows rapid product thinking: identifying a user problem, shaping a focused concept, and delivering a coherent mobile interface quickly.",
      reflection:
        "The time constraint forced clear prioritization. The strongest ideas were the ones that made the product easier to understand in the first few seconds.",
    },
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
    title: "Brightspace – Career Growth Feature Concept",
    category: "UX Design",
    year: "2023",
    featured: true,
    summary:
      "A graded university UI/UX project that extended the Brightspace student app with career-focused features for resumes, networking, portfolios, and academic references.",
    description:
      "For this project, I chose Brightspace as an existing university app with an opportunity to support students beyond modules, notes, and results. After planning and sketching, I proposed three additions: a resume builder, a networking/career area, and a portfolio page where students can showcase university projects while professors can add notes and references.",
    image: "/images/brightspace/brightspace.png",
    heroFit: "contain",
    technologies: [
      "Figma",
      "UI Design",
      "UX Research",
      "Wireframing",
      "Prototyping",
      "Mobile App Design",
    ],
    liveUrl: "",
    githubUrl: "",
    role: "UX & UI Designer",
    responsibilities: [
      "Reviewed the existing Brightspace student app and identified an opportunity to support career growth inside the university experience.",
      "Planned three new feature areas: resume maker, networking/career opportunities, and a student project portfolio.",
      "Sketched early concepts for growth and resume creation before moving into high-fidelity mobile screens.",
      "Redesigned the bottom navigation to make the new career-focused area easier to access.",
      "Created final UI screens for adding projects, building a CV, connecting with others, and browsing career opportunities.",
    ],
    highlights: [
      "Extended an existing university app rather than designing a standalone concept.",
      "Connected academic work to employability through portfolios, resumes, references, and networking.",
      "Used sketches and planning before moving into final mobile UI screens.",
      "Before/after bottom navigation exploration showing how the new feature could fit into the current app.",
    ],
    caseStudy: {
      eyebrow: "University UI/UX project",
      timeline: "2023",
      status: "Graded UX concept",
      problem:
        "Brightspace helps students access modules, notes, and results, but it does not strongly support the next step: turning university work into career-ready proof such as resumes, portfolios, references, and networking.",
      opportunity:
        "Add a career-growth layer inside the existing app so students can build a CV, showcase projects, discover opportunities, and collect professor references without leaving the university ecosystem.",
      users: ["University students", "Professors", "Career support teams"],
      productSectionEyebrow: "UX planning",
      productSectionTitle: "Why this addition belonged inside Brightspace.",
      designSectionEyebrow: "Feature design",
      designSectionTitle: "The three additions I designed.",
      productThinking: [
        "Started with the existing app context instead of creating a separate career product from scratch.",
        "Focused on the transition from coursework to employability: projects, CVs, references, and opportunities.",
        "Explored early ideas through sketches for growth and resume creation before committing to final UI screens.",
      ],
      designDecisions: [
        "Resume maker: a guided area for students to create and manage a CV using university and project information.",
        "Networking and career opportunities: screens for discovering roles, connecting with people, and finding relevant opportunities.",
        "Portfolio page: a place for students to add university projects while professors can provide notes and references.",
        "Bottom navigation update: adjusted the app navigation to make the new growth/career area easier to find.",
      ],
      engineeringDecisions: [
        "Designed mobile-first screens at app dimensions so the concept could be evaluated as a realistic Brightspace addition.",
        "Kept the visual direction close enough to an education app so the feature felt like an extension, not a separate product.",
        "Prepared final screens around clear user tasks: add project, build CV, connect, browse opportunities, and request references.",
      ],
      outcome:
        "The project shows UX thinking through a practical feature extension: identifying a gap in an existing app, planning the addition, sketching early ideas, and producing final mobile screens.",
      reflection:
        "This project helped me understand how to add new value to an existing product without ignoring its current purpose. The strongest part was connecting academic activity to career readiness.",
    },
    screenshots: [
      {
        src: "/images/brightspace/GrowthSketch.png",
        alt: "Initial sketch exploring the career growth addition inside Brightspace",
        placement: "overview",
        aspect: "portrait",
      },
      {
        src: "/images/brightspace/ResumeSketch.png",
        alt: "Initial sketch for the resume maker flow",
        placement: "overview",
        aspect: "portrait",
      },
      {
        src: "/images/brightspace/beforeMenu.png",
        alt: "Before: original Brightspace bottom navigation",
        placement: "process",
        aspect: "banner",
        size: "large",
        presentation: "comparison",
      },
      {
        src: "/images/brightspace/AfterMenu.png",
        alt: "After: updated bottom navigation with the new growth area",
        placement: "process",
        aspect: "banner",
        size: "large",
        presentation: "comparison",
      },
      {
        src: "/images/brightspace/Addprojects.png",
        alt: "Add projects screen for showcasing university work in a student portfolio",
        placement: "features",
        aspect: "portrait",
      },
      {
        src: "/images/brightspace/BuildCV1.png",
        alt: "Build CV screen for creating a student resume inside Brightspace",
        placement: "features",
        aspect: "portrait",
      },
      {
        src: "/images/brightspace/Connect Home Screen.png",
        alt: "Networking home screen for connecting with people and career support",
        placement: "features",
        aspect: "portrait",
      },
      {
        src: "/images/brightspace/GP Offer List.png",
        alt: "Career opportunities screen showing available growth and job-related offers",
        placement: "features",
        aspect: "portrait",
      },
      {
        src: "/images/brightspace/Open Resume Tab.png",
        alt: "Resume tab screen showing access to the CV builder feature",
        placement: "features",
        aspect: "portrait",
      },
      {
        src: "/images/brightspace/Reference Screenshot.png",
        alt: "Professor reference screen for notes and academic recommendations",
        placement: "features",
        aspect: "portrait",
      },
    ],
  },
  {
    id: "portfolio-v3",
    title: "Portfolio v3 – Interactive Personal Site",
    category: "Frontend Development",
    year: "2025",
    featured: false,
    summary:
      "A job-hunt portfolio with accessible theme switching, soft ambient backgrounds, and a content-first layout built for recruiters.",
    description:
      "This portfolio balances personality with clarity. It uses token-based themes (Midnight, Slate, Paper, Forest), a subtle mesh-and-grain ambient layer, and compact page layouts so work and case studies are easy to scan.",
    image: "/images/portfolio/portfolio.png",
    technologies: ["Next.js", "React", "Framer Motion", "Tailwind CSS"],
    liveUrl: "",
    githubUrl: "",
    role: "Frontend Developer · Visual Design",
    responsibilities: [
      "Architected the layout system and theme context.",
      "Implemented animated hero, works, and about sections with Framer Motion.",
      "Built accessible theme tokens and ambient CSS backgrounds.",
    ],
    highlights: [
      "Four WCAG-conscious themes with persisted user preference.",
      "Shared PageContainer alignment system matching the navbar.",
      "Content-dense home layout optimized for hiring managers.",
    ],
    caseStudy: {
      eyebrow: "Personal product system",
      timeline: "2025",
      status: "Live portfolio iteration",
      problem:
        "The previous portfolio was functional but did not fully express the overlap between design thinking, frontend craft, and product storytelling.",
      opportunity:
        "Turn the portfolio into a product experience that helps recruiters understand how the work was shaped, not just what tools were used.",
      users: ["Recruiters", "Hiring managers", "Product teams"],
      productThinking: [
        "Audited the information architecture around recruiter scanning behavior.",
        "Moved from a vertical card stack toward editorial project storytelling.",
        "Repositioned the site around product building from idea to production.",
      ],
      designDecisions: [
        "Reduced repeated card patterns and introduced stronger section contrast.",
        "Adopted a single authored dark theme as the default visual identity.",
        "Used larger typography and calmer motion to create a more premium first impression.",
      ],
      engineeringDecisions: [
        "Kept the redesign within the existing Next.js app structure.",
        "Centralized visual tokens and reusable studio utilities in global CSS.",
        "Moved homepage project rendering to Next Image for stronger media performance.",
      ],
      outcome:
        "The redesign reframes the site as a product/design engineering portfolio instead of a conventional React portfolio.",
      reflection:
        "The main lesson was restraint: the strongest portfolio moments come from hierarchy and story before decoration.",
    },
  },
  {
    id: "findaside-football-planner",
    title: "Findaside – Football Match Planner",
    category: "Frontend Development",
    year: "2024",
    featured: true,
    summary:
      "A contract frontend build for a football match-planning web app, covering host dashboards, game creation, player groups, payments, maps, routing, and responsive screens.",
    description:
      "Findaside is a football match-planning platform for hosts and players. I worked on the frontend implementation after initially being involved with the UI team, building the React interface across dashboards, game creation, booking, groups, payments, maps, and authenticated user flows.",
    image: "/images/findaside/findaside.png",
    heroFit: "contain",
    technologies: [
      "React",
      "TypeScript",
      "React Router",
      "Google Maps API",
      "Firebase Authentication",
      "Firestore",
      "Firebase",
      "CSS",
    ],
    liveUrl: "",
    githubUrl: "",
    role: "Frontend Developer (Contract / Freelance)",
    responsibilities: [
      "Built the React frontend for dashboard, upcoming games, booking, create-game, group, and payment screens.",
      "Implemented client-side routing with React Router so hosts and players could move between match-management flows.",
      "Connected authenticated user experiences using Firebase Authentication with OAuth and Firestore-backed data.",
      "Integrated map-based UI using the Maps API for location-focused game discovery and booking context.",
      "Built responsive layouts so the same match details and player flows worked across desktop and mobile views.",
    ],
    highlights: [
      "React + TypeScript frontend for a real contract/freelance product workflow.",
      "Host and player flows separated across dashboard, game creation, booking, groups, and payments.",
      "OAuth authentication and Firestore usage for account-backed product states.",
      "Maps API integration for location-led match discovery and booking views.",
      "Responsive implementation across desktop dashboards and mobile match-detail screens.",
    ],
    caseStudy: {
      eyebrow: "Contract frontend build",
      timeline: "2024",
      status: "Contract / freelance frontend work",
      problem:
        "The product needed a working frontend for two user types: hosts who create and manage games, and players who discover, join, and coordinate around those games.",
      opportunity:
        "Turn the product requirements into a usable React application with authenticated flows, route-based pages, map views, game creation, group management, and payment screens.",
      users: ["Match hosts", "Players"],
      productSectionEyebrow: "Build context",
      productSectionTitle: "What the frontend needed to support.",
      designSectionEyebrow: "Frontend scope",
      designSectionTitle: "The screens and flows I implemented.",
      productThinking: [
        "Hosts needed a dashboard for upcoming games, bookings, created games, groups, and payment activity.",
        "Players needed clear game discovery and match-detail screens that worked on mobile as well as desktop.",
        "The frontend had to support authenticated states through Firebase Authentication and Firestore-connected user data.",
      ],
      designDecisions: [
        "Built the main page set: dashboard, search/upcoming games, booking, create game, group, payments, and settings.",
        "Used React Router to keep each workflow separated while preserving a consistent app shell and navigation.",
        "Implemented responsive layouts for dense desktop dashboard screens and simpler mobile match-detail views.",
      ],
      engineeringDecisions: [
        "Built the application frontend with React and TypeScript for component-driven screens and safer UI logic.",
        "Used Firebase Authentication with OAuth and Firestore for account-backed flows and app data.",
        "Integrated the Maps API into the game discovery and booking experience.",
        "Handled frontend states such as empty upcoming games, created game details, group views, and payment screens.",
      ],
      outcome:
        "Findaside demonstrates contract frontend delivery: taking product requirements and turning them into routed, authenticated, responsive React screens for a real match-planning workflow.",
      reflection:
        "The project pushed me to focus less on visual exploration and more on implementation quality: page structure, state handling, authenticated flows, responsive layouts, and making complex screens usable.",
    },
    screenshots: [
      {
        src: "/images/findaside/FSUpcoming.png",
        alt: "Upcoming games screen with map view and empty-state game schedule",
        placement: "overview",
        aspect: "wide",
      },
      {
        src: "/images/findaside/FSBooking.png",
        alt: "Booking screen showing match details and location context",
        placement: "overview",
        aspect: "wide",
      },
      {
        src: "/images/findaside/FSCreate.png",
        alt: "Create game form built for hosts to add match details",
        placement: "features",
        aspect: "wide",
      },
      {
        src: "/images/findaside/FSGame.png",
        alt: "Game detail screen with match information and join action",
        placement: "features",
        aspect: "wide",
      },
      {
        src: "/images/findaside/FSGroup.png",
        alt: "Group screen for organizing players around a match",
        placement: "process",
        aspect: "wide",
      },
      {
        src: "/images/findaside/FSPayments.png",
        alt: "Payments screen for tracking match-related payment activity",
        placement: "features",
        aspect: "wide",
      },
    ],
  },
  // {
  //   id: "android-expense-tracker",
  //   title: "Android Expense Tracker",
  //   category: "Android Development",
  //   year: "2023",
  //   summary:
  //     "A mobile app concept for tracking daily expenses with category breakdowns, simple input flows, and an interface tuned for one-handed use.",
  //   description:
  //     "The Android Expense Tracker experiment focuses on making expense input as fast as possible. The interface is optimized for quick-add actions and simple visual breakdowns rather than complex budgeting rules.",
  //   image: "",
  //   technologies: ["React Native", "JavaScript", "Firebase"],
  //   liveUrl: "",
  //   githubUrl: "",
  //   role: "Mobile Developer",
  //   responsibilities: [
  //     "Built core screens and navigation structure in React Native.",
  //     "Integrated Firebase as a simple backend for storing expenses.",
  //     "Explored input patterns that work well on small screens.",
  //   ],
  //   highlights: [
  //     "Quick-add flow with minimal required fields.",
  //     "Simple category visualization instead of heavy analytics.",
  //     "Concept built to explore mobile UX patterns.",
  //   ],
  // },
  // {
  //   id: "ghost-mouse-interaction",
  //   title: "Shader Trail Experiment",
  //   category: "Creative Digital Media",
  //   year: "2025",
  //   summary:
  //     "A creative coding experiment: a WebGL shader that turns mouse movement into soft, colourful trails — explored for interactive backgrounds.",
  //   description:
  //     "Built with Three.js and GLSL, this prototype tests how far ambient motion can go before it hurts readability. The learnings informed a calmer mesh-and-grain approach on the live portfolio instead.",
  //   image: "",
  //   technologies: ["Three.js", "GLSL", "WebGL", "JavaScript"],
  //   liveUrl: "",
  //   githubUrl: "",
  //   role: "Creative Technologist",
  //   responsibilities: [
  //     "Implemented the shader pipeline and render targets.",
  //     "Tuned intensity for hero vs. global background usage.",
  //     "Compared full vs. subtle intensity for different page types.",
  //   ],
  //   highlights: [
  //     "Shader pipeline with render targets and noise textures.",
  //     "Led to a simpler CSS ambient layer on the production site.",
  //     "Documents trade-offs between spectacle and accessibility.",
  //   ],
  // },
];

export function getProjectById(id) {
  return projects.find((p) => p.id === id);
}

/** Job-hunt order: featured & shipped work first, experiments last */
export function getSortedProjects(list = projects) {
  return [...list].sort((a, b) => {
    if (a.featured !== b.featured) return a.featured ? -1 : 1;
    return Number(b.year || 0) - Number(a.year || 0);
  });
}
