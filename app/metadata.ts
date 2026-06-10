import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Cedric Pansky — Senior Software Engineer',
  description: 'Portfolio of Cedric Pansky, Computer Science Engineer & PhD Candidate and freelance AI & full‑stack engineer specializing in Python. Explore case studies, experience, and get in touch.',
  keywords: [
    'AI Architect',
    'Full-Stack Engineer', 
    'Machine Learning Engineer',
    'Python Developer',
    'PhD Candidate',
    'Computer Science Engineer',
    'PhD',
    'Freelancer',
    'INPT',
    'Prague',
    'Rabat',
    'Portfolio',
    'Web Privacy'
  ],
  authors: [{ name: 'Cedric Pansky', url: 'https://cedric-dev.netlify.app/' }],
  creator: 'Cedric Pansky',
  publisher: 'Cedric Pansky',
  metadataBase: new URL('https://cedric-dev.netlify.app/'),
  alternates: {
    canonical: 'https://cedric-dev.netlify.app/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://cedric-dev.netlify.app/',
    siteName: 'Cedric Pansky Portfolio',
    title: 'Cedric Pansky — Senior Software Engineer',
    description: 'Portfolio of Cedric Pansky, Computer Science Engineer & PhD Candidate and freelance AI & full‑stack engineer specializing in Python. Explore case studies, experience, and get in touch.',
    images: [
      {
        url: '/logo.png',
        width: 1200,
        height: 630,
        alt: 'Cedric Pansky - Senior Software Engineer',
        type: 'image/jpeg',
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@cedricpansky',
    creator: '@cedricpansky',
    title: 'Cedric Pansky — Senior Software Engineer',
    description: 'Portfolio of Cedric Pansky, Computer Science Engineer & PhD Candidate and freelance AI & full‑stack engineer specializing in Python. Explore case studies, experience, and get in touch.',
    images: ['/og-image.jpg'],
  },
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
  verification: {
    // Add verification IDs when available
    // google: 'google-verification-code',
    // yandex: 'yandex-verification-code',
    // yahoo: 'yahoo-verification-code',
  },
  category: 'technology',
  classification: 'Portfolio Website',
  other: {
    'mobile-web-app-capable': 'yes',
    'apple-mobile-web-app-capable': 'yes',
    'apple-mobile-web-app-status-bar-style': 'black-translucent',
    'theme-color': '#100C08',
    'color-scheme': 'dark',
  },
}

export default metadata
