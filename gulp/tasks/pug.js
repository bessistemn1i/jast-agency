import gulp from 'gulp';
import pug from 'gulp-pug';
import { onError } from 'gulp-notify';

const dirs = {
    src: './src/pages/**/*.pug',
    dest: './dist'
};

gulp.task('pugRender', function() {
    return gulp.src(dirs.src)
        .pipe(pug({
            path: ['src/pug-modules/']
        }))
        .on('error', onError((error) => {
            return {
                title: 'Pug Error',
                message: error.message
            };
        }))
        .on('error', (error) => {
            console.log(error.toString());
            this.emit('end');
        })
        .pipe(gulp.dest(dirs.dest));
});