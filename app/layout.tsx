import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/ui/ThemeProvider";
import { Navbar } from "@/components/ui/Navbar";
import { CustomCursor } from "@/components/ui/CustomCursor";
import { personalInfo } from "@/data/portfolio";
import { SmoothScroll } from "@/components/SmoothScroller";

export const metadata: Metadata = {
  title: `${personalInfo.name} | Full Stack Developer Portfolio`,
  description: personalInfo.summary,
  keywords: ["Full Stack Developer", "React", "Next.js", "Node.js", "TypeScript", "Portfolio"],
  authors: [{ name: personalInfo.name }],
  openGraph: {
    title: `${personalInfo.name} | Full Stack Developer`,
    description: personalInfo.summary,
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: `${personalInfo.name} | Full Stack Developer`,
    description: personalInfo.summary,
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider attribute="data-theme" defaultTheme="dark" enableSystem>
          <CustomCursor />
          <Navbar />
          <SmoothScroll>
            <main>{children}</main>
          </SmoothScroll>
        </ThemeProvider>
      </body>
    </html>
  );
}