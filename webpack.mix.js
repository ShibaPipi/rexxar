let mix = require('laravel-mix');

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

mix.js('resources/js/app.js', 'public/js').version().webpackConfig({
  output: {
    chunkFilename: 'js/chunk/[name].js?v=[chunkHash]'
  },
  resolve: {
    alias: {
      Css: path.resolve(__dirname, 'resources/assets/css')
    }
  },
  externals: {
    'element-ui': 'ELEMENT',
    'vue': 'Vue',
    'vuex': 'Vuex',
    'vue-router': 'VueRouter',
    'lodash': '_'
  }
});
