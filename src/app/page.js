import Image from "next/image";
import Link from "next/link";
import styles from "./page.module.css";

export default function Home() {
  return (
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
              height={400}
              priority
            />
          </div>
        </div>

        
        <div className={styles.glassBox}>
          <article className={styles.card}>
            <p>Seu texto aqui...</p>
          </article>
        </div>

        
        <div className={styles.glassBox}>
          <article className={styles.card} aria-labelledby="gallery-title">
            <header className={styles.cardHeader}>
              <div className={styles.barraTitulo}><h2 id="gallery-title">Exemplos de Frutiger Aero</h2></div>
              
              <p className={styles.description}>
                Aqui estão alguns exemplos do estilo. Você pode clicar nas imagens para vê-las em tamanho real. Confira também o{" "}
                <Link
                  href="https://cari.institute/aesthetics/frutiger-aero"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  CARI Institute
                </Link>.
              </p>
            </header>
            <div className={styles.galleryGrid} />
          </article>
        </div>
      </section>
    </main>
  );
}