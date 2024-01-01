import React from "react"
import { Inter } from 'next/font/google'
import NavBar from "../components/NavBar";
import Toolkit from '@/components/Toolkit'


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
        <main>
        <Toolkit></Toolkit>
        {children}
        </main>
      </body>
    </html>
  );
}

export default RootLayout;

