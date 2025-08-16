import { ValidSkills } from "./constants";

export interface CareerExperienceInterface {
  id: string;
  position: string;
  company: string;
  location: string;
  startDate: Date;
  endDate: Date | "Present";
  description: string[];
  achievements: string[];
  skills: ValidSkills[];
  companyUrl?: string;
  logo?: string;
}

// Professional Experience
export const professionalExperiences: CareerExperienceInterface[] = [
  {
    id: "freelancer",
    position: "Full Stack Developer",
    company: "Freelancer (Fiverr | Upwork)",
    location: "Remote",
    startDate: new Date("2023-11-01"),
    endDate: "Present",
    description: [
      "Built responsive landing pages and web applications using MERN stack, achieving 95%+ client satisfaction",
      "Designed algorithms and business logic for various platforms, reducing processing time by 30%",
      "Created AI-powered chatbots and assistants using OpenAI APIs, serving 200+ end users",
      "Provided Python tutoring to 50+ students, improving their programming proficiency by 60%",
      "Delivered Flutter mobile applications with real-time features and cross-platform compatibility",
    ],
    achievements: [
      "Built responsive landing pages and web applications using MERN stack, achieving 95%+ client satisfaction",
      "Designed algorithms and business logic for various platforms, reducing processing time by 30%",
      "Created AI-powered chatbots and assistants using OpenAI APIs, serving 200+ end users",
      "Provided Python tutoring to 50+ students, improving their programming proficiency by 60%",
      "Delivered Flutter mobile applications with real-time features and cross-platform compatibility",
    ],
    skills: ["React", "Node.js", "Flutter", "Python", "MongoDB", "Firebase", "Javascript", "Typescript"],
    companyUrl: "https://www.fiverr.com",
    logo: "/career/freelancer-logo.png",
  },
  {
    id: "global-network-smc",
    position: "Flutter Developer (Intern)",
    company: "Global Network SMC",
    location: "Sukkur, Sindh, PAKISTAN",
    startDate: new Date("2024-08-01"),
    endDate: new Date("2024-09-01"),
    description: [
      "Built a Flutter mobile app integrated with Firebase and Node.js backend.",
      "Enabled real-time data updates for multiple users with collaborative features.",
      "Worked with a team of 3 developers to deploy MongoDB-backed feature within 2-month timeline.",
    ],
    achievements: [
      "Developed a cross-platform mobile application using Flutter integrated with Firebase and Node.js backend",
      "Implemented real-time data synchronisation features supporting 100+ concurrent users", 
      "Collaborated with a 3-member development team using Agile methodology to deliver the project within 2-month timeline",
      "Designed and integrated MongoDB database features, improving data retrieval speed by 40%",
    ],
    skills: ["Flutter", "Dart", "Firebase", "Node.js", "MongoDB", "Material Design"],
    companyUrl: "https://globalnetworksmc.com",
    logo: "/career/global-network-logo.png",
  },
  {
    id: "ai-robotics-society",
    position: "Lead/Executive",
    company: "AI and Robotics Society, Sukkur IBA University",
    location: "Sukkur, Sindh, PAKISTAN",
    startDate: new Date("2022-01-01"),
    endDate: new Date("2024-06-01"),
    description: [
      "Led technology society with 200+ members focusing on AI, robotics, and emerging technologies.",
      "Organized major tech events including TechFest 2023 and Sibafest 2024.",
      "Coordinated workshops, seminars, and competitive programming contests.",
    ],
    achievements: [
      "Led a team of 10 to organise Techfest 2023 and SIBA Fest 2024, attracting 500+ attendees each",
      "Pioneered Robowars, a competitive robotics event, boosting student engagement by 20%",
      "Conducted technical workshops on AI and robotics for 200+ students",
      "Managed event budgets of PKR 100,000+ and coordinated with external sponsors",
    ],
    skills: ["Leadership", "Event Management", "AI", "Robotics", "Project Management"],
    companyUrl: "https://iba-suk.edu.pk",
    logo: "/career/iba-logo.png",
  }
];

// Academic Background  
export const academicExperiences: CareerExperienceInterface[] = [
  {
    id: "education-bachelor",
    position: "Bachelor of Science in Computer Science",
    company: "Sukkur IBA University",
    location: "Sukkur, Sindh, PAKISTAN",
    startDate: new Date("2020-09-01"),
    endDate: new Date("2024-06-01"),
    description: [
      "Completed comprehensive Computer Science program with emphasis on software engineering.",
      "Achieved CGPA of 3.41/4.0 (85.94%), ranking in top 10% of graduating class.",
      "Completed coursework in Data Structures, Algorithms, Database Systems, IoT, Computer Vision, Image Processing, and Software Engineering.",
    ],
    achievements: [
      "Graduated with Top 10% class ranking (CGPA: 3.41/4.0).",
      "Completed final year project: Campus Swipe IoT-based attendance system serving 1000+ students.",
      "Won 2nd place in Speed Programming contest at TechFest 2023 (200+ participants).",
      "Secured 2nd place in ICT Quiz competition at TechFest 2023 (300+ participants).",
      "Active member and later executive of AI and Robotics Society.",
    ],
    skills: ["Data Structures", "Algorithms", "Database Systems", "IoT", "Computer Vision", "Image Processing", "Software Engineering"],
    companyUrl: "https://iba-suk.edu.pk",
    logo: "/career/iba-logo.png",
  },
  {
    id: "education-intermediate",
    position: "Matriculation/Intermediate",
    company: "IBA Community College",
    location: "Khairpur, Sindh, PAKISTAN",
    startDate: new Date("2016-07-01"),
    endDate: new Date("2020-06-01"),
    description: [
      "Completed pre-university education with focus on science and mathematics.",
      "Achieved academic excellence in mathematics, qualifying for university math olympiads.",
      "Active participant in academic competitions and extracurricular activities.",
    ],
    achievements: [
      "Secured 1st Runner-Up position in Inter University Math Olympiad 2020.",
      "Maintained consistent academic performance throughout intermediate education.",
      "Developed strong foundation in mathematics and analytical thinking.",
      "Successfully qualified for admission to prestigious Sukkur IBA University.",
    ],
    skills: ["Mathematics", "Analytical Thinking", "Problem Solving", "Academic Excellence"],
    companyUrl: "https://iba-suk.edu.pk",
    logo: "/career/iba-college-logo.png",
  },
];

// Combined export for backward compatibility
export const careerExperiences = [...professionalExperiences, ...academicExperiences];
