// Imports
import "@/styles/globals.css";
import { GeistSans } from 'geist/font/sans'
import { cookies } from "next/headers";
import { siteConfig } from "@/app/_config/site"
import { TRPCReactProvider } from "@/trpc/react";
import { cn } from "@/server/utils"
import { Analytics } from "@vercel/analytics/react"
import { ThemeProvider } from "@/app/_components/theme-provider"
import { Toaster } from "@/app/_components/ui/toaster"

// Metadata
export const metadata = {
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  authors: [
    {
      name: "PartnerConnect",
      url: "https://partnerconnect.vercel.app",
    },
  ],
  creator: "viszya",
  // themeColor: [
  //   { media: "(prefers-color-scheme: light)", color: "white" },
  //   { media: "(prefers-color-scheme: dark)", color: "black" },
  // ],
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
  manifest: `${siteConfig.url}/site.webmanifest`,
};


// App Root Layout
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="light" suppressHydrationWarning style={{ scrollBehavior: 'smooth' }}>
      <body className={cn("bg-background min-h-screen font-sans antialiased", GeistSans.className)}>
        <TRPCReactProvider cookies={cookies().toString()}>
          <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
            {children}
            <Analytics />
            <Toaster />
          </ThemeProvider>
        </TRPCReactProvider>
      </body>
    </html>
  );
}
