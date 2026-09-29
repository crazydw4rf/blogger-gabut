export interface SocialLink {
  name: string;
  url: string;
  icon: "github" | "linkedin" | "discord" | "instagram" | "youtube" | "telegram" | "email";
}

export interface SkillCategory {
  title: string;
  iconName: "server" | "shield" | "network" | "cpu" | "code";
  description?: string;
  skills: {
    name: string;
    level?: "Beginner" | "Intermediate" | "Advanced" | "Expert";
    icon?: string;
  }[];
}

export interface Experience {
  id: string;
  role: string;
  company: string;
  companyUrl?: string;
  location?: string;
  period: string;
  type?: "Full-Time" | "Part-Time" | "Contract" | "Open Source" | "Community" | "Education";
  description: string;
  highlights?: string[];
  tags: string[];
}

export interface Project {
  id: string;
  title: string;
  description: string;
  role?: string;
  tags: string[];
  stars?: number;
  githubUrl?: string;
  liveUrl?: string;
  featured?: boolean;
  category?: "Backend & APIs" | "SysAdmin & Linux" | "DevOps & Cloud" | "Web & Tools";
}

export interface Achievement {
  id: string;
  title: string;
  issuer: string;
  date: string;
  description: string;
  credentialUrl?: string;
  badge?: string;
}

export interface PortfolioData {
  personalInfo: {
    name: string;
    nickname: string;
    role: string;
    tagline: string;
    bio: string;
    funFact?: string;
    avatarUrl: string;
    location: string;
    status: {
      available: boolean;
      text: string;
    };
    resumeUrl?: string;
  };
  socialLinks: SocialLink[];
  stats: {
    label: string;
    value: string;
    description: string;
  }[];
  skills: SkillCategory[];
  experiences: Experience[];
  projects: Project[];
  achievements: Achievement[];
  contact: {
    heading: string;
    description: string;
    email: string;
    telegramUsername: string;
    discordUsername: string;
    githubUsername: string;
    linkedinUrl: string;
    instagramUrl: string;
  };
}

/**
 * =====================================================================
 * PORTFOLIO DATA (ACCURATE TO GITHUB PROFILE README)
 * =====================================================================
 */
export const portfolioData: PortfolioData = {
  personalInfo: {
    name: "Binar Nugroho",
    nickname: "crazydw4rf",
    role: "Backend Developer & SysAdmin",
    tagline: "CS Student @ Amikom Purwokerto • Linux & Open Source Enthusiast • Yes, I use Arch btw 🐧",
    bio: "Computer Science student at Amikom Purwokerto University passionate about backend development, Linux server systems, and self-hosted environments. Currently learning and building with Go, TypeScript, Docker, and Rust. Creator of Blogger Gabut, sharing technical notes and SysAdmin documentation.",
    funFact: "I love cats (>^◡^<), Linux enthusiast 🐧 — and yes, I use Arch, btw.",
    avatarUrl: "/img/avatar.png",
    location: "Cilacap, Central Java, Indonesia",
    status: {
      available: true,
      text: "Open for collaboration & backend/infrastructure projects",
    },
    resumeUrl: "#",
  },

  socialLinks: [
    {
      name: "GitHub",
      url: "https://github.com/crazydw4rf",
      icon: "github",
    },
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/binar-nugroho",
      icon: "linkedin",
    },
    {
      name: "Discord",
      url: "https://discord.com/users/crazydw4rf",
      icon: "discord",
    },
    {
      name: "Instagram",
      url: "http://www.instagram.com/binar_nugroho_",
      icon: "instagram",
    },
    {
      name: "YouTube",
      url: "https://www.youtube.com/@crazydw4rf",
      icon: "youtube",
    },
    {
      name: "Telegram",
      url: "https://t.me/yuki2048",
      icon: "telegram",
    },
    {
      name: "Email",
      url: "mailto:binarnugroho775@gmail.com",
      icon: "email",
    },
  ],

  stats: [
    {
      label: "Amikom Purwokerto",
      value: "CS",
      description: "Computer Science student & backend explorer",
    },
    {
      label: "Linux & SysAdmin",
      value: "4+ Yrs",
      description: "Hands-on Linux servers, homelabs & networks",
    },
    {
      label: "Documentation",
      value: "20+ Guides",
      description: "System administration & infrastructure setups",
    },
    {
      label: "Open Source",
      value: "10+ Repos",
      description: "Backend projects, configs & dotfiles",
    },
  ],

  skills: [
    {
      title: "Backend Development",
      iconName: "code",
      description: "Building scalable server applications, APIs, and microservices.",
      skills: [
        { name: "Go (Golang)", level: "Advanced" },
        { name: "TypeScript & Node.js", level: "Advanced" },
        { name: "NestJS Framework", level: "Intermediate" },
        { name: "PostgreSQL & Databases", level: "Advanced" },
        { name: "REST APIs & Architecture", level: "Advanced" },
        { name: "Rust", level: "Beginner" },
      ],
    },
    {
      title: "Linux & Operating Systems",
      iconName: "server",
      description: "Deep affinity for Linux environments, kernel internals, and server lifecycle.",
      skills: [
        { name: "Arch Linux & Debian", level: "Expert" },
        { name: "Bash & Shell Scripting", level: "Advanced" },
        { name: "Systemd Service Units", level: "Advanced" },
        { name: "System Optimization", level: "Advanced" },
        { name: "Storage & File Systems", level: "Intermediate" },
      ],
    },
    {
      title: "DevOps & Cloud",
      iconName: "network",
      description: "Containerization, cloud infrastructure, and continuous integration.",
      skills: [
        { name: "Docker & Containerization", level: "Advanced" },
        { name: "AWS Cloud Services", level: "Intermediate" },
        { name: "Reverse Proxies & Traffic Routing", level: "Advanced" },
        { name: "Perimeter Security & Firewalls", level: "Advanced" },
        { name: "CI/CD & GitHub Actions", level: "Advanced" },
      ],
    },
    {
      title: "Environment & Tooling",
      iconName: "cpu",
      description: "Productivity workflows, modern editor tooling, and developer environments.",
      skills: [
        { name: "Neovim & Lua Configs", level: "Advanced" },
        { name: "Git & Version Control", level: "Expert" },
        { name: "VS Code", level: "Advanced" },
        { name: "Docusaurus & Technical Writing", level: "Expert" },
      ],
    },
  ],

  experiences: [
    {
      id: "exp-1",
      role: "Computer Science Student & Backend Explorer",
      company: "Amikom Purwokerto University",
      location: "Central Java, Indonesia",
      period: "2023 - Present",
      type: "Education",
      description:
        "Pursuing Bachelor's in Computer Science. Focusing on backend architecture, software engineering principles, distributed systems, and modern programming languages.",
      highlights: [
        "Developing backend applications using Go, TypeScript, and Docker containerization.",
        "Exploring database management with PostgreSQL and API design patterns.",
        "Actively participating in open-source projects and developer communities.",
      ],
      tags: ["Go", "TypeScript", "Docker", "PostgreSQL", "Software Engineering"],
    },
    {
      id: "exp-2",
      role: "SysAdmin & Infrastructure Lead",
      company: "Blogger Gabut",
      companyUrl: "https://blog.crazydw4rf.tech",
      location: "Remote",
      period: "2023 - Present",
      type: "Open Source",
      description:
        "Architecting and operating the Blogger Gabut technical publication portal, writing practical Linux server guides, and managing automated deployments.",
      highlights: [
        "Created an ultra-fast static documentation pipeline using Bun and GitHub Actions.",
        "Authored 20+ comprehensive guides for Linux server administrators and students.",
        "Maintained high uptime and zero-overhead deployments on GitHub Pages.",
      ],
      tags: ["SysAdmin", "Linux", "Bun", "Docusaurus", "DevOps"],
    },
    {
      id: "exp-3",
      role: "Self-Hosted Homelab Administrator",
      company: "Personal Infrastructure",
      location: "Cilacap, Indonesia",
      period: "2021 - Present",
      type: "Part-Time",
      description:
        "Maintaining private Linux servers, automated offsite backups, Dockerized containers, and secure encrypted tunneling.",
      highlights: [
        "Containerized services ensuring stable 24/7 uptime.",
        "Implemented encrypted mesh networking and automated TLS renewal.",
        "Automated recurring backups with multi-destination redundancy.",
      ],
      tags: ["Linux", "Docker", "Self-Hosting", "Security", "Networking"],
    },
  ],

  projects: [
    {
      id: "proj-1",
      title: "Blogger Gabut Documentation Platform",
      description:
        "A fast, modern technical documentation portal and SysAdmin blog powered by Docusaurus v3, Bun, and TypeScript. Contains in-depth tutorials on Linux server configuration.",
      tags: ["Docusaurus", "TypeScript", "Bun", "SysAdmin"],
      stars: 12,
      githubUrl: "https://github.com/crazydw4rf/blogger-gabut",
      liveUrl: "https://blog.crazydw4rf.tech",
      featured: true,
      category: "Web & Tools",
    },
    {
      id: "proj-2",
      title: "Backend Services & Microservices",
      description:
        "A suite of learning projects exploring Go, NestJS, and PostgreSQL. Demonstrating clean architecture, authentication, and database migrations.",
      tags: ["Go", "NestJS", "PostgreSQL", "Docker"],
      githubUrl: "https://github.com/crazydw4rf",
      featured: true,
      category: "Backend & APIs",
    },
    {
      id: "proj-3",
      title: "Linux Server Automation Suite",
      description:
        "Automated scripts and configuration templates to provision and harden production Linux servers with optimal security defaults.",
      tags: ["Linux", "Bash", "Automation", "SysAdmin"],
      stars: 8,
      githubUrl: "https://github.com/crazydw4rf",
      featured: true,
      category: "SysAdmin & Linux",
    },
    {
      id: "proj-4",
      title: "Containerized Homelab Stack",
      description:
        "Production-ready Docker Compose definitions incorporating reverse proxies, monitoring metrics, and secure remote gateways.",
      tags: ["Docker", "Linux", "DevOps", "Self-Hosting"],
      githubUrl: "https://github.com/crazydw4rf",
      featured: false,
      category: "DevOps & Cloud",
    },
  ],

  achievements: [
    {
      id: "ach-1",
      title: "IT Network Systems Administration",
      issuer: "Vocational Skills Competition",
      date: "2023",
      description:
        "Demonstrated advanced proficiency in enterprise Linux services, security policies, and network routing.",
      badge: "Finalist",
    },
    {
      id: "ach-2",
      title: "Linux Server Infrastructure Mastery",
      issuer: "Hands-on Practical Labs",
      date: "2024",
      description:
        "Constructed multi-node server simulation environments covering high availability, network filtering, and directory services.",
      badge: "Lab Architect",
    },
    {
      id: "ach-3",
      title: "Open Source Documentation Contributor",
      issuer: "Tech Community",
      date: "2025",
      description:
        "Authored step-by-step guides helping students and junior administrators master Linux system administration.",
      badge: "Contributor",
    },
  ],

  contact: {
    heading: "Let's Connect & Collaborate",
    description:
      "Whether you want to discuss backend development in Go/TypeScript, collaborate on open-source, or talk Linux server administration, feel free to reach out!",
    email: "binarnugroho775@gmail.com",
    telegramUsername: "yuki2048",
    discordUsername: "crazydw4rf",
    githubUsername: "crazydw4rf",
    linkedinUrl: "https://www.linkedin.com/in/binar-nugroho",
    instagramUrl: "http://www.instagram.com/binar_nugroho_",
  },
};
