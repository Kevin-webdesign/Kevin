import type React from "react"
import type { Metadata } from "next"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import ThemeSwitcher from "@/components/theme-switcher"


export const metadata: Metadata = {
  title: "Uzamurera Kevin - Software Developer & Designer",
  description:
    "Professional portfolio of Uzamurera Kevin - Software Developer, System Analyst, and Graphic Designer based in Kigali, Rwanda.",
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body style={{ fontFamily: 'Arial, sans-serif' }}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
          {children}
          <ThemeSwitcher />
        </ThemeProvider>
      </body>
    </html>
  )
}
