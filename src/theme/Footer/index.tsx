import React, { type ReactNode } from "react";
import useBaseUrl from "@docusaurus/useBaseUrl";
import { Mail, MapPin } from "lucide-react";
import {
  GithubIcon,
  LinkedInIcon,
  DiscordIcon,
  InstagramIcon,
  YouTubeIcon,
  TelegramIcon,
} from "../../components/portfolio/icons/SocialIcons";
import { portfolioData } from "../../data/portfolioData";
import styles from "./footer.module.css";

function Footer(): ReactNode {
  const { contact, personalInfo } = portfolioData;
  const catImageSrc = useBaseUrl(contact.image || "/cat-bg.webp");

  return (
    <footer id="contact" className={styles.customFooter}>
      <div className={styles.footerContainer}>
        {/* Main Two-Column Row */}
        <div className={styles.footerMainGrid}>
          {/* Column 1: Let's Connect Info & Links (~40%) */}
          <div className={styles.connectColumn}>
            <div className={styles.terminalTag}>
              <span>// contact &amp; socials</span>
            </div>

            <h2 className={styles.connectTitle}>{contact.heading}</h2>
            <p className={styles.connectSubtitle}>{contact.subheading}</p>

            {contact.quote && (
              <blockquote className={styles.connectQuote}>
                "{contact.quote}"
              </blockquote>
            )}

            <div className={styles.connectMetaList}>
              {contact.location && (
                <div className={styles.metaItem}>
                  <MapPin size={17} className={styles.metaIcon} />
                  <span>{contact.location}</span>
                </div>
              )}

              <div className={styles.opportunityBadge}>
                <span
                  className={`${styles.statusDot} ${
                    contact.openForOpportunities ? styles.statusDotActive : ""
                  }`}
                />
                <span>
                  Open for opportunities:{" "}
                  <strong className={styles.statusTextBold}>
                    {contact.openForOpportunities ? "Yes" : "No"}
                  </strong>
                </span>
              </div>
            </div>

            {/* Social Circle Buttons */}
            <div className={styles.socialCircles}>
              {contact.githubUsername && (
                <a
                  href={`https://github.com/${contact.githubUsername}`}
                  className={`${styles.circleButton} ${styles.circleGithub}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub Profile"
                  title="GitHub"
                >
                  <GithubIcon size={20} />
                </a>
              )}

              {contact.linkedinUrl && (
                <a
                  href={contact.linkedinUrl}
                  className={`${styles.circleButton} ${styles.circleLinkedin}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn Profile"
                  title="LinkedIn"
                >
                  <LinkedInIcon size={18} />
                </a>
              )}

              {contact.email && (
                <a
                  href={`mailto:${contact.email}`}
                  className={`${styles.circleButton} ${styles.circleEmail}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Send Email"
                  title="Email"
                >
                  <Mail size={18} />
                </a>
              )}

              {contact.telegramUsername && (
                <a
                  href={`https://t.me/${contact.telegramUsername}`}
                  className={`${styles.circleButton} ${styles.circleTelegram}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Telegram"
                  title="Telegram"
                >
                  <TelegramIcon size={18} />
                </a>
              )}

              {contact.discordUsername && (
                <a
                  href={`https://discord.com/users/${contact.discordUsername}`}
                  className={`${styles.circleButton} ${styles.circleDiscord}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Discord"
                  title="Discord"
                >
                  <DiscordIcon size={18} />
                </a>
              )}

              {contact.instagramUrl && (
                <a
                  href={contact.instagramUrl}
                  className={`${styles.circleButton} ${styles.circleInstagram}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  title="Instagram"
                >
                  <InstagramIcon size={18} />
                </a>
              )}

              {contact.youtubeUrl && (
                <a
                  href={contact.youtubeUrl}
                  className={`${styles.circleButton} ${styles.circleYoutube}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="YouTube"
                  title="YouTube"
                >
                  <YouTubeIcon size={18} />
                </a>
              )}
            </div>

            {/* Quick Navigation Strip */}
            <div className={styles.quickNavStrip}>
              <a href="/" className={styles.quickNavLink}>
                Home / Portfolio
              </a>
              <span className={styles.quickNavDot}>•</span>
              <a href="/tutorial" className={styles.quickNavLink}>
                Tutorials
              </a>
              <span className={styles.quickNavDot}>•</span>
              <a href="/blog" className={styles.quickNavLink}>
                Blog
              </a>
              <span className={styles.quickNavDot}>•</span>
              <a
                href="https://github.com/crazydw4rf/blogger-gabut"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.quickNavLink}
              >
                Source Code
              </a>
            </div>
          </div>

          {/* Column 2: Wide Panoramic Cat Banner Card (~60%, WIDER) */}
          <div className={styles.catColumn}>
            <div className={styles.catBannerCard}>
              <div className={styles.catCardHeader}>
                <div className={styles.windowDots}>
                  <span className={`${styles.windowDot} ${styles.dotRed}`} />
                  <span className={`${styles.windowDot} ${styles.dotYellow}`} />
                  <span className={`${styles.windowDot} ${styles.dotGreen}`} />
                </div>
                <span className={styles.catTagline}>cats_n_linux.sh 🐧 (&gt;^◡^&lt;)</span>
              </div>

              <div className={styles.catImageFrame}>
                <img
                  src={catImageSrc}
                  alt="Cats illustration"
                  className={styles.catWideImg}
                  loading="lazy"
                />
              </div>

              <div className={styles.catCardFooter}>
                <span className={styles.catBioQuote}>
                  &ldquo;I love cats (&gt;^◡^&lt;), Linux enthusiast 🐧 — and yes, I use Arch, btw.&rdquo;
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Strip: Copyright */}
        <div className={styles.footerBottomStrip}>
          <p className={styles.copyrightText}>
            © {new Date().getFullYear()} <strong>{personalInfo.name}</strong> ({personalInfo.nickname}) • Built with <strong>Bun</strong> &amp; <strong>Docusaurus Faster</strong>
          </p>
        </div>
      </div>
    </footer>
  );
}

export default React.memo(Footer);
