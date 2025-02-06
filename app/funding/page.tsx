import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export default function FundingPage() {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">Funding</h1>
      <Card className="p-6">
        <h2 className="text-lg font-semibold mb-4">Add Funds</h2>
        <form className="space-y-4">
          <div>
            <label htmlFor="amount" className="block text-sm font-medium text-gray-700">
              Amount
            </label>
            <Input id="amount" type="number" placeholder="Enter amount" />
          </div>
          <div>
            <label htmlFor="currency" className="block text-sm font-medium text-gray-700">
              Currency
            </label>
            <select
              id="currency"
              className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
            >
              <option>USD</option>
              <option>EUR</option>
              <option>GBP</option>
            </select>
          </div>
          <Button type="submit">Add Funds</Button>
        </form>
      </Card>
    </div>
  )
}

