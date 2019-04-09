const gulp = require('gulp');
const purify = require('gulp-purifycss');
const sriHash = require('gulp-sri-hash');
gulp.task('purifyCSS', () => {
    return gulp.src('./dist/browser/styles.*.css')
        .pipe(
            purify(
                ['./src/app/**/*.ts', './src/app/**/*.html', './src/index.html'],
                {
                    info: true, // Outputs reduction information (like in the screenshot above)
                    minify: true, // Minifies the files after reduction
                    rejected: true, // Logs the CSS rules that were removed
                    whitelist: ['*transition*', '*dimmer*'] // Ignored css classes
                }
            ),
        )
        .pipe(gulp.dest('./dist/browser/'));
});

gulp.task('sri', () => {
    return gulp.src('./src/**/*.html')
      // do not modify contents of any referenced css- and js-files after this task...
      .pipe(sriHash())
      // ... manipulating html files further, is perfectly fine
      .pipe(gulp.dest('./dist/browser/'));
});
