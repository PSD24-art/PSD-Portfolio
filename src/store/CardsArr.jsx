import calCivil from "../assets/calCivil.png";
import funmovie from "../assets/funmovie.png";
import feedback from "../assets/Feedback.png";
import ultracut from "../assets/ultracut.png";

export const CardsArr = [
  {
    id: 5,
    imgUrl: ultracut,
    projectTitle: "Ultracut | Industrial Laser Cutting Solutions",
    projectDescription:
      "Developed a production-ready full-stack e-commerce and business management system for an industrial laser-cutting company. The platform enables product catalog management, secure order flow, payment gateway integration, OTP-based authentication, and scalable backend architecture tailored for real client operations.",
    pModules: [
      "Product Catalog & Category System",
      "OTP-Based Authentication (DLT Ready)",
      "Secure Checkout & Payment Gateway Integration",
      "Order Lifecycle Management",
      "Admin-Controlled Content & Data Flow",
    ],
    projectLink: "https://ultracut-client.onrender.in", // update if different
    gitLink: "Private Client Repository",
  },

  {
    id: 4,
    imgUrl: feedback,
    projectTitle: "Feedback Guru | Role-Based Feedback System",
    projectDescription:
      "Designed and implemented a role-based feedback management platform for educational institutions. The system supports faculty and admin roles with secure authentication, structured feedback collection, and dashboard-driven analytics to improve teaching effectiveness.",
    pModules: [
      "JWT-Based Authentication",
      "Faculty & Admin Dashboards",
      "Feedback Form Builder",
      "Role-Based Access Control",
    ],
    projectLink: "https://feedback-f.onrender.com",
    gitLink: "https://github.com/PSD24-art/Feedback-F",
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
  },
];
