export interface SocialLink {
  name: string;
  url: string;
  icon: "github" | "telegram" | "discord" | "email" | "linkedin" | "twitter" | "globe";
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
  type?: "Full-Time" | "Part-Time" | "Contract" | "Open Source" | "Community";
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
  category?: "SysAdmin & Linux" | "DevOps & Cloud" | "Web & Tools";
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
    discordServerUrl: string;
    githubUsername: string;
  };
}

/**
 * =====================================================================
 * PORTFOLIO DATA (EASY TO EDIT & EXPAND)
 * 
 * To add a new project, experience, or skill, simply add a new object
 * to the corresponding array below.
 * =====================================================================
 */
export const portfolioData: PortfolioData = {
  personalInfo: {
    name: "Binar Nugroho",
    nickname: "crazydw4rf",
    role: "SysAdmin & Linux Enthusiast",
    tagline: "Managing systems, architecting infrastructure, and self-hosting services.",
    bio: "Linux SysAdmin and open-source enthusiast focused on server administration, network infrastructure, and self-hosted environments. Passionate about system reliability, automation, and sharing practical documentation for the community.",
    // You can replace avatar.png inside static/img/avatar.png anytime
    avatarUrl: "/img/avatar.png",
    location: "Indonesia",
    status: {
      available: true,
      text: "Open for SysAdmin challenges & collaboration",
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
      name: "Telegram",
      url: "https://t.me/yuki2048",
      icon: "telegram",
    },
    {
      name: "Discord",
      url: "https://discord.gg/8JZ4JBYqeJ",
      icon: "discord",
    },
    {
      name: "Email",
      url: "mailto:binarnugroho775@gmail.com",
      icon: "email",
    },
  ],

  stats: [
    {
      label: "Years in Linux",
      value: "4+",
      description: "Hands-on server operations & system management",
    },
    {
      label: "Guides Published",
      value: "20+",
      description: "System administration & infrastructure setups",
    },
    {
      label: "Services Managed",
      value: "15+",
      description: "Network, storage, web, and directory systems",
    },
    {
      label: "Projects & Repos",
      value: "10+",
      description: "Open source repositories, lab topologies & scripts",
    },
  ],

  skills: [
    {
      title: "Linux & Server Systems",
      iconName: "server",
      description: "Operating system administration, package management, and system lifecycle.",
      skills: [
        { name: "Linux Administration", level: "Expert" },
        { name: "Server Architecture", level: "Advanced" },
        { name: "Shell Scripting", level: "Advanced" },
        { name: "Service Unit Management", level: "Advanced" },
        { name: "Storage & Volume Management", level: "Advanced" },
        { name: "System Optimization", level: "Intermediate" },
      ],
    },
    {
      title: "Network & Security",
      iconName: "network",
      description: "Network routing, perimeter firewalls, and secure communications.",
      skills: [
        { name: "Network Infrastructure", level: "Expert" },
        { name: "Firewall & Traffic Filtering", level: "Advanced" },
        { name: "Secure VPN Tunnels", level: "Advanced" },
        { name: "Certificate & Encryption Setup", level: "Advanced" },
        { name: "Intrusion Prevention & Hardening", level: "Advanced" },
        { name: "Subnetting & VLAN Routing", level: "Intermediate" },
      ],
    },
    {
      title: "Services & Virtualization",
      iconName: "shield",
      description: "Web proxies, directory services, and containerized workloads.",
      skills: [
        { name: "Web Server Infrastructure", level: "Expert" },
        { name: "Containerization", level: "Advanced" },
        { name: "Directory & Identity Services", level: "Advanced" },
        { name: "Virtualization & Hypervisors", level: "Intermediate" },
        { name: "High Availability & Failover", level: "Intermediate" },
        { name: "Backup & Recovery Planning", level: "Advanced" },
      ],
    },
    {
      title: "Tooling & DevOps",
      iconName: "code",
      description: "Modern developer workflow tools, version control, and automation.",
      skills: [
        { name: "Git & Version Control", level: "Advanced" },
        { name: "CI/CD & Automation", level: "Advanced" },
        { name: "Technical Documentation", level: "Expert" },
        { name: "Modern Web Toolchains", level: "Advanced" },
        { name: "Infrastructure Scripting", level: "Intermediate" },
      ],
    },
  ],

  experiences: [
    {
      id: "exp-1",
      role: "SysAdmin & Infrastructure Lead",
      company: "Blogger Gabut",
      companyUrl: "https://blog.crazydw4rf.tech",
      location: "Remote",
      period: "2023 - Present",
      type: "Open Source",
      description:
        "Managing server infrastructure, automated deployment pipelines, and publishing comprehensive system administration documentation.",
      highlights: [
        "Architected automated continuous deployment workflows ensuring fast, zero-downtime releases.",
        "Authored dozens of production-ready guides covering core system services and server hardening.",
        "Integrated fast offline search and visual architectural topology diagrams.",
      ],
      tags: ["SysAdmin", "Linux", "DevOps", "Infrastructure", "Automation"],
    },
    {
      id: "exp-2",
      role: "Network Systems Administrator & Lab Architect",
      company: "Technical Competition Lab",
      location: "Indonesia",
      period: "2022 - 2024",
      type: "Community",
      description:
        "Designed and maintained realistic multi-server lab topologies for vocational IT Network Systems administration.",
      highlights: [
        "Built resilient multi-server environments featuring primary and secondary failover services.",
        "Configured strict network perimeter security, traffic routing, and access control policies.",
        "Automated system health verification checks and testing scripts.",
      ],
      tags: ["Linux", "Networking", "Security", "Automation", "SysAdmin"],
    },
    {
      id: "exp-3",
      role: "Self-Hosted Infrastructure Administrator",
      company: "Personal Homelab",
      location: "Home Office",
      period: "2021 - Present",
      type: "Part-Time",
      description:
        "Operating an always-on private server infrastructure providing secure remote access, data backups, and containerized services.",
      highlights: [
        "Maintained high uptime across self-hosted containerized server environments.",
        "Configured automated SSL certificate renewal and encrypted remote tunneling.",
        "Implemented scheduled encrypted backup routines with multi-destination redundancy.",
      ],
      tags: ["Self-Hosting", "Containers", "Security", "Linux", "Backups"],
    },
  ],

  projects: [
    {
      id: "proj-1",
      title: "Blogger Gabut Documentation Platform",
      description:
        "Fast, modern technical documentation portal and SysAdmin blog. Built for high performance, structured guides, and accessible technical references.",
      tags: ["SysAdmin", "Documentation", "TypeScript", "Web"],
      stars: 12,
      githubUrl: "https://github.com/crazydw4rf/blogger-gabut",
      liveUrl: "https://blog.crazydw4rf.tech",
      featured: true,
      category: "Web & Tools",
    },
    {
      id: "proj-2",
      title: "Linux Server Automation Suite",
      description:
        "Modular shell scripts and configuration templates to provision and harden production Linux servers with optimal security defaults.",
      tags: ["Linux", "Automation", "Bash", "SysAdmin"],
      stars: 8,
      githubUrl: "https://github.com/crazydw4rf",
      featured: true,
      category: "SysAdmin & Linux",
    },
    {
      id: "proj-3",
      title: "Secure Network Gateway & Mesh",
      description:
        "High-performance encrypted network mesh architecture designed to interconnect remote homelab nodes and devices with zero-trust isolation.",
      tags: ["Networking", "Security", "VPN", "Linux"],
      githubUrl: "https://github.com/crazydw4rf",
      featured: true,
      category: "SysAdmin & Linux",
    },
    {
      id: "proj-4",
      title: "Containerized Homelab Stack",
      description:
        "Production-grade container architecture with automated reverse proxying, monitoring, performance metrics, and data synchronization.",
      tags: ["Containers", "DevOps", "SysAdmin", "Monitoring"],
      githubUrl: "https://github.com/crazydw4rf",
      featured: false,
      category: "DevOps & Cloud",
    },
  ],

  achievements: [
    {
      id: "ach-1",
      title: "IT Network Systems Administration",
      issuer: "Technical Competition",
      date: "2023",
      description:
        "Demonstrated advanced proficiency in enterprise Linux services, security policies, and network routing under strict timeframes.",
      badge: "Finalist",
    },
    {
      id: "ach-2",
      title: "Linux Server Infrastructure Mastery",
      issuer: "Hands-on Practical Labs",
      date: "2024",
      description:
        "Completed comprehensive multi-node infrastructure setups covering high availability, network filtering, and directory services.",
      badge: "Lab Architect",
    },
    {
      id: "ach-3",
      title: "Open Source Documentation Contributor",
      issuer: "Tech Community",
      date: "2025",
      description:
        "Authored step-by-step technical guides helping students and junior administrators master Linux system administration.",
      badge: "Contributor",
    },
  ],

  contact: {
    heading: "Let's Connect & Collaborate",
    description:
      "Interested in Linux systems, infrastructure architecture, or open-source projects? Drop a message anytime!",
    email: "binarnugroho775@gmail.com",
    telegramUsername: "yuki2048",
    discordServerUrl: "https://discord.gg/8JZ4JBYqeJ",
    githubUsername: "crazydw4rf",
  },
};
