'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import styles from './navBar.module.css';

export default function NavBar() {

  const pathname = usePathname();

  return (

    <aside>
      <div className={styles.navCate}>

        <nav className="nav-categories" aria-label="Navegação de páginas">   

        <span className={styles.navTitle}>Páginas</span>

        <Link href="/" className={pathname === '/' ? styles.navActive : styles.navInactive}>Introdução</Link>

        <Link href="/page2" className={pathname === '/page2' ? styles.navActive : styles.navInactive}>Viés Social</Link>

        <Link href="/page3" className={pathname === '/page3' ? styles.navActive : styles.navInactive}>Como Iniciar</Link>

        </nav>
      </div>
    </aside >
        
  );
}
