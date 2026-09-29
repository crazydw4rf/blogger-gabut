import React from "react";
import Link from "@docusaurus/Link";
import useBaseUrl from "@docusaurus/useBaseUrl";
import {
  Send,
  MessageSquare,
  Mail,
  ExternalLink,
  BookOpen,
  ArrowRight,
  Terminal,
} from "lucide-react";
import {
  GithubIcon,
  LinkedInIcon,
  DiscordIcon,
  InstagramIcon,
  YouTubeIcon,
} from "./icons/SocialIcons";
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
    case "linkedin":
      return <LinkedInIcon size={18} />;
    case "discord":
      return <DiscordIcon size={18} />;
    case "instagram":
      return <InstagramIcon size={18} />;
    case "youtube":
      return <YouTubeIcon size={18} />;
    case "telegram":
      return <Send size={18} />;
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
  const avatarSrc = useBaseUrl(personalInfo.avatarUrl);
  const [tilt, setTilt] = React.useState({ x: 0, y: 0, active: false });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    // Calculate rotation (-14 to 14 degrees)
    const rotateX = ((y - centerY) / centerY) * -14;
    const rotateY = ((x - centerX) / centerX) * 14;
    setTilt({ x: rotateX, y: rotateY, active: true });
  };

  const handleMouseLeave = () => {
    setTilt({ x: 0, y: 0, active: false });
  };

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
            {personalInfo.location && (
              <span
                style={{
                  fontSize: "0.85rem",
                  fontWeight: 500,
                  color: "var(--ifm-color-emphasis-600)",
                  marginLeft: "0.5rem",
                }}
              >
                📍 {personalInfo.location}
              </span>
            )}
          </div>

          <p className={styles.heroBio}>{personalInfo.bio}</p>

          {personalInfo.funFact && (
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.5rem",
                fontSize: "0.9rem",
                fontWeight: 600,
                color: "var(--ifm-color-emphasis-800)",
                background: "rgba(2, 132, 199, 0.08)",
                border: "1px solid rgba(2, 132, 199, 0.2)",
                padding: "0.45rem 0.95rem",
                borderRadius: "0.75rem",
                marginBottom: "1.75rem",
              }}
            >
              <span>{personalInfo.funFact}</span>
            </div>
          )}

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

        <div
          className={styles.heroAvatarWrapper}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
        >
          <div className={styles.avatarGlow} />
          <img
            src={avatarSrc}
            alt={personalInfo.name}
            className={styles.avatarImage}
            style={{
              transform: tilt.active
                ? `perspective(1000px) rotateX(${tilt.x.toFixed(2)}deg) rotateY(${tilt.y.toFixed(2)}deg) scale3d(1.06, 1.06, 1.06)`
                : "perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)",
              transition: tilt.active
                ? "transform 0.1s ease-out, box-shadow 0.2s ease"
                : "transform 0.5s ease-in-out, box-shadow 0.3s ease",
            }}
            loading="eager"
            onError={(e) => {
              // Fallback if avatar.png is not yet provided locally
              const target = e.currentTarget as HTMLImageElement;
              if (target.src !== "https://github.com/crazydw4rf.png") {
                target.src = "https://github.com/crazydw4rf.png";
              }
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
