import { ValidCategory, ValidExpType, ValidSkills } from "./constants";

interface PagesInfoInterface {
  title: string;
  imgArr: string[];
  description?: string;
}

interface DescriptionDetailsInterface {
  paragraphs: string[];
  bullets: string[];
}

export interface ExperienceInterface {
  id: string;
  type: ValidExpType;
  companyName: string;
  category: ValidCategory[];
  shortDescription: string;
  websiteLink?: string;
  githubLink?: string;
  techStack: ValidSkills[];
  startDate: Date;
  endDate: Date;
  companyLogoImg: any;
  descriptionDetails: DescriptionDetailsInterface;
  pagesInfoArr: PagesInfoInterface[];
  status?: "in-progress" | "completed";
}

export const Experiences: ExperienceInterface[] = [
  // IN-PROGRESS PROJECTS FIRST
  {
    id: "talentmatch",
    companyName: "TalentMatch - AI-Powered HRMS",
    type: "Personal Project",
    category: ["Web Dev", "AI/ML"],
    shortDescription: "Intelligent HR management system with AI-powered candidate screening, automated CV analysis, and smart job matching algorithms.",
    websiteLink: "",
    githubLink: "",
    techStack: ["Next.js", "Node.js", "OpenAI API", "PostgreSQL", "Stripe", "Clerk"],
    startDate: new Date("2024-06"),
    endDate: new Date("2024-11"),
    companyLogoImg: "/experience/talentmatch/logo.png",
    descriptionDetails: {
      paragraphs: [
        "TalentMatch is a comprehensive AI-powered Human Resource Management System designed to streamline the recruitment process. The platform leverages advanced artificial intelligence to automatically screen candidates, analyze CVs, and match job seekers with relevant positions.",
        "The system features intelligent CV parsing, automated candidate scoring, and smart job recommendations. It includes a robust admin dashboard for HR professionals to manage job postings, track applications, and analyze recruitment metrics.",
        "Built with modern technologies, TalentMatch offers a seamless user experience for both recruiters and job seekers, significantly reducing the time and effort required for traditional recruitment processes."
      ],
      bullets: [
        "AI-powered CV analysis and candidate scoring system",
        "Automated job matching algorithms with high accuracy",
        "Comprehensive admin dashboard for HR management",
        "Real-time analytics and recruitment insights",
        "Secure payment integration for premium features",
        "Advanced search and filtering capabilities",
        "Mobile-responsive design for accessibility"
      ]
    },
    pagesInfoArr: [
      {
        title: "Dashboard Interface",
        description: "AI-powered CV analysis and candidate profiling interface",
        imgArr: ["/experience/talentmatch/dashboard_1.webp", "/experience/talentmatch/dashboard_2.webp"]
      },
      {
        title: "Job Management System",
        description: "Comprehensive job posting, requirement management and Job Analytics",
        imgArr: ["/experience/talentmatch/jobs_1.webp", "/experience/talentmatch/jobs_2.webp"]
      },
      {
        title: "Job Creation Interface",
        description: "Create a new job listing and preview it",
        imgArr: ["/experience/talentmatch/job_creation_1.webp", "/experience/talentmatch/job_creation_2.webp"]
      },
      {
        title: "Jobs Listing",
        description: "View and manage all the job listings",
        imgArr: ["/experience/talentmatch/jobs_1.webp"]
      },
      {
        title: "Candidate Matching",
        description: "AI-driven candidate scoring and matching interface",
        imgArr: ["/experience/talentmatch/matching_1.webp"]
      },
      {
        title: "Analytics Dashboard",
        description: "Analytics Dashboard t",
        imgArr: ["/experience/talentmatch/analytics_1.webp", "/experience/talentmatch/analytics_2.webp"]
      }
    ],
    status: "in-progress",
  },
  
  // HIGH PRIORITY PROJECTS
  {
    id: "campus-swipe",
    companyName: "Campus Swipe (Final Year Project)",
    type: "Personal Project",
    category: ["Mobile Dev", "Full Stack", "IoT"],
    shortDescription:
      "Built an innovative IoT-based campus app using Flutter, MERN stack, and Node MCU for 1,000+ students. Implemented real-time attendance tracking with Firebase, Travel Fees Payment using Node.js, reducing manual updates by 90%.",
    githubLink: "https://github.com/yawarnoor/campus-swipe",
    techStack: [
      "Flutter",
      "React",
      "Node.js",
      "MongoDB",
      "Firebase",
      "IoT",
      "Dart",
      "Javascript",
    ],
    startDate: new Date("2024-01-01"),
    endDate: new Date("2024-06-01"),
    companyLogoImg: "/experience/campus-swipe/logo.png",
    pagesInfoArr: [
      {
        title: "Mobile Application",
        description:
          "Flutter-based mobile app with real-time attendance tracking and payment integration",
        imgArr: [
          "/experience/campus-swipe/app_1.webp",
          "/experience/campus-swipe/app_2.webp",
        ],
      },
      {
        title: "IoT Integration",
        description:
          "Node MCU-based hardware integration for automated attendance capture",
        imgArr: ["/experience/campus-swipe/iot_setup.webp"],
      },
      {
        title: "Admin Dashboard",
        description:
          "Web-based admin panel for managing students, attendance, and fee tracking",
        imgArr: [
          "/experience/campus-swipe/admin_1.webp",
          "/experience/campus-swipe/admin_2.webp",
        ],
      },
      {
        title: "Architechure Diagram",
        description:
          "Architechure Diagram of the project",
        imgArr: [
          "/experience/campus-swipe/architecture.webp",
        ],
      },
      {
        title: "Invoice Pdf Generator",
        description:
          "Invoice Pdf Generator, used to generate invoice for the students",
        imgArr: [
          "/experience/campus-swipe/invoice.webp",
        ],
      },
    ],
    descriptionDetails: {
      paragraphs: [
        "Campus Swipe represents the culmination of my academic journey - a comprehensive IoT-based campus management system that revolutionizes how educational institutions handle attendance and fee management. Serving over 1,000 students, this project demonstrates my ability to solve real-world problems with innovative technology solutions.",
        "The system integrates cutting-edge technologies including Flutter for cross-platform mobile development, MERN stack for robust web applications, and IoT hardware using Node MCU for automated data collection. The Firebase integration ensures real-time synchronization across all platforms, providing instant updates to students, faculty, and administrators.",
        "One of the project's most significant achievements is the 90% reduction in manual administrative tasks. The automated attendance tracking eliminates paper-based systems, while the integrated payment gateway streamlines fee collection processes. The system's scalability and performance have been validated through extensive testing with the actual student body.",
        "This project showcases my expertise in full-stack development, IoT integration, and system architecture design. The successful deployment and positive user feedback demonstrate my ability to deliver production-ready applications that create tangible value for end users.",
      ],
      bullets: [
        "Developed a comprehensive campus management system serving 1,000+ students",
        "Achieved 90% reduction in manual administrative tasks through automation",
        "Integrated IoT hardware (Node MCU) with mobile and web applications",
        "Implemented real-time attendance tracking using Firebase technology",
        "Built secure payment gateway for travel fees and other campus services",
        "Created responsive admin dashboard for complete system management",
        "Ensured cross-platform compatibility with Flutter mobile development",
        "Designed scalable architecture using MERN stack for web components",
      ],
    },
  },
  {
    id: "vocalverse-ai",
    companyName: "VocalVerse AI Platform",
    type: "Personal Project",
    category: ["Web Dev", "AI/ML", "Full Stack"],
    shortDescription:
      "Built VocalVerse, an AI-powered web application with React frontend and Flask backend, enabling real-time voice cloning and transcription for seamless multilingual communication using OpenAI Whisper, ElevenLabs, and Coqui XTTS models.",
    websiteLink: "https://vocalverse-demo.vercel.app",
    githubLink: "https://github.com/yawarnoor/vocalverse",
    techStack: [
      "React",
              "Python",
      "Python",
      "OpenAI API",
      "Machine Learning",
      "AI",
      "Javascript",
      "ElevenLabs",
    ],
    startDate: new Date("2023-08-01"),
    endDate: new Date("2024-02-01"),
    companyLogoImg: "/experience/vocalverse/logo.png",
    pagesInfoArr: [
      {
        title: "Voice Cloning Interface",
        description:
          "Advanced AI interface for real-time voice cloning and customization",
        imgArr: [
          "/experience/vocalverse/homepage.webp"
        ],
      },
      {
        title: "Transcription Interface",
        description:
          "Transcribe the voice to text",
        imgArr: ["/experience/vocalverse/transcription.webp"],
      },
      {
        title: "Translation Interface",
        description:
          "Seamless language switching and translation capabilities",
        imgArr: ["/experience/vocalverse/translation.webp"],
      },
      {
        title: "Voice Cloning Interface",
        description:
          "Voice Cloning Interface",
        imgArr: ["/experience/vocalverse/cloning.webp"],
      },

    ],
    descriptionDetails: {
      paragraphs: [
        "VocalVerse represents a breakthrough in AI-powered communication technology, combining state-of-the-art voice cloning capabilities with real-time transcription services. This innovative platform leverages multiple AI models including OpenAI Whisper for speech recognition, Facebook's nltk-200 model for natural language processing, and cutting-edge voice synthesis technologies.",
        "The technical architecture demonstrates advanced integration skills, seamlessly connecting Python-based AI services with a robust MERN stack web application. The system processes voice inputs in real-time, applies advanced machine learning algorithms for voice analysis and replication, and delivers high-quality synthesized speech output with remarkable accuracy.",
        "The platform's multilingual capabilities break down communication barriers, enabling users to communicate effectively across different languages while maintaining their unique voice characteristics. This feature has significant applications in content creation, accessibility services, and global communication platforms.",
        "The project showcases expertise in AI/ML integration, real-time data processing, and scalable web application development. The successful implementation of multiple complex AI models within a user-friendly interface demonstrates advanced technical proficiency and innovative problem-solving skills.",
      ],
      bullets: [
        "Integrated multiple AI models including OpenAI Whisper and Facebook nltk-200",
        "Developed real-time voice cloning with Elevenlabs and cuqui xtts models",
        "Built seamless multilingual communication platform",
        "Implemented advanced speech recognition and synthesis algorithms",
        "Created responsive web interface using React and modern JavaScript",
        "Designed scalable backend architecture with Node.js and MongoDB",
        "Optimized AI model performance for real-time processing",
        "Established secure API integration for various AI services",
      ],
    },
  },
  {
    id: "goodlov-matchmaking",
    companyName: "Goodlov - Matchmaking Platform",
    type: "Professional",
    category: ["Mobile Dev", "Full Stack"],
    shortDescription: "Professional dating app built with Flutter and Node.js, featuring advanced matching algorithms, real-time chat, video calls, and comprehensive user profiles for meaningful connections.",
    websiteLink: "",
    githubLink: "",
    techStack: ["Flutter", "Node.js", "MongoDB", "Socket.io", "Firebase", "Machine Learning"],
    startDate: new Date("2023-03-01"),
    endDate: new Date("2023-08-01"),
    companyLogoImg: "/experience/goodlov/logo.png",
    descriptionDetails: {
      paragraphs: [
        "Goodlov is a sophisticated matchmaking platform designed to foster meaningful relationships through advanced algorithms and user-centric features. The application combines modern mobile development with intelligent matching systems.",
        "The platform features comprehensive user profiles, real-time messaging, video calling capabilities, and smart recommendation engines. Built with Flutter for cross-platform compatibility and Node.js for robust backend services.",
        "The application emphasizes user safety and privacy while providing an intuitive interface for users to connect, chat, and build relationships in a secure environment."
      ],
      bullets: [
        "Advanced matching algorithms based on user preferences and behavior",
        "Real-time chat system with multimedia support",
        "Video calling integration for face-to-face conversations",
        "Comprehensive user profiles with detailed preferences",
        "Location-based matching with privacy controls",
        "Push notifications for matches and messages",
        "Secure authentication and user verification system"
      ]
    },
    pagesInfoArr: [
      {
        title: "User Authentication & Onboarding",
        description: "Secure login system and comprehensive user onboarding process",
        imgArr: ["/experience/goodlov/login.webp", "/experience/goodlov/onboarding.webp"]
      },
      {
        title: "Profile Management",
        description: "Detailed user profiles with preferences and photo management",
        imgArr: ["/experience/goodlov/profiles_1.webp"]
      },
      {
        title: "Matching System",
        description: "AI-powered matching algorithm with swipe functionality",
        imgArr: ["/experience/goodlov/matching_1.webp"]
      },
      {
        title: "Chat & Communication",
        description: "Real-time messaging system with multimedia support",
        imgArr: ["/experience/goodlov/chat_1.webp"]
      }
    ]
  },
  {
    id: "divy-financial-bot",
    companyName: "Divy - AI Financial Portfolio Manager",
    type: "Professional",
    category: ["Web Dev", "AI/ML"],
    shortDescription: "Intelligent financial portfolio management platform with AI-driven investment recommendations, automated portfolio rebalancing, and comprehensive market analysis tools.",
    websiteLink: "",
    githubLink: "",
    techStack: ["React", "Node.js", "Python", "Machine Learning", "PostgreSQL", "OpenAI API"],
    startDate: new Date("2023-05-01"),
    endDate: new Date("2023-10-01"),
    companyLogoImg: "/experience/divy/logo.png",
    descriptionDetails: {
      paragraphs: [
        "Divy is an advanced AI-powered financial portfolio management system that helps users optimize their investment strategies through intelligent automation and data-driven insights.",
        "The platform leverages machine learning algorithms to analyze market trends, assess risk profiles, and provide personalized investment recommendations. It features automated portfolio rebalancing and comprehensive financial reporting.",
        "Built with modern web technologies, Divy offers a seamless user experience with real-time market data integration and advanced visualization tools for portfolio performance tracking."
      ],
      bullets: [
        "AI-driven investment recommendation engine",
        "Automated portfolio rebalancing based on market conditions",
        "Risk assessment and profile optimization",
        "Real-time market data integration and analysis",
        "Comprehensive financial reporting and analytics",
        "Goal-based investment planning tools",
        "Secure transaction processing and account management"
      ]
    },
    pagesInfoArr: [
      {
        title: "Portfolio Dashboard",
        description: "Comprehensive overview of investment portfolio with performance metrics",
        imgArr: ["/experience/divy/portfolio_1.webp"]
      },
      {
        title: "AI Automation Interface",
        description: "Intelligent automation tools for portfolio management and rebalancing",
        imgArr: ["/experience/divy/automation.webp"]
      }
    ]
  },
  {
    id: "bbc-urdu-scraper",
    companyName: "BBC Urdu Web Scraper",
    type: "Personal Project",
    category: ["Web Dev", "Data Analysis", "Automation"],
    shortDescription:
      "Created a comprehensive web scraping tool using Beautiful Soup and Scrapy to extract and analyse news articles, leveraging Pandas for data visualisation and reporting, processing thousands of articles with automated content analysis.",
    githubLink: "https://github.com/yawarnoor/bbc-urdu-scraper",
    techStack: [
      "Python",
      "Beautiful Soup",
      "Scrapy",
      "Pandas",
      "Data Analysis",
      "Web Scraping",
    ],
    startDate: new Date("2023-05-01"),
    endDate: new Date("2023-07-01"),
    companyLogoImg: "/experience/bbc-scraper/logo.png",
    pagesInfoArr: [
      {
        title: "Data Extraction",
        description:
          "Advanced web scraping interface with automated content extraction",
        imgArr: [
          "/experience/bbc-scraper/extraction_1.webp",
          "/experience/bbc-scraper/extraction_2.webp",
        ],
      },
      {
        title: "Automated Reports",
        description:
          "Generated reports with trend analysis and content categorization",
        imgArr: ["/experience/bbc-scraper/reports.webp"],
      },
    ],
    descriptionDetails: {
      paragraphs: [
        "The BBC Urdu Web Scraper project demonstrates advanced data extraction and analysis capabilities, processing thousands of news articles to provide valuable insights into media trends and content patterns. This sophisticated tool combines multiple scraping technologies to ensure comprehensive and reliable data collection.",
        "Built using industry-standard libraries including Beautiful Soup for HTML parsing and Scrapy for large-scale web scraping, the system handles complex website structures and dynamic content loading. The implementation includes robust error handling, rate limiting, and respectful scraping practices to ensure sustainable and ethical data collection.",
        "The data analysis component leverages Pandas for efficient data manipulation and visualization, transforming raw scraped content into meaningful insights. The system automatically categorizes articles, identifies trending topics, and generates comprehensive reports that provide valuable intelligence about news patterns and content evolution.",
        "This project showcases expertise in data engineering, web scraping ethics, and automated analysis workflows. The scalable architecture can process large volumes of data while maintaining data integrity and providing real-time insights for content analysis and research purposes.",
      ],
      bullets: [
        "Developed comprehensive web scraping solution using Beautiful Soup and Scrapy",
        "Processed thousands of news articles with automated content extraction",
        "Implemented robust error handling and rate limiting for sustainable scraping",
        "Created advanced data analysis pipeline using Pandas library",
        "Built automated content categorization and trend analysis features",
        "Generated comprehensive reports with data visualization and insights",
        "Designed scalable architecture for processing large data volumes",
        "Implemented ethical scraping practices with respectful rate limiting",
      ],
    },
  },
  {
    id: "gsx2json-utility",
    companyName: "GSX2JSON - Google Sheets Converter",
    type: "Professional",
    category: ["Web Dev", "Automation", "Backend"],
    shortDescription:
      "Created a utility tool to convert Google Sheets data into JSON format. Provides API endpoints for seamless integration with other applications, used extensively in the Divy project.",
    githubLink: "https://github.com/yawarnoor/gsx2json",
    websiteLink: "https://gsx2json.vercel.app",
    techStack: [
      "Node.js",
      "Google APIs",
      "JSON",
      "REST APIs",
      "Javascript",
      "GSX2JSON",
    ],
    startDate: new Date("2023-09-01"),
    endDate: new Date("2023-10-01"),
    companyLogoImg: "/experience/gsx2json/logo.png",
    descriptionDetails: {
      paragraphs: [
        "GSX2JSON addresses a common developer need: seamlessly converting Google Sheets data into JSON format for application consumption. This utility tool simplifies data integration workflows and enables rapid prototyping.",
        "The tool provides RESTful API endpoints that can fetch and convert Google Sheets data in real-time, making it invaluable for applications that need to consume spreadsheet data without complex authentication flows.",
        "Originally developed to support the Divy financial bot project, GSX2JSON has since been made available as a public utility, demonstrating the ability to identify common problems and create reusable solutions."
      ],
      bullets: [
        "Google Sheets to JSON conversion API",
        "RESTful endpoints for easy integration",
        "Real-time data fetching and transformation",
        "No authentication required for public sheets",
        "Lightweight and fast conversion process",
        "Used in production for Divy financial bot",
        "Open-source utility for developer community"
      ]
    },
    pagesInfoArr: [
      {
        title: "API Endpoints Sequence Diagram",
        description: "Simple API endpoints for Google Sheets conversion",
        imgArr: ["/experience/gsx2json/api_1.webp"]
      }
    ]
  },
  {
    id: "flutter-chat-app",
    companyName: "Chattie - Flutter Chat Application",
    type: "Personal Project", 
    category: ["Mobile Dev", "Real-time", "UI/UX"],
    shortDescription:
      "Developed a real-time messaging application using Flutter with Firebase backend. Features include group chats, media sharing, push notifications, and modern Material Design interface.",
    githubLink: "https://github.com/yawarnoor/flutter-chat-app",
    techStack: [
      "Flutter",
      "Firebase",
      "Dart",
      "Real-time Chat",
      "Material Design",
      "Push Notifications",
    ],
    startDate: new Date("2023-03-01"),
    endDate: new Date("2023-05-01"),
    companyLogoImg: "/experience/flutter-chat/logo.png",
    descriptionDetails: {
      paragraphs: [
        "This Flutter chat application demonstrates mastery of real-time communication technologies and modern mobile app development practices. Built as a learning project to understand chat application architecture and Firebase integration.",
        "The application includes all essential messaging features: real-time message delivery, media sharing, user presence indicators, and push notifications. The interface follows Material Design guidelines for optimal user experience.",
        "Key focus areas included state management, real-time data synchronization, and creating smooth, responsive interactions that users expect from modern messaging applications."
      ],
      bullets: [
        "Real-time messaging with Firebase Cloud Firestore",
        "Media sharing capabilities (images, files)",
        "Push notifications for new messages",
        "User authentication and profile management",
        "Group chat functionality",
        "Material Design UI implementation",
        "Offline message caching and synchronization"
      ]
    },
    pagesInfoArr: [
      {
        title: "Chat Interface",
        description: "Real-time messaging interface with Material Design",
        imgArr: ["/experience/flutter-chat/chat.webp"]
      },
      {
        title: "View Status and Call Screens",
        description: "View Status and Call Screens",
        imgArr: ["/experience/flutter-chat/status_call.webp"]
      }
    ]
  },
  {
    id: "flutter-music-player",
    companyName: "Flutter Music Player",
    type: "Personal Project",
    category: ["Mobile Dev", "UI/UX", "Audio"],
    shortDescription:
      "Built a feature-rich music player using Flutter with multiple theme options, playlist management, and advanced audio controls. Includes equalizer, sleep timer, and local file playback.",
    githubLink: "https://github.com/yawarnoor/flutter-music-player",
    techStack: [
      "Flutter",
      "Dart",
      "Audio Processing",
      "Material Design",
      "Local Storage",
      "Provider Pattern",
    ],
    startDate: new Date("2022-12-01"),
    endDate: new Date("2023-02-01"),
    companyLogoImg: "/experience/music-player/logo.png",
    descriptionDetails: {
      paragraphs: [
        "This comprehensive music player application showcases advanced Flutter development skills including audio processing, theme management, and complex state handling. The app provides a complete music listening experience with professional-grade features.",
        "Multiple theme options allow users to customize their experience, while advanced playback controls include shuffle, repeat, equalizer settings, and sleep timer functionality. The app efficiently handles local music file management and playlist creation.",
        "The project demonstrates proficiency in Flutter's audio capabilities, complex UI animations, and creating polished user experiences that rival commercial music applications."
      ],
      bullets: [
        "Advanced audio playback controls and management",
        "Multiple theme options with dynamic theming",
        "Playlist creation and management system",
        "Equalizer with preset and custom settings",
        "Sleep timer and alarm clock functionality",
        "Local music file scanning and organization",
        "Smooth animations and transitions"
      ]
    },
    pagesInfoArr: [
      {
        title: "Player Interface",
        description: "Main music player with advanced controls",
        imgArr: ["/experience/music-player/player_1.webp"]
      }
    ]
  },
  {
    id: "minimalist-weather-app",
    companyName: "Minimalist Weather App",
    type: "Personal Project",
    category: ["Mobile Dev", "UI/UX", "APIs"],
    shortDescription:
      "Designed a beautiful, minimalistic weather application using Flutter with location-based forecasts. Features clean UI, weather animations, and precise location services for accurate weather data.",
    githubLink: "https://github.com/yawarnoor/flutter-weather-minimal",
    techStack: [
      "Flutter",
      "Weather APIs",
      "Location Services",
      "Dart",
      "Material Design",
      "Responsive Design",
    ],
    startDate: new Date("2023-01-01"),
    endDate: new Date("2023-02-01"),
    companyLogoImg: "/experience/weather-minimal/logo.png",
    descriptionDetails: {
      paragraphs: [
        "This weather application prioritizes simplicity and elegance, providing essential weather information through a beautifully crafted minimalist interface. The design philosophy focuses on clarity and ease of use without sacrificing functionality.",
        "Location-based services automatically detect user position for accurate local weather data, while the clean interface presents current conditions, hourly forecasts, and extended predictions in an easily digestible format.",
        "The project demonstrates expertise in API integration, location services, and creating intuitive user interfaces that prioritize user experience over feature complexity."
      ],
      bullets: [
        "Minimalist, classy UI design with weather animations",
        "Automatic location detection for local weather",
        "Real-time weather data from reliable APIs",
        "7-day extended forecast with hourly breakdowns",
        "Beautiful weather condition animations",
        "Responsive design for all screen sizes",
        "Offline caching for recent weather data"
      ]
    },
    pagesInfoArr: [
      {
        title: "Main Interface",
        description: "Clean, minimalist weather display with animations",
        imgArr: ["/experience/weather-minimal/main_1.webp"]
      },
      {
        title: "Forecast Views",
        description: "Extended forecasts and detailed weather information",
        imgArr: ["/experience/weather-minimal/forecast_1.webp"]
      }
    ]
  },
  {
    id: "thesis-management-system",
    companyName: "Thesis Management System",
    type: "Professional",
    category: ["Web Dev", "Full Stack", "Academic"],
    shortDescription:
      "Built a comprehensive MERN stack application for university deans to manage MS, MPhil, and PhD thesis supervision. Features progress tracking, deadline management, and automated notifications.",
    githubLink: "https://github.com/yawarnoor/thesis-management-system",
    techStack: [
      "React",
      "Node.js",
      "MongoDB",
      "express.js",
      "Javascript",
      "Material UI",
      "Academic Management",
    ],
    startDate: new Date("2024-04-01"),
    endDate: new Date("2024-07-01"),
    companyLogoImg: "/experience/thesis-management/logo.png",
    descriptionDetails: {
      paragraphs: [
        "The Thesis Management System addresses the complex challenges faced by university deans in overseeing graduate student research projects. This comprehensive MERN stack application streamlines the entire thesis supervision process from proposal to defense.",
        "The system provides detailed progress tracking capabilities, allowing supervisors to monitor student milestones, set deadlines, and receive automated notifications for important events. Integration with university systems ensures seamless data flow and administrative efficiency.",
        "Key features include document management, supervisor assignment, progress reporting, and automated notification systems that keep all stakeholders informed throughout the thesis journey."
      ],
      bullets: [
        "Complete MERN stack implementation for academic management",
        "Multi-level user roles: Deans, Supervisors, Students",
        "Thesis progress tracking with milestone management",
        "Automated deadline notifications and reminders",
        "Document upload and version control system",
        "Supervisor assignment and workload management",
        "Comprehensive reporting and analytics dashboard"
      ]
    },
    pagesInfoArr: [
      {
        title: "Admin Dashboard",
        description: "Dean's overview of all thesis projects and statistics",
        imgArr: ["/experience/thesis-management/admin_1.webp"]
      },
      {
        title: "Progress Tracking",
        description: "Detailed thesis progress monitoring and milestone tracking",
        imgArr: ["/experience/thesis-management/progress_1.webp", "/experience/thesis-management/progress_2.webp"]
      },
    ]
  },
  {
    id: "digital-agency-website",
    companyName: "Digital Agency Website",
    type: "Personal Project",
    category: ["Web Dev", "Frontend", "UI/UX"],
    shortDescription:
      "Built a modern, responsive digital agency website using vanilla JavaScript, Bootstrap, HTML, and CSS. Features include service showcases, portfolio gallery, contact forms, and fully responsive design optimized for all devices.",
    websiteLink: "https://digital-agency-demo.com",
    githubLink: "https://github.com/yawarnoor/digital-agency-website",
    techStack: [
      "HTML5",
      "CSS3",
      "Javascript",
      "Bootstrap",
      "Responsive Design"
    ],
    startDate: new Date("2024-09-01"),
    endDate: new Date("2024-10-01"),
    companyLogoImg: "/experience/digital-agency/logo.png",
    descriptionDetails: {
      paragraphs: [
        "This digital agency website represents a comprehensive showcase of modern web development practices using core web technologies. Built entirely with vanilla JavaScript, Bootstrap, HTML, and CSS, the project demonstrates mastery of fundamental web development skills without relying on complex frameworks.",
        "The website features a fully responsive design that adapts seamlessly across all device types, from desktop computers to mobile phones. Every component has been carefully crafted to provide an optimal user experience, with smooth animations, intuitive navigation, and professional aesthetics that reflect modern design standards.",
        "Key features include interactive service sections, animated portfolio galleries, contact forms with validation, and optimized performance for fast loading times. The Bootstrap framework ensures consistent styling and responsive behavior, while custom CSS provides unique visual elements that distinguish the site from generic templates.",
        "This project showcases the ability to create professional-grade websites using fundamental web technologies, proving that powerful and beautiful web experiences can be built without complex build tools or heavy frameworks."
      ],
      bullets: [
        "Fully responsive design optimized for all screen sizes and devices",
        "Modern, professional UI with smooth animations and transitions",
        "Interactive service showcase with hover effects and detailed descriptions",
        "Portfolio gallery with filtering and modal viewing capabilities",
        "Contact forms with client-side validation and user feedback",
        "Optimized performance with fast loading times and clean code",
        "Cross-browser compatibility ensuring consistent experience",
        "SEO-friendly structure with semantic HTML and meta optimization"
      ]
    },
    pagesInfoArr: [
      {
        title: "Hero Section",
        description: "Modern landing page with hero section, services overview, and call-to-action elements",
        imgArr: ["/experience/digital-agency/hero.webp"]
      },
      {
        title: "About Section",
        description: "About section with professional bio and career highlights",
        imgArr: ["/experience/digital-agency/about.webp"]
      },
      {
        title: "Features Section",
        description: "Features section with interactive cards and comprehensive descriptions",
        imgArr: ["/experience/digital-agency/features.webp"]
      },
      {
        title: "Projects Section",
        description: "Projects section with interactive cards and images",
        imgArr: ["/experience/digital-agency/projects.webp"]
      },
      {
        title: "Team Section",
        description: "Team section with team members and their profiles",
        imgArr: ["/experience/digital-agency/team.webp"]
      },
      {
        title: "Blogs Section",
        description: "Blog section with blog posts and images",
        imgArr: ["/experience/digital-agency/blogs.webp"]
      },
      {
        title: "Footer Section",
        description: "Footer section with social media links and copyright information",
        imgArr: ["/experience/digital-agency/footer.webp"]
      }
    ]
  },
  {
    id: "tourer-travel-website",
    companyName: "Tourer - Travel Agency Website",
    type: "Personal Project",
    category: ["Web Dev", "Frontend", "UI/UX"],
    shortDescription:
      "Developed a comprehensive travel agency website using vanilla JavaScript, Bootstrap, HTML, and CSS. Features destination showcases, tour packages, booking forms, and responsive design perfect for travel enthusiasts.",
    websiteLink: "https://tourer-travel-demo.com",
    githubLink: "https://github.com/yawarnoor/tourer-travel-website",
    techStack: [
      "HTML5",
      "CSS3",
      "Javascript",
      "Bootstrap",
      "Responsive Design"
    ],
    startDate: new Date("2024-08-01"),
    endDate: new Date("2024-09-01"),
    companyLogoImg: "/experience/tourer-travel/logo.png",
    descriptionDetails: {
      paragraphs: [
        "Tourer represents a complete digital solution for travel agencies, combining beautiful visual design with practical functionality. This comprehensive website enables travel businesses to showcase destinations, promote tour packages, and facilitate customer bookings through an intuitive, user-friendly interface.",
        "The website features an extensive destination gallery with detailed information about each location, including pricing, itineraries, and booking options. Interactive maps, image carousels, and responsive design elements create an engaging browsing experience that inspires users to explore and book their next adventure.",
        "Built with performance and accessibility in mind, the site loads quickly across all devices and provides clear navigation paths for users to find information and complete bookings. The responsive design ensures optimal viewing experiences whether users are browsing on desktop, tablet, or mobile devices.",
        "This project demonstrates expertise in creating industry-specific websites that balance aesthetic appeal with functional requirements, showing the ability to understand and implement solutions for specific business sectors."
      ],
      bullets: [
        "Comprehensive destination showcase with detailed travel information",
        "Interactive tour package displays with pricing and itinerary details",
        "Responsive booking forms with validation and user confirmation",
        "Image galleries and carousels showcasing travel destinations",
        "Mobile-optimized design for on-the-go travel planning",
        "Integration-ready contact forms for customer inquiries",
        "SEO-optimized content structure for travel-related searches",
        "Fast-loading design optimized for various internet speeds"
      ]
    },
    pagesInfoArr: [
      {
        title: "Hero Section",
        description: "Attractive landing page featuring popular destinations and travel packages",
        imgArr: ["/experience/tourer-travel/hero.webp"]
      },
      {
        title: "About Section",
        description: "About section with professional bio and career highlights",
        imgArr: ["/experience/tourer-travel/about.webp"]
      },
      {
        title: "Packages Section",
        description: "Packages section with interactive cards and images",
        imgArr: ["/experience/tourer-travel/packages.webp"]
      },
      {
        title: "Services Section",
        description: "Services section with interactive cards and images",
        imgArr: ["/experience/tourer-travel/services.webp"]
      },
      {
        title: "Footer Section",
        description: "Footer section with social media links and copyright information",
        imgArr: ["/experience/tourer-travel/footer.webp"]
      }
    ]
  },
  {
    id: "porolios-portfolio-website",
    companyName: "Porolios - Portfolio Website",
    type: "Personal Project",
    category: ["Web Dev", "Frontend", "UI/UX"],
    shortDescription:
      "Created a dummy portfolio website template using vanilla JavaScript, Bootstrap, HTML, and CSS. Features project galleries, skill showcases, about sections, and contact forms - a complete portfolio solution for creative professionals.",
    websiteLink: "https://porolios-portfolio-demo.com",
    githubLink: "https://github.com/yawarnoor/porolios-portfolio-website",
    techStack: [
      "HTML5",
      "CSS3",
      "Javascript",
      "Bootstrap",
      "Responsive Design"
    ],
    startDate: new Date("2024-07-01"),
    endDate: new Date("2024-08-01"),
    companyLogoImg: "/experience/porolios-portfolio/logo.png",
    descriptionDetails: {
      paragraphs: [
        "Porolios serves as a comprehensive portfolio template designed for creative professionals, developers, and designers who need to showcase their work effectively. This dummy portfolio website demonstrates how to present projects, skills, and professional information in an engaging and professional manner.",
        "The template includes multiple layout options for displaying different types of work, from web development projects to graphic design pieces. Interactive galleries, smooth scrolling navigation, and carefully crafted typography create a polished presentation that helps professionals make strong first impressions.",
        "Responsive design ensures the portfolio looks exceptional across all devices, with special attention paid to mobile presentation since many potential clients and employers browse portfolios on their phones. The clean, modern aesthetic can be easily customized to match individual brand preferences.",
        "This project showcases the ability to create versatile, reusable templates that solve common business needs, demonstrating both technical skills and understanding of professional presentation requirements."
      ],
      bullets: [
        "Multiple portfolio layout options for different types of work",
        "Interactive project galleries with detailed case studies",
        "Responsive design optimized for professional presentation",
        "Skills section with visual progress indicators and descriptions",
        "About section with professional bio and career highlights",
        "Contact forms with validation for potential client inquiries",
        "Smooth scrolling navigation and modern animations",
        "Customizable color schemes and typography options"
      ]
    },
    pagesInfoArr: [
      {
        title: "Hero Section",
        description: "Professional Hero Section with a beautiful background image, navigation bar, and a call to action button",
        imgArr: ["/experience/porolios-portfolio/hero.webp"]
      },
      {
        title: "About My Resume Section",
        description: "About My Resume section share your professional background, personal information, and experience",
        imgArr: ["/experience/porolios-portfolio/about_1.webp", "/experience/porolios-portfolio/about_2.webp"]
      },
      {
        title: "Skills Section",
        description: "My Skills section to highlight your skills, and expertise",
        imgArr: ["/experience/porolios-portfolio/skills.webp"]
      },
      {
        title: "My Services Section",
        description: "My Services section to highlight your services, and expertise you provide",
        imgArr: ["/experience/porolios-portfolio/services_1.webp", "/experience/porolios-portfolio/services_2.webp"]
      },
      {
        title: "Testimonials and Footer Section",
        description: "Testimonials section with client reviews and feedback, and footer section with social media links and copyright information",
        imgArr: ["/experience/porolios-portfolio/testimonials.webp"]
      }
    ]
  }
];

// Featured experiences for homepage - showcasing diverse technical skills
export const featuredExperiences: ExperienceInterface[] = [
  Experiences.find(exp => exp.id === "campus-swipe"),
  Experiences.find(exp => exp.id === "talentmatch"), 
  Experiences.find(exp => exp.id === "vocalverse-ai"),
].filter((exp): exp is ExperienceInterface => exp !== undefined);
