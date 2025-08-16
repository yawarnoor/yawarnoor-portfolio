import { ValidPages } from "./constants";

type PagesConfig = {
  [key in ValidPages]: {
    title: string;
    description: string;
    metadata: {
      title: string;
      description: string;
    };
    // featuredDescription: string;
  };
};

export const pagesConfig: PagesConfig = {
  home: {
    title: "Home",
    description: "Welcome to Yawar Noor's professional portfolio.",
    metadata: {
      title: "Home",
      description: "Yawar Noor - Full Stack Web and Mobile Developer | Computer Science Graduate",
    },
  },
  skills: {
    title: "Technical Excellence",
    description: "Cutting-edge technologies and proven expertise that drive innovation.",
    metadata: {
      title: "Technical Skills",
      description:
        "Yawar Noor's technical expertise: MERN Stack, Flutter, Python, AI Integration, and modern web technologies.",
    },
  },
  projects: {
    title: "Project Portfolio",
    description: "Innovative solutions and impactful applications that solve real-world problems.",
    metadata: {
      title: "Projects & Portfolio",
      description: "Yawar Noor's portfolio: IoT campus management, AI voice cloning, web scraping, and mobile apps.",
    },
  },
  contact: {
    title: "Let's Connect",
    description: "Ready to collaborate on your next innovative project.",
    metadata: {
      title: "Contact",
      description: "Get in touch with Yawar Noor for collaboration opportunities.",
    },
  },
  achievements: {
    title: "Achievements & Certifications",
    description: "Professional certifications, academic excellence, and recognition for technical achievements.",
    metadata: {
      title: "Achievements",
      description:
        "Yawar Noor's certifications, awards, and academic achievements - Computer Science graduate with multiple technical certifications and leadership experience.",
    },
  },
  resume: {
    title: "Professional Resume",
    description: "Comprehensive overview of qualifications and achievements.",
    metadata: {
      title: "Resume",
      description: "Yawar Noor's professional resume - Computer Science Graduate with expertise in MERN stack, Flutter, and AI technologies.",
    },
  },
  career: {
    title: "Professional Journey",
    description: "Academic excellence to professional development milestones.",
    metadata: {
      title: "Career Timeline",
      description: "Yawar Noor's academic and professional journey from Sukkur IBA University to freelance success.",
    },
  },
};
