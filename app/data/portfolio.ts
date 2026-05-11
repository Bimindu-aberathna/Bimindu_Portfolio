export type Project = {
  title: string;
  description: string;
  stack: string[];
  repoUrl?: string;
  liveUrl?: string;
};

export type Experience = {
  role: string;
  company: string;
  period: string;
  summary: string;
};

export const portfolioData = {
  name: "Bimindu Aberathna",
  firstName: "Bimindu",
  lastName: "Aberathna",
  role: "Full-Stack Developer",
  location: "Colombo, Sri Lanka",
  headline:
    "I build reliable web apps with user-friendly interfaces, and robust backend systems.",
  shortBio:
    "I focus on creating clean user experiences, scalable frontend architecture, and practical backend integrations.",
  email: "aberathnabimindu@gmail.com",
  github: "https://github.com/Bimindu-aberathna",
  linkedin: "https://www.linkedin.com/in/bimindu-aberathna/",
  whatsapp_no: "https://wa.me/94778910364",
  phone: "+94 77 891 0364",
  skills: [
    "React.js",
    "Tailwind",
    "HTML",
    "Next.js",
    "CSS",
    "Git",
    "GitHub",
    "Node.js",
    "Express.js",
    "RESTful API Development",
    "Fast API",
    "Laravel",
    "JavaScript",
    "TypeScript",
    "Java",
    "Python",
    "PHP",
    "MySQL",
    "Firebase",
    "Database Design",
    "Object-Oriented Programming",
    "Data Structures & Algorithms",
    "API Integration",
    "Software Architecture",
    "Software Design Patterns",
    "Basic Deployment & Hosting",
  ],
  projects: [
    {
      title: "LLM-based Student Q&A Chatbot with Ontology-Based Rules and Meta-Data Filtering - Research",
      description:
        "A chatbot system designed to answer student questions using Large Language Models (LLMs), enhanced by an ontology-driven knowledge base and meta-data-driven rules. The project integrates traditional natural language processing with semantic web technologies to provide accurate, context-aware responses to student queries, filtering information based on educational metadata and domain-specific rules.",
      stack: ["Python","HTML","NLP","FastAPI","ChromaDB","LLM","RAG"],
      repoUrl: "https://github.com/Bimindu-aberathna/LLM-based-stident-Q-A-chatbot-with-ontology-based-rules-and-meta-data-filtering.git",
    },
    {
      title: "Ecommerce Electronic Store",
      description:
        "This comprehensive Ecommerce Full Stack Application is a robust online shopping platform built for modern web experiences. It features a dynamic user interface, secure authentication, product catalog management, responsive design, and seamless integration between front-end and back-end components. Designed with scalability and maintainability in mind, this project highlights code modularity, effective state management, and real-world business logic. It demonstrates best practices in TypeScript development, as well as clean, accessible UI/UX with HTML and CSS. The project is a great showcase of building a full-scale web application from scratch with a focus on both technical depth and user-centric design.",
      stack: ["Next.js", "Tailwind CSS", "Node.js", "Express.js", "MySQL", "Firebase", "TypeScript", "JWT Authentication", "Stripe"],
      repoUrl: "https://github.com/Bimindu-aberathna/Ecommerce_full-stack_app.git",
    },
  ] as Project[],
  experience: [
    {
      role: "Full-Stack Software Engineer Intern",
      company: "Apple Holidays Destination Services",
      period: "09/2024 - 03/2025",
      summary:
        "As a Full Stack Intern, I gained hands-on experience across the development lifecycle—building interactive and user-friendly web interfaces with React.js and Next.js, implementing RESTful APIs and managing databases using Laravel for backend logic, and working on DevOps tasks such as server management, application hosting, and deployment optimization to ensure smooth and efficient delivery of applications.",
    },
    {
      role: "Undergraduate Researcher",
      company: "University of Kelaniya - Department of Industrial Management",
      period: "03/2025 - 01/2026",
      summary:
        " I designed an LLM-based student Q&A system leveraging ontology-driven metadata filtering, developed a Retrieval-Augmented Generation (RAG) architecture with hierarchical ranking and embedding strategies, and published my research findings at an IEEE conference.",
    },
  ] as Experience[],
};