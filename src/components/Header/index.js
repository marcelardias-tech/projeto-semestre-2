'use client';
import Image from 'next/image';
import styles from './Header.module.css';

export default function Header({ onToggleMenu, isMenuOpen }) {
  return (
    <header className={styles.container}>
      <div className={styles.logoGroup}>
        <Image
          src="/images/frutiger_aero-removebg-preview.png"
          className={styles.logo}
          alt="Logotipo Frutiger Aero"
          width={65}
          height={65}
          priority
        />

        <div className={styles.content}>
          <span className={styles.title}>O Arquivo Frutiger Aero</span>
          <span></span>

          <button 
            type="button" 
            className={styles.toggleBtn} 
            onClick={onToggleMenu}
            aria-label="Alternar exibição do menu"
          >
            <span className={styles.toggleText}>
              {isMenuOpen ? 'Fechar >' : 'Menu >'}
            </span>
            <Image
              src="/images/frutiger_aero_sticker-removebg-preview.png"
              alt=""
              width={50}
              height={45}
            />
          </button>
        </div>
      </div>
    </header>
  );
}