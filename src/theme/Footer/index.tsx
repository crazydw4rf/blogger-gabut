import React, { type ReactNode } from "react";
import useBaseUrl from "@docusaurus/useBaseUrl";
import { Mail, MapPin } from "lucide-react";
import { GithubIcon, LinkedInIcon, DiscordIcon } from "../../components/icons/SocialIcons";
import { footerData, type SocialLink } from "../../data/footerData";
import styles from "./footer.module.css";

const socialIconMap: Record<SocialLink["icon"], ReactNode> = {
  github: <GithubIcon size={19} />,
  discord: <DiscordIcon size={19} />,
  email: <Mail size={19} />,
  linkedin: <LinkedInIcon size={19} />,
};

const socialClassMap: Record<SocialLink["icon"], string> = {
  github: styles.circleGithub,
  discord: styles.circleDiscord,
  email: styles.circleEmail,
  linkedin: styles.circleLinkedin,
};

function Footer(): ReactNode {
  const { contact, socialLinks } = footerData;
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

            {contact.quote && <blockquote className={styles.connectQuote}>"{contact.quote}"</blockquote>}

            <div className={styles.connectMetaList}>
              {contact.location && (
                <div className={styles.metaItem}>
                  <MapPin size={17} className={styles.metaIcon} />
                  <span>{contact.location}</span>
                </div>
              )}
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
                Home
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
                <img src={catImageSrc} alt="Cats illustration" className={styles.catWideImg} loading="lazy" />
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
            © {new Date().getFullYear()} <strong>Blogger Gabut</strong>. Built with{" "}
            <a href="https://docusaurus.io/" target="_blank">
              Docusaurus
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}

export default React.memo(Footer);
