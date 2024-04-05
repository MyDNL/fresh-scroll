import { Partial } from "$fresh/runtime.ts";
import { Item } from "../utils/data.ts";

interface TableProps {
  items: Item[]
}

export function Table({ items }: TableProps) {
  return(
    <div class="max-w-screen-lg min-w-min mx-auto flex flex-col items-center mt-4">
      <table class="divide-y-2 divide-gray-200 bg-white text-sm">
        <thead class="">
          <tr>
            <th class="whitespace-nowrap px-4 py-2 font-medium text-gray-900">ID</th>
            <th class="whitespace-nowrap px-4 py-2 font-medium text-gray-900">Description</th>
          </tr>
        </thead>
    
        <tbody class="divide-y divide-gray-200">
          <Partial name="rows-page" mode="append">
            {items.map((item) => 
              <tr>
                <td class="whitespace-nowrap px-4 py-2 font-medium text-gray-900">{item.id}</td>
                <td class="whitespace-nowrap px-4 py-2 text-gray-700">{item.description}</td>
              </tr>
            )}
          </Partial >
        </tbody>
      </table>
    </div>
  )
}