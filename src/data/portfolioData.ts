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
 * PORTFOLIO DATA
 * 
 * Easily edit this file to update your portfolio!
 * To add a new project, experience, or skill, simply append a new object
 * to the corresponding array below.
 * =====================================================================
 */
export const portfolioData: PortfolioData = {
  personalInfo: {
    name: "Binar Nugroho",
    nickname: "crazydw4rf",
    role: "Linux SysAdmin & Infrastructure Enthusiast",
    tagline: "Building reliable, scalable Linux environments and open-source infrastructure.",
    bio: "Passionate about Linux system administration, core networking services (DNS, Web, LDAP, Firewall), and self-hosted server architectures. Creator of Blogger Gabut, documenting hands-on Debian 12 deployments for the tech community.",
    avatarUrl: "https://github.com/crazydw4rf.png",
    location: "Indonesia",
    status: {
      available: true,
      text: "Open for collaboration & SysAdmin challenges",
    },
    resumeUrl: "#", // Add your Google Drive, PDF, or LinkedIn URL here
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
      label: "Years of Linux",
      value: "4+",
      description: "Hands-on server management & provisioning",
    },
    {
      label: "Documentation Guides",
      value: "20+",
      description: "In-depth tutorials on Debian 12 & networking",
    },
    {
      label: "Services Mastered",
      value: "15+",
      description: "DNS, LDAP, Nginx, Apache, Firewalls, CA",
    },
    {
      label: "Open Source Projects",
      value: "10+",
      description: "Repositories, lab topologies & scripts",
    },
  ],

  skills: [
    {
      title: "Linux & Operating Systems",
      iconName: "server",
      description: "Operating system internals, user space, and server lifecycle management.",
      skills: [
        { name: "Debian 12 (Bookworm)", level: "Expert" },
        { name: "Ubuntu Server", level: "Advanced" },
        { name: "Bash & Shell Scripting", level: "Advanced" },
        { name: "Systemd Service Units", level: "Advanced" },
        { name: "Package & Repository Management", level: "Expert" },
        { name: "Storage & LVM Partitioning", level: "Intermediate" },
      ],
    },
    {
      title: "Networking & Security",
      iconName: "network",
      description: "Routing, firewall filtering, DNS zones, and encrypted network tunnels.",
      skills: [
        { name: "BIND9 DNS (Master/Slave)", level: "Expert" },
        { name: "iptables & NFTables", level: "Advanced" },
        { name: "WireGuard VPN", level: "Advanced" },
        { name: "OpenSSL & Certificate Authority", level: "Advanced" },
        { name: "Fail2Ban & Hardening", level: "Advanced" },
        { name: "VLAN & Subnet Routing", level: "Intermediate" },
      ],
    },
    {
      title: "Core Services & Virtualization",
      iconName: "shield",
      description: "Web reverse proxies, directory services, and containerized workloads.",
      skills: [
        { name: "NGINX (Reverse Proxy & SSL)", level: "Expert" },
        { name: "Apache HTTP Server", level: "Advanced" },
        { name: "OpenLDAP Directory Service", level: "Advanced" },
        { name: "Active Directory (Realmd/Samba)", level: "Intermediate" },
        { name: "Docker & Docker Compose", level: "Advanced" },
        { name: "Proxmox VE / KVM", level: "Intermediate" },
      ],
    },
    {
      title: "Development & Tooling",
      iconName: "code",
      description: "Modern developer workflow tools, version control, and static site platforms.",
      skills: [
        { name: "Git & GitHub Workflows", level: "Advanced" },
        { name: "Bun & Node.js Runtime", level: "Advanced" },
        { name: "Docusaurus & MDX", level: "Expert" },
        { name: "TypeScript & React", level: "Intermediate" },
        { name: "Python Automation", level: "Intermediate" },
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
        "Architected and maintained the entire Blogger Gabut technical publication platform. Designed comprehensive documentation standards for Debian 12 server infrastructure.",
      highlights: [
        "Built modular CI/CD deployment pipeline using Bun and GitHub Pages with zero-downtime static asset generation.",
        "Authored 20+ production-grade tutorials detailing BIND9, OpenLDAP, Apache/Nginx, and iptables firewall rules.",
        "Integrated offline fuzzy search and hand-drawn Mermaid topology diagrams for intuitive documentation navigation.",
      ],
      tags: ["Debian 12", "Docusaurus", "Bun", "GitHub Actions", "BIND9", "NGINX"],
    },
    {
      id: "exp-2",
      role: "IT Network Systems Administrator & Lab Architect",
      company: "LKS Competition Training Lab",
      location: "Indonesia",
      period: "2022 - 2024",
      type: "Community",
      description:
        "Constructed and managed complex multi-server simulation environments for vocational IT Network Systems competitions.",
      highlights: [
        "Configured dual-server topologies featuring Primary/Secondary BIND9 DNS, Certificate Authorities, and Active Directory domains.",
        "Implemented strict perimeter security with custom iptables firewall scripts, NAT forwarding, and DMZ isolation.",
        "Wrote automated sanity test scripts in Bash to quickly verify network connectivity, service ports, and SSL validity.",
      ],
      tags: ["Debian", "OpenLDAP", "Realmd", "iptables", "Bash", "Samba AD"],
    },
    {
      id: "exp-3",
      role: "Self-Hosted Homelab Administrator",
      company: "Personal Infrastructure",
      location: "Home Office",
      period: "2021 - Present",
      type: "Part-Time",
      description:
        "Operating an always-on private server cluster providing media streaming, automated remote backups, private WireGuard mesh, and internal DNS.",
      highlights: [
        "Maintained 99.9% uptime across self-hosted services containerized with Docker Compose.",
        "Configured automated SSL certificate renewal via Let's Encrypt and Cloudflare DNS challenge.",
        "Implemented automated offsite backup routines utilizing Restic and encrypted cloud storage.",
      ],
      tags: ["Docker", "WireGuard", "Nginx", "Linux", "Restic", "Cloudflare"],
    },
  ],

  projects: [
    {
      id: "proj-1",
      title: "Blogger Gabut Documentation Platform",
      description:
        "Modern, hyper-fast technical blog and SysAdmin documentation portal powered by Docusaurus v3, Bun, and Rust-based toolchain (Faster). Features interactive variable substitution in tutorials and offline local search.",
      tags: ["Docusaurus", "TypeScript", "Bun", "MDX", "CSS Modules"],
      stars: 12,
      githubUrl: "https://github.com/crazydw4rf/blogger-gabut",
      liveUrl: "https://blog.crazydw4rf.tech",
      featured: true,
      category: "Web & Tools",
    },
    {
      id: "proj-2",
      title: "Debian 12 Core Services Automation",
      description:
        "A modular collection of automated shell scripts and configuration templates to spin up DNS (BIND9), Web (Nginx/Apache), LDAP, and CA servers on fresh Debian 12 installations with optimal security defaults.",
      tags: ["Bash", "Debian 12", "BIND9", "OpenLDAP", "Security"],
      stars: 8,
      githubUrl: "https://github.com/crazydw4rf",
      featured: true,
      category: "SysAdmin & Linux",
    },
    {
      id: "proj-3",
      title: "WireGuard Mesh & Remote Gateway",
      description:
        "High-performance site-to-site and point-to-site VPN configuration architecture designed to interconnect remote homelab nodes and mobile devices with zero-trust isolation and traffic routing.",
      tags: ["WireGuard", "iptables", "Networking", "Linux"],
      githubUrl: "https://github.com/crazydw4rf",
      featured: true,
      category: "SysAdmin & Linux",
    },
    {
      id: "proj-4",
      title: "Containerized Homelab Stack",
      description:
        "Production-grade Docker Compose definitions incorporating reverse proxy with automated TLS, monitoring dashboard (Prometheus + Grafana), local DNS sinkhole, and secure file synchronization.",
      tags: ["Docker", "Docker Compose", "Nginx", "Prometheus", "Grafana"],
      githubUrl: "https://github.com/crazydw4rf",
      featured: false,
      category: "DevOps & Cloud",
    },
  ],

  achievements: [
    {
      id: "ach-1",
      title: "LKS IT Network Systems Administration",
      issuer: "Vocational Skills Competition",
      date: "2023",
      description:
        "Demonstrated advanced proficiency in configuring Linux enterprise services, network routing, DNS failover, and directory integration under strict competitive time limits.",
      badge: "Competition Finalist",
    },
    {
      id: "ach-2",
      title: "Debian GNU/Linux Server Infrastructure Mastery",
      issuer: "Self-Directed Practical Labs",
      date: "2024",
      description:
        "Completed end-to-end practical setups for BIND9 master/slave replication, Samba Active Directory domains, OpenSSL root/subordinate CA hierarchies, and iptables firewall rules.",
      badge: "Lab Architect",
    },
    {
      id: "ach-3",
      title: "Open Source Technical Author",
      issuer: "Blogger Gabut Community",
      date: "2025",
      description:
        "Penned over 20 detailed step-by-step guides helping Indonesian IT students and sysadmins bridge the gap between theory and real-world Linux server setups.",
      badge: "Community Writer",
    },
  ],

  contact: {
    heading: "Let's Build Something Reliable Together",
    description:
      "Whether you want to discuss Linux server architecture, collaborate on an open-source project, or just talk tech, feel free to drop a message!",
    email: "binarnugroho775@gmail.com",
    telegramUsername: "yuki2048",
    discordServerUrl: "https://discord.gg/8JZ4JBYqeJ",
    githubUsername: "crazydw4rf",
  },
};
