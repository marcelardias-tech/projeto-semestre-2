import Image from "next/image";
import Link from "next/link";
import styles from "./page.module.css";

export default function Home() {
  return (

      <main id="mainContent" aria-label="Conteúdo principal">
        <section>
          <header>
            <h1>Página de Introdução</h1>
            <div className="glass-borders">
              <div className="section-banners aero-borders">
                <Image
                  src="/images/themes/default/introduction_banner.jpg"
                  alt="Imagem do cabeçalho"
                  id="introBanner"
                  width={800}
                  height={400}
                  priority
                />
              </div>
            </div>
          </header>

          <div className="glass-borders">
            <article className="styled-containers styled-containers-spaced aero-borders">
              <p>Seu texto aqui...</p>
            </article>
          </div>

          <div className="glass-borders">
            <article
              className="gallery-articles styled-containers styled-containers-spaced aero-borders"
              aria-label="Galeria com exemplos do Frutiger Aero"
            >
              <header>
                <h2>Exemplos de Frutiger Aero</h2>
                <p style={{ marginBottom: "5px" }}>
                  Aqui estão alguns exemplos do estilo. Você pode clicar nas imagens para vê-las em tamanho real. Confira também o{" "}
                  <Link href="https://cari.institute/aesthetics/frutiger-aero" target="_blank" rel="noopener noreferrer">
                    CARI Institute
                  </Link>.
                </p>
              </header>
              <div className="gallery-containers"></div>
            </article>
          </div>
        </section>
      </main>
    
  );
}