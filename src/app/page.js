import Image from "next/image";
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
              height={300}
              priority
            />
          </div>
        </div>

        
        <div className={styles.glassBox}>
          <article className={styles.card}>
            <p>Que bom ter você por aqui! Se você caiu neste site por acaso ou se já é fã de tecnologia retrô-futurista, este espaço é o meu cantinho para catalogar e destrinchar um universo fascinante: o dos cyberdecks.A ideia de criar este projeto surgiu de forma despretensiosa, depois que eu estava navegando pelo TikTok e me deparei com um vídeo incrível. Esse vídeo falava sobre como a comunidade maker está mudando e, especificamente, deu um nome maravilhoso para a participação feminina crescente na criação dessas máquinas personalizadas: o termo Cyberfada.Essa palavra me deu um estalo. Ao longo das próximas páginas, você vai entender exatamente o que são os cyberdecks — esses computadores portáteis e artesanais com visual industrial —, mas o meu grande foco aqui é te mostrar o viés social por trás disso. Quero te convidar a refletir sobre como a cultura de construir o próprio hardware tem sido uma ferramenta de inclusão digital absurda, servindo de porta de entrada para que mais mulheres tomem as rédeas do mundo da tecnologia.De uns tempos para cá, algo muito foda aconteceu: o movimento dos cyberdecks estourou e cresceu demais, e com isso surgiu uma vertente estética fortemente feminina. O visual das máquinas deixou de ser apenas aquela caixa preta militar super pesada e sisuda e ganhou novas cores, formatos orgânicos, delicadeza e personalizações únicas que mostram que hardware também é espaço de expressão, design e arte feita por nós. É a tecnologia sendo humanizada e moldada do nosso jeito.Por fim, se você terminar de ler tudo e sentir aquela coceira nas mãos para criar alguma coisa, a última seção do site foi feita sob medida. Deixei uma curadoria caprichada com links úteis, vídeos explicativos e perfis de criadores e criadoras que dão o passo a passo, truques e toda a orientação que você precisa para tirar a ideia do papel e iniciar o seu próprio projeto de cyberdeck.Ajeite-se na cadeira, navegue pelo menu lateral e divirta-se descobrindo esse mundo livre, customizado e totalmente open source!</p>
          </article>
        </div>

        
        <div className={styles.glassBox}>
          <article className={styles.card} aria-labelledby="gallery-title">
            <header className={styles.cardHeader}>
              <div className={styles.barraTitulo}><h2 id="gallery-title"> O que são Cyberdecks</h2></div>
              
              <p className={styles.description}>
                Cyberdecks (ou só decks, para os íntimos) são computadores portáteis, modulares e totalmente customizados que a gente constrói de forma artesanal. Sabe aquela vibe industrial e futurista do movimento Cyberpunk e da ficção científica dos anos 80 e 90? É exatamente isso, só que trazido para o mundo real por entusiastas e pela comunidade maker.Se você curte literatura clássica, deve lembrar que o termo nasceu lá em 1984 com o William Gibson no livro Neuromancer. Na ficção, os hackers usavam essas máquinas conectadas direto no cérebro para invadir a matriz da internet. No nosso mundo, a gente não espeta cabos na cabeça (ainda!), mas cria computadores físicos únicos que priorizam três pilares: autonomia, a liberdade de consertar o próprio hardware e, claro, muito estilo.Ao contrário de um notebook comercial que você compra pronto em uma loja — que é fino, lacrado, difícil de mexer e igual ao de todo mundo —, o cyberdeck celebra a individualidade. Eles costumam ter carcaças bem exóticas e resistentes (como maletas militares ou caixas impressas em 3D), telas em formatos diferentões (como as ultra-wide que parecem barras) e quase sempre usam teclados mecânicos compactos para dar aquela experiência tátil na digitação. No coração do projeto, o "cérebro" geralmente é um Raspberry Pi ou placas parecidas, o que deixa tudo mais acessível e fácil de modificar.🌐
              </p>
            </header>
            <div className={styles.galleryGrid} />
          </article>

          <div className={styles.glassBox}>
          <div className={styles.bannerWrapper}>
            <Image
              src="/images/People are going viral for building homemade___.jpeg"
              alt="Banner explicativo da página de introdução"
              id="introBanner2"
              width={800}
              height={300}
              priority
            />
          </div>
        </div>


        </div>
      </section>
    </main>
  );
}