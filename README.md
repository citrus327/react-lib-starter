# react-lib-starter

## Introduction

This is my personal React library template.

## What's included

The template includes the following:

1. [rollup](https://rollupjs.org/) + [swc](https://swc.rs/) with esm and cjs output
2. `rollup-plugin-dev` plugin for serving static file in a dev server (port 7000)
3. `.d.ts` generation with alias support via [tsc-alias](https://github.com/justkey007/tsc-alias)
4. [panda-css](https://panda-css.com/) integration as a postcss plugin
5. using `terser` to minify all bundled files.
6. [Changesets](https://github.com/changesets/changesets) setup for versioning and auto changelog generation.
7. auto NPM package publishing workflow with [changesets action](https://github.com/changesets/action)
8. zero depenency by default

## What's missing

1. Sass support, curretly only support raw css file, you can install `sass` or `node-sass` to enable it.
2. A quick playground

## Usage

1. Directly use this repo as template in github
2. use degit: `degit git@github.com:citrus327/react-lib-starter.git`
