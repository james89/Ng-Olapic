var gulp = require('gulp'),
    uglify = require('gulp-uglify');

gulp.task('js', function(){
    gulp.src('ngOlapic.js')
        .pipe(uglify())
        .pipe(gulp.dest('./dist'));
});

gulp.task('default', function(){
    gulp.run('js');
});