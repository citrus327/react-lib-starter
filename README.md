# react-lib-starter

![Version](https://img.shields.io/npm/v/@citrus327/react-template-lib)

## Introduction

This is my personal React library template.

## What's included

The template includes the following:

1. [rollup](https://rollupjs.org/) + [swc](https://swc.rs/) with esm and cjs output
2. [panda-css](https://panda-css.com/) integration as a postcss plugin
3. [Changesets](https://github.com/changesets/changesets) setup for versioning and auto changelog generation.
4. auto NPM package publishing workflow via [changesets action](https://github.com/changesets/action)
5. zero dependency by default
6. `vitest` for testing
7. minify all bundled files via [@rollup/plugin-terser](https://www.npmjs.com/package/@rollup/plugin-terser).
8. `.d.ts` generation with alias support via [tsc-alias](https://github.com/justkey007/tsc-alias)
9. single tree-shaked .d.ts file via [rollup-plugin-dts](https://www.npmjs.com/package/rollup-plugin-dts)
10. bundle analyze via [rollup-plugin-visualizer](https://www.npmjs.com/package/rollup-plugin-visualizer)

## What's missing

1. A quick playground for components

## Usage

1. Directly use this repo as a template in github
2. use degit: `degit git@github.com:citrus327/react-lib-starter.git`

## Workflow

1. Create new branch
2. Do as many commits as you want
3. After push all the commits, execute `pnpm run change` or `npx changeset` to create a changeset
4. Modify changeset markdown file in `.changeset` folder if needed
5. Push all the changes to current branch
6. Make a pull request manually in your repo or just merge into the main branch
7. Then changeset action will detect the changesets you've made and create new PR for it.
8. After accepting the new PR, the changeset action will then go change the package version and publish to target registry
