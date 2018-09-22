const rename = require('gulp-rename');
const htmlmin = require('gulp-htmlmin');

const taskName = 'group-html';
const homePage = 'home-html';

const homePageTask = (gulp, browserSync) => {
  return gulp.task(homePage, () => {
    gulp.src('src/home/home.html')
        .pipe(rename('index.html'))
        .pipe(htmlmin({ collapseWhitespace: true }))
        .pipe(gulp.dest('dist'))
        .pipe(browserSync.stream());
    });
  }

module.exports.register = (gulp, browserSync) => {
  homePageTask(gulp, browserSync);

  return gulp.task(taskName, [homePage]);
}
module.exports.taskName = taskName;