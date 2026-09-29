import React from "react";
import { Briefcase, Calendar, ExternalLink, MapPin } from "lucide-react";
import { Experience } from "../../data/portfolioData";
import styles from "./portfolio.module.css";

interface PortfolioExperienceProps {
  experiences: Experience[];
}

export const PortfolioExperience: React.FC<PortfolioExperienceProps> = ({
  experiences,
}) => {
  return (
    <section id="experience" className={styles.sectionWrapper}>
      <div className={styles.sectionHeader}>
        <div className={styles.sectionBadge}>
          <Briefcase size={14} />
          <span>Track Record</span>
        </div>
        <h2 className={styles.sectionTitle}>Experience & Practical Roles</h2>
        <p className={styles.sectionSubtitle}>
          Hands-on involvement in infrastructure engineering, competition lab
          orchestration, and open-source systems documentation.
        </p>
      </div>

      <div className={styles.timeline}>
        {experiences.map((exp) => (
          <div key={exp.id} className={styles.timelineItem}>
            <div className={styles.timelineDot}>
              <Briefcase size={18} />
            </div>

            <div className={styles.experienceCard}>
              <div className={styles.experienceTop}>
                <div>
                  <h3 className={styles.experienceRole}>{exp.role}</h3>
                  <div
                    style={{
                      display: "flex",
                      flexWrap: "wrap",
                      alignItems: "center",
                      gap: "0.35rem 0.75rem",
                      marginTop: "0.25rem",
                    }}
                  >
                    {exp.companyUrl ? (
                      <a
                        href={exp.companyUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.experienceCompany}
                      >
                        <span>{exp.company}</span>
                        <ExternalLink size={14} />
                      </a>
                    ) : (
                      <span className={styles.experienceCompany}>{exp.company}</span>
                    )}
                    {exp.location && (
                      <span
                        style={{
                          fontSize: "0.85rem",
                          color: "var(--ifm-color-emphasis-600)",
                          display: "inline-flex",
                          alignItems: "center",
                          gap: "0.25rem",
                        }}
                      >
                        <MapPin size={13} />
                        {exp.location}
                      </span>
                    )}
                  </div>
                </div>

                <div className={styles.experiencePeriod}>
                  <Calendar size={13} />
                  <span>{exp.period}</span>
                </div>
              </div>

              <p className={styles.experienceDesc}>{exp.description}</p>

              {exp.highlights && exp.highlights.length > 0 && (
                <ul className={styles.experienceBullets}>
                  {exp.highlights.map((bullet, bIdx) => (
                    <li key={bIdx} className={styles.experienceBulletItem}>
                      {bullet}
                    </li>
                  ))}
                </ul>
              )}

              <div className={styles.experienceTags}>
                {exp.tags.map((tag, tIdx) => (
                  <span key={tIdx} className={styles.tagPill}>
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
