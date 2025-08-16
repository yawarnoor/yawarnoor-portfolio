import { Icons } from "@/components/common/icons";

export interface skillsInterface {
  name: string;
  description: string;
  rating: number;
  icon: any;
}

export interface SkillCategory {
  id: string;
  title: string;
  description: string;
  skills: skillsInterface[];
}

// Programming Languages
const programmingLanguages: skillsInterface[] = [
  {
    name: "Python",
    description: "Advanced Python development for automation scripts, AI integration, web scraping, and data analysis.",
    rating: 5,
    icon: Icons.python,
  },
  {
    name: "JavaScript",
    description: "Full-stack JavaScript development for dynamic web applications and modern ES6+ features.",
    rating: 5,
    icon: Icons.javascript,
  },
  {
    name: "TypeScript",
    description: "Type-safe development for large-scale applications with enhanced code reliability and maintainability.",
    rating: 5,
    icon: Icons.typescript,
  },
  {
    name: "Dart",
    description: "Flutter mobile app development with Dart language for iOS and Android platforms.",
    rating: 5,
    icon: Icons.dart,
  },
];

// Frontend Development
const frontendDevelopment: skillsInterface[] = [
  {
    name: "React",
    description: "Expert in building interactive user interfaces using components, hooks, and modern React patterns.",
    rating: 5,
    icon: Icons.react,
  },
  {
    name: "Next.js",
    description: "Full-stack React framework for production-ready applications with SSR, SSG, and API routes.",
    rating: 5,
    icon: Icons.nextjs,
  },
  {
    name: "Flutter",
    description: "Cross-platform mobile app development with Firebase integration and real-time features.",
    rating: 5,
    icon: Icons.flutter,
  },
  {
    name: "HTML5",
    description: "Semantic markup and modern HTML5 features for accessible and well-structured web applications.",
    rating: 5,
    icon: Icons.html5,
  },
  {
    name: "CSS3",
    description: "Advanced styling with modern CSS3 features, animations, and responsive design principles.",
    rating: 5,
    icon: Icons.css3,
  },
  {
    name: "Tailwind CSS",
    description: "Modern utility-first CSS framework for rapid UI development and responsive design.",
    rating: 5,
    icon: Icons.tailwindcss,
  },
  {
    name: "Bootstrap",
    description: "Popular CSS framework for building responsive and mobile-first web interfaces quickly.",
    rating: 4,
    icon: Icons.bootstrap5,
  },
];

// Backend Development
const backendDevelopment: skillsInterface[] = [
  {
    name: "Node.js",
    description: "Backend development with Node.js for scalable APIs, real-time applications, and microservices.",
    rating: 5,
    icon: Icons.nodejs,
  },
  {
    name: "Express.js",
    description: "RESTful API development and server-side applications with Express.js framework.",
    rating: 5,
    icon: Icons.express,
  },
  {
    name: "Flask",
    description: "Lightweight Python web framework for building APIs and web applications efficiently.",
    rating: 4,
    icon: Icons.flask,
  },
  {
    name: "RESTful APIs",
    description: "Design and implementation of RESTful web services with proper authentication and documentation.",
    rating: 5,
    icon: Icons.api,
  },
  {
    name: "Microservices",
    description: "Distributed system architecture with microservices design patterns and inter-service communication.",
    rating: 4,
    icon: Icons.microservices,
  },
];

// Databases
const databases: skillsInterface[] = [
  {
    name: "MongoDB",
    description: "NoSQL database design and optimization for high-performance applications and data storage.",
    rating: 5,
    icon: Icons.mongodb,
  },
  {
    name: "Firebase",
    description: "Real-time database, authentication, cloud functions, and mobile app backend services.",
    rating: 5,
    icon: Icons.firebase,
  },
  {
    name: "SQLite",
    description: "Lightweight relational database for mobile and desktop applications with efficient data storage.",
    rating: 4,
    icon: Icons.sqlite,
  },
  {
    name: "PostgreSQL",
    description: "Advanced relational database management with complex queries and data integrity.",
    rating: 4,
    icon: Icons.postgresql,
  },
  {
    name: "Supabase",
    description: "Open-source Firebase alternative with PostgreSQL, real-time subscriptions, and authentication.",
    rating: 4,
    icon: Icons.supabase,
  },
  {
    name: "Neon",
    description: "Serverless PostgreSQL platform with branching and modern developer experience.",
    rating: 4,
    icon: Icons.neon,
  },
];

// Tools & Technologies
const toolsTechnologies: skillsInterface[] = [
  {
    name: "Git",
    description: "Version control expertise with collaborative development workflows and repository management.",
    rating: 5,
    icon: Icons.git,
  },
  {
    name: "Postman",
    description: "API testing and development tool for building, testing, and documenting APIs efficiently.",
    rating: 5,
    icon: Icons.postman,
  },
  {
    name: "Docker",
    description: "Containerization and deployment with Docker for consistent development and production environments.",
    rating: 4,
    icon: Icons.docker,
  },
  {
    name: "Linux",
    description: "Command-line proficiency, server administration, and deployment on Linux environments.",
    rating: 4,
    icon: Icons.linux,
  },
  {
    name: "OpenAI API",
    description: "AI integration for building intelligent applications with OpenAI's language models and assistants.",
    rating: 5,
    icon: Icons.openaiAssistants,
  },
  {
    name: "Slack",
    description: "Team collaboration and workflow automation using Slack APIs and bot development.",
    rating: 4,
    icon: Icons.slack,
  },
];

// Methodologies
const methodologies: skillsInterface[] = [
  {
    name: "Agile",
    description: "Agile development methodologies with iterative development and continuous improvement.",
    rating: 4,
    icon: Icons.agile,
  },
  {
    name: "Scrum",
    description: "Scrum framework implementation with sprint planning, daily standups, and retrospectives.",
    rating: 4,
    icon: Icons.scrum,
  },
  {
    name: "Test-Driven Development",
    description: "TDD practices with unit testing, integration testing, and quality assurance methodologies.",
    rating: 4,
    icon: Icons.check,
  },
  {
    name: "Requirements Gathering",
    description: "Stakeholder communication and systematic requirement analysis for project success.",
    rating: 4,
    icon: Icons.post,
  },
  {
    name: "OOP",
    description: "Object-oriented programming principles with design patterns and clean code practices.",
    rating: 5,
    icon: Icons.oop,
  },
  {
    name: "MVC",
    description: "Model-View-Controller architecture pattern for scalable and maintainable applications.",
    rating: 4,
    icon: Icons.mvc,
  },
];

// Automation Workflow
const automationWorkflow: skillsInterface[] = [
  {
    name: "n8n",
    description: "Fair-code automation platform for creating complex workflows and data integrations.",
    rating: 4,
    icon: Icons.n8n,
  },
  {
    name: "Make.com",
    description: "Visual platform for creating automated workflows and connecting various applications.",
    rating: 4,
    icon: Icons.settings,
  },
  {
    name: "Zapier",
    description: "Automation platform for connecting apps and automating repetitive tasks and workflows.",
    rating: 4,
    icon: Icons.zapier,
  },
  {
    name: "Voiceflow",
    description: "Conversational AI platform for designing and building voice and chat applications.",
    rating: 4,
    icon: Icons.ai,
  },
  {
    name: "Manychat",
    description: "Chatbot platform for creating automated conversations and marketing workflows.",
    rating: 4,
    icon: Icons.ai,
  },
  {
    name: "Telegram",
    description: "Bot development and automation using Telegram APIs for messaging and workflow integration.",
    rating: 4,
    icon: Icons.telegram,
  },
  {
    name: "Airtable",
    description: "Database automation and workflow management with Airtable APIs and integrations.",
    rating: 4,
    icon: Icons.airtable,
  },
  {
    name: "Google Sheets",
    description: "Spreadsheet automation and data processing using Google Sheets APIs and scripting.",
    rating: 5,
    icon: Icons.googleSheets,
  },
  {
    name: "Slack",
    description: "Slack bot development and workflow automation for team collaboration and notifications.",
    rating: 4,
    icon: Icons.slack,
  },
];

// Soft Skills
const softSkills: skillsInterface[] = [
  {
    name: "Teamwork",
    description: "Collaborative team environment experience with cross-functional team coordination.",
    rating: 5,
    icon: Icons.user,
  },
  {
    name: "Leadership",
    description: "Team leadership experience with mentoring, project coordination, and decision-making.",
    rating: 4,
    icon: Icons.leadership,
  },
  {
    name: "Problem-solving",
    description: "Analytical thinking and systematic approach to complex technical and business challenges.",
    rating: 5,
    icon: Icons.help,
  },
  {
    name: "Time Management",
    description: "Efficient project planning, deadline management, and priority-based task execution.",
    rating: 5,
    icon: Icons.timeManagement,
  },
  {
    name: "Project Management",
    description: "End-to-end project coordination with resource allocation and stakeholder communication.",
    rating: 4,
    icon: Icons.work,
  },
  {
    name: "Technical Communication",
    description: "Clear documentation, technical presentations, and effective knowledge transfer.",
    rating: 5,
    icon: Icons.post,
  },
  {
    name: "Critical Observation",
    description: "Attention to detail, code review expertise, and quality assurance mindset.",
    rating: 5,
    icon: Icons.check,
  },
];

export const skillCategories: SkillCategory[] = [
  {
    id: "programming",
    title: "Programming Languages",
    description: "Core programming languages and scripting expertise",
    skills: programmingLanguages,
  },
  {
    id: "frontend",
    title: "Frontend Development",
    description: "Modern frontend frameworks, libraries, and styling technologies",
    skills: frontendDevelopment,
  },
  {
    id: "backend",
    title: "Backend Development",
    description: "Server-side development, APIs, and microservices architecture",
    skills: backendDevelopment,
  },
  {
    id: "databases",
    title: "Databases",
    description: "Relational and NoSQL database systems and cloud storage solutions",
    skills: databases,
  },
  {
    id: "tools",
    title: "Tools & Technologies",
    description: "Development tools, platforms, and technology stack",
    skills: toolsTechnologies,
  },
  {
    id: "methodologies",
    title: "Methodologies",
    description: "Development methodologies and software engineering practices",
    skills: methodologies,
  },
  {
    id: "automation",
    title: "Automation Workflow",
    description: "Workflow automation platforms and integration tools",
    skills: automationWorkflow,
  },
  {
    id: "soft",
    title: "Soft Skills",
    description: "Professional skills and personal competencies",
    skills: softSkills,
  },
];

// Legacy exports for compatibility
export const skills = skillCategories.flatMap(category => category.skills);
export const featuredSkills = [
  ...programmingLanguages.slice(0, 2),
  ...frontendDevelopment.slice(0, 2),
  ...backendDevelopment.slice(0, 1),
  ...databases.slice(0, 1),
];
