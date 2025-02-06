"use client"

import { Line, LineChart, ResponsiveContainer, Tooltip } from "recharts"
import type { ChartData } from "@/types/dashboard"

const data: ChartData[] = [
  { date: "Mar", value: 300 },
  { date: "Apr", value: 350 },
  { date: "May", value: 200 },
  { date: "Jun", value: 400 },
  { date: "Jul", value: 300 },
  { date: "Aug", value: 200 },
  { date: "Sep", value: 450 },
  { date: "Oct", value: 500 },
  { date: "Nov", value: 480 },
  { date: "Dec", value: 400 },
  { date: "Jan", value: 350 },
  { date: "Feb", value: 400 },
]

export function StatsChart() {
  return (
    <div className="h-[300px] w-full">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={data}>
          <Tooltip content={CustomTooltip} />
          <Line type="monotone" dataKey="value" stroke="#ff6b00" strokeWidth={2} dot={false} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  )
}

function CustomTooltip({ active, payload }: { active?: boolean; payload?: ChartData[] }) {
  if (active && payload && payload.length) {
    const data = payload[0].payload as ChartData
    return (
      <div className="rounded-lg border bg-background p-2 shadow-sm">
        <div className="grid grid-cols-2 gap-2">
          <TooltipItem label="Value" value={data.value} />
          <TooltipItem label="Date" value={data.date} />
        </div>
      </div>
    )
  }
  return null
}

function TooltipItem({ label, value }: { label: string; value: string | number }) {
  return (
    <div className="flex flex-col">
      <span className="text-[0.70rem] uppercase text-muted-foreground">{label}</span>
      <span className="font-bold text-muted-foreground">{value}</span>
    </div>
  )
}

