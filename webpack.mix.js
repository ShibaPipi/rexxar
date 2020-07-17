let mix = require('laravel-mix');

const JS_RESOURCE_DIR = 'resources/js/';
const CSS_RESOURCE_DIR = 'resources/assets/css/';
const JS_PUBLIC_DIR = 'public/js/';

const MODULE_ONSTAGE = 'index';
const MODULE_ADMIN = 'admin';

let externals = {
  'element-ui': 'ELEMENT',
  'vue': 'Vue',
  'vuex': 'Vuex',
  'vue-router': 'VueRouter',
  'lodash': '_'
};
/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.js(JS_RESOURCE_DIR + MODULE_ADMIN + '/app.js', JS_PUBLIC_DIR + MODULE_ADMIN).version().webpackConfig({
  output: {
    chunkFilename: 'js/' + MODULE_ADMIN + '/chunk/[name].js?v=[chunkHash]'
  },
  resolve: {
    alias: {
      Css: path.resolve(__dirname, CSS_RESOURCE_DIR + MODULE_ADMIN)
    }
  },
  externals
});

mix.js(JS_RESOURCE_DIR + MODULE_ONSTAGE + '/app.js', JS_PUBLIC_DIR + MODULE_ONSTAGE).version().webpackConfig({
  output: {
    chunkFilename: 'js/' + MODULE_ONSTAGE + '/chunk/[name].js?v=[chunkHash]'
  },
  resolve: {
    alias: {
      Css: path.resolve(__dirname, CSS_RESOURCE_DIR + MODULE_ONSTAGE)
    }
  },
  externals
});
