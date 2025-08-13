'use client';

import styles from '../styles/IntroSection.module.css';
import Image from 'next/image';
import { motion } from 'framer-motion';

export default function IntroSection() {
  return (
    <section className={styles.intro} id="home">
      <motion.div
        className={styles.imageContainer}
        initial={{ opacity: 0, x: -30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
      >
        <Image
          src="/ansi.png"
          alt="Ansi Britto"
          width={300}
          height={300}
          className={styles.image}
        />
      </motion.div>

      <motion.div
        className={styles.content}
        initial={{ opacity: 0, x: 30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
      >
        <h1>Ansi Britto</h1>
        <h2>Software Developer</h2>
        <p className={styles.techStack}>Python • React • AWS</p>
        <p className={styles.description}>
          Passionate about building scalable, user-focused web apps. 
          I love turning ideas into reality through clean code and thoughtful design.
        </p>
      </motion.div>
    </section>
  );
}


