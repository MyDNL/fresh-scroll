import { state, delta } from "../utils/data.ts";

function loadMore() {
  state.value = { 
    // first: state.value.first + delta, 
    first: state.value.last + 1, 
    last: state.value.last + delta 
  }
}  

export function LoadMoreButton() {
  return(
    <div class="flex flex-col items-center py-2">
      {/* <form method="get"> */}
        <button
          type="button"
          onClick={loadMore}
          // formaction={`?first=${state.value.first}&last=${state.value.last}`}
          href="/"
          // href={`?first=${state.value.first}&last=${state.value.last}`}
          f-partial={`/partials/paged-rows?first=${state.value.first}&last=${state.value.last}`}
          class="inline-block rounded-md px-8 py-6 text-sm text-blue-500 bg-blue-100 shadow-sm focus:relative"
        >
          Load more ...
        </button>        
      {/* </form> */}
    </div>
  )
}
