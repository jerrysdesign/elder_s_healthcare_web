var gulp      = require('gulp'), 
    bower     = require('gulp-bower'),
    rename    = require('gulp-rename'),
    clean     = require('gulp-clean')

var src = {};
var hidden_files = '**/_*.*';
var ignored_files = '!'+hidden_files;
var all_folders = '/**/*';
var all_files = '/**.*';

// Sources config
var config = {
  vendor  : './bower_components' ,
  project : './templates/project/source' ,
}

var bower = {
    bootstrapsass: config.vendor + '/bootstrap-sass/assets/stylesheets',
    bootstrap : config.vendor + '/bootstrap/dist',
    bootstrapdatepicker: config.vendor + '/bootstrap-datepicker',
    datetimepicker: config.vendor + '/eonasdan-bootstrap-datetimepicker/build/',
    edittable: config.vendor + '/x-editable/dist/bootstrap3-editable',
    jquery: config.vendor + '/jquery/dist',
    fontawesome: config.vendor + '/fontawesome',
    jqueryvalidation: config.vendor + '/jquery-validation/dist',
    jqueryfancybox: config.vendor + '/fancybox/source'
}

var vendor = {
  source : {
    bootstrapsass :           bower.bootstrapsass + all_folders,
    bootstrapjs :             bower.bootstrap + '/js' + all_folders,
    bootstrapcss :            bower.bootstrap + '/css' + all_folders,
    bootstrapfont :           bower.bootstrap + '/fonts' + all_files,
    bootstrapdatepickerjs :   bower.bootstrapdatepicker + '/js' + all_files,
    bootstrapdatepickercss :  bower.bootstrapdatepicker + '/css' + all_files,
    datetimepickerjs :        bower.datetimepicker + '/js' + all_files,
    datetimepickercss :       bower.datetimepicker + '/css' + all_files,
    edittablejs:              bower.edittable + '/js' + all_files,
    edittablecss:             bower.edittable + '/css' + all_files,
    edittableimg:             bower.edittable + '/img' + all_files,
    jquery :                  bower.jquery + all_folders,
    iconfont :                bower.fontawesome + '/fonts' + all_files,
    iconfontsass :            bower.fontawesome + '/scss' + all_files,
    jQueryValidate :          bower.jqueryvalidation + all_files,
    jQueryFancyBox :          bower.jqueryfancybox + all_folders
    // font:
    // [
    //  // config.vendor + '/open-sans-fontface/open-sans.css',
    //  // config.vendor + '/open-sans-fontface/fonts/Light/*',
    //  // config.vendor + '/open-sans-fontface/fonts/Regular/*',
    //  // config.vendor + '/open-sans-fontface/fonts/Italic/*',
    //  // config.vendor + '/open-sans-fontface/fonts/Semibold/*',
    //  config.vendor + '/open-sans-fontface/**/*'// **所有目錄 // **/*所有目錄包含檔案
    // ],
  },
  dist : {
    bootstrapsass :           config.project + '/sass/vendor/bootstrap-sass',
    bootstrapjs :             config.project + '/js/vendor/bootstrap/js',
    bootstrapcss :            config.project + '/styles/vendor/bootstrap/css',
    bootstrapfont :           config.project + '/fonts/bootstrap',
    bootstrapdatepickerjs :   config.project + '/js/vendor/bootstrap-datepicker',
    bootstrapdatepickercss :  config.project + '/styles/vendor/bootstrap-datepicker',
    datetimepickerjs :        config.project + '/js/vendor/bootstrap-datetimepicker',
    datetimepickercss :       config.project + '/styles/vendor/bootstrap-datetimepicker',
    edittablejs :             config.project + '/js/vendor/edittable',
    edittablecss :            config.project + '/styles/vendor/edittable',
    edittableimg :            config.project + '/img/',
    jquery :                  config.project + '/js/vendor/jquery',
    iconfont :                config.project + '/fonts',
    iconfontsass :            config.project + '/sass/vendor/fontawesome',
    jQueryValidate:           config.project + '/js/vendor/jquery.validation',
    jQueryFancyBox:           config.project + '/js/vendor/fancybox'
  }
}

//---------------
// TASKS
//---------------

gulp.task('vendor', function() {
  gulp.src(vendor.source.bootstrapsass)
    .pipe(gulp.dest(vendor.dist.bootstrapsass))
    ;
  gulp.src(vendor.source.bootstrapjs)
    .pipe(gulp.dest(vendor.dist.bootstrapjs))
    ;
  gulp.src(vendor.source.bootstrapjs)
    .pipe(gulp.dest(vendor.dist.bootstrapjs))
    ;
  gulp.src(vendor.source.bootstrapcss)
    .pipe(gulp.dest(vendor.dist.bootstrapcss))
    ;
  gulp.src(vendor.source.bootstrapfont)
    .pipe(gulp.dest(vendor.dist.bootstrapfont))
    ;
  gulp.src(vendor.source.bootstrapdatepickerjs)
    .pipe(gulp.dest(vendor.dist.bootstrapdatepickerjs))
    ;
  gulp.src(vendor.source.bootstrapdatepickercss)
    .pipe(gulp.dest(vendor.dist.bootstrapdatepickercss))
    ;
  gulp.src(vendor.source.datetimepickerjs)
    .pipe(gulp.dest(vendor.dist.datetimepickerjs))
    ;
  gulp.src(vendor.source.datetimepickercss)
    .pipe(gulp.dest(vendor.dist.datetimepickercss))
    ;
  gulp.src(vendor.source.edittablejs)
    .pipe(gulp.dest(vendor.dist.edittablejs))
    ;
  gulp.src(vendor.source.edittablecss)
    .pipe(gulp.dest(vendor.dist.edittablecss))
    ;
  gulp.src(vendor.source.edittableimg)
    .pipe(gulp.dest(vendor.dist.edittableimg))
    ;
  gulp.src(vendor.source.jquery)
    .pipe(gulp.dest(vendor.dist.jquery))
    ;
  gulp.src(vendor.source.iconfont) 
    .pipe(gulp.dest(vendor.dist.iconfont))
    ; 
  gulp.src(vendor.source.iconfontsass) 
    .pipe(gulp.dest(vendor.dist.iconfontsass))
    ; 
  gulp.src(vendor.source.jQueryValidate) 
    .pipe(gulp.dest(vendor.dist.jQueryValidate))
    ; 
  gulp.src(vendor.source.jQueryFancyBox) 
    .pipe(gulp.dest(vendor.dist.jQueryFancyBox))
    ; 
  gulp.src('./templates/project/source/styles/vendor/fontawesome/font-awesome.css' ) 
    .pipe(gulp.dest('./templates/project/source/styles/'))
    ; 
});

gulp.task('clean', function() {  
  return gulp.src([
    vendor.dist.iconfontsass + '/font-awesome.scss',
    config.project + '/styles/vendor/'
    ], {read: false})
    .pipe(clean())
    ;
});

// gulp.task('rename', function() {
//  gulp.src(vendor.dist.iconfontsass + '/font-awesome.scss') 
//    .pipe(rename('_font-awesome.scss'))
//    .pipe(gulp.dest(vendor.dist.iconfontsass))
//    ; 
// });
// gulp.task('font', function() {
//    gulp.src(vendor.source.font)
//    .pipe(gulp.dest(buide.font))
//    ;
// });

var tasks = [
  'vendor'
  // 'rename'
  //'iconfont',
  // 'iconfontsass',
  // 'fontawesomerename',
  // 'font',
  // 'bootstrapsass',
  // 'jquery'
];

gulp.task('default', tasks);