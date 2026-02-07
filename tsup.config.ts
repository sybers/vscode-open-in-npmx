import { defineConfig } from 'tsup'

export default defineConfig({
  entry: ['src/index.ts'],
  format: ['cjs'],
  external: ['vscode'],
  platform: 'node',
  target: 'node18',
  sourcemap: true,
  clean: true,
  minify: false,
  shims: false,
  dts: false,
})