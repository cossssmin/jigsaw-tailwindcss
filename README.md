# Jigsaw + Tailwind CSS Starter Kit

A starter kit for using the [Jigsaw static site generator](http://jigsaw.tighten.co/) with [Tailwind CSS](https://tailwindcss.com/).

[![Netlify Status](https://api.netlify.com/api/v1/badges/573deda7-3b57-4e11-aab4-e2e87f9cddce/deploy-status)](https://app.netlify.com/sites/jigsaw-tailwindcss/deploys)

## Features

- Webpack + Laravel Mix build system
- `tailwind.config.js` config file in root, customize as needed
- Removes unused Tailwind CSS classes with [laravel-mix-purgecss](https://github.com/spatie/laravel-mix-purgecss)
- PostCSS instead of Sass - fewer dependencies, faster Tailwind builds
- Basic example of `@apply`ing Tailwind CSS classes - useful for styling Markdown content
- Includes a `blade.php` file where you can add your own Blade extensions ([documentation](https://jigsaw.tighten.co/docs/content-blade/#extending-blade-with-custom-directives))

## Requirements

- PHP 7
- [Composer](https://getcomposer.org/)
- [Node.js](https://nodejs.org) and NPM

## Getting Started

1. Clone this repo

    ```sh
    git clone https://github.com/cossssmin/jigsaw-tailwindcss.git
    ```

2. Navigate to the folder

    ```sh
    cd jigsaw-tailwindcss
    ```

3. Install PHP dependencies
    ```sh
    composer install
    ```

4. Install JS dependencies
    ```sh
    npm install
    ```

5. Run the dev script to build the site

    ```sh
    npm run dev
    ```

To use BrowserSync, run the watch script instead: `npm run watch`

By default, unused CSS will be purged *only* when running `npm run production` - however, this is [configurable](https://github.com/spatie/laravel-mix-purgecss#usage).

## What is Jigsaw?

> A framework for rapidly building static sites using the same modern tooling that powers your web applications. - [Jigsaw](http://jigsaw.tighten.co/)

## What is Tailwind CSS?

> A utility-first CSS framework for rapidly building custom user interfaces - [Tailwind CSS](https://tailwindcss.com/)
