// Central project data used by the Works list page and individual project pages.
// Update this file with your real case-study content.
// Note: This is a data file, not a component, so "use client" is not needed.

export const projects = [
  {
    id: "coach-canvas",
    title: "CoachCanvas – Club & Player Management App",
    category: "Full Product Lifecycle",
    year: "2025",
    featured: true,
    summary:
      "A mobile app that helps football coaches and players manage their entire club environment in one place — from onboarding and squads, to match preparation and performance reviews.",
    description:
      "CoachCanvas replaces scattered WhatsApp groups, spreadsheets, and ad-hoc tools with a structured system that still feels simple for non-technical coaches and players. It focuses on clear information hierarchy, multi-role onboarding, club creation and management, and state-aware navigation that always takes users to the right place based on their role and status.",
    image: "/images/coachcanvas/coachcanvas.png",
    platform: "Android mobile app",
    timeline: "2025",
    showcaseOverview:
      "CoachCanvas is a mobile club management app for grassroots football teams, bringing coach and player onboarding, club setup, member approval, squad information, match preparation, and performance views into one structured Android experience.",
    problem:
      "Grassroots clubs often depend on scattered chats, spreadsheets, and informal coach memory, making onboarding, approvals, player information, and match preparation harder to manage consistently.",
    solution:
      "CoachCanvas gives coaches and players role-specific flows, branded club spaces, join-code access, approval workflows, and state-aware navigation so each user lands in the right part of the club journey.",
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
    role: "UI/UX Designer & Full-Stack Developer",
    contributions: {
      "UI / UX": [
        "Designed coach and player onboarding as separate guided flows.",
        "Created club identity, join-code, approval, and role-specific home experiences.",
        "Designed mobile screens for squads, player profiles, match history, and formation planning.",
      ],
      "Full-Stack Development": [
        "Built the Android app with React Native, TypeScript, and React Navigation.",
        "Implemented Firebase Authentication, Firestore, and Firebase Storage workflows.",
        "Prepared and debugged the Android release build pipeline.",
      ],
    },
    keyFeatures: [
      "Coach and player onboarding",
      "Club creation and branding",
      "Join-code access",
      "Player approval workflow",
      "Role-specific home screens",
      "Squads and player profiles",
      "Match and performance views",
      "Formation planning",
    ],
    documentLinks: [
      {
        title: "UX Case Study",
        description: "Explore the research, UX process and design decisions.",
        href: "/images/coachcanvas/CoachCanvas-CaseStudy.pdf",
        type: "Concise PDF",
      },
      {
        title: "Final Project Report",
        description:
          "Complete academic report covering research, implementation, testing and evaluation.",
        href: "/images/coachcanvas/CoachCanvas_Major_Project_Report.pdf",
        type: "Detailed PDF",
      },
    ],
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
      users: [
        "Club managers",
        "Football coaches",
        "Players waiting to join a club",
      ],
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
    year: "2025",
    featured: true,
    workInProgress: true,
    workInProgressLabel: "Case study rebuild in progress",
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
    title: "Brightspace Pulse – Growth Hub Resume Builder",
    category: "UX / Product Design",
    year: "2025",
    featured: true,
    summary:
      "A team UX concept extending Brightspace Pulse with Growth Hub, a career-growth area for student portfolios, resumes, and academic networking. My primary ownership was the Resume Builder feature.",
    description:
      "Growth Hub explored how Brightspace Pulse could evolve from a learning companion into a platform that also supports employability and professional development. The team proposed Portfolio, Resume Builder, and Connect features, with my main contribution focused on designing the end-to-end Resume Builder experience.",
    image: "/images/brightspace/brightspace.png",
    heroFit: "contain",
    platform: "Brightspace Pulse mobile concept",
    timeline: "4 weeks · 2025",
    team: "3 designers",
    showcaseOverview:
      "Growth Hub is a concept extension for Brightspace Pulse that helps students showcase work, build professional resumes, and expand their academic network without leaving the university ecosystem.",
    problem:
      "Brightspace Pulse helps students manage coursework, deadlines, and notifications, but offers limited support when they begin preparing for internships, placements, or graduate roles.",
    solution:
      "The team proposed Growth Hub, a new Brightspace Pulse section containing Portfolio, Resume Builder, and Connect. My focus was the Resume Builder, helping students create, customise, upload, preview, edit, and download CVs directly inside the app.",
    technologies: [
      "Figma",
      "UI Design",
      "UX Research",
      "Wireframing",
      "Prototyping",
      "Usability Testing",
      "Product Strategy",
    ],
    liveUrl: "",
    githubUrl: "",
    role: "UX/UI Designer · Resume Builder Owner",
    contributions: {
      "Research & Strategy": [
        "Participated in user research, market research, competitor analysis, and problem definition.",
        "Contributed to the shared Growth Hub concept for portfolio, resume, and networking support.",
        "Conducted moderated usability testing with TU Dublin students and reviewed participant feedback.",
      ],
      "Resume Builder Design": [
        "Designed the complete Resume Builder experience from landing page to CV preview and download.",
        "Created user flows, wireframes, high-fidelity mobile UI, and an interactive Figma prototype.",
        "Extended Brightspace Pulse typography, buttons, forms, colour palette, and navigation patterns so the feature felt native.",
      ],
    },
    keyFeatures: [
      "Resume Builder",
      "Template Selection",
      "Upload Existing CV",
      "CV Editing",
      "Resume Preview",
      "Download Resume",
      "Integrated Student Profile",
      "Growth Hub Navigation",
    ],
    documentLinks: [
      {
        title: "View Case Study",
        description:
          "Read the full Brightspace Pulse Growth Hub case study covering research, design process, testing, and outcomes.",
        href: "/images/brightspace/BrightSpace Pulse Case Study.pdf",
        type: "UX case study PDF",
      },
    ],
    responsibilities: [
      "Conducted UX research and competitor analysis.",
      "Helped define the Growth Hub product concept.",
      "Designed the end-to-end Resume Builder experience.",
      "Created user flows and wireframes.",
      "Designed high-fidelity mobile interfaces in Figma.",
      "Built interactive prototypes for usability testing.",
      "Conducted user testing and analysed participant feedback.",
      "Iterated designs based on research findings.",
    ],
    highlights: [
      "Team UX project extending an existing university product rather than designing from scratch.",
      "Primary ownership of the Resume Builder feature inside the broader Growth Hub concept.",
      "Mobile-first Figma prototype covering CV creation, upload, edit, preview, and download flows.",
      "Moderated usability testing showed strong ratings for navigation, interface clarity, and task completion.",
    ],
    caseStudy: {
      eyebrow: "University UX concept",
      timeline: "4 weeks · 2025",
      status: "Validated Figma prototype",
      problem:
        "Brightspace Pulse helps students stay organised with coursework, deadlines, and notifications, but offers little support once students begin preparing for internships, placements, or graduate roles.",
      opportunity:
        "Explore how Brightspace Pulse could support both academic success and career development by introducing professional growth features directly within the existing application.",
      users: ["University students", "Students preparing for work placement", "Career support teams"],
      productSectionEyebrow: "UX planning",
      productSectionTitle: "Why Growth Hub belonged inside Brightspace Pulse.",
      designSectionEyebrow: "Feature design",
      designSectionTitle: "My Resume Builder ownership.",
      productThinking: [
        "Explored Brightspace Pulse as an existing student ecosystem rather than creating a separate career product.",
        "Defined Growth Hub around three career-support areas: Portfolio, Resume Builder, and Connect.",
        "Validated the proposed experience through moderated usability testing with TU Dublin students.",
      ],
      designDecisions: [
        "Designed Resume Builder as a native Brightspace Pulse feature rather than a separate tool.",
        "Supported two starting points: building a new CV from templates or uploading an existing CV.",
        "Created flows for template selection, resume creation, editing, preview, and download.",
        "Extended the existing visual language so the new feature felt familiar inside Brightspace Pulse.",
      ],
      engineeringDecisions: [
        "No application development was included in this project.",
        "Deliverables focused on UX research, product strategy, user flows, wireframes, high-fidelity UI, interactive Figma prototyping, and usability testing.",
      ],
      outcome:
        "Delivered a validated concept showing how Brightspace Pulse could extend beyond academic management to support student professional growth through portfolio, resume, and networking tools.",
      reflection:
        "Working within an existing product taught me how to extend a mature design system instead of designing from scratch. The challenge was introducing useful new functionality while keeping the experience familiar and aligned with existing navigation patterns.",
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
        presentation: "comparison",
      },
      {
        src: "/images/brightspace/AfterMenu.png",
        alt: "After: updated bottom navigation with the new growth area",
        placement: "process",
        aspect: "banner",
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
    year: "2025",
    featured: true,
    summary:
      "A React-based sports game management web app for organizing casual football games, covering auth, onboarding, dashboards, game creation, discovery, team management, payments, profile, and settings flows.",
    description:
      "Findaside is a sports game management platform for hosts and players. I built the complete frontend prototype across authentication, onboarding, dashboards, game creation, game discovery, player management, team generation, payments, profile, settings, and reusable UI components.",
    image: "/images/findaside/findaside.png",
    heroFit: "contain",
    platform: "Responsive web app",
    timeline: "2025",
    showcaseOverview:
      "Findaside helps people organize casual sports games from account setup through game creation, discovery, player coordination, team generation, payments, profile management, and settings.",
    problem:
      "Casual football organizers often coordinate through scattered messages, manual player lists, unclear payment status, and repeated setup work for each game.",
    solution:
      "Findaside brings the full game-management journey into one responsive web app with structured flows for creating games, managing players, generating teams, tracking payments, and handling account settings.",
    technologies: [
      "React 19",
      "React Router DOM 7",
      "Material UI",
      "Emotion Styled Components",
      "Tabler Icons",
      "Create React App",
      "JavaScript",
      "CSS",
      "Local React State",
    ],
    liveUrl: "https://findaside.app/",
    githubUrl: "",
    role: "Frontend Developer (Contract / Freelance)",
    contributions: {
      "Frontend Architecture": [
        "Built the frontend structure across 30+ page-level screens.",
        "Organized routes and features for auth, dashboard, games, payments, profile, and settings.",
        "Created reusable layouts, route constants, shared UI primitives, cards, forms, and utility components.",
      ],
      "Product UI": [
        "Implemented authentication, onboarding, dashboard, game creation, discovery, and history flows.",
        "Built player management, team generation, payment, profile, and settings interfaces.",
        "Added realistic UI states including empty states, loading screens, modals, toasts, disabled actions, and confirmation dialogs.",
      ],
    },
    keyFeatures: [
      "Authentication and onboarding",
      "Dashboard and upcoming games",
      "Multi-step game creation",
      "Game discovery and history",
      "Player management",
      "Team generation",
      "Payments and receipts",
      "Profile and settings",
      "Responsive navigation",
      "Reusable UI system",
    ],
    websiteLinks: [
      {
        title: "View Website",
        description: "Explore the live Findaside website.",
        href: "https://findaside.app/",
        type: "Live product",
      },
    ],
    responsibilities: [
      "Built the React frontend for auth, onboarding, dashboard, game creation, game discovery, payments, profile, and settings screens.",
      "Implemented route-based product flows with React Router DOM and centralized route handling.",
      "Created reusable UI components on top of Material UI, Emotion, and Tabler Icons.",
      "Implemented realistic frontend states including empty states, loading states, modals, toasts, disabled actions, and confirmation dialogs.",
      "Built mobile-friendly layouts with responsive navigation, drawers, constrained content widths, and fixed bottom actions.",
    ],
    highlights: [
      "Full React frontend prototype prepared for backend integration.",
      "30+ screens covering auth, onboarding, dashboard, game creation, teams, payments, profile, and settings.",
      "Reusable UI system with buttons, inputs, selects, toasts, cards, steppers, tabs, image upload, and status chips.",
      "Feature-based folder structure built to scale across product areas.",
      "Realistic product states for end-to-end frontend demonstration.",
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
