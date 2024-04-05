# Fresh infinite-scroll project

This Deno Fresh project tries to implement infinite-scrolling in an SSR framework.
It uses "Fresh Partials". Docs here: https://fresh.deno.dev/docs/concepts/partials

The project is also a very basic PWA which can be installed on client device.
So the scrolling experience could be better.

### Usage

Hit the "Load More..." button when you arrived at the bottom.
Next page of records will be rendered and fetched from the server.
Resulting html will be appended to the end of the list.
Watch the netork tab in Dev tools.

### Better

Fresh Partials does not have a javascript api.
The partial request can only be triggered from html elements.
So a "Load More" button is required to fetch the next page.

Automatic fetching can be implemented if js could be used.
