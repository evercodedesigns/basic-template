const gulp = require('gulp');
const rename = require('gulp-rename');
const htmlmin = require('gulp-htmlmin');
const babel = require('gulp-babel');
const minify = require('gulp-minify');
const less = require('gulp-less');

gulp.task('copy-html', () => {
  // Home.html
  gulp.src('src/home/home.html')
    .pipe(rename('index.html'))
    .pipe(htmlmin({ collapseWhitespace: true }))
    .pipe(gulp.dest('dist'));

  // About.html
  gulp.src('src/about/about.html')
    .pipe(rename('index.html'))
    .pipe(htmlmin({ collapseWhitespace: true }))
    .pipe(gulp.dest('dist/about'));
});

gulp.task('copy-images', () => {
  gulp.src('images/**/*.*')
    .pipe(gulp.dest('dist'));
});

gulp.task('transpiling', () => {
  // Home Javascript
  gulp.src('src/home/*.js', { base: 'src/home/' })
    .pipe(babel({
      presets: ['@babel/env']
    }))
    .pipe(minify({
      noSource: true
    }))
    .pipe(gulp.dest('dist'));
});

gulp.task('less-to-css', () => {
  // Home styling
  gulp.src('src/home/home.less', { base: 'src/home' })
    .pipe(less())
    .pipe(gulp.dest('dist'));
});

gulp.task('default', ['copy-html', 'copy-images', 'transpiling', 'less-to-css']);