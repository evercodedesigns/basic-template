const gulp = require('gulp');
const browserSync = require('browser-sync').create();

const jsTasks = require('./jsTasks');
const htmlTasks = require('./htmlTasks');
const cssTasks = require('./cssTasks');
const imagesTasks = require('./imagesTasks');

jsTasks.register(gulp, browserSync);
htmlTasks.register(gulp, browserSync);
cssTasks.register(gulp, browserSync);
imagesTasks.register(gulp, browserSync);

gulp.task('serve', ['default'], () => {
  browserSync.init({
    server: 'dist'
  });

  gulp.watch('src/**/*.js', [jsTasks.taskName]);
  gulp.watch('src/**/*.html', [htmlTasks.taskName]);
  gulp.watch('src/**/*.less', [cssTasks.taskName]);
  gulp.watch('images/**/*.*', [imagesTasks.taskName]);
});

gulp.task('default', [
  jsTasks.taskName,
  htmlTasks.taskName,
  cssTasks.taskName,
  imagesTasks.taskName
]);