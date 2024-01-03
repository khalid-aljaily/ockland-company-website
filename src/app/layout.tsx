import type { Metadata } from 'next'
import { Inter_Tight } from 'next/font/google'
import './globals.css'
import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import Head from 'next/head'
import Script from 'next/script'

const inter = Inter_Tight({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Oakland',
  description: 'Oakland energy solutions company website',
  
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
    
  
      <body className={inter.className+' '+' px-6 md:px-[100px] relative'}>
        <Navbar/>
        {children}
        <Footer />

      </body>
    </html>
  )
}
