var gulp      = require('gulp'), 
    bower     = require('gulp-bower'),
    rename    = require('gulp-rename'),
    clean     = require('gulp-clean')

var src = {};
var hidden_files = '**/_*.*';
var ignored_files = '!'+hidden_files;

// Sources config
var config = {
  vendor  : './bower_components' ,
  project : './templates/project/source' 
}

var vendor = {
  source : {
    bootstrapsass :           config.vendor + '/bootstrap-sass/assets/stylesheets/**/*',
    bootstrapjs :             config.vendor + '/bootstrap/dist/js/**/*',
    bootstrapcss :            config.vendor + '/bootstrap/dist/css/**/*',
    bootstrapfont :           config.vendor + '/bootstrap/dist/fonts/**.*',
    bootstrapdatepickerjs :   config.vendor + '/bootstrap-datepicker/js/**/*',
    bootstrapdatepickercss :  config.vendor + '/bootstrap-datepicker/css/**.*',
    datetimepickerjs :        config.vendor + '/eonasdan-bootstrap-datetimepicker/build/js/**.*',
    datetimepickercss :       config.vendor + '/eonasdan-bootstrap-datetimepicker/build/css/**.*',
    jquery :                  config.vendor + '/jquery/dist/**/*',
    // font:
    // [
    //  // config.vendor + '/open-sans-fontface/open-sans.css',
    //  // config.vendor + '/open-sans-fontface/fonts/Light/*',
    //  // config.vendor + '/open-sans-fontface/fonts/Regular/*',
    //  // config.vendor + '/open-sans-fontface/fonts/Italic/*',
    //  // config.vendor + '/open-sans-fontface/fonts/Semibold/*',
    //  config.vendor + '/open-sans-fontface/**/*'// **所有目錄 // **/*所有目錄包含檔案
    // ],
    iconfont :        config.vendor + '/fontawesome/fonts/**.*',
    iconfontsass :    config.vendor + '/fontawesome/scss/**.*',
    jQueryValidate :  config.vendor + '/jquery-validation/dist/**.*',
    jQueryFancyBox :  config.vendor + '/fancybox/source/**/*'
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