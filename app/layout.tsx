import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Mradul & Shreya Wedding — February 2 & 3, 2027 | Taj Heritage, Goa",
  description:
    "You are cordially invited to the royal wedding of Mradul & Shreya. Join us for four unforgettable celebrations across two breathtaking days at Taj Heritage, Vainguinim Beach, Goa.",
  keywords:
    "Mradul Shreya Wedding, Taj Heritage Goa Wedding, Indian Wedding Invitation, Goa Wedding 2027",
  openGraph: {
    title: "Mradul & Shreya Wedding — Taj Heritage, Goa",
    description:
      "Join us for the royal wedding of Mradul & Shreya. 4 grand festivities across February 2 & 3, 2027 at Taj Heritage, Goa.",
    type: "website",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
  themeColor: "#FAF7F2",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Alex+Brush&family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,500;1,600&family=Great+Vibes&family=Montserrat:wght@300;400;500;600;700&family=Pinyon+Script&family=Plus+Jakarta+Sans:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}
