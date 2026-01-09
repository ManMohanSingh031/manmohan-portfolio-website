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
  locationFull: "Raebareli, Uttar Pradesh",

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
export const SKILLS_DATA = {
  title: "Skills & Expertise",
  subtitle: "Technologies and tools I use to create exceptional digital experiences",
  categories: [
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
  ]
};

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

// Education Section
export const EDUCATION = [
  {
    degree: "Bachelor of Technology (B.Tech)",
    field: "Computer Science",
    institution: "Indian Institute of Information Technology, Nagpur (IIITN)",
    period: "2020 - 2024",
    grade: "CGPA: 6.01",
    highlights: [
      "Acquired strong foundation in programming and web development",
      "Participated in collaborative projects and internships",
      "Applied theoretical knowledge in real-world scenarios",
      "Developed problem-solving and analytical skills"
    ]
  },
  {
    degree: "Intermediate",
    field: "Science Stream",
    institution: "Gopal Saraswati Vidya Mandir Senior Secondary School, Raebareli",
    period: "2019 - 2020",
    grade: "Percentage: 61%",
    highlights: [
      "Participated in various academic activities",
      "Enhanced learning through extracurricular programs",
      "Built strong foundation in mathematics and science"
    ]
  },
  {
    degree: "High School",
    field: "General Studies",
    institution: "Gopal Saraswati Vidya Mandir Senior Secondary School, Raebareli",
    period: "2017 - 2018",
    grade: "Percentage: 60%",
    highlights: [
      "Achieved foundational skills in science and mathematics",
      "Developed interest in technology and computing",
      "Rigorous coursework and practical application"
    ]
  }
];

// Experience Section
export const EXPERIENCE_DATA = {
  title: "Professional Journey",
  subtitle: "My career growth from learner to professional developer",
  footer: "Growing stronger with each experience",
  achievementsLabel: "Key Achievements:",
  experiences: [
  {
    title: "Associate Software Engineer (Frontend)",
    company: "MyGate",
    location: "Bangalore, India",
    period: "September 2024 - Present",
    type: "Full Time",
    description: "Working in the ERP team, responsible for developing and maintaining the consumer-facing web application, ensuring high performance and responsiveness to requests from the front-end.",
    achievements: [
      "Developing and maintaining consumer-facing web applications",
      "Collaborating with design team to implement user-friendly features",
      "Ensuring technical feasibility of UI/UX designs",
      "Participating in code reviews and providing constructive feedback"
    ],
    technologies: ["React", "Redux", "JavaScript ES6+", "Material-UI", "HTML/SCSS", "REST API", "GraphQL", "Git", "Jira", "Agile"]
  },
  {
    title: "Software Engineer Intern",
    company: "BharatTech Pvt. Ltd",
    location: "Remote",
    period: "February 2024 - July 2024",
    type: "Internship",
    description: "Collaborated with a team of five to enhance a Next.js and React.js project. Responsibilities included fixing bugs, creating reusable components, and adding new components.",
    achievements: [
      "Enhanced Next.js and React.js projects",
      "Created reusable and scalable components",
      "Fixed critical bugs improving application stability",
      "Collaborated effectively in a team of 5 developers"
    ],
    technologies: ["Next.js", "React.js", "JavaScript", "CSS", "Git"]
  },
  {
    title: "Software Engineer Intern",
    company: "InternPixel Pvt. Ltd",
    location: "Remote",
    period: "January 2024 - February 2024",
    type: "Internship",
    description: "Developed responsive web pages using HTML, CSS, and JavaScript, ensuring cross-device compatibility with features like navigation menus, forms, and interactive elements.",
    achievements: [
      "Developed responsive web pages with cross-device compatibility",
      "Implemented interactive navigation menus and forms",
      "Ensured pixel-perfect design implementation",
      "Optimized page load times and performance"
    ],
    technologies: ["HTML", "CSS", "JavaScript", "Responsive Design"]
  },
  {
    title: "Subject Matter Expert (SME)",
    company: "Chegg India Pvt. Ltd",
    location: "Remote",
    period: "October 2023 - March 2024",
    type: "Part Time",
    description: "Guided over 200 students in various computer science subjects, significantly improving their academic performance with an 82% accuracy rate.",
    achievements: [
      "Guided over 200 students in computer science subjects",
      "Achieved 82% accuracy rate in solutions provided",
      "Improved student academic performance significantly",
      "Developed clear and comprehensive explanations"
    ],
    technologies: ["C++", "Data Structures", "Algorithms", "Computer Science Fundamentals"]
  }
  ]
};

// Photo Section
export const PHOTO_SECTION = {
  title: "Professional Profile",
  subtitle: "Meet the Developer",
  description: "Passionate about creating beautiful, functional, and user-centered digital experiences. With a strong foundation in computer science and hands-on experience in modern web development, I bring creativity and technical expertise to every project.",
  stats: [
    { value: "2+", label: "Years Experience", color: "blue" },
    { value: "15+", label: "Projects Completed", color: "purple" },
    { value: "IIIT", label: "Nagpur Graduate", color: "pink" },
    { value: "React", label: "Specialist", color: "green" }
  ],
  quote: {
    text: "Code is like humor. When you have to explain it, it's bad.",
    author: "Cory House"
  }
};

// Testimonials Section
export const TESTIMONIALS_DATA = {
  title: "Testimonials & Reviews",
  subtitle: "What colleagues, mentors, and team members say about working with me",
  testimonials: [
    {
      name: "Rajesh Kumar",
      role: "Senior Developer at MyGate",
      company: "MyGate",
      rating: 5,
      text: "Man Mohan is an exceptional frontend developer with a keen eye for detail. His work on our ERP system has been outstanding. He consistently delivers high-quality code and is always eager to learn new technologies.",
      avatar: "👨‍💼"
    },
    {
      name: "Priya Sharma",
      role: "Team Lead at BharatTech",
      company: "BharatTech Pvt. Ltd",
      rating: 5,
      text: "Working with Man Mohan was a pleasure. He quickly adapted to our Next.js project and made significant contributions. His ability to create reusable components and fix complex bugs impressed the entire team.",
      avatar: "👩‍💼"
    },
    {
      name: "Amit Patel",
      role: "Project Manager at InternPixel",
      company: "InternPixel Pvt. Ltd",
      rating: 5,
      text: "Man Mohan demonstrated excellent skills in creating responsive web designs. His attention to cross-device compatibility and pixel-perfect implementation was remarkable. He's a quick learner and delivered all tasks ahead of schedule.",
      avatar: "👨‍💻"
    },
    {
      name: "Dr. Sarah Johnson",
      role: "Computer Science Professor",
      company: "IIIT Nagpur",
      rating: 5,
      text: "As Man Mohan's professor, I've watched him grow into a skilled developer. His dedication to learning and problem-solving abilities are exceptional. He actively participates in projects and helps his peers.",
      avatar: "👩‍🏫"
    },
    {
      name: "Vikram Singh",
      role: "Mentor at Chegg",
      company: "Chegg India",
      rating: 5,
      text: "Man Mohan's expertise in Data Structures and Algorithms is impressive. His 82% accuracy rate and ability to guide over 200 students shows his deep understanding and teaching skills.",
      avatar: "👨‍🎓"
    },
    {
      name: "Neha Gupta",
      role: "Frontend Developer",
      company: "Tech Corp",
      rating: 5,
      text: "Collaborating with Man Mohan on various projects has been a great experience. His coding standards and attention to UI/UX details are commendable. A true team player!",
      avatar: "👩‍💻"
    },
    {
      name: "Arjun Reddy",
      role: "Software Architect",
      company: "Digital Solutions",
      rating: 5,
      text: "Man Mohan brings fresh perspectives and innovative solutions to every challenge. His passion for learning and adapting to new technologies makes him stand out among his peers.",
      avatar: "👨‍💼"
    },
    {
      name: "Kavya Iyer",
      role: "UX Designer",
      company: "Design Studio",
      rating: 5,
      text: "Working with Man Mohan on UI implementation was seamless. He perfectly translates designs into code while maintaining pixel-perfect accuracy and smooth animations.",
      avatar: "👩‍🎨"
    }
  ],
  stats: [
    { value: "5.0", label: "Average Rating", icon: "⭐" },
    { value: "200+", label: "Students Helped", icon: "🎓" },
    { value: "82%", label: "Accuracy Rate", icon: "✓" },
    { value: "4+", label: "Companies", icon: "🏢" }
  ]
};

// Profiles Section
export const PROFILES_DATA = {
  title: "Online Profiles",
  subtitle: "Connect with me on various platforms to see my work, contributions, and professional journey",
  profiles: [
    {
      name: "LinkedIn",
      url: "https://linkedin.com/in/manmohansingh",
      description: "Professional network & career updates",
      color: "from-blue-600 to-blue-400",
      bgColor: "bg-blue-500/10 dark:bg-blue-500/20",
      iconColor: "text-blue-600 dark:text-blue-400",
      stats: "500+ Connections"
    },
    {
      name: "GitHub",
      url: "https://github.com/manmohansingh8422",
      description: "Open source contributions & projects",
      color: "from-slate-700 to-slate-500 dark:from-slate-300 dark:to-slate-400",
      bgColor: "bg-slate-500/10 dark:bg-slate-500/20",
      iconColor: "text-slate-700 dark:text-slate-300",
      stats: "50+ Repositories"
    },
    {
      name: "LeetCode",
      url: "https://leetcode.com/manmohansingh",
      description: "Coding challenges & problem solving",
      color: "from-orange-600 to-orange-400",
      bgColor: "bg-orange-500/10 dark:bg-orange-500/20",
      iconColor: "text-orange-600 dark:text-orange-400",
      stats: "500+ Problems Solved"
    },
    {
      name: "CodeChef",
      url: "https://codechef.com/users/manmohansingh",
      description: "Competitive programming contests",
      color: "from-amber-700 to-amber-500",
      bgColor: "bg-amber-500/10 dark:bg-amber-500/20",
      iconColor: "text-amber-600 dark:text-amber-400",
      stats: "3★ Rating"
    },
    {
      name: "HackerRank",
      url: "https://hackerrank.com/manmohansingh",
      description: "Skills verification & certifications",
      color: "from-green-600 to-green-400",
      bgColor: "bg-green-500/10 dark:bg-green-500/20",
      iconColor: "text-green-600 dark:text-green-400",
      stats: "Gold Badges"
    }
  ],
  footer: {
    active: "Active",
    contributions: "consistent contributions",
    description: "Solving problems daily and participating in coding contests"
  }
};

// Projects Section
export const PROJECTS_DATA = {
  title: "Featured Projects",
  subtitle: "A collection of projects showcasing my frontend development skills and problem-solving abilities",
  projects: [
    {
      title: "MyGate ERP Web Application",
      description: "Consumer-facing web application for MyGate's ERP system. Built with React and Redux for state management, featuring responsive design and seamless API integration.",
      tags: ["React", "Redux", "Material-UI", "REST API", "GraphQL", "SCSS"],
      github: "https://github.com",
      demo: "https://mygate.com",
      featured: true
    },
    {
      title: "Next.js Component Library",
      description: "Reusable component library built during BharatTech internship. Includes 50+ components with comprehensive documentation and TypeScript support.",
      tags: ["Next.js", "React", "TypeScript", "Storybook", "Tailwind CSS"],
      github: "https://github.com",
      demo: "https://example.com",
      featured: true
    },
    {
      title: "Responsive Portfolio Website",
      description: "Multi-page responsive website with interactive elements, forms, and navigation menus. Optimized for performance and cross-device compatibility.",
      tags: ["HTML", "CSS", "JavaScript", "Responsive Design"],
      github: "https://github.com",
      demo: "https://example.com",
      featured: false
    },
    {
      title: "Real-time Chat Application",
      description: "Full-stack chat application with real-time messaging using Socket.io. Features include user authentication, private messaging, and group chats.",
      tags: ["React", "Node.js", "Socket.io", "MongoDB", "Express"],
      github: "https://github.com",
      demo: "https://example.com",
      featured: true
    },
    {
      title: "E-commerce Dashboard",
      description: "Admin dashboard for e-commerce platform with analytics, inventory management, and order tracking. Built with modern UI/UX principles.",
      tags: ["React", "Material-UI", "Chart.js", "Redux Toolkit"],
      github: "https://github.com",
      demo: "https://example.com",
      featured: false
    },
    {
      title: "Task Management System",
      description: "Collaborative task management tool with drag-and-drop interface, deadline tracking, and team collaboration features.",
      tags: ["Next.js", "TypeScript", "Tailwind CSS", "PostgreSQL"],
      github: "https://github.com",
      demo: "https://example.com",
      featured: false
    }
  ]
};

// Contact Section
export const CONTACT_DATA = {
  title: "Get In Touch",
  subtitle: "Have a project in mind or want to collaborate? Feel free to reach out. I'm always open to discussing new opportunities and ideas.",
  contactInfo: {
    title: "Contact Information",
    email: {
      label: "Email",
      value: "manmohansingh8422@gmail.com",
      href: "mailto:manmohansingh8422@gmail.com"
    },
    phone: {
      label: "Phone",
      value: "+91 8433376122",
      href: "tel:+918433376122"
    },
    location: {
      label: "Location",
      value: "Rae Bareli, Uttar Pradesh"
    }
  },
  callToAction: "🚀 Currently working at MyGate and open to freelance opportunities. Let's create something amazing together!",
  form: {
    fields: {
      name: {
        label: "Name",
        placeholder: "Your name"
      },
      email: {
        label: "Email",
        placeholder: "your.email@example.com"
      },
      message: {
        label: "Message",
        placeholder: "Tell me about your project..."
      }
    },
    button: {
      default: "Send Message",
      success: "Message Sent!"
    }
  },
  footer: {
    copyright: "© 2025 Man Mohan Singh. Built with React, Motion & Tailwind CSS",
    tagline: "Made with 💙 for the web development community"
  }
};