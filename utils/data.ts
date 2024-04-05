import { signal, effect } from "@preact/signals";

export interface Page {
  first: number;
  last: number;
}

export interface Item {
  id: number;
  description: string;
}

export const delta = 50;

export async function loadData({ first, last }: Page): Promise<Item[]> {
  const items: Item[] = [];
  const newLast = (last === 0) ? delta*2 : last;

  for (let i = first; i <= newLast; i += 1) {
    const item: Item = {
      id: i,
      description: "Hello " + i.toString()
    };
    items.push(item);
  }

  return items;
}

export const state = signal<Page>({ first:1, last:100 });

// effect(() => {
//   console.log("state value changed:");
//   console.log(state.value);
// });