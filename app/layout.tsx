import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import CustomThemeProvider from './components/CustomThemeProvider'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'News Wallet App',
  description: 'Latest Crypto News on Your Wallet',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} min-h-screen mx-auto flex flex-col bg-white 
        dark:bg-gray-900`}
      >
        <CustomThemeProvider>
          <>
            <Navbar />
            <main className="flex flex-col flex-1 w-full">{children}</main>
            <Footer />
          </>
        </CustomThemeProvider>
      </body>
    </html>
  )
}
