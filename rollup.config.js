import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import babel from '@rollup/plugin-babel';
import postcss from 'rollup-plugin-postcss';
import { terser } from 'rollup-plugin-terser';

export default {
  input: 'src/index.js',
  output: [
    {
      file: 'dist/react-infinite-calendar.cjs.js',
      format: 'cjs',
      sourcemap: true,
      exports: 'named'
    },
    {
      file: 'dist/react-infinite-calendar.esm.js',
      format: 'esm',
      sourcemap: true,
      exports: 'named'
    }
  ],
  external: ['react', 'react-dom', 'prop-types', 'classnames', 'date-fns', 'dom-helpers', 'react-transition-group', 'recompose', 'react-tiny-virtual-list'],
  plugins: [
    babel({
      babelHelpers: 'bundled',
      exclude: 'node_modules/**',
      presets: [
        '@babel/preset-env',
        ['@babel/preset-react', { runtime: 'automatic' }]
      ],
      extensions: ['.js', '.jsx']
    }),
    resolve({
      extensions: ['.js', '.jsx']
    }),
    commonjs({
      include: 'node_modules/**'
    }),
    postcss({
      modules: {
        generateScopedName: 'Cal__[name]__[local]'
      },
      extract: 'dist/styles.css',
      extensions: ['.css', '.scss']
    }),
    terser()
  ]
}; 