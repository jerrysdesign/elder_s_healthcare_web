$ ->

	#############################################################
	# 
	#############################################################
	

	###
	偵測側欄寬
	###
	asideW = $('aside').width()
	

	###
	偵測視窗寬度
	###
	$winW = $(window).width()
	

	###
	偵測視窗高度
	###
	$winH = $(window).height()
	

	###
	平衡左右欄寬度，使用於任務頁面
	###
	lrHeight = ->
		if $('.js_col-l').height() > $('.js_col-r').outerHeight()
			$('.js_col-r').css 'height', $('.js_col-l').outerHeight()
		else
			$('.js_col-l').css 'height', $('.js_col-r').outerHeight()
	lrHeight()


	###
	自動高度(div.main)
	###
	autoH = ->
		$('.main').css('height', $winH)
		$('.fixedheadertablemon').css('height', $winH - 191)
	autoH()

	###
	自動高度(div.main)
	###
	$(window).resize ->
		$winH = $(window).height()
		autoH()
		autoW()
		lrHeight()
	
	###
	# 隱藏側欄
	###
	$('.trigger').click (e)->
		e.preventDefault()
		$('.layout-fixed').toggleClass 'aside-collapsed'


	###
	顯示密碼輸入框,使用於編輯帳號頁面 edit_account_1~5
	###
	$('.js__chang_input_pw').click (e) ->
		e.preventDefault()
		$js__chang_input_pw = "<input id='password' type='password' class='form-control' placeholder=''>"
		$(this).before($js__chang_input_pw)
		$(this).hide()


	$radio = $('.case_new_check').find('input[type="radio"]')
	$contAll = $('.case_new_checkcont1,.case_new_checkcont2')
	_cont = 'case_new_checkcont'
	$radio.change ->
		$idx = $(this).parent().index() + 1
		$contAll.hide()
		$('.' + _cont + $idx).show()



	#############################################################
	# 引用 API
	#############################################################


	###
	bootstrap-datepicker (日期 datepicker)
	###
	$('.datepicker').datepicker
		format: 'yyyy-mm-dd'


	###
	bootstrap-datetomepicker (時間 timepicker)
	###
	$('.timepicker').datetimepicker format: 'yyyy-mm-dd'




	###
	jquery.formShowHide
	###
	$('.fm-ctrl').formShowHide()

	###
	jquery.fixedheadertable
	###
	$('.fixedheadertable').fixedHeaderTable
		footer: false
		fixedColumns: 3


	###
	x-editable
	###
	$.fn.editable.defaults.mode = 'popup'

	$('.editable').editable()

	$('.editable_textarea').editable
		rows: 4
	
	$('.editable_timepicker').editable
		format: 'YYYY-MM-DD'
		viewformat: 'YYYY-MM-DD'
		template: 'YYYY - MM - DD',
		datepicker:
			weekStart: 1
		combodate:
			minYear: 2000
			minuteStep: 1

	$('.editable_select').editable
		value: 1
		source: [
			{value: 0, text: '未完成'}
			{value: 1, text: '已完成'}
		]



	#############################################################
	# 外掛 Fix
	#############################################################
	
	autoW = ->
		$('.fht-fixed-body').width(100 + "%")
		console.log("autow")
	autoW()

	###
	editable (scroll時無法定位)
	###
	$('.fht-tbody').scroll ->
		$('.popover.in').remove()