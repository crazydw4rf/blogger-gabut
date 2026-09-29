import React, { useState } from "react";
import { FolderGit2, Star, ExternalLink, Sparkles } from "lucide-react";
import { GithubIcon } from "./icons/GithubIcon";
import { Project } from "../../data/portfolioData";
import styles from "./portfolio.module.css";

interface PortfolioProjectsProps {
  projects: Project[];
}

export const PortfolioProjects: React.FC<PortfolioProjectsProps> = ({ projects }) => {
  const categories = [
    "All",
    ...Array.from(
      new Set(
        projects
          .map((p) => p.category)
          .filter((cat): cat is NonNullable<Project["category"]> => Boolean(cat))
      )
    ),
  ];

  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects =
    activeCategory === "All"
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  return (
    <section id="projects" className={styles.sectionWrapper}>
      <div className={styles.sectionHeader}>
        <div className={styles.sectionBadge}>
          <FolderGit2 size={14} />
          <span>Showcase</span>
        </div>
        <h2 className={styles.sectionTitle}>Featured & Open Source Projects</h2>
        <p className={styles.sectionSubtitle}>
          Open source repositories, homelab architectures, and automated deployment
          tooling built for stability and community learning.
        </p>

        {/* Filter buttons */}
        {categories.length > 2 && (
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "0.5rem",
              marginTop: "1.25rem",
            }}
          >
            {categories.map((category) => (
              <button
                key={category}
                type="button"
                onClick={() => setActiveCategory(category)}
                style={{
                  cursor: "pointer",
                  fontSize: "0.85rem",
                  fontWeight: 600,
                  padding: "0.4rem 0.9rem",
                  borderRadius: "9999px",
                  border:
                    activeCategory === category
                      ? "1px solid var(--ifm-color-primary)"
                      : "1px solid rgba(0, 0, 0, 0.08)",
                  background:
                    activeCategory === category
                      ? "var(--ifm-color-primary)"
                      : "var(--ifm-card-background-color)",
                  color:
                    activeCategory === category
                      ? "#ffffff"
                      : "var(--ifm-color-emphasis-700)",
                  transition: "all 0.2s ease",
                }}
              >
                {category}
              </button>
            ))}
          </div>
        )}
      </div>

      <div className={styles.projectsGrid}>
        {filteredProjects.map((project) => (
          <div key={project.id} className={styles.projectCard}>
            <div className={styles.projectHeader}>
              <span className={styles.projectCategory}>
                {project.category || "Project"}
              </span>

              {typeof project.stars === "number" && (
                <span className={styles.projectStars} title={`${project.stars} Stars`}>
                  <Star size={13} fill="currentColor" />
                  <span>{project.stars}</span>
                </span>
              )}
            </div>

            <h3 className={styles.projectTitle}>{project.title}</h3>

            <p className={styles.projectDesc}>{project.description}</p>

            <div className={styles.projectTags}>
              {project.tags.map((tag, tIdx) => (
                <span key={tIdx} className={styles.tagPill}>
                  {tag}
                </span>
              ))}
            </div>

            <div className={styles.projectFooter}>
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.projectLink}
                >
                  <GithubIcon size={16} />
                  <span>Repository</span>
                </a>
              )}

              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.projectLink}
                >
                  <ExternalLink size={16} />
                  <span>Live Demo</span>
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
