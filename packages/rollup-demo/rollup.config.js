import typescript from "@rollup/plugin-typescript"

export default {
  input: "src/index.ts",
  output: [
    {
      file: "dist/bundle.cjs",
      format: "cjs"
    },
    {
      file: "dist/bundle.js",
      format: "esm"
    },
    {
      file: "dist/bundle.global.js",
      format: "iife"
    },
    {
      file: "dist/bundle.umd.js",
      format: "umd",
      name: 'RollupDemo'
    }
  ],
  plugins: [
    typescript()
  ]
}