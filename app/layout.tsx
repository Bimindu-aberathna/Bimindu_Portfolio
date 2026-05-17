import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { ThemeProvider } from "./providers/theme-provider";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap", 
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://biminducareerportfolio.vercel.app/"; 

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: "Bimindu Aberathna | Full Stack Developer & Researcher",
  description: "Official portfolio of Bimindu Aberathna. Full Stack Developer specializing in React, Next.js, Node.js, and LLM-based AI solutions.",
  keywords: [
    "Bimindu Aberathna", 
    "Bimindu", 
    "Aberathna", 
    "Dashmika",
    "Bimindu Dashmika Aberathna",
    "Bimindu Dashmika",
    "Software Engineer Sri Lanka", 
    "Full Stack Developer", 
    "React Developer", 
    "Next.js", 
    "AI Developer", 
    "LLM Solutions"
  ],
  authors: [{ name: "Bimindu Aberathna", url: SITE_URL }],
  creator: "Bimindu Aberathna",
  publisher: "Bimindu Aberathna",
  metadataBase: new URL(SITE_URL),
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: "/",
    languages: {
      "en-US": "/en-US",
    },
  },
  openGraph: {
    type: "profile", 
    firstName: "Bimindu",
    lastName: "Aberathna",
    username: "Bimindu-aberathna",
    gender: "male", 
    url: SITE_URL,
    title: "Bimindu Aberathna | Full Stack Developer & Researcher",
    description: "Full Stack Developer specializing in React, Next.js, Node.js, and LLM-based solutions.",
    siteName: "Bimindu Aberathna Portfolio",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Bimindu Aberathna - Full Stack Developer",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    // THIS IS CRITICAL: Add your Google Search Console verification code here
    google: "YOUR_GOOGLE_SEARCH_CONSOLE_VERIFICATION_CODE", 
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Structured Data (JSON-LD)
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Bimindu Aberathna",
    alternateName: ["Bimindu", "Bimindu Aberathne"], 
    url: SITE_URL,
    image: `${SITE_URL}/og-image.jpg`, 
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
      "Large Language Models (LLM)",
      "API Development",
    ],
    alumniOf: {
      
      "@type": "CollegeOrUniversity",
      name: "University of Kelaniya",
    },
  };

  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <head> 
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/phosphor-icons@1.4.2/src/css/icons.min.css" />
        
        {/* Structured Data injected safely */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
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