'use client'
import { useState } from "react";
import "./globals.css";
import Header from "@/components/Header";
import NavBar from "@/components/NavBar/navBar";

export const metadata = {
  title: "Cyberdecks",
  description: "de um viés social e como entrar nesse mundo",
  charset: 'UTF-8',
  author: 'Marcela Rocha Dias',
  keywords: 'HTML, CSS, JavaScript, React, Next.js',

};

export default function RootLayout({ children }) {

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  };

  return (
    <html lang="en" >
      <body className={styles.bodyLayout}>
        <Header onToggleMenu={toggleMenu} isMenuOpen={isMenuOpen} />
        <div className={styles.mainContainer}><aside className={`${StyleS.sidebar} ${isMenuOpen ? styles.open : ''}`}>
          <NavBar />
        </aside>
          <main className={styles.content}>{children}
          </main>
        </div>
      </body>
    </html>
  );
}