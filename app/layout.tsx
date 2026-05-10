import type { Metadata, Viewport } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Playfair_Display } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const geist = Geist({ 
  subsets: ["latin"],
  variable: '--font-geist',
})

const geistMono = Geist_Mono({ 
  subsets: ["latin"],
  variable: '--font-geist-mono',
})

const playfair = Playfair_Display({ 
  subsets: ["latin"],
  variable: '--font-playfair',
})

export const metadata: Metadata = {
  title: 'MJ & VP | Construçao Civil',
  description: 'Especialistas em construção residencial, comercial e industrial. Transformando sonhos em realidade com qualidade e compromisso.',
  keywords: ['construção civil', 'construtora', 'construção residencial', 'construção comercial', 'remodelação', 'Portugal'],
  authors: [{ name: 'MJ & VP Construção Civil' }],
  openGraph: {
    title: 'MJ & VP | Construçao Civil',
    description: 'Especialistas em construção residencial, comercial e industrial. Transformando sonhos em realidade.',
    type: 'website',
    locale: 'pt_PT',
  },
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#8B4513',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-PT" className="bg-background">
      <body className={`${geist.variable} ${geistMono.variable} ${playfair.variable} font-sans antialiased`}>
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
