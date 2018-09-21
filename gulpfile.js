const gulp = require('gulp');
const rename = require('gulp-rename');
const htmlmin = require('gulp-htmlmin');
const babel = require('gulp-babel');
const minify = require('gulp-minify');
const less = require('gulp-less');

// Javascript
gulp.task('transpile', () => {
  // Home
  gulp.src('src/home/*.js', { base: 'src/home/' })
  .pipe(babel({
    presets: ['@babel/env']
  }))
  .pipe(minify({
    noSource: true
  }))
  .pipe(gulp.dest('dist'));
});

// Html
gulp.task('copy-html', () => {
  // Home
  gulp.src('src/home/home.html')
    .pipe(rename('index.html'))
    .pipe(htmlmin({ collapseWhitespace: true }))
    .pipe(gulp.dest('dist'));

  // About
  gulp.src('src/about/about.html')
    .pipe(rename('index.html'))
    .pipe(htmlmin({ collapseWhitespace: true }))
    .pipe(gulp.dest('dist/about'));
});

// CSS
gulp.task('less-to-css', () => {
  // Home
  gulp.src('src/home/home.less', { base: 'src/home' })
  .pipe(less())
  .pipe(gulp.dest('dist'));
});

// Images
gulp.task('copy-images', () => {
  gulp.src('images/**/*.*')
    .pipe(gulp.dest('dist'));
});

gulp.task('default', ['transpile', 'copy-html', 'less-to-css', 'copy-images']);