import React from "react";
import { Sparkles, Briefcase, FolderGit2, Trophy, Mail } from "lucide-react";
import styles from "./portfolio.module.css";

export const PortfolioNav: React.FC = () => {
  return (
    <nav aria-label="Portfolio sections" className={styles.portfolioNav}>
      <a href="#skills" className={styles.navPill}>
        <Sparkles size={14} />
        <span>Skills</span>
      </a>
      <a href="#experience" className={styles.navPill}>
        <Briefcase size={14} />
        <span>Experience</span>
      </a>
      <a href="#projects" className={styles.navPill}>
        <FolderGit2 size={14} />
        <span>Projects</span>
      </a>
      <a href="#achievements" className={styles.navPill}>
        <Trophy size={14} />
        <span>Milestones</span>
      </a>
      <a href="#contact" className={styles.navPill}>
        <Mail size={14} />
        <span>Contact</span>
      </a>
    </nav>
  );
};
