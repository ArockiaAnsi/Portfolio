import styles from '../styles/Projects.module.css';
import { FaGithub } from 'react-icons/fa';

const projects = [
    {
        name: "Video Contributions App",
        description:
        "A full-stack app that visualizes GitHub user contributions via short videos. Built with React and Node.js, it allows users to search GitHub profiles and generate contribution summaries.",
        repoLink: 'https://github.com/ArockiaAnsi/video-contributions-app',
        tech: 'React 19, TypeScript, React Router, Jest, React Testing Library, ESLint, Prettier'
    },
    {
        name: "Refugee Match",
        description:
        "A platform designed to connect refugees with support services. Developed as a social impact project to streamline access to resources based on location and needs.",
        repoLink: 'https://github.com/ArockiaAnsi/refugee-match',
        tech: 'React 15, Create React App (0.9.5)'
    },
];

export default function Projects() {
  return (
    <section id="projects" className={styles.projectsSection}>
      <h2 className={styles.projectsTitle}>Projects</h2>
      <div className={styles.projectsGrid}>
        {projects.map(p => (
          <div key={p.name} className={styles.projectCard}>
            <h3 className={styles.projectName}>{p.name}</h3>
            <p className={styles.projectDesc}>{p.description}</p>
            <p className={styles.projectTech}><strong>Technologies:</strong> {p.tech}</p>
            <a href={p.repoLink} target="_blank" rel="noopener noreferrer" className={styles.projectLink}>
              <FaGithub />
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}