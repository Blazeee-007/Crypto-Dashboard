import "@/styles/globals.css"
import { Inter } from "next/font/google"
import type { ReactNode } from "react"
import { Sidebar } from "@/components/sidebar"
import { ThemeProvider } from "@/contexts/ThemeContext"

const inter = Inter({ subsets: ["latin"] })

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className={`${inter.className} min-h-screen bg-background text-foreground`}>
        <ThemeProvider>
          <div className="grid lg:grid-cols-[280px_1fr]">
            <Sidebar />
            <main className="p-6">{children}</main>
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}



import './globals.css'