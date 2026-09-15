'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import styles from './navBar.module.css';

export default function NavBar() {
  const pathname = usePathname();

  const getLinkClass = (path) => 
    `${styles.navLink} ${pathname === path ? styles.navActive : styles.navInactive}`;

  return (
    <aside className={styles.navBar}>
      <nav aria-label="Navegação de páginas">
        <span className={styles.navTitle}>Páginas</span>

        <Link href="/" className={getLinkClass('/')}>
          Introdução
        </Link>

        <Link href="/page2" className={getLinkClass('/page2')}>
          Viés Social
        </Link>

        <Link href="/page3" className={getLinkClass('/page3')}>
          Como Iniciar
        </Link>
      </nav>
    </aside>
  );
}