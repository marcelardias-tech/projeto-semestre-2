'use client'
import styles from './page.module.css';
import Image from 'next/image';

export default function Page2(){
    return(
        <main id="mainContent" aria-label="Conteúdo principal">
      <section>
        <div className={styles.barraTitulo}>

            <h1 className={styles.title}>Página de Introdução</h1>

        </div>
       
        
        <div className={styles.glassBox}>
          <div className={styles.bannerWrapper}>
            <Image
              src="/images/Frutiger Aero Banner personalizado.jpeg"
              alt="Banner explicativo da página de introdução"
              id="introBanner"
              width={800}
              height={300}
              priority
            />
          </div>
        </div>

        
        <div className={styles.glassBox}>
          <article className={styles.card}>
            <p></p>
          </article>
        </div>

        
        <div className={styles.glassBox}>
          <article className={styles.card} aria-labelledby="gallery-title">
            <header className={styles.cardHeader}>
              <div className={styles.barraTitulo}><h2 id="gallery-title"> O que são Cyberdecks</h2></div>
              
              <p className={styles.description}>
               
              </p>
            </header>
            <div className={styles.galleryGrid} />
          </article>
        </div>
      </section>
    </main>
    )
}