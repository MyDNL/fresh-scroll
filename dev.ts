#!/usr/bin/env -S deno run -A --watch=static/,routes/

import dev from "$fresh/dev.ts";
import config from "./fresh.config.ts";

import * as _mod from "@std/dotenv";

await dev(import.meta.url, "./main.ts", config);
