import calCivil from "../assets/calCivil.png";
import funmovie from "../assets/funmovie.png";
import feedback from "../assets/Feedback.png";
import ultracut from "../assets/ultracut.png";

export const CardsArr = [
  {
    id: 4,
    imgUrl: feedback,
    projectTitle: "Feedback Guru | Role-Based Feedback System",
    projectDescription:
      "Designed and implemented a role-based(admin and faculty) feedback management platform for educational institutions. The system supports faculty and admin roles with secure authentication, structured feedback collection, and dashboard-driven analytics to improve teaching effectiveness.",
    pModules: [
      "Passportjs Authentication",
      "Faculty & Admin Dashboards",
      "Role-Based Access Control",
      "Unique Feedback Forms Creation",
    ],
    projectLink: "https://feedback-f.onrender.com",
    gitLink: "https://github.com/PSD24-art/Feedback-F",
    inPrduction: true,

    projectDetails: {
      hero: {
        tagline: "Structured feedback system for academic institutions",
        techStack: ["React", "Node.js", "Express", "MongoDB"],
      },

      problemStatement:
        "Educational institutions lacked a structured, secure, and role-based system to collect and analyze faculty feedback efficiently.",

      solutionOverview:
        "Built a role-driven platform separating admin and faculty responsibilities with secure authentication and centralized feedback analytics.",

      keyFeatures: [
        "Role-based authentication",
        "Faculty & admin dashboards",
        "Analytics-ready feedback storage",
        "Dynamic access to admin and faculty features",
        "Unique feedback forms ensure data integrity",
        "form validation and error handling",
      ],

      databaseDesign: [
        "Users",
        "FeedbackForms",
        "feedbackLink",
        "subjects",
        "token",
        "institute",
      ],

      challenges:
        "Designing strict role-based access control and maintaining data integrity across multiple feedback cycles.",

      performanceSecurity:
        "Passport js authentication, modular and secure API structure, data handling best practices.",

      resultsImpact:
        "Helps institutes gather structured feedback to improve teaching quality. Dashboard analytics aid in data-driven decisions.",
    },
  },
  {
    id: 5,
    imgUrl: ultracut,
    projectTitle: "Ultracut | Industrial Laser Cutting Solutions",
    projectDescription:
      "Developed a production-ready full-stack e-commerce and business management system for an industrial laser-cutting company. Developed scalable backend architecture tailored for real client operations.",
    pModules: [
      "Product Catalog & Category System",
      "OTP-Based Authentication (DLT Pending)",
      "Payment Gateway Integration (Mock Phonepe)",
    ],
    projectLink: "https://ultracut-client.onrender.com",
    gitLink: "Private Client Repository",
    inPrduction: true,

    /* 🔽 NEW DATA FOR PROJECT DETAILS PAGE */
    projectDetails: {
      hero: {
        tagline: "A scalable industrial e-commerce & operations platform",
        techStack: [
          "React",
          "Node.js",
          "Express",
          "MongoDB",
          "Payment Gateway",
        ],
      },

      problemStatement:
        "The client lacked a centralized digital system to manage industrial product listings, customer orders, authentication, and payments, resulting in manual coordination and inefficiencies.",

      solutionOverview:
        "Designed a full-stack MERN application focused on scalability, security, and real-world industrial workflows, enabling automated order handling and admin-controlled business operations.",

      keyFeatures: [
        "OTP-based secure authentication",
        "Integrated payment gateway",
        "Secure checkout",
      ],

      databaseDesign: ["Users", "Products", "Orders", "Otp", "Payments"],

      challenges:
        "Ensuring secure OTP authentication, handling real-time order state transitions, and designing a scalable schema for industrial-grade product data.",

      performanceSecurity:
        "JWT authentication, and modular backend architecture used MVC architecture.",

      resultsImpact:
        "It can be used as a real client-facing platform to manage industrial orders and customer interactions.",
    },
  },

  {
    id: 1,
    imgUrl: calCivil,
    projectTitle: "calCivil | Civil Engineering Utility Toolkit",
    projectDescription:
      "Created a mobile-responsive utility web application to assist civil engineers with daily on-site calculations. The project emphasizes clean UI, responsive design, and practical tools commonly used in real engineering workflows.",
    pModules: [
      "Coordinate Distance Calculator",
      "Concrete Volume Calculator",
      "Brick Quantity Calculator",
      "Unit Conversion Utilities",
    ],
    projectLink: "https://calcivil-backend.onrender.com",
    gitLink: "https://github.com/PSD24-art/calCivil-backend",

    projectDetails: {
      hero: {
        tagline: "On-site calculation tools for civil engineers",
        techStack: ["HTML", "CSS", "JavaScript", "Node.js"],
      },

      problemStatement:
        "Civil engineers frequently rely on manual calculations or multiple tools, causing inefficiency during on-site work.",

      solutionOverview:
        "Built a responsive web-based toolkit consolidating essential civil engineering calculations into a single interface.",

      keyFeatures: [
        "Multiple engineering calculators",
        "Mobile-friendly design",
        "Fast computation logic",
      ],

      databaseDesign: [],

      challenges:
        "Designing accurate calculation logic and ensuring responsiveness across devices.",

      performanceSecurity:
        "Optimized frontend logic and lightweight backend handling.",

      resultsImpact:
        "Helps civil engineers perform quick calculations on-site, improving efficiency.",
    },
  },

  {
    id: 3,
    imgUrl: funmovie,
    projectTitle: "FUNMOVIE | Movie Review Platform",
    projectDescription:
      "Built a full-stack movie review platform enabling users to register, authenticate, and submit ratings and reviews. The application focuses on clean data flow between frontend and backend, authentication handling, and scalable CRUD operations.",
    pModules: [
      "User Authentication",
      "Movie Listings & Details",
      "Ratings & Reviews System",
      "REST API Integration",
    ],
    projectLink: "https://funmovies-fe.onrender.com/",
    gitLink: "https://github.com/PSD24-art/Funmovies-F",

    projectDetails: {
      hero: {
        tagline: "Community-driven movie review platform",
        techStack: ["React", "Node.js", "Express", "MongoDB"],
      },

      problemStatement:
        "Users needed a simple platform to share and explore movie opinions with structured ratings and reviews.",

      solutionOverview:
        "Developed a scalable MERN-based application with authentication and CRUD-driven review workflows.",

      keyFeatures: [
        "User authentication",
        "Movie listings",
        "Ratings & reviews",
        "RESTful APIs",
      ],

      databaseDesign: ["Users", "Movies", "Reviews", "Ratings"],

      challenges:
        "Managing relational data in MongoDB and maintaining consistent review logic.",

      performanceSecurity:
        "JWT auth, API validation, and clean separation of concerns.",

      resultsImpact: "",
    },
  },
];
