import resolve from '@rollup/plugin-node-resolve';
import sourcemaps from 'rollup-plugin-sourcemaps';
import typescript2 from "rollup-plugin-typescript2";
import commonjs from '@rollup/plugin-commonjs';

export default {
    input: 'src/index.ts',
    output: [
        {
            dir: 'dist/esm/',
            entryFileNames: '[name].esm.js',
            chunkFileNames: '[name]-[hash].esm.js',
            format: 'es',
            sourcemap: true
        }, {
            dir: 'dist/cjs/',
            format: 'cjs',
            sourcemap: true
        }
    ],
    plugins: [
        resolve(),
        commonjs(),
        sourcemaps(),
        typescript2()
    ]
}