import { defineConfig } from "tsup";

export default defineConfig((options) => ({
  entry: ["src/index.ts", "src/components/*/index.ts"],
  format: ["esm", "cjs"],
  dts: true,
  clean: true,
  external: ["react"],
  target: "es6",
  sourcemap: !options.watch,
}));
