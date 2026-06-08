import { PortfolioData } from '@/lib/types';

export const portfolioData: PortfolioData = {
  personalInfo: {
    name: "Amanuel Ayalew",
    title: "Software Engineer & ML Enthusiast",
    location: "Addis Ababa, Ethiopia",
    email: "amanuelayalew983@gmail.com",
    phone: "+251983742880",
    linkedin: "https://www.linkedin.com/in/amanuel-ayalew/",
    github: "https://github.com/Amanuel-Ayal3w",
    summary: "Software Engineer with a strong interest in machine learning. Passionate about exploring AI technologies and always eager to learn more. Hardworking and dedicated to applying my skills to real-world problems."
  },

  experience: [
    {
      id: "icog-labs",
      company: "iCog Labs",
      position: "Machine Learning Engineer Intern",
      duration: "July 2024 - March 2026",
      description: [
        "Working on machine learning projects and AI research initiatives",
        "Developing and implementing ML models for real-world applications",
        "Collaborating with research team on cutting-edge AI technologies"
      ],
      technologies: ["Python", "PyTorch", "Machine Learning", "AI Research"]
    },
    {
      id: "alet-systems",
      company: "Alet Systems",
      position: "Software Engineer",
      duration: "April 2024 - December 2024",
      description: [
        "Fixed and tested backend systems to ensure optimal performance",
        "Worked on the company's Android app, adding new functionalities and ensuring smooth operation",
        "Gained experience in full-stack development and mobile application maintenance"
      ],
      technologies: ["Backend Development", "Android", "Full-stack Development", "Mobile Apps"]
    },
    {
      id: "dm-trading",
      company: "D&M Trading",
      position: "Intern Software Engineer",
      duration: "June 2022 - August 2022",
      description: [
        "Assisted in developing and maintaining the company's website and internal tools using Python",
        "Built internal tools for data visualization and reporting",
        "Developed custom WordPress themes to improve functionality and user experience"
      ],
      technologies: ["Python", "WordPress", "Data Visualization", "Web Development"]
    }
  ],

  projects: [
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
      items: ["Python", "TypeScript"]
    },
    {
      category: "Machine Learning & Data",
      items: ["PyTorch", "scikit-learn", "pandas", "NumPy"]
    },
    {
      category: "Backend & Data Engineering",
      items: ["REST APIs", "PostgreSQL", "SQL", "Airflow"]
    },
    {
      category: "Tools & Technologies",
      items: ["Git", "Linux", "Node.js"]
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
    institution: "Addis Ababa University",
    duration: "2021 - 2026"
  }
};