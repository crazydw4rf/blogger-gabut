import React from "react";
import { Mail, Send } from "lucide-react";
import {
  GithubIcon,
  LinkedInIcon,
  DiscordIcon,
  InstagramIcon,
} from "./icons/SocialIcons";
import { PortfolioData } from "../../data/portfolioData";
import styles from "./portfolio.module.css";

interface PortfolioContactProps {
  contact: PortfolioData["contact"];
}

export const PortfolioContact: React.FC<PortfolioContactProps> = ({ contact }) => {
  return (
    <section id="contact" className={styles.contactCard}>
      <h2 className={styles.contactTitle}>{contact.heading}</h2>
      <p className={styles.contactDesc}>{contact.description}</p>

      <div className={styles.contactButtons}>
        {contact.email && (
          <a
            href={`mailto:${contact.email}`}
            className={styles.primaryButton}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Mail size={18} />
            <span>Email Me</span>
          </a>
        )}

        {contact.linkedinUrl && (
          <a
            href={contact.linkedinUrl}
            className={styles.secondaryButton}
            target="_blank"
            rel="noopener noreferrer"
          >
            <LinkedInIcon size={18} />
            <span>LinkedIn</span>
          </a>
        )}

        {contact.discordUsername && (
          <a
            href={`https://discord.com/users/${contact.discordUsername}`}
            className={styles.secondaryButton}
            target="_blank"
            rel="noopener noreferrer"
          >
            <DiscordIcon size={18} />
            <span>Discord</span>
          </a>
        )}

        {contact.telegramUsername && (
          <a
            href={`https://t.me/${contact.telegramUsername}`}
            className={styles.secondaryButton}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Send size={18} />
            <span>Telegram</span>
          </a>
        )}

        {contact.instagramUrl && (
          <a
            href={contact.instagramUrl}
            className={styles.secondaryButton}
            target="_blank"
            rel="noopener noreferrer"
          >
            <InstagramIcon size={18} />
            <span>Instagram</span>
          </a>
        )}

        {contact.githubUsername && (
          <a
            href={`https://github.com/${contact.githubUsername}`}
            className={styles.secondaryButton}
            target="_blank"
            rel="noopener noreferrer"
          >
            <GithubIcon size={18} />
            <span>GitHub Profile</span>
          </a>
        )}
      </div>
    </section>
  );
};
