import { babel } from "@rollup/plugin-babel";
import commonjs from "@rollup/plugin-commonjs";
import resolve from "@rollup/plugin-node-resolve";
import url from "@rollup/plugin-url";
import external from "rollup-plugin-peer-deps-external";
import postcss from "rollup-plugin-postcss";
import typescript from "@rollup/plugin-typescript";
import pkg from "./package.json";
import { defineConfig } from "rollup";
import { terser } from "rollup-plugin-terser";

const config = defineConfig({
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
  plugins: [
    resolve(),
    commonjs(),
    postcss({
      plugins: [],
      minimize: true,
    }),
    external({
      includeDependencies: true,
    }),
    babel({
      babelHelpers: "bundled",
      presets: [
        [
          "@babel/preset-env",
          {
            useBuiltIns: "usage",
            corejs: 3,
          },
        ],
      ],
    }),
    url(),
    typescript({ tsconfig: "./tsconfig.json" }),
    terser(),
  ],
});

export default config;