var gulp      = require('gulp'), 
		bower     = require('gulp-bower');

var src = {};
var hidden_files = '**/_*.*';
var ignored_files = '!'+hidden_files;

// Sources config
var config = {
	vendor	:	'./bower_components' ,
	project	: './templates/project/source' 
}


var source = {
	vendor : {
		bootstrapsass: [config.vendor + '/bootstrap-sass/assets/stylesheets/**/*'],
		jquery: [config.vendor + '/jquery/dist/**/*'],
		// font:
		// [
		// 	// config.vendor + '/open-sans-fontface/open-sans.css',
		// 	// config.vendor + '/open-sans-fontface/fonts/Light/*',
		// 	// config.vendor + '/open-sans-fontface/fonts/Regular/*',
		// 	// config.vendor + '/open-sans-fontface/fonts/Italic/*',
		// 	// config.vendor + '/open-sans-fontface/fonts/Semibold/*',
		// 	config.vendor + '/open-sans-fontface/**/*'// **所有目錄 // **/*所有目錄包含檔案
		// ],
		iconfont : [config.vendor + '/fontawesome/fonts/**.*']
	}
}

// Build target config 
var buide = {
	// iconfont	: './fonts',
	// font			: './vendor/open-sans-fontface/'
}

var dist = {
	iconfont 			: config.project + '/fonts',
	bootstrapsass	: config.project + '/sass/vendor/bootstrap-sass',
	jquery				: config.project + '/vendor/jquery'
}
//---------------
// TASKS
//---------------

gulp.task('bootstrapsass', function() {
		gulp.src(source.vendor.bootstrapsass)
		.pipe(gulp.dest(dist.bootstrapsass))
		;
});
gulp.task('jquery', function() {
		gulp.src(source.vendor.jquery)
		.pipe(gulp.dest(dist.jquery))
		;
});
gulp.task('iconfont', function() { 
	return gulp.src(source.vendor.iconfont) 
		.pipe(gulp.dest(dist.iconfont))
		; 
});

// gulp.task('font', function() {
// 		gulp.src(source.vendor.font)
// 		.pipe(gulp.dest(buide.font))
// 		;
// });
var framework = [
	'bootstrapsass',
	'jquery'
]
var tasks = [
	'iconfont',
	// 'font',
	'bootstrapsass',
	'jquery'
];

gulp.task('default', tasks);