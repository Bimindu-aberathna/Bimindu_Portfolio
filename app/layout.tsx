import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { ThemeProvider } from "./providers/theme-provider";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Bimindu Aberathna | Full Stack Developer & Researcher",
  description: "Full Stack Developer specializing in React, Next.js, Node.js, and LLM-based solutions. Building scalable web applications and innovative AI-powered systems.",
  keywords: ["Full Stack Developer", "React", "Next.js", "Node.js", "TypeScript", "LLM", "Web Development", "Portfolio"],
  authors: [{ name: "Bimindu Aberathna" }],
  creator: "Bimindu Aberathna",
  publisher: "Bimindu Aberathna",
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000"),
  openGraph: {
    type: "website",
    url: process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000",
    title: "Bimindu Aberathna | Full Stack Developer & Researcher",
    description: "Full Stack Developer specializing in React, Next.js, Node.js, and LLM-based solutions.",
    siteName: "Bimindu's Portfolio",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Bimindu Aberathna - Full Stack Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Bimindu Aberathna | Full Stack Developer",
    description: "Building scalable web applications and AI-powered solutions.",
    creator: "@bimindu_dev",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    "max-image-preview": "large",
    "max-snippet": -1,
    "max-video-preview": -1,
  },
  alternates: {
    canonical: process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <head> 
        {/* Phosphor Icons */}
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/phosphor-icons@1.4.2/src/css/icons.min.css"></link>
        
        {/* Structured Data (JSON-LD) */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Bimindu Aberathna",
              url: process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000",
              jobTitle: "Full Stack Developer",
              email: "aberathnabimindu@gmail.com",
              telephone: "+94778910364",
              location: {
                "@type": "Place",
                name: "Colombo, Sri Lanka",
              },
              sameAs: [
                "https://github.com/Bimindu-aberathna",
                "https://www.linkedin.com/in/bimindu-aberathna/",
              ],
              description: "Full Stack Developer specializing in React, Next.js, Node.js, and LLM-based solutions",
              knowsAbout: [
                "React.js",
                "Next.js",
                "Node.js",
                "TypeScript",
                "Web Development",
                "LLM",
                "API Development",
              ],
            }),
          }}
        />
      </head>
      <body className="min-h-full flex flex-col">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
