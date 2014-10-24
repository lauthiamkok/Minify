// Include Gulp
var gulp = require('gulp');

 // Include plugins
var plugins = require("gulp-load-plugins")({
	pattern: ['gulp-*', 'gulp.*', 'main-bower-files'],
	replaceString: /\bgulp[\-.]/
});
 // Define default destination folder
var dest = 'dist/';

/*
gulp.src(plugins.mainBowerFiles())
	.pipe(plugins.filter('*.js'))
	.pipe()
	.pipe(gulp.dest(dest + 'js'));

gulp.task('js', function() {
 	var jsFiles = ['app/scripts/*'];
 	gulp.src(plugins.mainBowerFiles().concat(jsFiles))
		.pipe(plugins.filter('*.js'))
		.pipe(plugins.concat('main.js'))
		.pipe(plugins.uglify())
		.pipe(gulp.dest(dest + 'js'));
 });
 
 gulp.task('css', function() {
 	var cssFiles = ['app/css/*'];
 	gulp.src(plugins.mainBowerFiles().concat(cssFiles))
		.pipe(plugins.filter('*.css'))
		.pipe(plugins.concat('main.css'))
		.pipe(plugins.uglify())
		.pipe(gulp.dest(dest + 'css'));
 });
 */
 

var mainBowerFiles = require('main-bower-files');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var filter = require('gulp-filter');
var inject = require('gulp-inject');
var rename = require('gulp-rename');
 // Define default destination folder
var dest = 'dist/';

// grab libraries files from bower_components, minify and push in /public
gulp.task('libs', function() {

    var jsFilter = filter('*.js');

	return gulp.src(mainBowerFiles())

	// grab vendor js files from bower_components, minify and push in /public
	.pipe(jsFilter)
	.pipe(gulp.dest(dest + '/js/vendor'))
	.pipe(uglify())
	.pipe(rename({
        suffix: ".min"
    }))
	.pipe(gulp.dest(dest + '/js/vendor'))
	.pipe(jsFilter.restore());
});

gulp.task('bower', function() {
  return gulp.src(mainBowerFiles(), {
      base: 'app/scripts/vendor/'
    })
    .pipe(gulp.dest('public/lib'));
});

gulp.task('inject', function() {
  //util.log(bowerFiles({debugging:true}))
  gulp.src('app/scripts/*')
    //.pipe(jade({pretty: true}))
    .pipe(inject(gulp.src(mainBowerFiles()), {starttag: '<!-- inject:{{ext}}-->', endtag: '<!-- endinject-->'}))
    .pipe(inject(gulp.src('app/scripts/**/*.js', {read: false}), {starttag: '<!-- inject:files:{{ext}}-->', endtag: '<!-- endinject-->'}))
    //.pipe(connect.reload())
    .pipe(gulp.dest(dest));
});


gulp.task('js', function() {
 	var jsFiles = ['app/scripts/*'];
 	gulp.src(mainBowerFiles().concat(jsFiles))
		.pipe(filter('*.js'))
		.pipe(concat('main.js'))
		.pipe(uglify())
		.pipe(gulp.dest(dest + 'js'));
 });
 
 gulp.task('css', function() {
 	var cssFiles = ['app/css/*'];
 	gulp.src(mainBowerFiles().concat(cssFiles))
		.pipe(filter('*.css'))
		.pipe(concat('main.css'))
		.pipe(uglify())
		.pipe(gulp.dest(dest + 'css'));
 });


gulp.task('default', ['js','css'], function() {
    /*
    // watch for HTML changes
    gulp.watch('src/*.html', function() {
        gulp.run('htmlpage');
    });
    
    // watch for JS changes
    gulp.watch('src/js/*.js', function() {
        gulp.run('scripts');
    });
 
    // watch for CSS changes
    gulp.watch('src/css/*.css', function() {
        gulp.run('styles');
    });
    */
});