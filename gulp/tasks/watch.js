const gulp = require("gulp");
const watch = require("gulp-watch");
const browserSync = require("browser-sync").create();

const dirs = {
    pug: "./src/**/*.pug",
    sass: "./src/sass/**/*.scss",
    js: "./src/js/**/*.js"
}

gulp.task("watch", ()=> {
    browserSync.init({
        server: {
            baseDir: "dist",
            port: 3002
        }
    });

    // pug
    watch(dirs.pug, () => {
        gulp.start("pugChanged");
    });

    // css
    watch(dirs.sass, () => {
        gulp.start("cssInject");
    });

    // js
    watch(dirs.js, () => {
        gulp.start("jsChanged");
    });
});


// html
gulp.task("pugChanged", ["pugRender"], () => {
    browserSync.reload();
});

// styles
gulp.task("cssInject", ["styles"], () => {
    gulp.src("./dist/styles.css")
        .pipe(browserSync.stream());
});

// js
gulp.task("jsChanged", ["scripts"], () => {
    browserSync.reload();
});