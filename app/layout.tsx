import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Fraunces, Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const fraunces = Fraunces({
  subsets: ['latin'],
  variable: '--font-fraunces',
  axes: ['opsz'],
})

export const metadata: Metadata = {
  title:
    'Cnew’s Quality Residential Work | Handyman & Landscaping in Fort Collins, CO',
  description:
    'Handyman, landscaping, painting, door installation, plumbing fixtures, gutter and window cleaning, and home maintenance in Fort Collins, Colorado. Call +1 970-691-0984 for a quote.',
  keywords: [
    'Fort Collins handyman',
    'Fort Collins landscaping',
    'exterior painting Fort Collins',
    'drywall repair Fort Collins',
    'door installation Fort Collins',
    'gutter cleaning Fort Collins',
    'lawn care Fort Collins',
    'home repair Fort Collins CO',
  ],
  openGraph: {
    title: 'Cnew’s Quality Residential Work — Fort Collins, CO',
    description:
      'Handyman, landscaping, and home improvement services in Fort Collins. Request a quote today.',
    type: 'website',
    locale: 'en_US',
    images: [{ url: '/images/hero.png', width: 1408, height: 768 }],
  },
  icons: {
    icon: [
      { url: '/icon-light-32x32.png', media: '(prefers-color-scheme: light)' },
      { url: '/icon-dark-32x32.png', media: '(prefers-color-scheme: dark)' },
      { url: '/icon.svg', type: 'image/svg+xml' },
    ],
    apple: '/apple-icon.png',
  },
}

export const viewport: Viewport = {
  colorScheme: 'light',
  themeColor: '#f7f4ee',
  width: 'device-width',
  initialScale: 1,
}

const localBusinessJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'HomeAndConstructionBusiness',
  name: 'Cnew’s Quality Residential Work',
  telephone: '+1-970-691-0984',
  address: {
    '@type': 'PostalAddress',
    streetAddress: '3406 Justice Ct',
    addressLocality: 'Fort Collins',
    addressRegion: 'CO',
    addressCountry: 'US',
  },
  areaServed: 'Fort Collins, CO',
  slogan:
    'I treat every project as if it were my property. Quality work is what I do.',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${fraunces.variable} scroll-smooth bg-background`}
    >
      <body className="font-sans antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJsonLd) }}
        />
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
