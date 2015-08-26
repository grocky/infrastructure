var config = {
    env: 'prod'
};

var gulp = require('gulp');
var gutil = require('gulp-util');
var plugins = require('gulp-load-plugins')();

var paths = {
    'src': {
        'less': 'resources/assets/less',
        'scss': 'resources/assets/scss',
        'css': 'resources/assets/css',
        'js': 'resources/assets/js',
        'fonts': 'resources/assets/fonts',
        'vendor': 'resources/assets/bower_vendor',
        'views': 'resources/views'
    },
    'target': {
        'css': 'public/css',
        'js': 'public/js/',
        'fonts': 'public/fonts/',
        'images': 'public/images/',
        'vendor': '/public/bower_vendor/'
    }

};

// blade directory
var bladeDir = 'app/views';

// Tasks
gulp.task('css', function () {
    if (config.env == 'dev') {
        return gulp.src(paths.src.css + '/**/*.css')
            .pipe(plugins.autoprefixer('last 15 version', 'ie 8'))
            .pipe(gulp.dest(paths.target.css));
    } else {
        return gulp.src(paths.src.css + '/**/*.css')
            .pipe(plugins.autoprefixer('last 15 version', 'ie 8'))
            .pipe(plugins.minifyCss())
            .pipe(plugins.rename(function(path) {
                path.basename += '.min'
            }))
            .pipe(gulp.dest(paths.target.css))
    }
});

gulp.task('rs-plugin', function() {
    return gulp.src('resources/assets/rs-plugin/**/*')
        .pipe(gulp.dest('public/rs-plugin'))
});

gulp.task('scripts', function () {
    if (config.env == 'dev') {
        return gulp.src(paths.src.js + '/**/*.js')
            .pipe(gulp.dest(paths.target.js));
    } else {
        return gulp.src(paths.src.js + '/*.js')
            .pipe(plugins.uglify())
            .pipe(plugins.rename(function(path) {
                path.basename += '.min'
            }))
            .pipe(gulp.dest(paths.target.js));
    }
});

//CSS Compilation
gulp.task('plugins_css', function () {
    return gulp.src(
        [
            paths.src.vendor + '/bootstrap/dist/css/*.min.css',
            paths.src.vendor + '/jquery-ui/themes/ui-darkness/*.css',
            paths.src.vendor + '/jquery.ui.timepicker/*.css',
            paths.src.vendor + '/jqueryui-timepicker-addon/dist/jqueryui-timepicker-addon.min.css',
            paths.src.vendor + '/**/*.min.css'
        ])
        .pipe(plugins.minifyCss())
        .pipe(plugins.concat('vendor.css'))
        .pipe(plugins.rename('vendor.min.css'))
        .pipe(gulp.dest(paths.target.css));
});

//JS Compilation
gulp.task('plugins_scripts', ['rs-plugin'], function () {
    return gulp.src(
        [
            paths.src.vendor + '/jquery/dist/jquery.min.js',
            paths.src.vendor + '/jquery-ui/jquery-ui.min.js',
            paths.src.vendor + '/jquery.ui.timepicker/jquery.ui.timepicker.js',
            paths.src.vendor + '/jqueryui-timepicker-addon/dist/jqueryui-timepicker-addon.min.js',
            paths.src.vendor + '/**/dist/**/*.min.js',
            paths.src.js + '/libs/*.js'
        ])
        .pipe(plugins.debug())
        .pipe(plugins.uglify())
        .pipe(plugins.concat('vendor.js'))
        .pipe(plugins.rename('vendor.min.js'))
        .pipe(gulp.dest(paths.target.js));
});

gulp.task('fonts', function(){
    return gulp.src([paths.src.fonts + '/**/*', paths.src.vendor + '/**/fonts/**/*'])
        .pipe(plugins.flatten())
        .pipe(gulp.dest(paths.target.fonts))
});

gulp.task('images', function(){
    return gulp.src('resources/assets/images/**/*')
        .pipe(gulp.dest(paths.target.images))
});

/* Blade Templates */
gulp.task('blade', function() {
 return gulp.src(paths.src.views + '/**/*.blade.php')
     .pipe(livereload(server));
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

/* Watcher */
gulp.task('watch', function() {

    plugins.livereload.listen();

    gulp.watch(paths.src.views + '/**/*.blade.php', ['blade']);
    gulp.watch(paths.src.css + '/**/*.css', ['css']);
    gulp.watch(paths.src.js + '/**/*.js', ['scripts']);
    gulp.watch('app/**/*.php', ['phpunit']);

});

gulp.task('dev', function () {
    config.env = 'dev';
    plugins.livereload.listen();
    gulp.watch([
            paths.src.js + '**/*.js',
            paths.src.css + '/**/*.css',
            paths.src.fonts + '/**/*',
            paths.src.images + '/**/*'
        ],
        ['plugins_css','plugins_scripts','css', 'scripts','fonts','images']
    );
});

gulp.task('prod', ['plugins_css', 'plugins_scripts', 'css', 'scripts', 'fonts', 'images']);

gulp.task('default',['prod']);
