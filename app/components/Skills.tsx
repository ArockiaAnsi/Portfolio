'use client';

import styles from '../styles/Skills.module.css';
import { FaPython, FaReact, FaAws, FaNodeJs, FaGithub, FaJira } from 'react-icons/fa';
import { SiTypescript, SiPostgresql, SiMongodb, SiJavascript } from 'react-icons/si';

export default function Skills() {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Technical Skills</h2>

      <div className={styles.section}>
        <h3 className={styles.category}>Programming & Development</h3>
        <div className={styles.grid}>
          <SkillItem name="Python" icon={<FaPython />} />
          <SkillItem name="JavaScript" icon={<SiJavascript />} />
          <SkillItem name="TypeScript" icon={<SiTypescript />} />
          <SkillItem name="React" icon={<FaReact />} />
          <SkillItem name="Node.js" icon={<FaNodeJs />} />
          <SkillItem name="PostgreSQL" icon={<SiPostgresql />} />
          <SkillItem name="MongoDB" icon={<SiMongodb />} />
        </div>
      </div>

      <div className={styles.section}>
        <h3 className={styles.category}>Cloud & DevOps</h3>
        <div className={styles.grid}>
          <SkillItem name="AWS" icon={<FaAws />} />
          <SkillItem name="Git / GitHub" icon={<FaGithub />} />
          <SkillItem name="Jira" icon={<FaJira />} />
        </div>
      </div>
    </div>
  );
}

function SkillItem({ name, icon }: { name: string; icon: React.ReactNode }) {
  return (
    <div className={styles.skillItem}>
      <div className={styles.icon}>{icon}</div>
      <p className={styles.label}>{name}</p>
    </div>
  );
}
