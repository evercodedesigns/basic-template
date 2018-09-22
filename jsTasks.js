const babel = require('gulp-babel');
const minify = require('gulp-minify');

const taskName = 'group-javascript';
const homePage = 'home-javascript';

const homePageTask = (gulp, browserSync) => {
  return gulp.task(homePage, () => {
    gulp.src('src/home/**/*.js', { base: 'src/home/' })
        .pipe(babel({
          presets: ['@babel/env']
        }))
        .pipe(minify({
          noSource: true
        }))
        .pipe(gulp.dest('dist'))
        .pipe(browserSync.stream());
  });
}

module.exports.register = (gulp, browserSync) => {
  homePageTask(gulp, browserSync);

  return gulp.task(taskName, [homePage]);
}
module.exports.taskName = taskName;