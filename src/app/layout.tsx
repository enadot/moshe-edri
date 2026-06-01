import type { Metadata, Viewport } from "next";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { FloatingWhatsApp } from "@/components/FloatingWhatsApp";
import { GsapProvider } from "@/components/animations/GsapProvider";
import { Toaster } from "sonner";

export const metadata: Metadata = {
  metadataBase: new URL("https://mosheadri.co.il"),
  title: {
    default: "משה אדרי | יועץ משכנתאות - הקוסם הפיננסי | מיחזור משכנתא ואיחוד הלוואות",
    template: "%s | משה אדרי - יועץ משכנתאות",
  },
  description:
    "נחנקים מהמשכנתא? מסורבים בבנק? משה אדרי - יועץ משכנתאות עם 11 שנות ניסיון, מתמחה במיחזור משכנתאות, איחוד הלוואות ואישור תיקים מורכבים. חסכו מאות אלפי שקלים. ייעוץ חינם!",
  keywords: [
    "ייעוץ משכנתאות",
    "יועץ משכנתאות",
    "איחוד הלוואות",
    "מסורבי משכנתא",
    "מיחזור משכנתא",
    "משכנתא לכל מטרה",
    "מחיר למשתכן",
    "מימון לעסקים",
    "משה אדרי",
  ],
  authors: [{ name: "משה אדרי" }],
  creator: "משה אדרי",
  openGraph: {
    type: "website",
    locale: "he_IL",
    url: "https://mosheadri.co.il",
    siteName: "משה אדרי - יועץ משכנתאות",
    title: "משה אדרי - הקוסם הפיננסי שיציל לכם את הכסף",
    description:
      "מאות משפחות כבר חסכו מאות אלפי שקלים. גם אם סורבתם - יש פתרון. ייעוץ חינם ללא התחייבות.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "משה אדרי - יועץ משכנתאות",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "משה אדרי - הקוסם הפיננסי",
    description: "חסכו מאות אלפי שקלים. ייעוץ חינם!",
    images: ["/og-image.jpg"],
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
  alternates: {
    canonical: "/",
    languages: {
      "he-IL": "/",
    },
  },
  verification: {
    google: "your-google-verification-id",
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#0a192f" },
    { media: "(prefers-color-scheme: dark)", color: "#0a192f" },
  ],
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="he" dir="rtl" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Google+Sans:wght@400;500;700;900&family=Noto+Sans+Hebrew:wght@400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FinancialService",
              name: "משה אדרי - יועץ משכנתאות",
              description: "ייעוץ משכנתאות, מיחזור, איחוד הלוואות ופתרונות למסורבי בנקים",
              telephone: "+972-77-340-2800",
              priceRange: "₪₪",
              areaServed: "IL",
              address: {
                "@type": "PostalAddress",
                addressCountry: "IL",
              },
              founder: {
                "@type": "Person",
                name: "משה אדרי",
                jobTitle: "יועץ משכנתאות מומחה",
              },
              sameAs: [],
              aggregateRating: {
                "@type": "AggregateRating",
                ratingValue: "5",
                reviewCount: "247",
              },
            }),
          }}
        />
      </head>
      <body className="font-sans antialiased min-h-screen bg-white text-midnight">
        <GsapProvider>
          <Header />
          <main className="pt-20">{children}</main>
          <Footer />
          <FloatingWhatsApp />
        </GsapProvider>
        <Toaster position="top-center" richColors closeButton />
      </body>
    </html>
  );
}
