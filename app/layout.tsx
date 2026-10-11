import type { Metadata, Viewport } from "next";
import { Outfit, Geist } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ui/ThemeProvider";
import { Navbar } from "@/components/Navbar";
import { ClientChrome } from "@/components/ui/ClientChrome";
import { personalInfo } from "@/data/portfolio";
import { SmoothScroll } from "@/components/SmoothScroller";
import { themeInitScript } from "@/lib/theme";
import { cn } from "@/lib/utils";

const geist = Geist({subsets:['latin'],variable:'--font-sans'});

const outfit = Outfit({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-outfit",
});

export const metadata: Metadata = {
  metadataBase: new URL(personalInfo.siteUrl),
  title: {
    default: `${personalInfo.name} | Full Stack Developer Portfolio`,
    template: `%s | ${personalInfo.name}`,
  },
  description: personalInfo.summary,
  keywords: [
    "Full Stack Developer",
    "React",
    "Next.js",
    "Node.js",
    "TypeScript",
    "CRM",
    "Expense Tracker",
    "Portfolio",
  ],
  authors: [{ name: personalInfo.name }],
  creator: personalInfo.name,
  alternates: { canonical: "/" },
  openGraph: {
    title: `${personalInfo.name} | Full Stack Developer`,
    description: personalInfo.summary,
    type: "website",
    locale: "en_US",
    url: personalInfo.siteUrl,
    images: [{ url: personalInfo.avatar, alt: `${personalInfo.name} portrait` }],
  },
  twitter: {
    card: "summary_large_image",
    title: `${personalInfo.name} | Full Stack Developer`,
    description: personalInfo.summary,
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#F8FAFC" },
    { media: "(prefers-color-scheme: dark)", color: "#090D16" },
  ],
  width: "device-width",
  initialScale: 1,
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: personalInfo.name,
  jobTitle: personalInfo.role,
  email: personalInfo.email,
  address: personalInfo.location,
  url: personalInfo.siteUrl,
  sameAs: [personalInfo.social.github, personalInfo.social.linkedin],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning className={cn(outfit.variable, outfit.className, "font-sans", geist.variable)}>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      </head>
      <body>
        <ThemeProvider>
          <a href="#main-content" className="skip-link">
            Skip to content
          </a>
          <ClientChrome />
          <Navbar />
          <SmoothScroll>
            <main id="main-content">{children}</main>
          </SmoothScroll>
        </ThemeProvider>
      </body>
    </html>
  );
}
