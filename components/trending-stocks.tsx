"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import type { Stock } from "@/types/dashboard"

const trendingStocks: Stock[] = [
  { symbol: "AAPL", name: "Apple Inc.", price: "$150.23", change: "+2.50", changePercent: "+1.69%" },
  { symbol: "GOOGL", name: "Alphabet Inc.", price: "$2,789.61", change: "-15.23", changePercent: "-0.54%" },
  { symbol: "TSLA", name: "Tesla, Inc.", price: "$650.60", change: "+12.24", changePercent: "+1.92%" },
]

export function TrendingStocks() {
  const [selectedStock, setSelectedStock] = useState<Stock | null>(null)

  return (
    <Card className="p-6">
      <h2 className="text-lg font-semibold mb-4">Trending Stocks</h2>
      <div className="flex gap-4 mb-4">
        {trendingStocks.map((stock) => (
          <Button
            key={stock.symbol}
            variant={selectedStock?.symbol === stock.symbol ? "secondary" : "outline"}
            onClick={() => setSelectedStock(stock)}
          >
            {stock.symbol}
          </Button>
        ))}
      </div>
      {selectedStock && (
        <div className="grid grid-cols-2 gap-4">
          <div>
            <p className="text-sm text-muted-foreground">Price</p>
            <p className="text-lg font-semibold">{selectedStock.price}</p>
          </div>
          <div>
            <p className="text-sm text-muted-foreground">Change</p>
            <p
              className={`text-lg font-semibold ${selectedStock.change.startsWith("+") ? "text-green-500" : "text-red-500"}`}
            >
              {selectedStock.change} ({selectedStock.changePercent})
            </p>
          </div>
          <div className="col-span-2">
            <p className="text-sm text-muted-foreground">Company</p>
            <p className="text-lg font-semibold">{selectedStock.name}</p>
          </div>
        </div>
      )}
    </Card>
  )
}

