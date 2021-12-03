const gulp = require('gulp')
const autoprefixer = require('gulp-autoprefixer')
const csso = require('gulp-csso')
const rename = require('gulp-rename')
const gcmq = require('gulp-group-css-media-queries')
const watch = require('gulp-watch')
const plumber = require('gulp-plumber')
const { parallel } = require('gulp')
const browserSync = require('browser-sync').create()
const scss = require('gulp-sass')(require('sass'))

// STYLE
const style = () => {
    return gulp.src('./app/scss/main.scss')
    .pipe(plumber())
    .pipe(scss())
    .pipe(autoprefixer({
        overrideBrowserslist: 'last 10 version',
        cascade: false
    }))
    .pipe(gcmq())
    .pipe(gulp.dest('./app/css'))
    .pipe(csso())
    .pipe(rename({
        suffix: '.min'
    }))
    .pipe(gulp.dest('./app/css'))
}

// WATCHER
const watcher = () => {
    watch('./app/scss/main.scss', style)
    watch('./app/index.html', browserSync.reload)
    watch('./app/css/main.min.css', browserSync.reload)
    watch('./app/scss/global.scss', browserSync.reload)
    watch('./app/scss/main.scss', browserSync.reload)
    watch('./app/scss/var.scss', browserSync.reload)
    watch('./app/scss/mixin.scss', browserSync.reload)
    watch('./app/scss/normolize.scss', browserSync.reload)
    watch('./app/css/main.min.css', browserSync.reload)
    watch('./app/scss/*.scss', style)
}

// SERVER
const server = () => {
    browserSync.init({
        server: {
            baseDir: './app'
        }
    })
}


// TASKS
gulp.task('style', style)
gulp.task('watcher', watcher)
gulp.task('server', server)

// DEFAULT
gulp.task('default', parallel('style', 'watcher', 'server'))