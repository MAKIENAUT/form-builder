import React from "react"
import { Inter } from 'next/font/google'
import NavBar from "../components/NavBar";


const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'AI Assisted Form Builder',
  description: 'Ewan ko pa ahhahaha',
}

function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <NavBar></NavBar>
        {children}
      </body>
    </html>
  );
}

export default RootLayout;

