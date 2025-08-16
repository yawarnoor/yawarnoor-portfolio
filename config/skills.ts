import { Icons } from "@/components/common/icons";

export interface skillsInterface {
  name: string;
  description: string;
  rating: number;
  icon: any;
}

export const skillsUnsorted: skillsInterface[] = [
  {
    name: "Python",
    description:
      "Advanced Python development for automation scripts, AI integration, web scraping, and data analysis.",
    rating: 5,
    icon: Icons.python,
  },
  {
    name: "React",
    description:
      "Expert in building interactive user interfaces using components, hooks, and modern React patterns.",
    rating: 5,
    icon: Icons.react,
  },
  {
    name: "Node.js",
    description:
      "Backend development with Node.js for scalable APIs, real-time applications, and microservices.",
    rating: 5,
    icon: Icons.nodejs,
  },
  {
    name: "Flutter",
    description:
      "Cross-platform mobile app development with Firebase integration and real-time features.",
    rating: 5,
    icon: Icons.flutter,
  },
  {
    name: "MongoDB",
    description:
      "NoSQL database design and optimization for high-performance applications and data storage.",
    rating: 5,
    icon: Icons.mongodb,
  },
  {
    name: "TypeScript",
    description:
      "Type-safe development for large-scale applications with enhanced code reliability and maintainability.",
    rating: 5,
    icon: Icons.typescript,
  },
  {
    name: "JavaScript",
    description:
      "Full-stack JavaScript development for dynamic web applications and modern ES6+ features.",
    rating: 5,
    icon: Icons.javascript,
  },
  {
    name: "express.js",
    description:
      "RESTful API development and server-side applications with Express.js framework.",
    rating: 5,
    icon: Icons.express,
  },
  {
    name: "Firebase",
    description:
      "Real-time database, authentication, cloud functions, and mobile app backend services.",
    rating: 5,
    icon: Icons.firebase,
  },
  {
    name: "PostgreSQL",
    description:
      "Advanced relational database management with Supabase integration and complex queries.",
    rating: 4,
    icon: Icons.postgresql,
  },
  {
    name: "Git",
    description:
      "Version control expertise with collaborative development workflows and repository management.",
    rating: 5,
    icon: Icons.git,
  },
  {
    name: "Flask",
    description:
      "Lightweight Python web framework for building APIs and web applications efficiently.",
    rating: 4,
    icon: Icons.flask,
  },
  {
    name: "Dart",
    description:
      "Flutter mobile app development with Dart language for iOS and Android platforms.",
    rating: 5,
    icon: Icons.dart,
  },
  {
    name: "REST APIs",
    description:
      "Design and implementation of RESTful web services with proper authentication and documentation.",
    rating: 5,
    icon: Icons.api,
  },
  {
    name: "Web Scraping",
    description:
      "Data extraction using Beautiful Soup, Scrapy, and automated web scraping solutions.",
    rating: 4,
    icon: Icons.webscraping,
  },
  {
    name: "AI Integration",
    description:
      "OpenAI API integration, voice cloning, and AI-powered application development.",
    rating: 4,
    icon: Icons.ai,
  },

  {
    name: "Linux",
    description:
      "Command-line proficiency, server administration, and deployment on Linux environments.",
    rating: 4,
    icon: Icons.linux,
  },
  {
    name: "Agile/Scrum",
    description:
      "Project management methodologies with team collaboration and iterative development practices.",
    rating: 4,
    icon: Icons.agile,
  },
  {
    name: "Tailwind CSS",
    description:
      "Modern utility-first CSS framework for rapid UI development and responsive design.",
    rating: 4,
    icon: Icons.tailwindcss,
  },
  {
    name: "Postman",
    description:
      "API testing and development tool for building, testing, and documenting APIs efficiently.",
    rating: 5,
    icon: Icons.postman,
  },
  {
    name: "Prisma",
    description:
      "Modern database toolkit and ORM for Node.js with type-safe database access.",
    rating: 4,
    icon: Icons.prisma,
  },
  {
    name: "Bootstrap 5",
    description:
      "Popular CSS framework for building responsive and mobile-first web interfaces quickly.",
    rating: 4,
    icon: Icons.bootstrap5,
  },
  {
    name: "Mongoose",
    description:
      "MongoDB object modeling for Node.js providing schema-based solutions for application data.",
    rating: 5,
    icon: Icons.mongoose,
  },
  {
    name: "Clerk",
    description:
      "Complete authentication and user management solution with pre-built components.",
    rating: 4,
    icon: Icons.clerk,
  },
  {
    name: "Stripe",
    description:
      "Payment processing platform for online businesses with comprehensive API integration.",
    rating: 4,
    icon: Icons.stripe,
  },
  {
    name: "OpenAI Assistants API",
    description:
      "Advanced AI integration for building intelligent applications with OpenAI's assistant capabilities.",
    rating: 4,
    icon: Icons.openaiAssistants,
  },
  {
    name: "Cursor",
    description:
      "AI-powered code editor that enhances development productivity with intelligent code suggestions.",
    rating: 5,
    icon: Icons.cursor,
  },
  {
    name: "Lovable",
    description:
      "Modern development tool for building applications with enhanced user experience and design.",
    rating: 4,
    icon: Icons.lovable,
  },
  {
    name: "V0",
    description:
      "AI-powered development assistant for rapid prototyping and code generation.",
    rating: 4,
    icon: Icons.v0,
  },
  {
    name: "Bolt",
    description:
      "Fast development framework for building high-performance web applications efficiently.",
    rating: 4,
    icon: Icons.bolt,
  },
];

export const skills = skillsUnsorted
  .slice()
  .sort((a, b) => b.rating - a.rating);

export const featuredSkills = skills.slice(0, 6);
