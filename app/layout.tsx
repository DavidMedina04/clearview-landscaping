import { Analytics } from '@vercel/analytics/next'
import { Inter, Manrope } from 'next/font/google'
import type { Metadata, Viewport } from 'next'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-body',
})

const manrope = Manrope({
  subsets: ['latin'],
  variable: '--font-display',
})

export const metadata: Metadata = {
  title: 'ClearView Landscaping | Landscape Design & Installation',
  description: 'Landscape remodeling, patios and pavers, outdoor living, turf, irrigation, and complete yard transformations across Southern California.',
  generator: 'Next.js',
  openGraph: {
    title: 'ClearView Landscaping | Landscape Design & Installation',
    description: 'Landscape remodeling, patios and pavers, outdoor living, turf, and irrigation across Southern California.',
    type: 'website',
  },
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export const viewport: Viewport = {
  colorScheme: 'light',
  themeColor: '#ffffff',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${manrope.variable} antialiased`}>
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
