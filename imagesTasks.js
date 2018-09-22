const taskName = 'group-images';
const images = 'images';

const imagesTasks = (gulp, browserSync) => {
  return gulp.task(images, () => {
    gulp.src('images/**/*.*')
      .pipe(gulp.dest('dist'))
      .pipe(browserSync.stream());
  });
}

module.exports.register = (gulp, browserSync) => {
  imagesTasks(gulp, browserSync);

  return gulp.task(taskName, [images]);
}
module.exports.taskName = taskName;