const less = require('gulp-less');

const taskName = 'group-css';
const homePage = 'home-css';

const homePageTask = (gulp, browserSync) => {
  return gulp.task(homePage, () => {
    gulp.src('src/home/home.less', { base: 'src/home' })
        .pipe(less())
        .pipe(gulp.dest('dist'))
        .pipe(browserSync.stream());
  });
}

module.exports.register = (gulp, browserSync) => {
  homePageTask(gulp, browserSync);

  return gulp.task(taskName, [homePage]);
}
module.exports.taskName = taskName;