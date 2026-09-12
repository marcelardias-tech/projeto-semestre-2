'use client'
import styles from './Header.module.css';
import Image from 'next/image';
import { useState } from 'react';

export default function Header({ onToggleMenu, isMenuOpen }) {
    return (
        <header className={styles.headerMain}>
            <div class={styles.headerLogoText}>

                <Image src="/images/frutiger_aero-removebg-preview.png" className={styles.logo} alt="Logotipo típica frutiger aero" width={40} height={40} priority></Image>

                <div className={styles.headerText}>
                    <span className={styles.headerTitle}>
                        0 Arquivo Frutiger Aero
                    </span>

                    <span className={styles.headerMotto}></span>

                    <div className={styles.toggleButtonsDivs} OnClick={onToggleMenu}>
                        <span className={styles.hideNavbarButtonText}>{isMenuOpen ? 'Hide <': 'Menu >'}</span>

                        <Image src='' alt='Botão de aternância de menu' width={25} height={25}></Image>
                    </div>

                </div>
            </div>
        </header>

    )
}
