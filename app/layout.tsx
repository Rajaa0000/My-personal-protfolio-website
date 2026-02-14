import Footer from "@/components/essentials/Footer";
import Nav from "@/components/essentials/Nav";
import "./globals.css";
import React from "react"; // 1. Import React to use ReactNode

export const metadata = {
  title: "My Website",
  description: "Funky personal website",
};

// 2. Define the interface for your props
interface LayoutProps {
  children: React.ReactNode;
}

// 3. Apply the type to the component
function Layout({ children }: LayoutProps) {
  return (
    <html lang="en">
      <head>
        <link rel="stylesheet" type='text/css' href="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/devicon.min.css" />
      </head>
      <body>
        <Nav />

        <div className="py-[3rem]">{children}</div>
        <Footer />
        
      </body>
    </html>
  );
}

export default Layout;