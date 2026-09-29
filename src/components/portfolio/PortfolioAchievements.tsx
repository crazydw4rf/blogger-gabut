import React from "react";
import { Award, CheckCircle2, ShieldCheck, Trophy } from "lucide-react";
import { Achievement } from "../../data/portfolioData";
import styles from "./portfolio.module.css";

interface PortfolioAchievementsProps {
  achievements: Achievement[];
}

export const PortfolioAchievements: React.FC<PortfolioAchievementsProps> = ({
  achievements,
}) => {
  if (!achievements || achievements.length === 0) return null;

  return (
    <section id="achievements" className={styles.sectionWrapper}>
      <div className={styles.sectionHeader}>
        <div className={styles.sectionBadge}>
          <Trophy size={14} />
          <span>Milestones</span>
        </div>
        <h2 className={styles.sectionTitle}>Certifications & Recognition</h2>
        <p className={styles.sectionSubtitle}>
          Honors, technical competition achievements, and self-directed server lab milestones.
        </p>
      </div>

      <div className={styles.achievementsGrid}>
        {achievements.map((item) => (
          <div key={item.id} className={styles.achievementCard}>
            <div className={styles.achievementIconBox}>
              <Award size={22} />
            </div>

            <div style={{ flex: 1 }}>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "baseline",
                  marginBottom: "0.25rem",
                }}
              >
                <h3 className={styles.achievementTitle}>{item.title}</h3>
                <span
                  style={{
                    fontSize: "0.8rem",
                    color: "var(--ifm-color-emphasis-600)",
                    fontWeight: 600,
                  }}
                >
                  {item.date}
                </span>
              </div>

              <div className={styles.achievementIssuer}>
                {item.issuer}
                {item.badge && (
                  <span
                    style={{
                      marginLeft: "0.5rem",
                      fontSize: "0.75rem",
                      background: "rgba(245, 158, 11, 0.12)",
                      color: "#b45309",
                      padding: "0.15rem 0.45rem",
                      borderRadius: "0.3rem",
                      fontWeight: 700,
                    }}
                  >
                    {item.badge}
                  </span>
                )}
              </div>

              <p className={styles.achievementDesc}>{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
