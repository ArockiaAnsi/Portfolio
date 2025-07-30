"use client";

import styles from "./page.module.css";
import IntroSection from "./components/IntroSection";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import { MdEmail } from "react-icons/md";
import { FaLinkedin } from "react-icons/fa";

export default function Home() {
  return (
    <>
      <IntroSection />

      <section id="about" className={`${styles.section} ${styles.about}`}>
        <h2 className={styles.sectionTitle}>About Me</h2>
        <p>
          My journey into software development began with a simple curiosity, a
          desire to understand how the digital world works and how I could be
          part of building it.
        </p>
        <p>
          Over the years, I’ve developed a strong foundation in full-stack
          development, working with technologies like Python, React, and AWS. I
          enjoy designing systems that are both robust and elegant, with a focus
          on writing clean, maintainable code and creating seamless user
          experiences. Whether I’m building a small utility tool or contributing
          to a larger platform, I approach each project with a commitment to
          clarity, scalability, and thoughtful design.
        </p>
        <p>
          I thrive in collaborative environments where knowledge is shared and
          creativity is encouraged. I believe the best solutions come from
          blending technical skill with empathy, understanding both what users
          need and how developers will interact with the system.
        </p>
        <p>
          Outside of programming, I love building LEGO sets, there’s something
          incredibly satisfying about turning a pile of small pieces into a
          thoughtful creation, much like solving problems through code. I also
          enjoy drawing, which helps me think visually and brings a creative
          balance to my technical work. I’m the kind of person who likes
          experimenting with personal projects just for the fun of it, whether
          it’s trying out new frameworks or building something useful from
          scratch.
        </p>
        <p>
          To me, software development isn’t just about code, it’s about building
          meaningful tools that make life a little easier, more efficient, or
          more enjoyable. I’m excited by the endless possibilities in tech and
          always looking for the next challenge to grow and learn.
        </p>
      </section>

      <section id="skills" className={`${styles.section} ${styles.skills}`}>
        <Skills />
      </section>

      <section id="projects" className={`${styles.section} ${styles.projects}`}>
        <Projects />
      </section>

      <section id="contact" className={`${styles.section} ${styles.contact}`}>
        <h2 className={styles.sectionTitle}>Contact</h2>
        <p className={styles.sectionContent}>
          Feel free to reach out — whether it’s to collaborate on a project or
          just to say hello!
        </p>
        <div className={styles.contactIcons}>
          <a
            href="mailto:arockiaansi@gmail.com"
            aria-label="Email"
            className={styles.iconLink}
          >
            <MdEmail size={30} color="#333" />
          </a>
          <a
            href="https://www.linkedin.com/in/ansi-britto"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className={styles.iconLink}
          >
            <FaLinkedin size={30} color="#0077B5" />
          </a>
        </div>
      </section>

      <footer className={styles.footer}>
        <p>
          &copy; {new Date().getFullYear()} Ansi Britto. All rights reserved.
        </p>
      </footer>
    </>
  );
}
