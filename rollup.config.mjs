import path from "node:path";
import fs from "node:fs";
import { defineConfig } from "rollup";
import { swc, defineRollupSwcOption } from "rollup-plugin-swc3";
import replace from "@rollup/plugin-replace";
import commonjs from "@rollup/plugin-commonjs";
import resolve from "@rollup/plugin-node-resolve";
import url from "@rollup/plugin-url";
import external from "rollup-plugin-peer-deps-external";
import postcss from "rollup-plugin-postcss";
import terser from "@rollup/plugin-terser";
import json from "@rollup/plugin-json";
import alias from "@rollup/plugin-alias";
import del from "rollup-plugin-delete";
import panda from "@pandacss/dev/postcss";
import cascade from "@csstools/postcss-cascade-layers";
import json5 from "json5";

const TS_CONFIG_PATH = "./tsconfig.json";
const tsconfig = json5.parse(fs.readFileSync(TS_CONFIG_PATH));
const baseUrl = path.resolve(tsconfig.compilerOptions.baseUrl);
const pkg = JSON.parse(
  fs.readFileSync(path.resolve(process.cwd(), "./package.json"), {
    encoding: "utf-8",
  })
);

const plugins = [
  del({ targets: "dist/*" }),
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
  swc(
    defineRollupSwcOption({
      tsconfig: "./tsconfig.build.json",
      jsc: {
        baseUrl,
      },
    })
  ),
  external({
    includeDependencies: true,
  }),
  url(),
  postcss({
    plugins: [panda(), cascade()],
    extract: true,
    minimize: true,
    extract: "index.css",
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
