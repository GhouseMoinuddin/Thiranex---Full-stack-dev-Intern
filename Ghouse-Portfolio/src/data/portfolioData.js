export const personalData = {
  name: "Mohammed Ghouse Moinuddin",
  role: "Software Engineer & Data Analyst",
  tagline: "scalable full-stack applications, decentralized systems, and AI-driven platforms with high performance and clean code.",
  location: "Hyderabad, Telangana, India (500028)",
  email: "ghousemoinuddin118@gmail.com",
  phone: "+91 9032018682",
  phoneFormatted: "+91 90320 18682",
  github: "https://github.com/GhouseMoinuddin",
  linkedin: "https://www.linkedin.com/in/mohammed-ghouse-moinuddin-5a46b8331/",
  leetcode: "https://leetcode.com/u/ghousemoinuddin24/",
  leetcodeQuestions: "60+",
  avatar: "/Profile2.jpeg",
  resumeUrl: "/Mohammed_Ghouse_Moinuddin_Resume_.pdf",
  status: "Open to opportunities",
  summary:
    "Organized and motivated software engineer with proven experience in technical leadership, full-stack development, and AI engineering. Proven track record in designing resilient software architecture, leading code quality, and building performant applications across the MERN stack, Python/FastAPI, machine learning, and blockchain ecosystems."
};

export const stats = [
  { label: "Role Experience", value: "Tech Lead", detail: "HIVE" },
  { label: "LeetCode Solved", value: "60+", detail: "Algorithms & DSA", url: "https://leetcode.com/u/ghousemoinuddin24/" },
  { label: "Flagship Projects", value: "2+", detail: "Full Stack & GenAI" },
  { label: "Certifications", value: "4+", detail: "Qualcomm, Apna College, Amazon, Udemy" },
  { label: "Hackathon Wins", value: "2", detail: "HackAttack & Tejas-2026" },
];

export const experience = [
  {
    role: "Software Engineer Intern",
    company: "Cognifyz Technologies",
    location: "Hyderabad, India",
    period: "Jul 2025 - Aug 2025",
    tenure: "2 Months",
    impact: "Software Development",
    type: "Engineering & Development",
    description:
      "Spearheaded technical direction and architecture for AI-driven products, ensuring high reliability, scalability, and code excellence.",
    highlights: [
      "Designed and implemented modular software architecture, significantly enhancing system scalability and maintainability.",
      "Conducted rigorous code reviews, ensuring standard compliance, security, and high engineering velocity across developers.",
      "Mentored junior engineers and interns, fostering best practices in modern JavaScript, React, and backend API engineering."
    ],
    skills: ["Software Development", "Code Review", "Team Mentorship", "System Design", "Scalability", "Full-Stack"]
  },

  {
    role: "Project Analyst Intern",
    company: "Anurag University",
    location: "Hyderabad",
    period: "Sep 2025 - Oct 2025",
    tenure: "1 Month (Part-time)",
    impact: "AI & IoT Analysis",
    type: "Project Analysis",
    description:
      "Analyzing of EEE + AI Projects like Smart Traffic Management & Smart Home Automation",
    highlights: [
      "Analyzing the working of Smart Traffic Management and Smart Home Automation",
      "Studied the working of various AI tools like Google Gemini Pro, ChatGPT",
      "Prepared reports, dashboards, and presentations to communicate project status and key insights."
    ],
    skills: ["AI Analysis", "Smart Traffic Systems", "Home Automation", "Google Gemini", "ChatGPT", "Technical Reporting"]
  }
];

export const education = {
  degree: "B.Tech: Electrical and Electronics Engineering",
  institution: "Anurag University",
  location: "Hyderabad, Telangana, India",
  graduation: "Expected Jun 2027",
  coursework: [
    "Data Structures & Algorithms",
    "Operating Systems",
    "Object-Oriented Programming",
    "Database Management & SQL",
    "Machine Learning",
    "Software Engineering"
  ]
};

export const awards = [
  {
    title: "4th Place — Tejas-2026",
    organization: "Anurag University",
    type: "National-Level Competition",
    description: "Awarded for exceptional product Development, architectural feasibility, and innovative technology problem solving."
  },
  {
    title: "Top 25 teams — HackAttack Hackathon",
    organization: "Anurag University",
    type: "24-Hour Hackathon",
    description: "Built an innovative working prototype under tight deadlines with live product demo and architectural defense."
  }
];

export const projects = [
  {
    id: "Meetora - AI based video conferencing website",
    title: "Meetora",
    subtitle: "AI-Powered Real-Time Video Conferencing Platform",
    status: "Completed",
    statusColor: "emerald",
    category: "WebRTC & MERN Stack",
    featured: true,
    github: "https://github.com/GhouseMoinuddin/Meetora.git",
    summary:
      "Meetora is an AI-powered video conferencing platform that enables seamless virtual meetings with real-time communication and collaboration.",
    description:
      "Meetora is a real-time peer-to-peer video conferencing platform built using WebRTC and Socket.io. It enables real-time video and audio communication between multiple users with WebRTC signalling, ICE connectivity, DTLS/SRTP encryption, RTP/SCTP communication, and concurrent session management with evaluated P2P, SFU, and MCU architecture trade-offs.",
    highlights: [
      "Real-time video and audio communication between multiple users powered by WebRTC & Socket.io.",
      "Implemented WebRTC signalling, ICE connectivity, DTLS/SRTP encryption, and RTP/SCTP communication.",
      "Designed concurrent session management through a Socket.io-based signalling layer.",
      "Evaluated P2P, SFU, and MCU architectures to understand scalability and infrastructure trade-offs."
    ],
    technologies: ["React", "Node.js", "Express", "MongoDB", "WebRTC", "Socket.io", "Tailwind CSS"],
  },
  {
    id: "AI-Based Grass Cutting System",
    title: "Grass Cutting System",
    subtitle: "Autonomous AI Robot with Computer Vision & Real-Time MERN Dashboard",
    status: "Completed",
    statusColor: "cyan",
    category: "AI, Robotics & Full Stack",
    featured: true,
    github: "https://github.com/GhouseMoinuddin/AI-Based-Grass-Cutter.git",
    summary:
      "An AI-powered autonomous grass-cutting robot using Computer Vision, obstacle detection, and path planning, integrated with a MERN + WebSocket real-time dashboard for remote monitoring.",
    description:
      "Developed an AI-powered autonomous grass-cutting robot using Computer Vision, autonomous navigation, obstacle detection, and path planning, integrated with a MERN + WebSocket real-time dashboard for remote monitoring and control, achieving 70%+ detection accuracy and reducing manual operation effort by approximately 50%.",
    highlights: [
      "Developed an AI-powered autonomous grass-cutting robot using Computer Vision.",
      "Implemented intelligent obstacle detection and path planning for outdoor navigation.",
      "Built a real-time dashboard for monitoring and remotely controlling the mower."
    ],
    technologies: ["TypeScript", "Node.js", "Express.js", "ChatGPT", "OpenCV", "RESTful APIs", "Tailwind CSS"],
  }
];

export const skillCategories = [
  {
    category: "Languages & Core",
    icon: "Code",
    items: [
      { name: "Python", level: "Advanced" },
      { name: "JavaScript (ES6+)", level: "Advanced" },
      { name: "Java", level: "Advanced" },
      { name: "C & C++", level: "Proficient" },
      { name: "SQL", level: "Advanced" },
      { name: "Bash Scripting", level: "Proficient" },
      { name: "OOP & DSA", level: "Advanced" },
      { name: "LeetCode (60+ Solved)", level: "Active" },
    ]
  },
  {
    category: "Frontend & UI",
    icon: "Layout",
    items: [
      { name: "React", level: "Advanced" },
      { name: "Next.js", level: "Basic" },
      { name: "TypeScript", level: "Advanced" },
      { name: "Tailwind CSS", level: "Advanced" },
      { name: "HTML5 & CSS3", level: "Expert" },
      { name: "Responsive UI/UX", level: "Advanced" },
      { name: "Component Architecture", level: "Advanced" },
    ]
  },
  {
    category: "Backend & Systems",
    icon: "Server",
    items: [
      { name: "FastAPI", level: "Proficient" },
      { name: "Node.js & Express", level: "Proficient" },
      { name: "MongoDB", level: "Proficient" },
      { name: "RESTful APIs", level: "Advanced" },
      { name: "Software Architecture", level: "Advanced" },
      { name: "SQL Optimization", level: "Proficient" },
    ]
  },
  {
    category: "AI, Web3 & Tools",
    icon: "Cpu",
    items: [
      { name: "Machine Learning", level: "Certified" },
      { name: "Generative AI (Gemini, OpenAI)", level: "Advanced" },
      { name: "Blockchain (DApp)", level: "Begineer" },
      { name: "Git & GitHub", level: "Advanced" },
      { name: "Linux / Shell", level: "Proficient" },
    ]
  }
];

export const certifications = [
  {
    title: "Full stack web development",
    issuer: "Apna College",
    badge: "Apna College",
    type: "Professional Certification",
    description: "Completed a Full Stack Web Development course covering frontend development, backend development, databases, REST APIs, authentication, and deployment, with hands-on experience building responsive and scalable web applications."
  },
  {
    title: "AI Engineer Core Track: LLM Engineering, RAG, QLoRA, Agents",
    issuer: "Udemy",
    badge: "Udemy",
    type: "Professional Certification",
    description: "LLM-powered applications, RAG, QLoRA fine-tuning, LangChain, and production deployment strategies. (29.5 hours)"
  },
  {
    title: "100 Days of Code: The Complete Data Science Bootcamp",
    issuer: "Udemy",
    badge: "Udemy",
    type: "Professional Certification",
    description: "a 100-day Data Science Bootcamp covering Python, data analysis, visualization, statistics, machine learning, and practical data science projects through hands-on learning."
  },
  {
    title: "AI Upskilling Certificate",
    issuer: "Qualcomm academy",
    badge: "Qualcomm academy",
    type: "Professional Certification",
    description: "Completed the AI Upskilling Certificate, gaining comprehensive knowledge of AI fundamentals, computer vision, data ethics, and cognitive computing concepts through practical projects and real-world applications."
  },
  {
    title: "Gen-AI mastermind Certification",
    issuer: "Outskill",
    badge: "Outskill",
    type: "Professional Certification",
    description: "Gained hands-on expertise in building production-grade Generative AI applications. Developed proficiency in prompt engineering, RAG, fine-tuning, and deploying AI agents using advanced techniques."
  },
  {
    title: "AI for Business Professional Certification",
    issuer: "hp",
    badge: "hp",
    type: "Professional Certification",
    description: "This certification provides a solid foundation in Artificial Intelligence concepts, principles, and applications, enabling professionals to understand and leverage AI to solve business challenges and drive innovation."
  }
];
