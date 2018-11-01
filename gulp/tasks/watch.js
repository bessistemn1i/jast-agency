const gulp = require("gulp");
const watch = require("gulp-watch");
const browserSync = require("browser-sync").create();

const dirs = {
    pug: "./src/**/*.pug",
    sass: "./src/sass/**/*.scss",
    js: "./src/js/**/*.js",
    wp_php: "./wp/*.php",
    wp_css: "./dist/styles.css",
    wp_js: "./dist/*.js"
}

gulp.task("watch", ()=> {
    browserSync.init({
        server: {
            baseDir: "dist"
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

    // wordpress

    //php
    watch(dirs.wp_php, () => {
        gulp.start("copyPHP");
    });

    //css
    watch(dirs.wp_css, () => {
        gulp.start("copyCSS");
    });

    //js
    watch(dirs.wp_js, () => {
        gulp.start("copyJS");
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