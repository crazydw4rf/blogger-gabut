import React from "react";
import { Server, Network, Shield, Cpu, Code2, Sparkles } from "lucide-react";
import { SkillCategory } from "../../data/portfolioData";
import styles from "./portfolio.module.css";

interface PortfolioSkillsProps {
  categories: SkillCategory[];
}

const renderCategoryIcon = (iconName: SkillCategory["iconName"]) => {
  switch (iconName) {
    case "server":
      return <Server size={22} />;
    case "network":
      return <Network size={22} />;
    case "shield":
      return <Shield size={22} />;
    case "cpu":
      return <Cpu size={22} />;
    case "code":
      return <Code2 size={22} />;
    default:
      return <Server size={22} />;
  }
};

export const PortfolioSkills: React.FC<PortfolioSkillsProps> = ({ categories }) => {
  return (
    <section id="skills" className={styles.sectionWrapper}>
      <div className={styles.sectionHeader}>
        <div className={styles.sectionBadge}>
          <Sparkles size={14} />
          <span>Core Competencies</span>
        </div>
        <h2 className={styles.sectionTitle}>Technical Expertise & Stacks</h2>
        <p className={styles.sectionSubtitle}>
          Specialized in enterprise Linux distributions, service orchestration, high-availability
          networking, and open-source administration.
        </p>
      </div>

      <div className={styles.skillsGrid}>
        {categories.map((category, idx) => (
          <div key={idx} className={styles.skillCard}>
            <div className={styles.skillCardHeader}>
              <div className={styles.skillIconBox}>
                {renderCategoryIcon(category.iconName)}
              </div>
              <h3 className={styles.skillCardTitle}>{category.title}</h3>
            </div>

            {category.description && (
              <p className={styles.skillCardDesc}>{category.description}</p>
            )}

            <div className={styles.skillChips}>
              {category.skills.map((skill, sIdx) => (
                <span key={sIdx} className={styles.skillChip}>
                  <span>{skill.name}</span>
                  {skill.level && (
                    <span className={styles.skillLevelBadge}>{skill.level}</span>
                  )}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
