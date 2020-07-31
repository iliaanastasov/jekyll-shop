var gulp = require(`gulp`);
var {parallel} = gulp;
var {series} =gulp;
var sass = require(`gulp-sass`);
var browserSync = require('browser-sync').create();


gulp.task('sass', function () {
    return gulp.src('scss/*.scss') // Gets all files ending with .scss in app/scss
        .pipe(sass())
        .pipe(gulp.dest('converted-css'))
        .pipe(browserSync.reload({
            stream: true
        }))
});

gulp.task('browserSync', function () {
    browserSync.init({
        server: {
            baseDir: '_site'
        },
    })
})


gulp.task('watch',parallel(['browserSync','sass' ]), function () {
    gulp.watch('scss/*.scss', parallel(['sass','browserSync']));
    // Other watchers
})
// 