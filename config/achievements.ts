interface Achievement {
  id: string;
  title: string;
  organization: string;
  date: string;
  description: string;
  type: "certification" | "award" | "academic" | "leadership";
  credentialUrl?: string;
  icon?: string;
}

export const achievements: Achievement[] = [
  {
    id: "top-10-graduate",
    title: "Top 10% Graduate",
    organization: "Sukkur IBA University",
    date: "2024",
    description: "CGPA: 3.41/4.0 (85.94%) - Ranked in top 10% of Computer Science class",
    type: "academic",
    icon: "🎓"
  },
  {
    id: "cnss-certification",
    title: "Certified Network Security Specialist (CNSS)",
    organization: "ICSI UK",
    date: "2024",
    description: "Professional certification in network security and cybersecurity practices",
    type: "certification",
    icon: "🛡️"
  },
  {
    id: "advanced-react",
    title: "Advanced React Certification",
    organization: "Coursera | Scrimba | Meta",
    date: "2023",
    description: "Advanced React development patterns and best practices",
    type: "certification",
    icon: "⚛️"
  },
  {
    id: "flutter-certification",
    title: "Advanced Flutter Development",
    organization: "Google Cloud",
    date: "2023",
    description: "Mobile app development with Flutter and Firebase integration",
    type: "certification",
    icon: "📱"
  },
  {
    id: "mern-certification",
    title: "Advanced MERN Stack",
    organization: "NetNinja",
    date: "2023",
    description: "Full-stack development with MongoDB, Express, React, and Node.js",
    type: "certification",
    icon: "💻"
  },
  {
    id: "speed-programming-award",
    title: "2nd Place - Speed Programming",
    organization: "TechFest 2023",
    date: "2023",
    description: "Competitive programming contest with 200+ participants",
    type: "award",
    icon: "🏆"
  },
  {
    id: "ict-quiz-award",
    title: "2nd Place - ICT Quiz",
    organization: "TechFest 2023",
    date: "2023",
    description: "Information and Communication Technology quiz competition (300+ participants)",
    type: "award",
    icon: "🥈"
  },
  {
    id: "math-olympiad-2022",
    title: "2nd Runner-Up - Math Olympiad",
    organization: "Inter University Competition",
    date: "2022",
    description: "Inter-university mathematics competition demonstrating analytical skills",
    type: "award",
    icon: "🧮"
  },
  {
    id: "math-olympiad-2020",
    title: "1st Runner-Up - Math Olympiad",
    organization: "Inter University Competition",
    date: "2020",
    description: "Early achievement showcasing consistent academic excellence",
    type: "award",
    icon: "🥉"
  },
  {
    id: "ai-robotics-leadership",
    title: "Lead/Executive - AI and Robotics Society",
    organization: "Sukkur IBA University",
    date: "2022-2024",
    description: "Led technology society, organized TechFest 2023 and Sibafest 2024 attracting 500+ attendees each",
    type: "leadership",
    icon: "🤖"
  }
];

export const featuredAchievements = achievements.slice(0, 6);

// Group achievements by type for display
export const achievementsByType = {
  academic: achievements.filter(a => a.type === "academic"),
  certifications: achievements.filter(a => a.type === "certification"),
  awards: achievements.filter(a => a.type === "award"),
  leadership: achievements.filter(a => a.type === "leadership")
};

// Key stats for HR showcase
export const keyStats = {
  cgpa: "3.41/4.0",
  classRank: "Top 10%",
  certifications: achievements.filter(a => a.type === "certification").length,
  awards: achievements.filter(a => a.type === "award").length,
  yearsExperience: "2+",
  projectsCompleted: "15+",
  technologiesUsed: "20+"
}; 