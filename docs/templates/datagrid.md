# Data Grid Layout

A layout designed for complex data tables with filtering and actions.

<script setup>
import { DataGridLayout } from '../../src/components/templates/DataGridLayout.tsx'
import { DataTable }  from '../../src/components/library/DataTable.tsx'
import { Button } from '../../src/components/ui/button.tsx'

const columns = [
  { accessorKey: "id", header: "ID" },
  { accessorKey: "status", header: "Status" },
  { accessorKey: "email", header: "Email" },
  { accessorKey: "amount", header: "Amount" },
]

const data = [
  { id: "728ed52f", amount: 100, status: "pending", email: "m@example.com" },
  { id: "489e1d42", amount: 125, status: "processing", email: "example@gmail.com" },
]
</script>

## Example with DataTable

<ComponentPreview :component="DataGridLayout">
  <div className="border rounded-md h-[500px]">
      <DataGridLayout 
        title="Transactions" 
        description="Manage your recent transactions."
      >
        <DataTable columns={columns} data={data} filterableColumn="email" />
     </DataGridLayout>
  </div>
</ComponentPreview>


## Installation

```bash
npx super-ui-cli add DataGridLayout
```

## Usage

```tsx
import { DataGridLayout } from '@/components/templates/DataGridLayout'
import { DataTable } from '@/components/library/DataTable'
import { Button } from '@/components/ui/button'

export default function TransactionsPage() {
  return (
      <DataGridLayout 
        title="Transactions" 
        description="Manage your recent transactions."
        actions={<Button>Export</Button>}
      >
        {/* Your DataTable implementation */}
      </DataGridLayout>
  )
}
```
