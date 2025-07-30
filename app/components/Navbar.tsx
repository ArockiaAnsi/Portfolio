'use client';

import Link from 'next/link';
import styles from '../styles/Navbar.module.css'; 

export default function Navbar() {
  return (
    <nav className={styles.navbar}>
      <Link href="#home" className={styles['navbar-logo']}>
        Ansi Britto
      </Link>

      <div className={styles['navbar-menu']}>
        <Link href="#about" className={styles['navbar-link']}>About</Link>
        <Link href="#skills" className={styles['navbar-link']}>Skills</Link>
        <Link href="#projects" className={styles['navbar-link']}>Projects</Link>
        <Link href="#contact" className={styles['navbar-link']}>Contact</Link>
      </div>
    </nav>
  );
}
