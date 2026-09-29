import React from "react";
import Link from "@docusaurus/Link";
import {
  Send,
  MessageSquare,
  Mail,
  ExternalLink,
  BookOpen,
  ArrowRight,
  Terminal,
} from "lucide-react";
import { GithubIcon } from "./icons/GithubIcon";
import { PortfolioData } from "../../data/portfolioData";
import styles from "./portfolio.module.css";

interface PortfolioHeroProps {
  personalInfo: PortfolioData["personalInfo"];
  socialLinks: PortfolioData["socialLinks"];
  stats: PortfolioData["stats"];
}

const renderSocialIcon = (iconName: string) => {
  switch (iconName) {
    case "github":
      return <GithubIcon size={18} />;
    case "telegram":
      return <Send size={18} />;
    case "discord":
      return <MessageSquare size={18} />;
    case "email":
      return <Mail size={18} />;
    default:
      return <ExternalLink size={18} />;
  }
};

export const PortfolioHero: React.FC<PortfolioHeroProps> = ({
  personalInfo,
  socialLinks,
  stats,
}) => {
  return (
    <section className={styles.sectionWrapper} style={{ marginTop: "1rem" }}>
      <div className={styles.heroCard}>
        <div className={styles.heroContent}>
          {personalInfo.status?.available && (
            <div className={styles.statusIndicator}>
              <span className={styles.statusPulse} />
              <span>{personalInfo.status.text}</span>
            </div>
          )}

          <h1 className={styles.heroTitle}>
            Hi, I'm{" "}
            <span className={styles.heroGradientText}>
              {personalInfo.name}
            </span>{" "}
            👋
          </h1>

          <div className={styles.heroRole}>
            <Terminal size={22} className={styles.heroGradientText} />
            <span>{personalInfo.role}</span>
          </div>

          <p className={styles.heroBio}>{personalInfo.bio}</p>

          <div className={styles.heroActions}>
            <Link to="/tutorial" className={styles.primaryButton}>
              <BookOpen size={18} />
              <span>Explore Tutorials</span>
            </Link>

            <Link to="/blog" className={styles.secondaryButton}>
              <span>Read Tech Blog</span>
              <ArrowRight size={18} />
            </Link>
          </div>

          <div className={styles.socialBar}>
            {socialLinks.map((social) => (
              <a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.socialIconBtn}
                title={social.name}
                aria-label={social.name}
              >
                {renderSocialIcon(social.icon)}
              </a>
            ))}
          </div>
        </div>

        <div className={styles.heroAvatarWrapper}>
          <div className={styles.avatarGlow} />
          <img
            src={personalInfo.avatarUrl}
            alt={personalInfo.name}
            className={styles.avatarImage}
            loading="eager"
            onError={(e) => {
              // Fallback if avatar fails
              (e.currentTarget as HTMLImageElement).src =
                "https://avatars.githubusercontent.com/u/9919?v=4";
            }}
          />
        </div>
      </div>

      {/* Stats Counter Row */}
      {stats && stats.length > 0 && (
        <div className={styles.statsGrid}>
          {stats.map((stat, idx) => (
            <div key={idx} className={styles.statCard}>
              <span className={styles.statValue}>{stat.value}</span>
              <span className={styles.statLabel}>{stat.label}</span>
              <p className={styles.statDesc}>{stat.description}</p>
            </div>
          ))}
        </div>
      )}
    </section>
  );
};
