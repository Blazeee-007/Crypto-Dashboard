import { Card } from "@/components/ui/card"
import { RecommendedCoin } from "@/components/recommended-coin"
import { TrendingStocks } from "@/components/trending-stocks"

export default function MarketPage() {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">Market Overview</h1>
      <div className="grid gap-6 md:grid-cols-2">
        <Card className="p-6">
          <h2 className="text-lg font-semibold mb-4">Cryptocurrency Market</h2>
          <RecommendedCoin />
        </Card>
        <Card className="p-6">
          <h2 className="text-lg font-semibold mb-4">Stock Market</h2>
          <TrendingStocks />
        </Card>
      </div>
    </div>
  )
}

