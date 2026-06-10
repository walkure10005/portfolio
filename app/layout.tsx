import type { Metadata } from "next";
import { Inter as FontSans } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { ThemeProvider } from "@/components/theme-provider";
import { cn } from "@/lib/utils";
import { CursorGlow } from "@/components/ui/cursor-glow";
import { PerformanceMonitor } from "@/components/ui/performance-monitor";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "Benjamin Miller — Software Developer",
  description: "Portfolio of Benjamin Miller, a Software Engineer and Technical Leader with 8+ years of experience specializing in EdTech, AI-powered learning platforms, and full-stack development. Explore my projects, leadership achievements, mentorship work, and collaborations across global teams.",
  keywords: ["Software Engineer", "Next.js", "React", "TypeScript", "Tailwind CSS", "Node.js", "Portfolio", "Developer", "Data Scientist", "Research"],
  authors: [{ name: "Benjamin Miller" }],
  creator: "Benjamin Miller",
  metadataBase: new URL("https://cedric-dev.netlify.app/"),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://cedric-dev.netlify.app/",
    siteName: "Benjamin Miller Portfolio",
    title: "Benjamin Miller — Software Developer",
    description: "Portfolio of Benjamin Miller, a Software Engineer and Technical Leader with 8+ years of experience specializing in EdTech, AI-powered learning platforms, and full-stack development. Explore my projects, leadership achievements, mentorship work, and collaborations across global teams.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Benjamin Miller — Software Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Benjamin Miller — Software Developer",
    description: "Portfolio of Benjamin Miller, a Software Engineer and Technical Leader with 8+ years of experience specializing in EdTech, AI-powered learning platforms, and full-stack development. Explore my projects, leadership achievements, mentorship work, and collaborations across global teams.",
    images: ["/og-image.jpg"],
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
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable
        )}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
          disableTransitionOnChange
        >
          <Header />
          <main className="min-h-screen">
            {children}
          </main>
          <Footer />
          <CursorGlow />
          <PerformanceMonitor />
        </ThemeProvider>
      </body>
    </html>
  );
}
