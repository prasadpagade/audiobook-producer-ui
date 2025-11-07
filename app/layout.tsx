import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Audiobook Producer | AI-Powered Text-to-Audio',
  description: 'Transform your manuscripts into polished, lifelike audiobooks automatically. From raw text to ready-to-listen in three effortless steps.',
  keywords: ['audiobook', 'text-to-speech', 'AI', 'automation', 'TTS', 'audio production'],
  authors: [{ name: 'Prasad Pagade' }],
  openGraph: {
    title: 'Audiobook Producer',
    description: 'AI-powered audiobook generation from text',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
