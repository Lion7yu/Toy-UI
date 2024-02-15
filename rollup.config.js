import esbuild from "rollup-plugin-esbuild";
import vue from "rollup-plugin-vue";
import sass from "sass";
import { terser } from "@rollup/plugin-terser";

export default {
  input: "src/lib/index.ts",
  output: [
    {
      globals: {
        vue: "Vue",
      },
      name: "Toy",
      file: "dist/lib/toy.js",
      format: "umd",
      plugins: [terser()],
    },
    {
      name: "Toy",
      file: "dist/lib/toy.esm.js",
      format: "es",
      plugins: [terser()],
    },
  ],
  plugins: [
    scss({ include: /\.scss$/, sass }),
    esbuild({
      include: /\.[jt]s$/,
      minify: process.env.NODE_ENV === "production",
      target: "es2015",
    }),
    vue({
      include: /\.vue$/,
    }),
  ],
};
