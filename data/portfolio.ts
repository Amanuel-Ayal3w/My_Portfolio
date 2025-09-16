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
      duration: "July 2024 - Present",
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
      id: "r-master",
      title: "R Master",
      description: "A2SV Hackathon project that automated the recruitment process using AI. This innovative solution streamlined hiring workflows and improved candidate matching efficiency.",
      technologies: ["AI", "Machine Learning", "Python", "Automation"],
      achievements: [
        "Finalist project for the 2023 A2SV Generative AI for Africa Hackathon",
        "Developed with team collaboration",
        "Automated recruitment process using AI"
      ]
    }
  ],

  skills: [
    {
      category: "Programming",
      items: ["Python", "JavaScript", "SQL"]
    },
    {
      category: "Frameworks",
      items: ["React", "Next.js", "PyTorch", "TensorFlow", "Express.js", "Node.js"]
    },
    {
      category: "Tools",
      items: ["Git", "PostgreSQL", "WordPress"]
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