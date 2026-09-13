'use client'
import { useState } from "react";
import Header from "@/components/Header";
import NavBar from "@/components/NavBar/navBar";
import styles from "@/app/globals.css";

export default function ClientLayout({ children }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <Header onToggleMenu={toggleMenu} isMenuOpen={isMenuOpen} />
      <div className="mainContainer">
        <aside className={`sidebar ${isMenuOpen ? 'open' : ''}`}>
          <NavBar />
        </aside>
        <main className="content">
          {children}
        </main>
      </div>
    </>
  );
}