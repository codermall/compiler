import {defineConfig} from 'tsup'

export default defineConfig([
  {
    entry: ["src/index.ts"],
    format: ["esm"], // 支持多模块化
    dts: true,
    minify: true
  },
  {
    entry: ["src/index.ts"],
    format: ["cjs"], // 支持多模块化
    dts: true,
    minify: true
  },
  {
    entry: ["src/index.ts"],
    format: ["iife"], // 支持多模块化
    dts: true,
    minify: true
  }
])