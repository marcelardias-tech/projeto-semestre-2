import Link from 'next/link';
import styles from './navBar.modules.css';

export default function navBar() {
  return (
    <aside className={styles.navBar}>
      <div className={styles.navBarContainer}>
        
        <nav className={styles.menuBloco}>
          <h3 className={styles.tituloBloco}>Conteúdo principal</h3>
          <ul className={styles.menuList}>
            <li>
              <Link href="/index" className={styles.active}>
                <img src="/icons/home.png" alt="icons" /> Introdução
              </Link>
            </li>
            <li>
              <Link href="/page2">
                <img src="" alt="icons" />tutoriais e primeiros passos
              </Link>
            </li>
            <li>
              <Link href="/page3">
                <img src="/" alt="icons" /> Recursos
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </aside>
  );
}