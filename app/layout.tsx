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
    "Pro Lawn & Landscaping | Landscaping in Greeley, CO",
  description:
    "Professional landscaping and lawn care services in Greeley, Colorado. Call (970) 576-8218 for a quote.",
  keywords: [
    "Greeley landscaping",
    "Greeley lawn care",
    "landscaping Greeley CO",
    "lawn maintenance Greeley",
    "yard care Greeley CO",
  ],
  openGraph: {
    title: "Pro Lawn & Landscaping — Greeley, CO",
    description:
      "Professional landscaping and lawn care services in Greeley, Colorado.",
    type: "website",
    locale: "en_US",
    images: [{ url: "/images/hero.png", width: 1408, height: 768 }],
  },
  icons: {
    icon: [
      { url: "/icon-light-32x32.png", media: "(prefers-color-scheme: light)" },
      { url: "/icon-dark-32x32.png", media: "(prefers-color-scheme: dark)" },
      { url: "/icon.svg", type: "image/svg+xml" },
    ],
    apple: "/apple-icon.png",
  },
}


export const viewport: Viewport = {
  colorScheme: 'light',
  themeColor: '#f7f4ee',
  width: 'device-width',
  initialScale: 1,
}

const localBusinessJsonLd = {
  "@context": "https://schema.org",
  "@type": "LandscapingBusiness",
  name: "Pro Lawn & Landscaping",
  telephone: "+1-970-576-8218",
  address: {
    "@type": "PostalAddress",
    streetAddress: "5212 W F St",
    addressLocality: "Greeley",
    addressRegion: "CO",
    postalCode: "80631",
    addressCountry: "US",
  },
  areaServed: "Greeley, CO",
  slogan: "Professional landscaping that keeps your property looking its best.",
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
