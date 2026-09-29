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
import { portfolioData, type SocialLink } from "../../data/portfolioData";
import styles from "./footer.module.css";

const socialIconMap: Record<SocialLink["icon"], ReactNode> = {
  github: <GithubIcon size={20} />,
  linkedin: <LinkedInIcon size={18} />,
  email: <Mail size={18} />,
  telegram: <TelegramIcon size={18} />,
  discord: <DiscordIcon size={18} />,
  instagram: <InstagramIcon size={18} />,
  youtube: <YouTubeIcon size={18} />,
};

const socialClassMap: Record<SocialLink["icon"], string> = {
  github: styles.circleGithub,
  linkedin: styles.circleLinkedin,
  email: styles.circleEmail,
  telegram: styles.circleTelegram,
  discord: styles.circleDiscord,
  instagram: styles.circleInstagram,
  youtube: styles.circleYoutube,
};

function Footer(): ReactNode {
  const { contact, personalInfo, socialLinks } = portfolioData;
  const catImageSrc = useBaseUrl(contact.image || "/img/cat-bg.webp");

  return (
    <footer id="contact" className={styles.customFooter}>
      <div className={styles.footerContainer}>
        <div className={styles.footerMainGrid}>
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

            <div className={styles.socialCircles}>
              {socialLinks.map((item) => (
                <a
                  key={item.name}
                  href={item.url}
                  className={`${styles.circleButton} ${socialClassMap[item.icon] || ""}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={item.name}
                  title={item.name}
                >
                  {socialIconMap[item.icon]}
                </a>
              ))}
            </div>

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

        <div className={styles.footerBottomStrip}>
          <p className={styles.copyrightText}>
            © {new Date().getFullYear()} Built with <a href="https://docusaurus.io/" target="_blank"><strong>Docusaurus</strong></a>
          </p>
        </div>
      </div>
    </footer>
  );
}

export default React.memo(Footer);
