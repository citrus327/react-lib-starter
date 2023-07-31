import { defineConfig } from "rollup";
import commonjs from "@rollup/plugin-commonjs";
import resolve from "@rollup/plugin-node-resolve";
import url from "@rollup/plugin-url";
import external from "rollup-plugin-peer-deps-external";
import postcss from "rollup-plugin-postcss";
import terser from "@rollup/plugin-terser";
import alias from "@rollup/plugin-alias";
import path from "node:path";
import fs from "node:fs";
import { swc } from "rollup-plugin-swc3";

const pkg = JSON.parse(
  fs.readFileSync(path.resolve(process.cwd(), "./package.json"), {
    encoding: "utf-8",
  })
);

const plugins = [
  alias({
    entries: [{ find: "@", replacement: path.join(process.cwd(), "src") }],
  }),
  resolve(),
  commonjs(),
  postcss({
    plugins: [],
    minimize: true,
  }),
  external({
    includeDependencies: true,
  }),
  swc(),
  url(),
  // terser(),
];

export default defineConfig({
  input: "src/index.ts",
  output: [
    {
      file: pkg.main,
      format: "cjs",
      exports: "named",
    },
    {
      file: pkg.module,
      format: "es",
      exports: "named",
    },
  ],
  plugins,
});
