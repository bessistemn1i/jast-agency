import gulp from 'gulp';
import onError from 'gulp-notify';
import webpack from 'webpack-stream';
import UglifyJsPlugin from 'uglifyjs-webpack-plugin';

const config = {
    entry: {
        main: './src/js/main.js'
    },
    output: {
        filename: '[name].js'
    },
     plugins: [
         new UglifyJsPlugin()
     ]
};

const dirs = {
    src: './src/js/**/*.js',
    dest: './dist'
}

gulp.task('scripts', function() {
    return gulp.src(dirs.src)
        .pipe(webpack(config))
/*         .on('error', onError((error) => {
            return {
                title: 'Scripts Error',
                message: error.message
            };
        })) */
        .on('error', function(error) {
            console.log(error.toString());
            this.emit('end');
        }) 
        .pipe(gulp.dest(dirs.dest));
});