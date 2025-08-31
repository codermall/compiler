import {defineConfig} from 'tsup'

export default defineConfig({
  entry: ['lib/index.ts'],
  outDir: './dist',
  target: 'esnext',
  format: ['esm', 'cjs'],
  dts: true,
  clean: true,
})