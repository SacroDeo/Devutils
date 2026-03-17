import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ScrollProgress } from "@/components/ScrollProgress";
import { BackToTop } from "@/components/BackToTop";
import Script from "next/script";

export const metadata: Metadata = {
  title: { default: "DevUtils – Developer Utilities", template: "%s | DevUtils" },
  description: "Fast, free, client-side developer tools. JSON, Base64, UUID, JWT, Regex, Password, Minifiers and more.",
  metadataBase: new URL("https://devutilsonline.in"),
  verification: {
    google: "bCNceldTZ0lUxmXc6-v9xInZ_JdZL7IySc3bVZgM_M0",
  },
  openGraph: {
    type: "website",
    siteName: "DevUtils",
    title: "DevUtils – Free Developer Utilities",
    description: "Fast, free, client-side developer tools. JSON, Base64, UUID, JWT, Regex, Password, Minifiers and more.",
    images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: "DevUtils – Free Developer Utilities" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "DevUtils – Free Developer Utilities",
    description: "Fast, free, client-side developer tools. JSON, Base64, UUID, JWT, Regex, Password, Minifiers and more.",
    images: ["/opengraph-image"],
  },
  keywords: [
    "developer tools", "json formatter", "base64 encoder", "password generator",
    "uuid generator", "jwt decoder", "hash generator", "regex tester", "free developer utilities",
  ],
  authors: [{ name: "DevUtils" }],
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 },
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <Script src="https://www.googletagmanager.com/gtag/js?id=G-QFDMH47XZ7" strategy="afterInteractive" />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-QFDMH47XZ7');
          `}
        </Script>
        <ThemeProvider>
          <ScrollProgress />
          <div className="min-h-screen flex flex-col">
            <Navbar />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
          <BackToTop />
        </ThemeProvider>
      </body>
    </html>
  );
}