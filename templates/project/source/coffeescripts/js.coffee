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
	$('.xxxform').validator()


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

	$('.datepicker-months').datepicker
		viewMode: "months"
		minViewMode: "months"
		format: 'yyyy-mm'


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

	timer = 0
	$(window).resize ->
		if timer
			clearTimeout timer
			timer = 0
		timer = setTimeout((->
			location.reload()
		), 300)
		
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


$(window).load ->
	$cost1     = $('#tableCost1')
	$cost2     = $('#tableCost2')
	$cost3     = $('#tableCost3')
	$cost4     = $('#tableCost4')
	$result1_1 = $('#tableResult1_1')
	$result1_2 = $('#tableResult1_2')
	$account3  = $('#tableAccount3')
	$account5  = $('#tableAccount5')
	$barsize   = 16
	$colgap    = 2
	if $cost1
		$('#tableCost1PanelItemContentFreeze .GridviewScrollItem').each ->
			contH = $(this).find('td').eq(1).height()
			if !$(this).find('td').attr('colspan')
				$(this).find('td').eq(0).height contH + $barsize

		$('#tableCost1PanelItemContentFreeze').css 'width', $('#tableCost1CopyFreeze').width() - $colgap

	if $cost2
		$('#tableCost2PanelItemContentFreeze .GridviewScrollItem').each ->
			contH = $(this).find('td').eq(1).height()
			if !$(this).find('td').attr('colspan')
				$(this).find('td').eq(0).height contH + $barsize

		$('#tableCost2PanelItemContentFreeze').css 'width', $('#tableCost2CopyFreeze').width() - $colgap
		$('#tableCost2PanelItem').css 'overflow', 'inherit'
		$('#tableResult1_2PanelItemContent').scroll ->
			$('.popover.in').remove()

	if $cost3
		$('#tableCost3PanelItemContentFreeze .GridviewScrollItem').each ->
			contH = $(this).find('td').eq(1).height()
			if !$(this).find('td').attr('colspan')
				$(this).find('td').eq(0).height contH + $barsize

		$('#tableCost3PanelItemContentFreeze').css 'width', $('#tableCost3CopyFreeze').width() - $colgap

	if $cost4
		$('#tableCost4PanelItemContentFreeze .GridviewScrollItem').each ->
			contH = $(this).find('td').eq(1).height()
			if !$(this).find('td').attr('colspan')
				$(this).find('td').eq(0).height contH

		$('#tableCost4PanelItemContentFreeze').css 'width', $('#tableCost4CopyFreeze').width() - $colgap
		$('#tableCost4PanelItem').css 'overflow', 'inherit'
		$('#tableCost4PanelItemContent').scroll ->
			$('.popover.in').remove()

	if $result1_1
		$('#tableResult1_1PanelItemContentFreeze .GridviewScrollItem').each ->
			contH = $(this).find('td').eq(1).height()
			$(this).find('td').eq(0).height contH + $barsize

		$('#tableResult1_1PanelItemContentFreeze').css 'width', $('#tableResult1_1CopyFreeze').width() - $colgap
		$('#tableResult1_1PanelItem').css 'overflow', 'inherit'
		$('#tableResult1_1PanelItemContent').scroll ->
			$('.popover.in').remove()

	if $result1_2
		$('#tableResult1_2PanelItemContentFreeze .GridviewScrollItem').each ->
			contH = $(this).find('td').eq(1).height()
			$(this).find('td').eq(0).height contH + $barsize

		$('#tableResult1_2PanelItemContentFreeze').css 'width', $('#tableResult1_2CopyFreeze').width() - $colgap
		$('#tableResult1_2PanelItem').css 'overflow', 'inherit'
		$('#tableResult1_2PanelItemContent').scroll ->
			$('.popover.in').remove()

	if $account3
		$('#tableAccount3PanelItemContentFreeze .GridviewScrollItem').each ->
			contH = $(this).find('td').eq(1).height()
			$(this).find('td').eq(0).height contH + $barsize

		$('#tableAccount3PanelItemContentFreeze').css 'width', $('#tableAccount3CopyFreeze').width() - $colgap
		$('#tableAccount3PanelItem').css 'overflow', 'inherit'

	if $account5
		$('#tableAccount5PanelItemContentFreeze .GridviewScrollItem').each ->
			contH = $(this).find('td').eq(1).height()
			$(this).find('td').eq(0).height contH + $barsize

		$('#tableAccount5PanelItemContentFreeze').css 'width', $('#tableAccount5CopyFreeze').width() - $colgap
		$('#tableAccount5PanelItem').css 'overflow', 'inherit'
