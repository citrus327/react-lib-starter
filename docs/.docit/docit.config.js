import { defineConfig } from "@blizzbolts/docit";
import path from "node:path";

export default defineConfig({
  vite: {
    resolve: {
      // pnpm cannot find @mdx-js/react in the top level of node_modules
      dedupe: ["@mdx-js/react"],
    },
  },
});
