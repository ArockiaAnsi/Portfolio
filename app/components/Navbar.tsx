'use client';

import Link from 'next/link';
import styles from '../styles/Navbar.module.css'; 

export default function Navbar() {
  return (
    <nav className={styles.navbar}>
      <Link href="#home" className={styles['navbarLogo']}>
        Ansi Britto
      </Link>

      <div className={styles['navbarMenu']}>
        <Link href="#about">About</Link>
        <Link href="#skills">Skills</Link>
        <Link href="#projects">Projects</Link>
        <Link href="#contact">Contact</Link>
      </div>
    </nav>
  );
}
