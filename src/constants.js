import { Code, Palette, Database, Terminal, Cpu, Globe, Wrench, Sparkles, Code2, Users, Lightbulb, Rocket, Calendar, GraduationCap } from 'lucide-react';

// Personal Information
export const PERSONAL_INFO = {
  // Basic Information
  name: "Man Mohan Singh",
  title: "Frontend Developer | React.js Specialist",
  position: "Associate Software Engineer @ MyGate",
  description: "4th-year Computer Science student at IIIT Nagpur with 2 years of experience building modern web applications. Quick learner, team player, and creative problem solver passionate about exploring new technologies.",

  // Contact Information
  email: "manmohansingh8422@gmail.com",
  phone: "+91 8433376122",
  location: "Rae Bareli, UP",

  // Social Links
  github: "https://github.com/manmohansingh8422",
  linkedin: "https://linkedin.com/in/manmohansingh",

  // Professional Details
  birthDate: "18 Oct 2003",
  degree: "B.Tech, CS",
  institute: "Indian Institute of Information Technology, Nagpur (IIITN)",
  graduationYear: "2024",
  experience: "2+ YEARS",

  // About Details
  aboutTitle: "Hello Everyone! 👋",
  aboutDescription: [
    "My name is Man Mohan Singh. I am pursuing a Bachelor of Technology (B.Tech) degree in Computer Science at the Indian Institute of Information Technology, Nagpur (IIITN), with an expected graduation in 2024.",
    "Born and raised in Raebareli, Uttar Pradesh, I developed a strong passion for technology early on, which led me to pursue a career in this field. Currently working as an Associate Software Engineer at MyGate, I specialize in Frontend Development with expertise in React.js, Next.js, and modern web technologies.",
    "I am committed to leveraging the knowledge and skills gained during my studies and professional experience to solve real-world challenges and contribute meaningfully to society. A creative problem solver, I thrive on exploring new technologies and embracing challenges."
  ]
};

// Skills & Expertise
export const SKILL_CATEGORIES = [
  {
    category: "Frontend Development",
    icon: Globe,
    gradient: "from-blue-400 to-cyan-500",
    description: "Building modern, responsive web applications",
    skills: ["React.js", "Next.js", "TypeScript", "JavaScript", "Material UI", "Tailwind CSS", "HTML/CSS", "Redux"]
  },
  {
    category: "Backend Development",
    icon: Database,
    gradient: "from-emerald-400 to-teal-500",
    description: "Server-side development and data management",
    skills: ["Node.js", "Express.js", "MySQL", "MongoDB", "PostgreSQL", "REST APIs", "GraphQL"]
  },
  {
    category: "Cloud & DevOps",
    icon: Cpu,
    gradient: "from-orange-400 to-red-500",
    description: "Cloud infrastructure and deployment automation",
    skills: ["AWS", "AWS CodePipeline", "Jenkins", "Docker", "CI/CD", "AWS Lambda"]
  },
  {
    category: "Programming Languages",
    icon: Code,
    gradient: "from-purple-400 to-pink-500",
    description: "Core programming and algorithmic skills",
    skills: ["C/C++", "Java", "Python", "JavaScript", "TypeScript", "Data Structures & Algorithms"]
  },
  {
    category: "Design & UI/UX",
    icon: Palette,
    gradient: "from-pink-400 to-rose-500",
    description: "Creating beautiful and intuitive user experiences",
    skills: ["Figma", "User Experience", "Responsive Design", "Prototyping", "Design Systems"]
  },
  {
    category: "Development Tools",
    icon: Wrench,
    gradient: "from-green-400 to-blue-500",
    description: "Essential tools for modern development workflow",
    skills: ["Git & GitHub", "VS Code", "Postman", "Linux", "Terminal", "npm/yarn", "Webpack", "Vite"]
  },
  {
    category: "Testing & Quality",
    icon: Terminal,
    gradient: "from-yellow-400 to-orange-500",
    description: "Ensuring code quality and reliability",
    skills: ["Jest", "React Testing Library", "Unit Testing", "Integration Testing", "Code Reviews"]
  },
  {
    category: "Emerging Technologies",
    icon: Sparkles,
    gradient: "from-indigo-400 to-purple-500",
    description: "Exploring cutting-edge technologies and frameworks",
    skills: ["Machine Learning", "AI Technologies", "Serverless", "Microservices", "Web3"]
  }
];

// About Section
export const ABOUT_HIGHLIGHTS = [
  {
    icon: Code2,
    title: "Clean Code",
    description: "Writing maintainable, scalable, and efficient code with modern best practices"
  },
  {
    icon: Users,
    title: "Team Player",
    description: "Excellent collaboration skills working with cross-functional teams"
  },
  {
    icon: Lightbulb,
    title: "Problem Solver",
    description: "Creative approach to solving complex technical challenges"
  },
  {
    icon: Rocket,
    title: "Quick Learner",
    description: "Fast adaptation to new technologies and frameworks"
  }
];

export const ABOUT_STATS = [
  { icon: Calendar, label: "Birth Date", value: "18 Oct 2003" },
  { icon: GraduationCap, label: "Degree", value: "B.Tech, CS" },
];