import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Toaster } from "@/components/ui/toaster"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Ashtavakrah Technologies Pvt Ltd - Premier STEM Education & Scientific Learning in New Delhi",
  description:
    "Ashtavakrah Technologies Pvt Ltd is New Delhi's leading STEM education provider, offering hands-on microcontroller workshops, AI/ML training, quantum computing courses, robotics programs, and scientific DIY kits for school students. Launching 2025 with innovative educational solutions.",
  keywords: [
    "Ashtavakrah Technologies",
    "STEM education New Delhi",
    "Arduino programming workshops",
    "microcontroller training",
    "AI ML courses for students",
    "quantum computing education",
    "robotics workshops Delhi",
    "scientific DIY kits",
    "school STEM programs",
    "electronics programming",
    "IoT training",
    "3D printing courses",
    "educational technology",
    "hands-on learning",
    "Delhi NCR STEM",
    "student workshops",
    "science education",
    "technology training",
  ].join(", "),
  authors: [{ name: "Ashtavakrah Technologies Pvt Ltd" }],
  creator: "Ashtavakrah Technologies Pvt Ltd",
  publisher: "Ashtavakrah Technologies Pvt Ltd",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://ashtavakrah-technologies.vercel.app"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Ashtavakrah Technologies Pvt Ltd - Premier STEM Education in New Delhi",
    description:
      "Leading STEM education provider offering Arduino workshops, AI/ML training, quantum computing, robotics, and scientific DIY kits for students in New Delhi. Launching 2025.",
    url: "https://ashtavakrah-technologies.vercel.app",
    siteName: "Ashtavakrah Technologies Pvt Ltd",
    images: [
      {
        url: "/ashtavakrah-logo.png",
        width: 1200,
        height: 630,
        alt: "Ashtavakrah Technologies - STEM Education Logo",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ashtavakrah Technologies Pvt Ltd - STEM Education New Delhi",
    description:
      "Premier STEM education provider offering Arduino, AI/ML, robotics workshops for students in New Delhi. Launching 2025.",
    images: ["/ashtavakrah-logo.png"],
    creator: "@AshtavakrahTech",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [
      { url: "/ashtavakrah-logo.png", sizes: "32x32", type: "image/png" },
      { url: "/ashtavakrah-logo.png", sizes: "16x16", type: "image/png" },
    ],
    shortcut: "/ashtavakrah-logo.png",
    apple: [{ url: "/ashtavakrah-logo.png", sizes: "180x180", type: "image/png" }],
    other: [
      {
        rel: "apple-touch-icon-precomposed",
        url: "/ashtavakrah-logo.png",
      },
    ],
  },
  manifest: "/site.webmanifest",
  category: "education",
  classification: "STEM Education Provider",
  generator: "Next.js",
  applicationName: "Ashtavakrah Technologies",
  referrer: "origin-when-cross-origin",
  colorScheme: "light",
  themeColor: "#8B5CF6",
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 5,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en-IN">
      <head>
        <link rel="icon" href="/ashtavakrah-logo.png" type="image/png" sizes="32x32" />
        <link rel="icon" href="/ashtavakrah-logo.png" type="image/png" sizes="16x16" />
        <link rel="apple-touch-icon" href="/ashtavakrah-logo.png" sizes="180x180" />
        <link rel="apple-touch-icon-precomposed" href="/ashtavakrah-logo.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="theme-color" content="#8B5CF6" />
        <meta name="msapplication-TileColor" content="#8B5CF6" />
        <meta name="msapplication-config" content="/browserconfig.xml" />

        {/* Structured Data for SEO */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "EducationalOrganization",
              name: "Ashtavakrah Technologies Pvt Ltd",
              alternateName: "Ashtavakrah Technologies",
              url: "https://ashtavakrah-technologies.vercel.app",
              logo: "https://ashtavakrah-technologies.vercel.app/ashtavakrah-logo.png",
              description:
                "Leading STEM education provider in New Delhi offering Arduino workshops, AI/ML training, quantum computing, robotics, and scientific DIY kits for students.",
              address: {
                "@type": "PostalAddress",
                addressLocality: "New Delhi",
                addressRegion: "Delhi",
                addressCountry: "IN",
              },
              contactPoint: {
                "@type": "ContactPoint",
                telephone: "+91-9999999999",
                contactType: "customer service",
                email: "info@ashtavakrah.com",
              },
              sameAs: [
                "https://www.linkedin.com/company/ashtavakrah-technologies",
                "https://twitter.com/AshtavakrahTech",
              ],
              foundingDate: "2024",
              founder: {
                "@type": "Person",
                name: "Ashtavakrah Technologies Team",
              },
              areaServed: {
                "@type": "Place",
                name: "New Delhi, India",
              },
              serviceType: [
                "STEM Education",
                "Arduino Programming",
                "AI/ML Training",
                "Robotics Workshops",
                "Quantum Computing Education",
              ],
            }),
          }}
        />
      </head>
      <body className={inter.className}>
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
        <Toaster />
      </body>
    </html>
  )
}
