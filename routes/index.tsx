import { RouteContext } from "$fresh/server.ts";
// import { Partial } from "$fresh/runtime.ts";
import { Page, loadData } from "../utils/data.ts";
import { Nav } from "../islands/nav.tsx";
import { Table } from "../components/table.tsx";
import { LoadMoreButton } from "../islands/load-more-button.tsx";

export default async function Home(req: Request, ctx: RouteContext) {
  const url = new URL(req.url);
  const first = parseInt(url.searchParams.get("first") || "1");
  const last = parseInt(url.searchParams.get("last") || "0");
  
  const page: Page = {first, last};
  const items = await loadData(page);

  return (
    <>
      <Nav />
      <Table items={items} />
      <LoadMoreButton />
    </>
  );
}
