const gulp = require("gulp");
const svgSprite = require('gulp-svg-sprites'),
      svgmin = require('gulp-svgmin'),
      cheerio = require('gulp-cheerio'),
      replace = require('gulp-replace');


gulp.task('svgSpriteBuild', () => {
    return gulp.src('./src/svg/*.svg')
        .pipe(svgmin({
            js2svg: {
                pretty: true
            }
        }))
        .pipe(cheerio({
            run: ($) => {
                $('[fill]').removeAttr('fill');
                $('[stroke]').removeAttr('stroke');
                $('[style]').removeAttr('style');
            },
            parserOptions: {xmlMode: true}
        }))
        .pipe(replace('&gt;', '>'))
        .pipe(svgSprite({
            mode: "symbols",
            preview: false,
            selector: "icon-%f",
            svg: {
                symbols: 'img/icons/icons.svg'
            }
        }))
        .pipe(gulp.dest('./dist/'));
});

gulp.task('svgSprite', ['svgSpriteBuild']);