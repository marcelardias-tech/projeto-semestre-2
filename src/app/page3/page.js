'use client';
import styles from './page.module.css';
import Image from 'next/image';
import Link from 'next/link';

export default function Page3() {
    return (
        <main id="mainContent" aria-label="Conteúdo principal">
            <section>

                <div className={styles.barraTitulo}>
                    <h1 className={styles.title}>Guia Prático: Como Iniciar Seu Projeto</h1>
                </div>

                <div className={styles.glassBox}>
                    <article className={styles.card}>
                        <p className={styles.description}>
                            Se você chegou até aqui, é porque a ideia de construir seu próprio computador modular mexeu com você! Olhando de fora, enfiar a cara no mundo das placas e da solda parece assustador, mas a verdade é que o universo dos cyberdecks é totalmente aberto e acolhedor. Não existe um jeito "errado" de fazer; a regra número um é usar a criatividade e o que você tiver à mão.
                        </p>
                        <p className={styles.description}>
                            Para te ajudar a dar o primeiro passo sem se perder, eu montei uma curadoria com os materiais básicos que você vai precisar e os melhores cantos da internet (com canais, fóruns e subreddits) para você buscar inspiração, tirar dúvidas e ver o passo a passo de outros projetos. Bora botar a mão na massa?
                        </p>
                    </article>
                </div>

                <div className={styles.glassBox}>
                    <article className={styles.card}>
                        <h2 style={{ fontSize: '1.2rem', marginBottom: '15px', color: '#ffffff' }}>
                            🎒 O Checklist de Materiais Básicos
                        </h2>
                        <p className={styles.description}>
                            Todo cyberdeck precisa de uma base para funcionar. Você não precisa comprar tudo de uma vez, e muito disso dá para garimpar em sucatas eletrônicas:
                        </p>
                        <ul style={{ paddingLeft: '20px', color: '#e2f0e2', lineHeight: '1.8', fontSize: '0.95rem' }}>
                            <li><strong>O Cérebro (Computador de Placa Única):</strong> Um Raspberry Pi (o Pi 4 ou Pi 5 são ótimos), ou alternativas mais baratas como Orange Pi ou Rock Pi.</li>
                            <li><strong>A Tela (Display):</strong> Telas pequenas de 5 a 7 polegadas com entrada HDMI (muito usadas em telas reversas de carro ou projetos Arduino) ou telas no formato <em>ultra-wide</em> de barra.</li>
                            <li><strong>Energia (Bateria):</strong> Um bom Power Bank (carregador portátil de celular) com boa amperagem para alimentar a placa e a tela longe da tomada.</li>
                            <li><strong>Teclado:</strong> Um teclado mecânico compacto (60% ou de tamanho de bolso) ou teclados integrados retrôs.</li>
                            <li><strong>A Carcaça (A Armadura):</strong> Uma maleta estanque (estilo militar), uma caixa antiga de videogame, ou um design personalizado impresso em 3D.</li>
                            <li><strong>Ferramentas de Criação:</strong> Um ferro de solda simples, estanho, fita isolante e alguns cabos adaptadores (como mini-HDMI).</li>
                        </ul>
                    </article>
                </div>
                
                <div className={styles.glassBox}>
                    <article className={styles.card}>
                    
                        <div className={styles.barraTituloInterna}>
                            <h2 className={styles.titleInterno}>Exemplos de Cyberdecks</h2>
                        </div>
                        
                        <p className={styles.description}>
                            Veja abaixo duas referências clássicas de montagem. À esquerda, um deck compacto integrado em carcaça impressa; à direita, o clássico modelo robusto montado dentro de uma maleta militar à prova d'água.
                        </p>

                        <div className={styles.gridDoisBanners}>
    
                            <div className={styles.bannerWrapperExemplo}>
                                <Image
                                    src="/images/28288303907736831.jpeg"
                                    alt="Exemplo de Cyberdeck customizado modelo 1"
                                    width={400}
                                    height={250}
                                    priority
                                />
                            </div>

                            <div className={styles.bannerWrapperExemplo}>
                                <Image
                                    src="/images/13370130139507088.jpeg" 
                                    alt="Exemplo de Cyberdeck customizado modelo 2"
                                    width={400}
                                    height={250}
                                    priority
                                />
                            </div>

                        </div>
                    </article>
                </div>

                <div className={styles.glassBox}>
                    <article className={styles.card}>
                        <h2 style={{ fontSize: '1.2rem', marginBottom: '15px', color: '#ffffff' }}>
                            🌐 Onde Aprender e se Inspirar (Links Úteis)
                        </h2>
                        <p className={styles.description}>
                            Aqui estão os principais portais e comunidades mundiais onde os criadores expõem seus projetos e ajudam os iniciantes com esquemas elétricos e ideias:
                        </p>

                        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginTop: '15px' }}>
                            <div>
                                <strong>📍 Cyberdeck Café:</strong> O santuário dos decks. Um site cheio de entrevistas, artigos detalhados e uma galeria absurda de projetos reais.
                                <br />
                                <Link href="https://cyberdeck.cafe" target="_blank" className={styles.linkAero}>Visitar Cyberdeck Café →</Link>
                            </div>

                            <div>
                                <strong>📍 Subreddit r/cyberdecks:</strong> A maior comunidade ativa do mundo. É o lugar perfeito para postar suas dúvidas, ver o que as pessoas estão inventando e achar esquemas de montagem.
                                <br />
                                <Link href="https://reddit.com" target="_blank" className={styles.linkAero}>Explorar o Reddit r/cyberdecks →</Link>
                            </div>

                            <div>
                                <strong>📺 Canal Kamui Cosplay (YouTube):</strong> Embora focado em cosplay, os vídeos de eletrônica e pintura usando materiais termoplásticos e impressões 3D dão dicas incríveis de acabamento para carcaças.
                                <br />
                                <Link href="https://youtube.com" target="_blank" className={styles.linkAero}>Assistir no YouTube →</Link>
                            </div>

                            <div>
                                <strong>📺 Vídeo Guia: "Como fazer um Cyberdeck" (Backyard Tech):</strong> Um excelente ponto de partida em vídeo que mostra a montagem física ligando as peças passo a passo.
                                <br />
                                <Link href="https://youtube.com" target="_blank" className={styles.linkAero}>Pesquisar Guias de Montagem →</Link>
                            </div>
                        </div>
                    </article>
                </div>
            </section>
        </main>
    );
}
