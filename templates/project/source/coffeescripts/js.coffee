gridviewScroll = ->
	document.body.style.overflow = 'hidden'
	gridleftW   = $('.sidebar-wrapper').width() + 80
	searchRowH  = 60
	gridtopH    = $('.container-fluid > div:first-child').outerHeight() + searchRowH
	gridWidth   = $(window).width() - gridleftW
	gridHeight  = $(window).height() - gridtopH
	tabsRowH    = 65
	gridHeight2 = gridHeight - tabsRowH

	$('#tableCost1').gridviewScroll
		width: gridWidth
		height: gridHeight
		headerrowcount: 2
		freezesize: 4
		railsize: 16
		barsize: 16

	$('#tableCost3, #tableCost4').gridviewScroll
		width: gridWidth
		height: gridHeight
		headerrowcount: 2
		freezesize: 2
		railsize: 16
		barsize: 16

	$('#tableResult1_1, #tableResult1_2').gridviewScroll
		width: gridWidth
		height: gridHeight2
		headerrowcount: 2
		freezesize: 4
		railsize: 16
		barsize: 16

	$('#tableAccount3, #tableCost2').gridviewScroll
		width: gridWidth
		height: gridHeight2
		headerrowcount: 1
		freezesize: 3
		railsize: 16
		barsize: 16

	$('#tableAccount5').gridviewScroll
		width: gridWidth
		height: gridHeight2
		headerrowcount: 1
		freezesize: 5
		railsize: 16
		barsize: 16



$ ->
	asideW = $('aside').width()
	$winW = $(window).width()
	$winH = $(window).height()


	# tabsRowfixW = ->
	#   $fixW = $winW - asideW
	#   console.log($winW)
	#   console.log(asideW)
	#   $('.js_fix-main-width').css('width',$fixW)

	# tabsRowfixW()

	lrHeight = ->
		if $('.js_col-l').height() > $('.js_col-r').outerHeight()
			$('.js_col-r').css 'height', $('.js_col-l').outerHeight()
		else
			$('.js_col-l').css 'height', $('.js_col-r').outerHeight()
	lrHeight()

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


	autoH = ->
		$('.main').css('height', $winH)
	autoH()

	autoW = ->
		console.log("autow")
	autoW()

	$(window).resize ->
		$winH = $(window).height()
		autoH()
		autoW()
		lrHeight()

	$('.trigger').click ->
		$('.layout-fixed').toggleClass 'aside-collapsed'

	$('.fm-ctrl').formShowHide()

	# $('.fht-tbody').scroll ->
	# 	$('.popover.in').remove()

	$('.js__chang_input_pw').click (e) ->
		e.preventDefault()
		$js__chang_input_pw = "<input type='password' class='form-control' placeholder=''>"
		$(this).before($js__chang_input_pw)
		$(this).hide()

#turn to inline mode
$.fn.editable.defaults.mode = 'popup'
$(document).ready ->
	gridviewScroll()
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
