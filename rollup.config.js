import dts from 'rollup-plugin-dts'
import esbuild from 'rollup-plugin-esbuild'
import typescript from "rollup-plugin-typescript2"
import commonjs from "rollup-plugin-commonjs"
import external from "rollup-plugin-peer-deps-external"
import resolve from "rollup-plugin-node-resolve"
import postcss from "rollup-plugin-postcss"
import { terser } from "rollup-plugin-terser"

const name = require('./package.json').main.replace(/\.js$/, '')

const bundle = config => ({
  ...config,
  input: 'src/index.ts',
  external: id => !/^[./]/.test(id),
})

export default [
  bundle({
    plugins: [esbuild()],
    output: [
      {
        file: `${name}.js`,
        format: 'cjs',
        sourcemap: true,
      },
      {
        file: `${name}.mjs`,
        format: 'es',
        sourcemap: true,
      },
    ],
  }),
  bundle({
    plugins: [dts()],
    output: {
      file: `${name}.d.ts`,
      format: 'es',
    },
  }),
  bundle({
    plugins: [,
      resolve(),
      postcss({
        extensions: [".css"],
        extract: true,
      }),
      external(),
      typescript({
        rollupCommonJSResolveHack: true,
        exclude: ["**/__tests__/**", "**/*.stories.tsx"],
        clean: true,
      }),
      terser(),
      commonjs({
        include: ["node_modules/**"],
        namedExports: {
          "node_modules/react/react.js": [
            "Children",
            "Component",
            "PropTypes",
            "createElement",
          ],
          "node_modules/react-dom/index.js": ["render"],
        },
      }),
    ]
  })
]