// const mix = require('laravel-mix');

// /*
//  |--------------------------------------------------------------------------
//  | Mix Asset Management
//  |--------------------------------------------------------------------------
//  |
//  | Mix provides a clean, fluent API for defining some Webpack build steps
//  | for your Laravel application. By default, we are compiling the Sass
//  | file for the application as well as bundling up all the JS files.
//  |
//  */
// /*
// mix.js('resources/js/app.js', 'public/js')
//     .react()
//     .sass('resources/sass/app.scss', 'public/css');

// mix.copyDirectory('resources/i', 'public/i');
// mix.copyDirectory('resources/css', 'public/css');
// */
// mix.js('resources/js/index.js', 'public/js')
//     .react()
//     .sass('resources/sass/styles.scss', 'public/css');

// mix.copyDirectory('resources/images', 'public/images');
// mix.copyDirectory('resources/css', 'public/css');

// mix.styles(
//     ['resources/css/normalize.css', 'resources/css/styles.css', 'resources/css/admin/normalize.css', 'resources/css/admin/styles.css'],
//     'public/css/all.css'
// );



const mix = require('laravel-mix');

mix.js('resources/js/index.js', 'public/js')
    .react()
    .css('resources/css/normalize.css', 'public/css')
    .sass('resources/sass/styles.scss', 'public/css')
    .css('resources/css/admin/normalize.css', 'public/css/admin')
 .sass('resources/sass/admin/styles.scss', 'public/css/admin')