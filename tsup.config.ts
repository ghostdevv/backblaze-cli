import type { Options } from 'tsup';

export const tsup: Options = {
    splitting: false,
    sourcemap: false,
    clean: true,
    dts: false,
    keepNames: true,
    target: 'esnext',
    format: ['esm'],
    entryPoints: ['src/index.ts'],
};
