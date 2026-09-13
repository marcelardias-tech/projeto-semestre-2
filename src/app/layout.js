import ClientLayout from "@/components/Layout/clienteLayout";
import "./globals.css";

export const metadata = {
  title: "Cyberdecks",
  description: "de um viés social e como entrar nesse mundo",
  charset: 'UTF-8',
  author: 'Marcela Rocha Dias',
  keywords: 'HTML, CSS, JavaScript, React, Next.js',

};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body className="bodyLayout">
        <ClientLayout>
          {children}
        </ClientLayout>
      </body>
    </html>
  );
}