import type { Metadata, Viewport } from 'next'
import { Inter, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { ThemeProvider } from '@/components/theme-provider'
import './globals.css'

const inter = Inter({ 
  subsets: ["latin"],
  variable: "--font-inter",
})

const geistMono = Geist_Mono({ 
  subsets: ["latin"],
  variable: "--font-geist-mono",
})

export const metadata: Metadata = {
  metadataBase: new URL('https://saifiqbal.dev'),
  title: {
    default: 'Saif Iqbal | AI-Forward Full-Stack Engineer | React, Next.js, .NET Core',
    template: '%s | Saif Iqbal',
  },
  description: 'AI-Forward Full-Stack Engineer with 3+ years building enterprise applications. Expert in React.js, Next.js, TypeScript, .NET Core, and SQL Server. Specialized in scalable frontend architectures, AI-assisted workflows, and high-performance UI experiences.',
  keywords: [
    'Saif Iqbal',
    'Full-Stack Engineer',
    'Frontend Developer',
    'Backend Developer',
    'React Developer',
    'Next.js Developer',
    'TypeScript',
    '.NET Core',
    'SQL Server',
    'AI Developer',
    'Vercel AI SDK',
    'Bangladesh Developer',
    'Dhaka Developer',
    'Software Engineer',
    'Web Developer',
    'Enterprise Applications',
    'React.js',
    'Vue.js',
    'Tailwind CSS',
    'Redux',
    'Entity Framework Core',
  ],
  authors: [{ name: 'Saif Iqbal', url: 'https://github.com/saaifiqbal' }],
  creator: 'Saif Iqbal',
  publisher: 'Saif Iqbal',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: '/',
    title: 'Saif Iqbal | AI-Forward Full-Stack Engineer',
    description: 'AI-Forward Full-Stack Engineer with 3+ years building enterprise applications. Expert in React.js, Next.js, TypeScript, .NET Core, and SQL Server.',
    siteName: 'Saif Iqbal Portfolio',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Saif Iqbal - Full-Stack Engineer Portfolio',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Saif Iqbal | AI-Forward Full-Stack Engineer',
    description: 'AI-Forward Full-Stack Engineer with 3+ years building enterprise applications. Expert in React.js, Next.js, TypeScript, and .NET Core.',
    images: ['/og-image.jpg'],
    creator: '@saifiqbal',
  },
  icons: {
    icon: [
      { url: '/icon.svg', type: 'image/svg+xml' },
    ],
  },
  manifest: '/manifest.json',
  category: 'technology',
}

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#f8fafc' },
    { media: '(prefers-color-scheme: dark)', color: '#0f172a' },
  ],
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Saif Iqbal',
  url: 'https://saifiqbal.dev',
  image: '/og-image.jpg',
  jobTitle: 'AI-Forward Full-Stack Engineer',
  worksFor: {
    '@type': 'Organization',
    name: 'Ha-Meem Group',
  },
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Dhaka',
    addressCountry: 'Bangladesh',
  },
  email: 'saaifiqbal@gmail.com',
  telephone: '+8801992924645',
  sameAs: [
    'https://github.com/saaifiqbal',
    'https://linkedin.com/in/saif-iqbal-0640a0275',
  ],
  knowsAbout: [
    'React.js',
    'Next.js',
    'TypeScript',
    '.NET Core',
    'SQL Server',
    'AI Development',
    'Frontend Development',
    'Backend Development',
  ],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning className="bg-background">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${inter.variable} ${geistMono.variable} font-sans antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
