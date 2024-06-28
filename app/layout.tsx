import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";

const spaceGotesk = Space_Grotesk({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("http://localhost:3000/"),

  title: "Fawad's Portfolio",

  authors: {
    name: "fawad",
  },

  description:
    "Based in Long Island NY, I'm a a new graduate looking for somewhere to begin my career.",
  openGraph: {
    title: "Fawad",
    description:
      "Based in Long Island NY, I'm a a new graduate looking for somewhere to begin my career.",
    url: "http://localhost:3000/",
    siteName: "fawad",
    images: "/og.png",
    type: "website",
  },
  keywords: ["daily web coding", "fawad", "portfolio"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={spaceGotesk.className}>
        {" "}
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
