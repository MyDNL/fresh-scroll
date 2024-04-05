import { RouteContext, RouteConfig } from "$fresh/server.ts";
// import { Partial } from "$fresh/runtime.ts";
import { Page, loadData } from "../../utils/data.ts";
import { Table } from "../../components/table.tsx";

// We only want to render the content, so disable
// the `_app.tsx` template as well as any potentially
// inherited layouts
// export const config: RouteConfig = {
//   skipAppWrapper: true,
//   skipInheritedLayouts: true,
// };

// This is an async route: handler and component in a single function
export default async function PagedRows(req: Request, ctx: RouteContext) {
  const url = new URL(req.url);
  const first = parseInt(url.searchParams.get("first") || "1");
  const last = parseInt(url.searchParams.get("last") || "0");
  
  const page: Page = {first, last};
  const items = await loadData(page);

  return(
    <Table items={items} />
  )
}