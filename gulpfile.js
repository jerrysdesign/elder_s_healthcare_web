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
  vendor  : './bower_components',
  project : './templates/project/source',
  download: './vendor'
}

var bower = {
    bootstrapsass: config.vendor + '/bootstrap-sass/assets/stylesheets',
    bootstrap : config.vendor + '/bootstrap/dist',
    bootstrapdatepicker: config.vendor + '/bootstrap-datepicker',
    datetimepicker: config.vendor + '/eonasdan-bootstrap-datetimepicker/build/',
    editable: config.vendor + '/x-editable/dist/bootstrap3-editable',
    jquery: config.vendor + '/jquery/dist',
    fontawesome: config.vendor + '/fontawesome',
    jqueryvalidation: config.vendor + '/jquery-validation/dist',
    jqueryfancybox: config.vendor + '/fancybox/source',
    jqueryui: config.vendor + '/jqueryui'
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
    editablejs:               bower.editable + '/js' + all_files,
    editablecss:              bower.editable + '/css' + all_files,
    editableimg:              bower.editable + '/img' + all_files,
    jquery :                  bower.jquery + all_folders,
    iconfont :                bower.fontawesome + '/fonts' + all_files,
    iconfontsass :            bower.fontawesome + '/scss' + all_files,
    jQueryValidate :          bower.jqueryvalidation + all_files,
    jQueryFancyBox :          bower.jqueryfancybox + all_folders,
    jQueryFormShowHidejs :    config.download + '/jQuery-FormShowHide/js' + all_files,
    gridViewScrolljs:         config.download + '/GridViewScroll/gridviewScroll.min.js',
    gridViewScrollcss:        config.download + '/GridViewScroll/gridviewScroll.css',
    jQueryUi :                bower.jqueryui + '/jquery-ui.min.js'
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
    editablejs :              config.project + '/js/vendor/editable',
    editablecss :             config.project + '/styles/vendor/editable',
    editableimg :             config.project + '/styles/vendor/img/',
    jquery :                  config.project + '/js/vendor/jquery',
    iconfont :                config.project + '/fonts',
    iconfontsass :            config.project + '/sass/vendor/fontawesome',
    jQueryValidate:           config.project + '/js/vendor/jquery.validation',
    jQueryFancyBox:           config.project + '/js/vendor/fancybox',
    jQueryFormShowHidejs :    config.project + '/js/vendor/jquery.formShowHide',
    gridViewScrolljs:         config.project + '/js/vendor/GridViewScroll',
    gridViewScrollcss:        config.project + '/styles/vendor/GridViewScroll',
    jQueryUi:                 config.project + '/js/vendor/jqueryui'
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
  gulp.src(vendor.source.editablejs)
    .pipe(gulp.dest(vendor.dist.editablejs))
    ;
  gulp.src(vendor.source.editablecss)
    .pipe(gulp.dest(vendor.dist.editablecss))
    ;
  gulp.src(vendor.source.editableimg)
    .pipe(gulp.dest(vendor.dist.editableimg))
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
  gulp.src(vendor.source.jQueryFormShowHidejs)
    .pipe(gulp.dest(vendor.dist.jQueryFormShowHidejs))
    ;
  gulp.src(vendor.source.gridViewScrolljs) 
    .pipe(gulp.dest(vendor.dist.gridViewScrolljs))
    ; 
  gulp.src(vendor.source.gridViewScrollcss) 
    .pipe(gulp.dest(vendor.dist.gridViewScrollcss))
    ; 
  gulp.src(vendor.source.jQueryUi)
    .pipe(gulp.dest(vendor.dist.jQueryUi))
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