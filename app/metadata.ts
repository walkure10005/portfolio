import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Benjamin Miller — Software Developer',
  description: 'Portfolio of Benjamin Miller, Computer Science Engineer & PhD Candidate and freelance AI & full‑stack engineer specializing in Python. Explore case studies, experience, and get in touch.',
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
  authors: [{ name: 'Benjamin Miller', url: 'https://cedric-dev.netlify.app/' }],
  creator: 'Benjamin Miller',
  publisher: 'Benjamin Miller',
  metadataBase: new URL('https://cedric-dev.netlify.app/'),
  alternates: {
    canonical: 'https://cedric-dev.netlify.app/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://cedric-dev.netlify.app/',
    siteName: 'Benjamin Miller Portfolio',
    title: 'Benjamin Miller — Software Developer',
    description: 'Portfolio of Benjamin Miller, Computer Science Engineer & PhD Candidate and freelance AI & full‑stack engineer specializing in Python. Explore case studies, experience, and get in touch.',
    images: [
      {
        url: '/logo.png',
        width: 1200,
        height: 630,
        alt: 'Benjamin Miller - Software Developer',
        type: 'image/jpeg',
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@miller',
    creator: '@miller',
    title: 'Benjamin Miller — Software Developer',
    description: 'Portfolio of Benjamin Miller, Computer Science Engineer & PhD Candidate and freelance AI & full‑stack engineer specializing in Python. Explore case studies, experience, and get in touch.',
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
