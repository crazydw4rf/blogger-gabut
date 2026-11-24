export interface SocialLink {
  name: string;
  url: string;
  icon: "github" | "linkedin" | "discord" | "email";
}

export interface FooterContact {
  heading: string;
  subheading: string;
  quote?: string;
  location?: string;
  image?: string;
}

export interface FooterData {
  contact: FooterContact;
  socialLinks: SocialLink[];
}

export const footerData: FooterData = {
  contact: {
    heading: "Reach Out to me!",
    subheading: "DISCUSS A PROJECT OR JUST WANT TO SAY HI? MY INBOX IS OPEN FOR ALL.",
    quote: "Computer Science Student | Backend Developer & SysAdmin",
    location: "Cilacap, Central Java, Indonesia",
    image: "/img/cat-bg.webp",
  },
  socialLinks: [
    {
      name: "GitHub",
      url: "https://github.com/crazydw4rf",
      icon: "github",
    },
    {
      name: "Discord",
      url: "https://discord.com/users/746175445430435931",
      icon: "discord",
    },
    {
      name: "Email",
      url: "mailto:binarnugroho775@gmail.com",
      icon: "email",
    },
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/binar-nugroho",
      icon: "linkedin",
    },
  ],
};
