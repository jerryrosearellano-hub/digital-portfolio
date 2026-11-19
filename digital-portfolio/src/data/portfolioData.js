/**
 * ============================================================================
 * GRAND LINE PORTFOLIO DATA CONFIGURATION
 * ============================================================================
 * Edit any fields below to update your personal information, links, photos,
 * skills, projects, experience timeline, or academic achievements.
 */

import profilePhoto from "../assets/Mee.png";

export const portfolioData = {
  personal: {
    name: "Jerry Rose C. Arellano",
    moniker: "The Grand Line IT Navigator",
    course: "BS in Information Technology",
    school: "STI College Legazpi",
    location: "Legazpi City, Albay, Philippines",
    status: "Active Voyage • BSIT Student",
    bounty: "404,000,000",
    avatarUrl: profilePhoto,
    resumeUrl: "#contact", // Replace with your actual CV / Resume PDF link when available
    heroIntro:
      "Ahoy! I'm Jerry Rose C. Arellano, a Bachelor of Science in Information Technology student at STI College Legazpi. Setting sail across the Grand Line of software development, web engineering, and systems design to craft purposeful digital solutions.",
    tagline: "Dream Big. Keep Learning. Find Your Own Grand Line.",
  },

  about: {
    logDate: "Log Entry #01 • East Blue to STI College Legazpi",
    journalTitle: "The Navigator's Explorer Logbook",
    paragraphs: [
      "Every great voyage begins with curiosity and an unwavering dream. As a BS Information Technology student at STI College Legazpi, my journey across the digital seas focuses on turning user needs and real-world challenges into clean, functional, and reliable software applications.",
      "From architecting our flagship capstone venture—PIMA Guitars—to sharpening my command of modern web interfaces, database architectures, and system workflows, I approach every project like charting a new island on the Grand Line.",
      "Whether collaborating with a crew of developers or debugging uncharted waters solo, I value continuous learning, maintainable code, and resilient problem-solving."
    ],
    quickFacts: [
      { label: "Captain / Student", value: "Jerry Rose C. Arellano" },
      { label: "Academic Fleet", value: "STI College Legazpi" },
      { label: "Program / Degree", value: "BS Information Technology" },
      { label: "Home Port", value: "Legazpi City, Albay" },
      { label: "Primary Specialization", value: "Web & Software Development" },
      { label: "Flagship Venture", value: "PIMA Guitars Capstone Project" },
    ],
    captainQuote:
      "No matter how rough the seas of technology get, a true developer keeps their Log Pose pointed toward innovation and craftsmanship.",
  },

  skills: {
    technical: [
      {
        id: "tech-1",
        name: "HTML5, CSS3 & JavaScript",
        category: "Frontend Navigation",
        rank: "Core Competency",
        badge: "Core Haki",
        iconType: "code",
        proficiencyLabel: "Applied in Web & Capstone Projects",
        description:
          "Crafting responsive, semantic, and interactive user interfaces for modern web platforms.",
        tags: ["HTML5", "CSS3", "ES6+ JS", "DOM"],
      },
      {
        id: "tech-2",
        name: "React & Tailwind CSS",
        category: "Modern UI Arsenal",
        rank: "Framework Craft",
        badge: "Component Craft",
        iconType: "layers",
        proficiencyLabel: "Applied in Capstone & Portfolio",
        description:
          "Building reusable component architectures and utility-first responsive designs with Vite.",
        tags: ["React", "Tailwind CSS", "Vite", "Responsive UI"],
      },
      {
        id: "tech-3",
        name: "Backend & Database Systems",
        category: "Ship Engine & Storage",
        rank: "Data Architecture",
        badge: "Data Logbook",
        iconType: "database",
        proficiencyLabel: "Applied in Information Systems",
        description:
          "Structuring relational data, queries, and business logic for academic and capstone information systems.",
        tags: ["SQL / MySQL", "Database Design", "REST APIs", "CRUD"],
      },
      {
        id: "tech-4",
        name: "Systems Analysis & Capstone Design",
        category: "Charting & Architecture",
        rank: "Navigator Rank",
        badge: "Log Pose",
        iconType: "compass",
        proficiencyLabel: "Applied in BSIT Capstone Lifecycle",
        description:
          "Translating client requirements into system flows, wireframes, ERD diagrams, and working software.",
        tags: ["System Design", "ERD / UML", "Wireframing", "Documentation"],
      },
      {
        id: "tech-5",
        name: "Git & Development Tools",
        category: "Shipwright Toolkit",
        rank: "Workflow Discipline",
        badge: "Craftsmanship",
        iconType: "git",
        proficiencyLabel: "Applied in Daily Development",
        description:
          "Managing source code, debugging workflows, and collaborating across development environments.",
        tags: ["Git", "GitHub", "VS Code", "Browser DevTools"],
      },
      {
        id: "tech-6",
        name: "Graphic Design",
        category: "Visual Craft & Media",
        rank: "Creative Arsenal",
        badge: "Visual Arts",
        iconType: "palette",
        proficiencyLabel: "Applied in Digital & Visual Assets",
        description:
          "Creating visually appealing graphics and digital materials with attention to layout, color, typography, and visual consistency.",
        tags: ["Layout Design", "Color Theory", "Typography", "Visual Consistency"],
      },
      {
        id: "tech-7",
        name: "UI Design",
        category: "Interface Architecture",
        rank: "Interface Craft",
        badge: "User Experience",
        iconType: "layout",
        proficiencyLabel: "Applied in Web & App Interfaces",
        description:
          "Designing clear, attractive, and user-friendly interfaces with attention to usability, layout, and visual hierarchy.",
        tags: ["Usability", "Visual Hierarchy", "Interface Layout", "User-Centered UI"],
      },
    ],
    soft: [
      {
        id: "soft-1",
        name: "Communication",
        archetype: "Logbook Chronicler",
        iconType: "communication",
        description:
          "Sharing ideas clearly, listening to feedback, and communicating effectively when discussing tasks and project requirements.",
        highlight: "Clear & Receptive",
      },
      {
        id: "soft-2",
        name: "Team Collaboration",
        archetype: "Straw Hat Synergy",
        iconType: "collaboration",
        description:
          "Working with others, sharing responsibilities, exchanging ideas, and contributing toward common project goals.",
        highlight: "Shared Crew Goals",
      },
      {
        id: "soft-3",
        name: "Analytical Problem Solving",
        archetype: "Tactical Navigation",
        iconType: "problem-solving",
        description:
          "Breaking complex bugs and system bottlenecks into clear, logical steps even under tight deadlines.",
        highlight: "Troubleshooting & Logic",
      },
      {
        id: "soft-4",
        name: "Adaptability & Continuous Learning",
        archetype: "Grand Line Explorer",
        iconType: "adaptability",
        description:
          "Quickly learning new frameworks, tools, and project specifications as technology evolves.",
        highlight: "Continuous Growth",
      },
    ],
  },

  projects: [
    {
      id: "pima-guitars",
      islandNumber: "Island 01 • Flagship Capstone Adventure",
      title: "PIMA Guitars",
      subtitle: "BS Information Technology Capstone Project",
      featured: true,
      coordinates: "13.1391° N, 123.7438° E • Grand Line Flagship",
      status: "BS Information Technology Capstone Project",
      description:
        "A guitar-shop website designed to showcase guitars, pro audio products, and in-stock items through a modern, user-friendly interface.",
      galleryNote:
        "The screenshots below demonstrate the actual PIMA Guitars website interface and project pages across the main dashboard, product catalog, product details, in-stock listings, website information, and contact section.",
      highlights: [
        "Designed a modern guitar-shop interface showcasing guitars, pro audio products, and in-stock items",
        "Structured product browsing, catalog views, and detailed item pages for clear navigation",
        "Included dedicated dashboard views, website information sections, and a customer contact interface",
        "Built as a BS Information Technology Capstone Project using React, Vite, Tailwind CSS, and JavaScript",
      ],
      techStack: ["React", "Vite", "Tailwind CSS", "JavaScript"],
      liveUrl: "#pima-gallery",
      repoUrl: "#projects",
      linkNote: "Click any screenshot below to inspect the full-resolution PIMA Guitars interface in the lightbox.",
    },
  ],

  experience: [
    {
      id: "exp-1",
      era: "Current Voyage • Senior Academic Arc",
      title: "Capstone Project Developer — PIMA Guitars",
      organization: "STI College Legazpi • BS Information Technology",
      location: "Legazpi City, Albay",
      type: "Academic Capstone",
      description:
        "Spearheading the design, development, documentation, and testing of the PIMA Guitars capstone project as part of the Bachelor of Science in Information Technology curriculum.",
      milestones: [
        "Collaborated on system requirements analysis, database schema design, and interactive frontend layouts",
        "Implemented core modules and refined user experience based on panel and adviser consultations",
        "Prepared technical documentation and system demonstrations for capstone defense milestones",
      ],
    },
    {
      id: "exp-2",
      era: "College Voyage • Foundation to Advanced Arc",
      title: "BS in Information Technology Student",
      organization: "STI College Legazpi",
      location: "Legazpi City, Albay",
      type: "Higher Education",
      description:
        "Pursuing comprehensive training in software development, web technologies, database management, networking fundamentals, and systems analysis.",
      milestones: [
        "Completed hands-on laboratory projects across programming, web development, and information management",
        "Practiced agile teamwork, technical presentations, and software lifecycle documentation",
      ],
    },
  ],

  achievements: [
    {
      id: "achievement-1",
      posterCode: "RECORD-001",
      category: "Capstone Milestone",
      title: "PIMA Guitars Capstone Project",
      issuer: "STI College Legazpi • IT Department",
      date: "Capstone Arc",
      status: "FLAGSHIP PROJECT",
      hasPimaDashboardImage: true,
      description:
        "Conceptualized and engineered the PIMA Guitars capstone system, applying end-to-end software analysis, UI design, and application architecture.",
      credentialUrl: "#projects",
    },
    {
      id: "achievement-2",
      posterCode: "RECORD-002",
      category: "Programming Recognition",
      title: "Java Award",
      issuer: "",
      date: "",
      status: "VERIFIED AWARD",
      hasJavaAwardImage: true,
      description: "Recognition for my Java programming achievement.",
      credentialUrl: "",
    },
    {
      id: "achievement-3",
      posterCode: "RECORD-003",
      category: "Training & Seminars",
      title: "Certificates & Training",
      issuer: "[Editable: Add Certificate / Seminar / Training Provider]",
      date: "[Add Completion Date]",
      status: "CERTIFICATES & TRAINING",
      isPlaceholder: true,
      description:
        "Dedicated log for verified technical certificates, seminars, webinars, and IT training workshops. Edit details in src/data/portfolioData.js.",
      credentialUrl: "",
    },
  ],

  contact: {
    invitationTitle: "Send a Message in a Bottle",
    invitationSubtitle:
      "Looking for an enthusiastic IT student, web developer, or crewmate for your next digital adventure? Drop a Den Den Mushi transmission or send a message in a bottle!",
    email: "jerryrose.arellano@placeholder-email.com", // Replace with your actual email address
    phone: "+63 9XX XXX XXXX (Editable in portfolioData.js)",
    location: "STI College Legazpi • Legazpi City, Albay, Philippines",
    availability: "Open for IT Internships (OJT), Capstone Showcases & Junior Developer Roles",
    socials: [
      {
        name: "GitHub",
        handle: "@jerryrose-arellano (Editable)",
        url: "https://github.com",
        note: "Update with your GitHub profile URL",
      },
      {
        name: "LinkedIn",
        handle: "Jerry Rose C. Arellano (Editable)",
        url: "https://linkedin.com",
        note: "Update with your LinkedIn profile URL",
      },
      {
        name: "Facebook / Messenger",
        handle: "Jerry Rose Arellano (Editable)",
        url: "https://facebook.com",
        note: "Update with your Facebook contact URL",
      },
    ],
  },
};

