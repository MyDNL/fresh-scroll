import { state } from "../utils/data.ts";

export function Nav() {
  return (
    <div class="bg-slate-50 mx-auto max-w-screen-xl px-4 py-2 sm:px-6 lg:px-8 shadow-md sticky top-0 z-50">
      <div class="flex justify-end">
        <a
          href="https://github.com/MyDNL/fresh-scroll"
          class="text-gray-700 transition hover:opacity-75"
        >
          <span class="sr-only">GitHub</span>

          <svg class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path
              fill-rule="evenodd"
              d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
              clip-rule="evenodd"
            />
          </svg>
        </a>        
      </div>
      <div class="mx-auto max-w-3xl text-center">
        <h2 class="text-3xl font-bold text-gray-900 sm:text-5xl">Infinite Scroll</h2>
        <p class="mt-4 text-gray-500 sm:text-xl">
          How to implement infinite-scroll in SSR?
          <br />
          Deno + Fresh + Partials used.
        </p>
      </div>

      <div class="py-2">
        <dl class="grid grid-cols-3 gap-4">
          <div class="flex flex-col rounded-lg bg-blue-50 px-2 py-2 text-center">
            <dt class="order-last text-lg font-medium text-gray-500">First</dt>

            <dd class="text-4xl font-extrabold text-blue-600 md:text-5xl">{state.value.first}</dd>
          </div>

          <div class="flex flex-col rounded-lg bg-blue-50 px-2 py-2 text-center">
            <dt class="order-last text-lg font-medium text-gray-500">Size</dt>

            <dd class="text-4xl font-extrabold text-blue-600 md:text-5xl">{state.value.last - state.value.first + 1}</dd>
          </div>

          <div class="flex flex-col rounded-lg bg-blue-50 px-2 py-2 text-center">
            <dt class="order-last text-lg font-medium text-gray-500">Last</dt>

            <dd class="text-4xl font-extrabold text-blue-600 md:text-5xl">{state.value.last}</dd>
          </div>
        </dl>
      </div>
    </div>
  );
}
