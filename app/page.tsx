import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { MetricsCard } from "@/components/metrics-card"
import { StatsChart } from "@/components/stats-chart"
import { VaultTable } from "@/components/vault-table"
import { ChevronDown } from "lucide-react"
import { RecommendedCoin } from "@/components/recommended-coin"
import { TrendingStocks } from "@/components/trending-stocks"

export default function DashboardPage() {
  return (
    <>
      <Header />
      <MetricsSection />
      <div className="grid gap-6 md:grid-cols-2">
        <RecommendedCoin />
        <TrendingStocks />
      </div>
      <StatisticsCard />
      <VaultTable />
    </>
  )
}

function Header() {
  return (
    <div className="mb-6 flex items-center justify-between">
      <div className="space-y-1">
        <h1 className="text-2xl font-bold">Overview</h1>
        <div className="text-sm text-muted-foreground">Aug 13, 2023 - Aug 18, 2023</div>
      </div>
      <Button variant="outline" className="gap-2">
        Ethereum Network
        <ChevronDown className="h-4 w-4" />
      </Button>
    </div>
  )
}

function MetricsSection() {
  return (
    <div className="grid gap-4 md:grid-cols-3">
      <MetricsCard
        title="Your Balance"
        value="$74,892"
        change={{ value: "$1,340", percentage: "-2.1%", isPositive: false }}
      />
      <MetricsCard
        title="Your Deposits"
        value="$54,892"
        change={{ value: "$1,340", percentage: "+13.2%", isPositive: true }}
      />
      <MetricsCard
        title="Accrued Yield"
        value="$20,892"
        change={{ value: "$1,340", percentage: "+1.2%", isPositive: true }}
      />
    </div>
  )
}

function StatisticsCard() {
  const timeRanges = ["Today", "Last week", "Last month", "Last 6 month", "Year"]

  return (
    <Card className="mt-6 p-6">
      <div className="mb-4 flex items-center justify-between">
        <h2 className="text-lg font-semibold">General Statistics</h2>
        <div className="flex gap-2">
          {timeRanges.map((range) => (
            <Button key={range} size="sm" variant="ghost">
              {range}
            </Button>
          ))}
        </div>
      </div>
      <StatsChart />
    </Card>
  )
}

