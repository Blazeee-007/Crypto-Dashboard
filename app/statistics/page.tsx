import { Card } from "@/components/ui/card"
import { StatsChart } from "@/components/stats-chart"

export default function StatisticsPage() {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">Statistics & Income</h1>
      <div className="grid gap-6 md:grid-cols-2">
        <Card className="p-6">
          <h2 className="text-lg font-semibold mb-4">Income Overview</h2>
          <StatsChart />
        </Card>
        <Card className="p-6">
          <h2 className="text-lg font-semibold mb-4">Asset Distribution</h2>
          {/* Add a pie chart component here */}
        </Card>
      </div>
    </div>
  )
}

