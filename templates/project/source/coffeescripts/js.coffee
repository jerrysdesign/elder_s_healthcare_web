$ ->

  xxx = ->
    $fixW = $(window).width()- (220+70)
    $('.js_fix-main-width').width($fixW)
  xxx()


  if $('.js_col-l').height() > $('.js_col-r').height()
    $('.js_col-r').css 'height', $('.js_col-l').height()
  else
    $('.js_col-l').css 'height', $('.js_col-r').height()


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
    xxx()
    $winHeight = $(window).height()
    $('.main').css('height', $winHeight)


  $('.trigger').click ->
    $('.layout-fixed').toggleClass 'aside-collapsed'




