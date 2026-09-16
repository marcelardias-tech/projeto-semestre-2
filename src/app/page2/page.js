'use client'
import styles from './page.module.css';
import Image from 'next/image';

export default function Page2(){
    return(
        <main id="mainContent" aria-label="Conteúdo principal">
      <section>
        <div className={styles.barraTitulo}>

            <h1 className={styles.title}>Viés Social</h1>

        </div>
       
        
        <div className={styles.glassBox}>
          <div className={styles.bannerWrapper}>
            <Image
              src="/images/how to build a cyberdeck.jpeg"
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
            <p>🌐 O Verdadeiro Impacto: Tecnologia Além das Grandes MarcasSe a gente olhar para o mercado de tecnologia hoje, ele é extremamente elitista. Notebooks novos e potentes custam uma fortuna, e as grandes empresas fazem de tudo para que os aparelhos sejam descartáveis. Eles soldam as peças, colam as baterias e mudam os sistemas só para te forçar a comprar uma máquina nova a cada dois anos. Quem sofre mais com isso? Pessoas periféricas, de baixa renda e mulheres, que muitas vezes são empurradas para a margem do mundo digital por pura falta de grana ou de incentivo.É aí que o movimento dos cyberdecks entra como um verdadeiro ato de rebeldia e inclusão.Para quem não tem milhares de reais para investir em um computador de marca, construir um cyberdeck é uma alternativa revolucionária de baixo custo. A base dessas máquinas geralmente são mini-computadores acessíveis, como o Raspberry Pi, ou até placas e componentes retirados de sucatas eletrônicas e telas antigas. Juntar o útil ao agradável, reciclando carcaças e soldando fios, prova que ter um computador utilitário, potente e conectado não precisa ser um privilégio de quem tem muito dinheiro. É a democratização do hardware na prática.🧚‍♀️ As Cyberfadas e a Conquista do Hardware pelas MulheresE quando a gente fala de gênero, o impacto é ainda mais profundo. Historicamente, a área de infraestrutura, eletrônica e hardware sempre foi um "clube do bolinha" muito hostil para nós, mulheres. Fomos ensinadas a usar o software, mas a parte de abrir a máquina, soldar placa e mexer em circuitos sempre pareceu algo distante.De uns tempos para cá, a comunidade maker viu surgir uma vertente estética e cultural fortíssima liderada por mulheres — as Cyberfadas. Esse movimento provou que o visual de um computador não precisa ser aquela caixa preta militar sem graça; ele pode ter cores, formatos orgânicos, luzes e designs delicados, unindo arte e engenharia.Mais do que estética, a cultura das Cyberfadas quebra a barreira do medo. Quando uma mulher projeta seu próprio deck, escolhe as peças, solda os componentes e configura um sistema Linux (código aberto e livre de rastreamento das Big Techs), ela assume o controle total da tecnologia. Isso dá uma autonomia absurda e serve como uma porta de entrada gigantesca para que mais mulheres entrem de cabeça no mundo da programação, da robótica e da tecnologia avançada.Construir um cyberdeck é dizer que a tecnologia não pertence às grandes corporações bilionárias. Ela pertence a quem tem a criatividade nas mãos para criá-la, modificá-la e consertá-la.</p>
          </article>
        </div>
      </section>
    </main>
    )
}