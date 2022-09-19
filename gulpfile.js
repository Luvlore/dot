const gulp = require('gulp');
const plumber = require('gulp-plumber');
const uglify = require('gulp-uglify');
const concat = require('gulp-concat');
const rename = require('gulp-rename');

const cssSrc = './src/styles/*.css';

const cssDist = './src/';
const cssDistName = 'style.css';

gulp.task('styles', () => gulp
  .src(cssSrc)
  .pipe(plumber())
  .pipe(uglify())
  .pipe(concat(cssDistName))
  .pipe(gulp.dest(cssDist))
);
