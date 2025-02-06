"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import type { NavItem } from "@/types/dashboard"
import {
  BarChart3,
  ChevronDown,
  Globe,
  Home,
  LayoutDashboard,
  LifeBuoy,
  Settings,
  Wallet,
  Sun,
  Moon,
} from "lucide-react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { useTheme } from "@/contexts/ThemeContext"

const navItems: NavItem[] = [
  { icon: LayoutDashboard, label: "Dashboard", path: "/" },
  { icon: BarChart3, label: "Statistics & Income", path: "/statistics" },
  { icon: Globe, label: "Market", path: "/market" },
  { icon: Home, label: "Funding", path: "/funding" },
  { icon: Wallet, label: "Yield Vaults", path: "/vaults", hasDropdown: true },
  { icon: LifeBuoy, label: "Support", path: "/support" },
  { icon: Settings, label: "Settings", path: "/settings" },
]

export function Sidebar() {
  const pathname = usePathname()
  const { theme, toggleTheme } = useTheme()

  return (
    <aside className="border-r bg-background/50 backdrop-blur">
      <div className="flex h-16 items-center justify-between gap-2 border-b px-6">
        <div className="flex items-center gap-2">
          <Wallet className="h-6 w-6" />
          <span className="font-bold">Vaultify</span>
        </div>
        <Button variant="ghost" size="icon" onClick={toggleTheme}>
          {theme === "light" ? <Moon className="h-[1.2rem] w-[1.2rem]" /> : <Sun className="h-[1.2rem] w-[1.2rem]" />}
        </Button>
      </div>
      <div className="px-4 py-4">
        <Input placeholder="Search" className="bg-background/50" />
      </div>
      <nav className="space-y-2 px-2">
        {navItems.map((item) => (
          <Button
            key={item.label}
            variant={pathname === item.path ? "secondary" : "ghost"}
            className="w-full justify-start gap-2"
            asChild
          >
            <Link href={item.path}>
              <item.icon className="h-4 w-4" />
              {item.label}
              {item.hasDropdown && <ChevronDown className="ml-auto h-4 w-4" />}
            </Link>
          </Button>
        ))}
      </nav>
    </aside>
  )
}

