let mix = require('laravel-mix');
let tailwind = require('tailwindcss');
let build = require('./tasks/build.js');
require('laravel-mix-purgecss');

mix.disableSuccessNotifications();
mix.setPublicPath('source/assets/');
mix.webpackConfig({
  plugins: [
    build.jigsaw,
    build.browserSync(),
    build.watch(['source/**/*.md', 'source/**/*.php', 'source/**/*.scss', '!source/**/_tmp/*']),
  ]
});

mix.js('source/_assets/js/main.js', 'js')
  .sass('source/_assets/sass/main.scss', 'css/main.css')
  .options({
    processCssUrls: false,
    postCss: [
      tailwind('tailwind.js'),
    ]
  })
  .purgeCss({
    folders: ['source'],
  })
  .version();
