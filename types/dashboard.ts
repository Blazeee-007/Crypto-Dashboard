import type React from "react"

export interface Change {
  value: string
  percentage: string
  isPositive: boolean
}

export interface MetricsCardProps {
  title: string
  value: string
  change: Change
  chart?: React.ReactNode
}

export interface Coin {
  id: string
  name: string
  symbol: string
  price: string
  change24h: string
  marketCap: string
  volume: string
}

export interface Stock {
  symbol: string
  name: string
  price: string
  change: string
  changePercent: string
}

export interface Vault extends Coin {
  balance: string
  apy: string
  state: "Fixed" | "Flexible"
  startDate: string
  liquidity: "high" | "medium" | "low"
}

export interface ChartData {
  date: string
  value: number
}

export interface NavItem {
  icon: React.ComponentType
  label: string
  path: string
  hasDropdown?: boolean
}

export type Theme = "light" | "dark"

