# Cola

**A collection of Sass components designed to go perfectly with [bourbon](http://bourbon.io).**

Cola also relies heavily on the excellent [@import](https://github.com/at-import) projects.

## Setup
\* *OSX biased instructions* \*

### Recommended
[Homebrew](http://brew.sh/) for OSX package management. Dave McFarland has written [a great guide](http://blog.teamtreehouse.com/install-node-js-npm-mac) on the treehouse blog. Alternatively you can use [MacPorts](https://www.macports.org/).

### Dependencies
1. [Node.js](https://nodejs.org/en/) via [NVM](https://github.com/creationix/nvm).
2. [NPM](https://www.npmjs.com/) for Node.js package management.
3. [Gulp](http://gulpjs.com/) and [Bower](https://bower.io/) need to be installed globally.

### Installation
1. Run `bower install`
2. Run `npm install`

## Usage
- You can use the components by using the mixins for each component or you can use the whole framework with `@include cola-everything;`.
- Sass syntax: [North](http://pointnorth.io/#styling)
- Grid - [Susy grid](http://susy.oddbird.net/)
- [Baseline grid](https://www.smashingmagazine.com/2012/12/css-baseline-the-good-the-bad-and-the-ugly/)
  - Base unit: em
  - Font sizes are set using the [modular-scale mixin](http://bourbon.io/docs/#modular-scale) and margins and padding are set using multiples of the $base-spacing mixin. You can set any sizes using pixels and convert to ems using the [Pixels to Ems](http://bourbon.io/docs/#px-to-em) function.

#### Build
- Run `gulp` to watch files.
- Run `gulp build` to prepare for production deployment.
