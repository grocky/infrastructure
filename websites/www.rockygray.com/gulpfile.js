var config = {
    env: 'prod'
};

var gulp = require('gulp');
var gutil = require('gulp-util');
var del = require('del');
var wiredep = require('wiredep');
var $ = require('gulp-load-plugins')();

var paths = {
    'src': {
        'path': 'resources/assets',
        'less': 'resources/assets/less',
        'scss': 'resources/assets/scss',
        'css': 'resources/assets/css',
        'js': 'resources/assets/js',
        'fonts': 'resources/assets/fonts',
        'images': 'resources/assets/images',
        'vendor': 'resources/assets/bower_components',
        'views': 'resources/views'
    },
    'target': {
        'path': 'public',
        'css': 'public/css',
        'js': 'public/js',
        'fonts': 'public/fonts',
        'images': 'public/images',
        'vendor': 'public/vendor'
    }
};

// blade directory
var bladeDir = 'app/views';

// Tasks
function buildCss(shouldMinify) {

    return gulp.src(paths.src.css + '/**/*.css')
        .pipe($.autoprefixer('last 15 version', 'ie 8'))
        .pipe($.if(shouldMinify, $.minifyCss()))
        .pipe($.if(shouldMinify, $.rename({suffix: '.min'})))
        .pipe(gulp.dest(paths.target.css))
        .pipe($.livereload());
}

gulp.task('css', function() {
    buildCss(config.env === 'prod');
});

function buildScripts(shouldUglify) {
    return gulp.src(paths.src.js + '/*.js')
        .pipe($.if(shouldUglify, $.uglify()))
        .pipe($.if(shouldUglify, $.rename({suffix: '.min'})))
        .pipe(gulp.dest(paths.target.js))
        .pipe($.livereload());
}

gulp.task('scripts', function() {
    return buildScripts(config.env === 'prod');
});

//CSS Compilation

function buildVendorCss(shouldMinify) {
    return gulp.src(wiredep().css)
        //.pipe($.if(shouldMinify, $.minifyCss()))
        //.pipe($.if(shouldMinify, $.rename({suffix: '.min'})))
        .pipe(gulp.dest(paths.target.vendor));
}

gulp.task('vendor-css', function () {
    return buildVendorCss('prod' === config.env);
});

//JS Compilation
function buildVendorScripts(shouldUglify) {
    return gulp.src(wiredep().js)
        //.pipe($.if(shouldUglify, $.uglify()))
        //.pipe($.if(shouldUglify, $.rename({suffix: '.min'})))
        .pipe(gulp.dest(paths.target.vendor));
}

gulp.task('vendor-scripts', function () {
    return buildVendorScripts('prod' === config.env);
});

gulp.task('fonts', function(){
    return gulp.src([paths.src.fonts + '/**/*', paths.src.vendor + '/**/fonts/**/*'])
        .pipe($.flatten())
        .pipe(gulp.dest(paths.target.fonts))
        .pipe($.livereload());
});

gulp.task('images', function(){
    return gulp.src(paths.src.images + '/**/*')
        .pipe(gulp.dest(paths.target.images))
        .pipe($.livereload());
});

/* Blade Templates */
gulp.task('blade', function() {
 return gulp.src(paths.src.views + '/**/*.blade.php')
     .pipe($.livereload());
});

gulp.task('root-files', function() {
    return gulp.src(['resources/root-files/*', 'resources/root-files/.htaccess'])
        .pipe(gulp.dest(paths.target.path));
});

gulp.task('wiredep', ['scripts', 'css', 'vendor-scripts', 'vendor-css'], function() {

    return gulp.src('resources/views/**/*.blade.php')
        .pipe(wiredep.stream({
            fileTypes: {
                html: {
                    replace: {
                        js: function(filePath) {
                            return '<script src="' + 'vendor/' + filePath.split('/').pop() + '"></script>';
                        },
                        css: function(filePath) {
                            return '<link rel="stylesheet" href="' + 'vendor/' + filePath.split('/').pop() + '"/>';
                        }
                    }
                }
            }
        }))
        .pipe($.inject(
            gulp.src([paths.target.js + '/**/*.js'], { read: false }), {
                addRootSlash: false,
                transform: function(filePath, file, i, length) {
                    return '<script src="' + filePath.replace(paths.target.path + '/', '') + '"></script>';
                }
            }))
        .pipe($.inject(
            gulp.src([paths.target.css + '/**/*.css'], { read: false }), {
                addRootSlash: false,
                transform: function(filePath, file, i, length) {
                    return '<link rel="stylesheet" href="' + filePath.replace(paths.target.path + '/', '') + '"/>';
                }
            }))
        .pipe(gulp.dest(paths.src.views))
        .pipe($.livereload());
});

/* PHPUnit */
gulp.task('phpunit', function() {
 //notify defaults to false. If you don't want to use a notifier or worry with errors in this task leave it off
 var options = {debug: false, notify: true};

 gulp.src('app/tests/*.php')
     .pipe(phpunit('', options)) //empty phpunit path defaults ./vendor/bin/phpunit for windows specify with double back slashes

  //both notify and notify.onError will take optional notifier: growlNotifier for windows notifications
  //if options.notify is true be sure to handle the error here or suffer the consequenses!
     .on('error', notify.onError({
      title: 'PHPUnit Failed',
      message: 'One or more tests failed, see the cli for details.'
     }))

  //will fire only if no error is caught
     .pipe(notify({
      title: 'PHPUnit Passed',
      message: 'All tests passed!'
     }));
});

gulp.task('clean', function(cb) {
    del([
        paths.target.css,
        paths.target.js,
        paths.target.fonts,
        paths.target.images,
        'public/**/*',
        'public/**/.htaccess'
    ], cb);
});

gulp.task('install', function() {
    return gulp.src(['bower.json'])
        .pipe($.install());
});

gulp.task('permissions', ['install', 'build'], $.shell.task(
    [
        'chmod 777 -R public/'
    ]
));
            
gulp.task('dependencies', ['install'], function() {
    gulp.start('build');
});

gulp.task('deploy', ['dependencies'], function() {
    gulp.start('permissions');
});

gulp.task('build', ['root-files', 'vendor-css', 'vendor-scripts', 'css', 'scripts', 'fonts', 'images'], function() {
    "use strict";
    gulp.start('wiredep');
});

gulp.task('dev', ['clean'], function () {

    config.env = 'dev';

    gulp.start('build');

    $.livereload.listen();

    gulp.watch(paths.src.views + '/**/*.blade.php', ['blade']);
    gulp.watch(paths.src.css + '/**/*.css', ['css']);
    gulp.watch(paths.src.js + '/**/*.js', ['scripts']);
    gulp.watch(paths.src.fonts + '/**/*', ['fonts']);
    gulp.watch(paths.src.images + '/**/*', ['images']);
    gulp.watch('app/**/*.php', ['phpunit']);
    gulp.watch('bower.json', ['wiredep']);
});

gulp.task('prod', ['clean'], function() {
    "use strict";
    gulp.start('build');
});

gulp.task('default',['prod']);
