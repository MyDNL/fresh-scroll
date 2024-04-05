import { Item } from "../utils/data.ts";

interface RowsProps {
  items: Item[]
}

export function Rows({ items }: RowsProps) {
  return(
    <>
      {items.map((item) => 
        <tr>
          <td class="whitespace-nowrap px-4 py-2 font-medium text-gray-900">{item.id}</td>
          <td class="whitespace-nowrap px-4 py-2 text-gray-700">{item.description}</td>
        </tr>
      )}
    </>
  )
}