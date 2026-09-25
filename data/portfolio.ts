import { PortfolioData } from '@/lib/types';

export const portfolioData: PortfolioData = {
  personalInfo: {
    name: "Amanuel Ayalew",
    title: "Software Engineer",
    location: "Addis Ababa, Ethiopia",
    email: "amanuel.ayalew.et@gmail.com",
    phone: "+251 983 742 880",
    linkedin: "https://www.linkedin.com/in/amanuel-ayalew/",
    github: "https://github.com/Amanuel-Ayal3w",
    telegram: "https://t.me/ammanuel_ayalew",
    summary: "Software Engineer with experience in backend systems and growing expertise in Machine Learning, with a focus on research-driven development. I build and improve scalable applications, and I'm skilled in experimentation, performance analysis, and exploring new approaches to model design. Passionate about applying machine learning systems to solve real-world, data-driven problems."
  },

  experience: [
    {
      id: "exploree-solutions",
      company: "Exploree Solutions",
      position: "Software Engineer (Part-time)",
      duration: "July 2026 - Present",
      description: [
        "Developed job matching algorithms and integrated AI/ML capabilities into existing systems, focusing on intelligent matching, data processing, and automation"
      ],
      technologies: ["Go", "FastAPI", "Python", "Machine Learning"]
    },
    {
      id: "gheero",
      company: "gheero",
      position: "AI / ML Resident",
      duration: "August 2026 - September 2026",
      description: [
        "Worked on dynamic pricing models that adjusted prices based on demand and market conditions",
        "Applied reinforcement learning for Amharic tokenization"
      ],
      technologies: ["Python", "Reinforcement Learning", "Machine Learning"]
    },
    {
      id: "icog-labs",
      company: "iCog Labs",
      position: "Machine Learning Engineer Intern",
      duration: "July 2025 - March 2026",
      description: [
        "Conducted research on predictive coding–based transformer architectures as biologically inspired alternatives to backpropagation",
        "Worked on a tag recommendation model for the Mindplex platform, improving recommendation accuracy by 30% through evaluation of learning efficiency and model behavior",
        "Experimented with Quantum Variational Circuits (QVC), reducing model parameter count by 80% while maintaining performance"
      ],
      technologies: ["Python", "PyTorch", "TensorFlow", "Machine Learning"]
    },
    {
      id: "alet-systems",
      company: "Alet Systems",
      position: "Software Engineer",
      duration: "May 2024 - December 2024",
      description: [
        "Tested and validated backend APIs to ensure system reliability and performance",
        "Debugged and resolved production-level issues in backend systems, cutting response/resolution time by 40%",
        "Supported full-stack and mobile application maintenance, including identifying and resolving issues and validating features"
      ],
      technologies: ["TypeScript", "Next.js"]
    }
  ],

  projects: [
    {
      id: "awaqi",
      title: "Awaqi — Bilingual AI Tax Assistant",
      description: "A bilingual (Amharic & English) AI support assistant for the Ethiopian Revenue Authority that answers taxpayer questions with grounded, cited answers pulled from official tax proclamations and directives.",
      technologies: ["Python", "RAG", "pgvector", "PostgreSQL", "Gemini", "Telegram Bot API"],
      githubUrl: "https://github.com/Amanuel-Ayal3w/Awaqi",
      images: [
        "/images/Awaqi1.png",
        "/images/Awaqi2.png",
        "/images/Awaqi3.png",
        "/images/Awqi4.png",
        "/images/Awaqi5.png",
        "/images/Awaqi6.png",
        "/images/Awqai7.png",
        "/images/Awaqi8.png",
        "/images/Awaqi9.png",
        "/images/Awaqi10.png"
      ],
      achievements: [
        "Hybrid RAG pipeline combining dense vector search (pgvector embeddings) with keyword full-text search, fusing results via Reciprocal Rank Fusion (RRF) to keep answers grounded instead of hallucinated",
        "Every response carries source citations and a confidence score, traced back to the originating proclamation or directive",
        "Agentic \"Awaqi Max\" mode — a ReAct agent built on Gemini function calling that reasons across multiple tools, querying both the internal knowledge base and live Ethiopian web search for harder, multi-step questions",
        "Automated ingestion pipeline handling PDF/HTML extraction, OCR, chunking, and embedding, kept current via scheduled scrapers and admin document uploads",
        "Multi-channel delivery over a web chat interface and a Telegram bot, plus an admin dashboard for managing documents and notifications",
        "Evaluation framework that benchmarks answer quality across the knowledge base"
      ]
    },
    {
      id: "gpt-transformer",
      title: "GPT-Style Conversational AI",
      description: "A decoder-only transformer (GPT-style) built from scratch in PyTorch, trained on 3,690+ question–answer pairs to generate ChatGPT-like responses. Includes a custom tokenizer, dataset pipeline, training loop, and an interactive chat interface — runs locally on 8GB RAM.",
      technologies: ["Python", "PyTorch"],
      githubUrl: "https://github.com/Amanuel-Ayal3w/pytorch-Transformer-implementataion-"
    },
    {
      id: "quantum-vqc",
      title: "Quantum Heart-Disease Classifier (VQC)",
      description: "A variational quantum classifier for binary heart-disease prediction on the UCI Cleveland dataset. Uses 4-qubit angle encoding and a 3-layer variational ansatz with CNOT entanglers, integrating the quantum circuit into PyTorch via PennyLane's TorchLayer.",
      technologies: ["Python", "PennyLane", "PyTorch"],
      githubUrl: "https://github.com/Amanuel-Ayal3w/Quantum_ML_iCog"
    },
    {
      id: "mobilevit",
      title: "MobileViT Benchmarking",
      description: "Implementation and benchmarking of the MobileViT family (XXS/XS/S) — hybrid CNN + vision-transformer models for efficient image classification — against a ResNet-50 baseline, measuring parameters, FLOPs, latency, and throughput.",
      technologies: ["Python", "PyTorch"],
      githubUrl: "https://github.com/Amanuel-Ayal3w/mobile_ViT"
    },
    {
      id: "predictive-coding",
      title: "Predictive Coding Network",
      description: "An implementation of predictive coding networks — a biologically inspired alternative to backpropagation — trained on MNIST, with visualizations of prediction errors and training curves. Built with NGC-Learn.",
      technologies: ["Python", "NGC-Learn"],
      githubUrl: "https://github.com/Amanuel-Ayal3w/Predictive-coding-"
    },
    {
      id: "etb-usd",
      title: "ETB/USD Exchange Rate Prediction",
      description: "A linear regression model that predicts the Ethiopian Birr to US Dollar exchange rate from historical data, developed and visualized in a Jupyter notebook.",
      technologies: ["Python", "Jupyter", "scikit-learn"],
      githubUrl: "https://github.com/Amanuel-Ayal3w/Predicting_Ethiopian_Birr_to_USD_Exchange_Rate_using_Linear_Regression-"
    }
  ],

  skills: [
    {
      category: "Programming",
      items: ["Python", "TypeScript", "JavaScript", "Go"]
    },
    {
      category: "Machine Learning & Data",
      items: ["PyTorch", "scikit-learn", "pandas", "NumPy"]
    },
    {
      category: "Backend & Data Engineering",
      items: ["REST APIs", "FastAPI", "Node.js", "Express.js", "PostgreSQL", "SQL", "Airflow", "GraphQL"]
    },
    {
      category: "Frontend",
      items: ["Next.js"]
    },
    {
      category: "Tools & Technologies",
      items: ["Git", "Linux"]
    }
  ],

  certifications: [
    {
      title: "Machine Learning",
      issuer: "AAiT",
      date: "2023",
      type: "certification"
    },
    {
      title: "Supervised Machine Learning: Regression and Classification",
      issuer: "DeepLearning.AI",
      date: "2023",
      type: "certification"
    },
    {
      title: "Finalist - A2SV Generative AI for Africa Hackathon",
      issuer: "A2SV",
      date: "2023",
      type: "award"
    },
    {
      title: "Finalist - Reboot the Earth Hackathon",
      issuer: "Reboot the Earth",
      date: "2024",
      type: "award"
    }
  ],

  education: {
    degree: "Bachelor of Science in Software Engineering",
    institution: "Addis Ababa University (AAiT)",
    duration: "2021 - 2026"
  }
};