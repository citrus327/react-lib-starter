import { defineConfig } from "rollup";
import { swc } from "rollup-plugin-swc3";
import replace from "@rollup/plugin-replace";
import commonjs from "@rollup/plugin-commonjs";
import resolve from "@rollup/plugin-node-resolve";
import url from "@rollup/plugin-url";
import external from "rollup-plugin-peer-deps-external";
import postcss from "rollup-plugin-postcss";
import terser from "@rollup/plugin-terser";
import json from "@rollup/plugin-json";
import alias from "@rollup/plugin-alias";
import path from "node:path";
import fs from "node:fs";

const pkg = JSON.parse(
  fs.readFileSync(path.resolve(process.cwd(), "./package.json"), {
    encoding: "utf-8",
  })
);

const plugins = [
  resolve(),
  commonjs(),
  replace({
    values: {
      "process.env.NODE_ENV": JSON.stringify(process.env.NODE_ENV),
    },
    preventAssignment: true,
  }),
  alias({
    entries: [{ find: "@", replacement: path.join(process.cwd(), "src") }],
  }),
  json(),
  swc(),
  external({
    includeDependencies: true,
  }),
  url(),
  postcss({
    plugins: [],
    minimize: true,
  }),
  terser(),
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
