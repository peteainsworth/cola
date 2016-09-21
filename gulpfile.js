(function () {
  'use strict';

var basePaths = {
	src: 'src/',
	dest: 'dest/'
};

var paths = {
  root: './',
  css: {
    src: basePaths.src + 'sass',
    dest: basePaths.dest + 'css'
  }
};

var gulp = require('gulp'),
    sass = require('gulp-sass'),
    importOnce = require('node-sass-import-once'),
    concat = require('gulp-concat'),
    sourcemaps = require('gulp-sourcemaps'),
    livereload = require('gulp-livereload'),
    del = require('del'),
    install = require('gulp-install'),
    neat = require('node-neat').includePaths;

//////////////////////////////
// Install dependencies
//////////////////////////////

gulp.task('install-dev', function() {
  return gulp.src(['./bower.json'])
    .pipe(install());
});

gulp.task('install-prod', ['clean-lib'], function() {
  return gulp.src(['./bower.json'])
    .pipe(install({production: true}));
});

//////////////////////////////
// Clean dest directory
//////////////////////////////
gulp.task('clean-dest', function () {
  del(['dest/**']);
});

gulp.task('clean-lib', ['sass-dist'], function () {
  del(['libraries/**']);
});

//////////////////////////////
// Sass
//////////////////////////////

// Process with nested style and sourcemap and reload
gulp.task('sass', function () {
  return gulp.src([paths.css.src + '/*.scss'])
    .pipe(sourcemaps.init())
    .pipe(sass({
      includePaths: ['sass'].concat(neat),
      outFile: paths.css.dest,
      sourceMap: true,
      outputStyle: 'nested',
      importer: importOnce,
      importOnce: {
        index: false,
        css: false,
        bower: true
      }
    })
    .on('error', function(error) {
      console.log(error);
      this.emit('end');
    }))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest(paths.css.dest))
    .pipe(livereload());
});

// Process with compressed style for distribution
gulp.task('sass-dist', ['install-dev', 'clean-dest'], function () {
  return gulp.src([paths.css.src + '/*.scss', paths.css.src + '/fallback/*.scss'])
    .pipe(sass({
      includePaths: ['styles'].concat(neat),
      outFile: paths.css.dest,
      sourceMap: false,
      outputStyle: 'compressed',
      importer: importOnce,
      importOnce: {
        index: false,
        css: false,
        bower: true
      }
    })
    .on('error', function(error) {
      console.log(error);
      this.emit('end');
    }))
    .pipe(gulp.dest(paths.css.dest));
});

//////////////////////////////
// Watch
//////////////////////////////

gulp.task('watch', ['install-dev'], function () {
  livereload.listen();
  gulp.watch(paths.css.src + '/**/*.scss', ['sass']);
});

//////////////////////////////
// Build Tasks
//////////////////////////////

gulp.task('default', ['watch']);
gulp.task('build', ['install-prod']);

}());
