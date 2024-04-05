import { state } from "../utils/data.ts";

export function Nav() {
  return (
    <div class="bg-white mx-auto max-w-screen-xl px-4 py-12 sm:px-6 md:py-8 lg:px-8 shadow-md sticky top-0 z-50">
      <div class="mx-auto max-w-3xl text-center">
        <h2 class="text-3xl font-bold text-gray-900 sm:text-5xl">Infinite Scroll</h2>
        <p class="mt-4 text-gray-500 sm:text-xl">
          How to implement infinite-scroll in SSR?
          <br />
          Deno + Fresh + Partials used.
        </p>
      </div>

      <div class="mt-6 sm:mt-8">
        <dl class="grid grid-cols-3 gap-4">
          <div class="flex flex-col rounded-lg bg-blue-50 px-2 py-4 text-center">
            <dt class="order-last text-lg font-medium text-gray-500">First</dt>

            <dd class="text-4xl font-extrabold text-blue-600 md:text-5xl">{state.value.first}</dd>
          </div>

          <div class="flex flex-col rounded-lg bg-blue-50 px-2 py-4 text-center">
            <dt class="order-last text-lg font-medium text-gray-500">Size</dt>

            <dd class="text-4xl font-extrabold text-blue-600 md:text-5xl">{state.value.last - state.value.first + 1}</dd>
          </div>

          <div class="flex flex-col rounded-lg bg-blue-50 px-2 py-4 text-center">
            <dt class="order-last text-lg font-medium text-gray-500">Last</dt>

            <dd class="text-4xl font-extrabold text-blue-600 md:text-5xl">{state.value.last}</dd>
          </div>
        </dl>
      </div>
    </div>
  );
}
