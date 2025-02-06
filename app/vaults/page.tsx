```typescript file="app/vaults/page.tsx"
import { VaultTable } from "@/components/vault-table"
import { Card } from "@/components/ui/card"

export default function VaultsPage() {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">Yield Vaults</h1>
      <Card className="p-6">
        <h2 className="text-lg font-semibold mb-4">Active Vaults</h2>
        <VaultTable />
      </Card>
    </div>
  )
}

