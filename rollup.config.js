import babel from 'rollup-plugin-babel';
import resolve from '@rollup/plugin-node-resolve';
import external from 'rollup-plugin-peer-deps-external';
import postcss from 'rollup-plugin-postcss';
import typescript from 'rollup-plugin-typescript';
import replace from '@rollup/plugin-replace';
import { terser } from 'rollup-plugin-terser';
import commonjs from '@rollup/plugin-commonjs';

export default [
    {
        input: './src/index.tsx',
        output: [
            {
                file: './dist/index.js',
                format: 'cjs',
            },
            {
                file: './dist/index.es.js',
                format: 'es',
                exports: 'named',
            },
        ],
        plugins: [
            replace({
                "process.env.NODE_ENV": JSON.stringify("development"),
                "preventAssignment": true,
            }),
            postcss({
                plugins: [],
                minimize: true,
            }),
            babel({
                babelrc: true,
                exclude: 'node_modules/**',
                presets: ['@babel/preset-react'],
            }),
            typescript(),
            external(),
            resolve({
                browser: true
            }),
            commonjs(),
            terser(),
        ],
    }
]