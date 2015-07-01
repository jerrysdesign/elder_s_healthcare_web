$ ->
	if $('.js_col-l').height() > $('.js_col-r').height()
		$('.js_col-r').css 'height', $('.js_col-l').height()
	else
		$('.js_col-l').css 'height', $('.js_col-r').height()
$ ->
	$('.datepicker').datepicker
		format: 'yyyy/mm/dd'
#$ ->
	# $('.timepicker').timepicker
	# 	minuteStep: 1
	# 	template: 'modal'
	# 	appendWidgetTo: 'body'
	# 	showSeconds: true
	# 	showMeridian: false
	# 	defaultTime: false
$ ->
  $('.timepicker').datetimepicker format: 'LT'