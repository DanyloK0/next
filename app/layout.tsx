import React from 'react';
import Head from 'next/head'
import './globals.css'
import { Inter } from 'next/font/google'
import Footer from './components/footer/footer'
import Header from './components/header/header'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <Head>
        <link href="https://fonts.googleapis.com/css2?family=Lato:wght@100&display=swap" rel="stylesheet" />
      </Head>
      <body>
        <Header name='Sydema' role='Amministratore'/>
          {children}
        {/* <Footer/> */}
      </body>
    </html>
  )
}
