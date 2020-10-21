import svelte from 'rollup-plugin-svelte';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import livereload from 'rollup-plugin-livereload';
import { terser } from 'rollup-plugin-terser';
import sveltePreprocess from 'svelte-preprocess';
import typescript from '@rollup/plugin-typescript';

import copy from 'rollup-plugin-copy';
import del from 'rollup-plugin-delete';

const production = !process.env.ROLLUP_WATCH;

function serve() {
    let server;

    function toExit() {
        if (server) server.kill(0);
    }

    return {
        writeBundle() {
            if (server) return;
            server = require('child_process').spawn('npm', ['run', 'start', '--', '--dev'], {
                stdio: ['ignore', 'inherit', 'inherit'],
                shell: true
            });

            process.on('SIGTERM', toExit);
            process.on('exit', toExit);
        }
    };
}


// https://github.com/rollup/rollup/issues/1089
// because of the Ionic circular reference, as a result of trying to fix the firebase/analytics lib
const onwarn = (warning, rollupWarn) => {
    const ignoredWarnings = [{
        ignoredCode: 'CIRCULAR_DEPENDENCY',
        ignoredPath: 'node_modules/@ionic/core/',
    }, ]

    console.log('WARN check', warning, rollupWarn);
    // only show warning when code and path don't match
    // anything in above list of ignored warnings
    if (!ignoredWarnings.some(({ ignoredCode, ignoredPath }) => (
            warning.code === ignoredCode &&
            warning.importer.includes(path.normalize(ignoredPath))))) {
        rollupWarn(warning)
    }
}


export default {
    //  onwarn,
    onwarn(warning, warn) {
        // skip certain warnings
        //  if (warning.code === 'UNUSED_EXTERNAL_IMPORT') return;

        // throw on others
        //  if (warning.code === 'NON_EXISTENT_EXPORT') throw new Error(warning.message);

        console.log('TEST', warning);
        // Use default for everything else
        warn(warning);
    },
    input: 'src/main.ts',
    output: {
        sourcemap: true,
        format: 'esm',
        name: 'app',
        dir: 'public/bundle'
    },
    plugins: [
        production && del({ targets: 'public/bundle/*' }),

        production && copy({
            targets: [{ src: 'src/service-worker.js', dest: 'public/' }],
            verbose: true
        }),

        production && copy({
            targets: [{ src: 'src/assets/', dest: 'public/' }],
            verbose: true
        }),

        // no service worker in dev
        !production && del({ targets: 'public/service-worker.js' }),

        svelte({
            // enable run-time checks when not in production
            dev: !production,
            // we'll extract any component CSS out into
            // a separate file - better for performance
            css: css => {
                css.write('bundle.css');
            },
            preprocess: sveltePreprocess(),
        }),

        // If you have external dependencies installed from
        // npm, you'll most likely need these plugins. In
        // some cases you'll need additional configuration -
        // consult the documentation for details:
        // https://github.com/rollup/plugins/tree/master/packages/commonjs
        resolve({
            browser: true,
            mainFields: ["main", "module"],
            dedupe: (importee) =>
                importee === "svelte" || importee.startsWith("svelte/")
        }),

        /*
  resolve({
            browser: true,
            dedupe: ['svelte']
        }),
        */
        commonjs(
            //			{
            //          namedExports: {
            //            'node_modules/idb/build/idb.js': ['openDb']
            //        }
            //		}
        ),



        typescript({ sourceMap: !production }),

        // In dev mode, call `npm run start` once
        // the bundle has been generated
        !production && serve(),

        // Watch the `public` directory and refresh the
        // browser on changes when not in production
        // !production && livereload('public'), // disabled because my Chrome is freaking out

        // If we're building for production (npm run build
        // instead of npm run dev), minify
        production && terser()
    ],
    watch: {
        clearScreen: false
    }
};