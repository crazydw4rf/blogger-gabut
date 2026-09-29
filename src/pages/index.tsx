import React from "react";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import { portfolioData } from "../data/portfolioData";
import { PortfolioHero } from "../components/portfolio/PortfolioHero";
import { PortfolioNav } from "../components/portfolio/PortfolioNav";
import { PortfolioSkills } from "../components/portfolio/PortfolioSkills";
import { PortfolioExperience } from "../components/portfolio/PortfolioExperience";
import { PortfolioProjects } from "../components/portfolio/PortfolioProjects";
import { PortfolioAchievements } from "../components/portfolio/PortfolioAchievements";
import styles from "../components/portfolio/portfolio.module.css";

export default function Home(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();

  return (
    <Layout
      title={`${portfolioData.personalInfo.name} | ${portfolioData.personalInfo.role}`}
      description={portfolioData.personalInfo.bio}
    >
      <main className={styles.portfolioContainer}>
        <PortfolioHero
          personalInfo={portfolioData.personalInfo}
          socialLinks={portfolioData.socialLinks}
          stats={portfolioData.stats}
        />

        <PortfolioNav />

        <PortfolioSkills categories={portfolioData.skills} />

        <PortfolioExperience experiences={portfolioData.experiences} />

        <PortfolioProjects projects={portfolioData.projects} />

        <PortfolioAchievements achievements={portfolioData.achievements} />
      </main>
    </Layout>
  );
}
