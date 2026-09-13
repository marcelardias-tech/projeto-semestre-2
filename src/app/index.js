import Image from "next/image";
import styles from "./index.module.css";
import Link from "next/link";

export default function index() {
  return (

    <main id="mainContent" aria-label="Conteúdo principal">
      <section>
        <header>
          <h1>
            <font dir="auto" style="vertical-align: inherit;">
              <font dir="auto" style="vertical-align: inherit;">Página de Introdução</font>
            </font>
          </h1>
          <div class="glass-borders">
            <div class="section-banners aero-borders">
              <Image src="images/themes/default/introduction_banner.jpg?v=1.1" alt="Imagem do
cabeçalho" title="Milhares de papéis de parede, músicas, vídeos e muito mais!"
                id="introBanner"/>
            </div>
          </div>
        </header>
        <div class="glass-borders">
          <article class="styled-containers styled-containers-spaced aero-borders">
            <p> </p>
            <p> </p>
            <p> </p>
            <p> </p>
            <p> </p>
            <p> </p>
          </article>
        </div>
        <div class="glass-borders">
          <article class="gallery-articles styled-containers styled-containers-spaced aero-borders" aria-label="Galeria com exemplos do Frutiger Aero">
            <header>
              <h2> flex
                <font dir="auto" style="vertical-align: inherit;">
                  <font dir="auto" style="vertical-align: inherit;">Exemplos de Frutiger
                    Aero</font>
                </font>
              </h2>
              <p style="margin-bottom: 5px">
                <font dir="auto" style="vertical-align: inherit;">
                  <font dir="auto" style="vertical-align: inherit;">
                    Aqui estão alguns exemplos do estilo. Você pode clicar nas imagens para vê-las em tamanho real. Confira também o
                  </font>
                </font>
                <Link href="https://cari.institute/aesthetics/frutiger-aero"></Link>
                <font dir="auto" style="vertical-align: inherit;" />
              </p>
            </header>
            <div class="gallery-containers"> </div>
          </article>
        </div>
      </section>
    </main>
  );
}
