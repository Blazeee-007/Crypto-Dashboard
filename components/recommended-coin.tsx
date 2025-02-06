"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import type { Coin } from "@/types/dashboard"

const recommendedCoins: Coin[] = [
  {
    id: "bitcoin",
    name: "Bitcoin",
    symbol: "BTC",
    price: "$29,321",
    change24h: "+1.2%",
    marketCap: "$569B",
    volume: "$28.1B",
  },
  {
    id: "ethereum",
    name: "Ethereum",
    symbol: "ETH",
    price: "$1,853",
    change24h: "+2.5%",
    marketCap: "$223B",
    volume: "$12.7B",
  },
  {
    id: "cardano",
    name: "Cardano",
    symbol: "ADA",
    price: "$0.31",
    change24h: "-0.8%",
    marketCap: "$10.9B",
    volume: "$324M",
  },
]

export function RecommendedCoin() {
  const [selectedCoin, setSelectedCoin] = useState<Coin | null>(null)

  return (
    <Card className="mt-6 p-6">
      <h2 className="text-lg font-semibold mb-4">Recommended Coin</h2>
      <div className="flex gap-4 mb-4">
        {recommendedCoins.map((coin) => (
          <Button
            key={coin.id}
            variant={selectedCoin?.id === coin.id ? "secondary" : "outline"}
            onClick={() => setSelectedCoin(coin)}
          >
            {coin.name}
          </Button>
        ))}
      </div>
      {selectedCoin && (
        <div className="grid grid-cols-2 gap-4">
          <div>
            <p className="text-sm text-muted-foreground">Price</p>
            <p className="text-lg font-semibold">{selectedCoin.price}</p>
          </div>
          <div>
            <p className="text-sm text-muted-foreground">24h Change</p>
            <p
              className={`text-lg font-semibold ${selectedCoin.change24h.startsWith("+") ? "text-green-500" : "text-red-500"}`}
            >
              {selectedCoin.change24h}
            </p>
          </div>
          <div>
            <p className="text-sm text-muted-foreground">Market Cap</p>
            <p className="text-lg font-semibold">{selectedCoin.marketCap}</p>
          </div>
          <div>
            <p className="text-sm text-muted-foreground">Volume (24h)</p>
            <p className="text-lg font-semibold">{selectedCoin.volume}</p>
          </div>
        </div>
      )}
    </Card>
  )
}

