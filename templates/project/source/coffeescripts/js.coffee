$ ->

  tabsRowfixW = ->
    $fixW = $(window).width()- (220+70)
    $('.js_fix-main-width').width($fixW)
  tabsRowfixW()


  if $('.js_col-l').height() > $('.js_col-r').outerHeight()
    $('.js_col-r').css 'height', $('.js_col-l').outerHeight()
  else
    $('.js_col-l').css 'height', $('.js_col-r').outerHeight()


  $('.datepicker').datepicker
    format: 'yyyy-mm-dd'


  $('.timepicker').datetimepicker format: 'LT'


  $radio = $('.case_new_check').find('input[type="radio"]')
  $contAll = $('.case_new_checkcont1,.case_new_checkcont2')
  _cont = 'case_new_checkcont'
  $radio.change ->
    $idx = $(this).parent().index() + 1
    $contAll.hide()
    $('.' + _cont + $idx).show()


  $winHeight = $(window).height()
  $('.main').css('height', $winHeight)


  $(window).resize ->
    tabsRowfixW()
    $winHeight = $(window).height()
    $('.main').css('height', $winHeight)


  $('.trigger').click ->
    $('.layout-fixed').toggleClass 'aside-collapsed'



#turn to inline mode
$.fn.editable.defaults.mode = 'popup'
$(document).ready ->
  $('.editable').editable()
  $('.editable_textarea').editable
    rows: 4
  $('.editable_timepicker').editable
    format: 'yyyy-mm-dd'
    viewformat: 'yyyy-mm-dd'
    template: 'YYYY - MM - DD'
    datepicker:
      weekStart: 1
    combodate:
      minYear: 2000
      minuteStep: 1

  $('.editable_select').editable
    value: 1
    source: [
      {value: 1, text: '未完成'}
      {value: 2, text: '已完成'}
    ]