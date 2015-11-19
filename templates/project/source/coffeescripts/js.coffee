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
	$('.bootstrap-validator').validator()

	# tabsRowfixW = ->
	#   $fixW = $winW - asideW
	#   console.log($winW)
	#   console.log(asideW)
	#   $('.js_fix-main-width').css('width',$fixW)

	# tabsRowfixW()

	lrHeight = ->
		$('.js_col-l,.js_col-r').css("min-height", $winH);
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
		autoH()
		lrHeight()
		# if timer
		# 	clearTimeout timer
		# 	timer = 0
		# timer = setTimeout((->
		# 	location.reload()
		# ), 300)
		
	$('.trigger').click ->
		$('.layout-fixed').toggleClass 'aside-collapsed'

	$('.fm-ctrl').formShowHide()

	# 修改密碼欄位, 驗證規則若有變更需通知RD,以免規則不同步
	$('.js__chang_input_pw').click (e) ->
		e.preventDefault()
		$js__chang_input_pw = "<input id='password' type='password' class='form-control' placeholder='' minlength='6' maxlength='24' data-error='請填入6-24位英數密碼，含特殊符號' required><span class='glyphicon form-control-feedback' aria-hidden='true'></span><div class='help-block with-errors'></div>"
		$(this).before($js__chang_input_pw)
		$(this).hide()

	# 系統設定 / 耗材庫存 列表收合
	$tabs_04_2     = $('#tabs_04_2_slide')
	$tabs_04_2_btn = $tabs_04_2.find('.slide_btn')
	$tabs_04_2.find('ul').not(":eq(0)").find('.setting_item-log').slideUp();
	$tabs_04_2_btn.css('cursor','pointer').click ->
		$(this).siblings().slideToggle()

	# 系統設定 / 耗材庫存 新增、刪除庫存項目
	$tabs_04_2_additem    = $('#tabs_04_2_additem')
	$tabs_04_2_clone_item = $('#tabs_04_2_additem').children().eq(1)
	$tabs_04_2_added_btn  = $tabs_04_2_additem.find('.added_btn')
	$tabs_04_2_remove_btn = $tabs_04_2_additem.find('.remove_btn')
	$tabs_04_2_added_btn.click ->
		$tabs_04_2_additem.append($tabs_04_2_clone_item.clone().find('input[type=text]').val("").end())
	$('body').on 'click', '.remove_btn', ->
		$(this).parents('li').remove()

	# 系統設定 / 評鑑訪問 問卷調查頁籤
	$('#tabs_09_questionnaire a:first').tab('show')

	# 共用元件 / 表格內容自動收合、顯示更多
	$('.dspmore').each ->
		_dsprows = 3
		_dsptext = '+ 顯示更多'
		if $(this).children('li').length > _dsprows
			$(this).css('overflow', 'hidden').after('<a class="dsp_btn text-muted" href="#">' + _dsptext + '</a>').height $('.dspmore li').height() * _dsprows
		return
		
	$('body').on 'click', '.dsp_btn', ->
		$(this).text('').prev().height 'auto'
		return

	# 個案家訪電訪 / 選取radio 、 input取得焦點
	$('.interview_radio').click ->
		$('.interview_input').prop('disabled', 'disabled')
		$(this).parent().next().children().prop('disabled', '')

	# tooltip
	$('[data-toggle="tooltip"]').each ->
		$(this).tooltip
			container: 'body',
			placement: 'top'

#turn to inline mode
$.fn.editable.defaults.mode = 'popup'


# datapicker scroll hide
# datePicker = $('.datepicker').datepicker();
# $(".main").scroll ->
# 	datePicker.datepicker('hide')
# 	$('.datepicker').blur()

$(document).ready ->
	gridviewScroll()
	$('.editable').editable()
	$('.editable_textarea').editable
		rows: 4
	$('.editable_timepicker').editable
		format: 'YYYY-MM-DD'
		viewformat: 'YYYY-MM-DD'
		template: 'YYYY - MM - DD'
		datepicker:
			weekStart: 1
		combodate:
			minYear: 2000
			minuteStep: 1

	$('.editable_select').editable
		value: 0
		source: [
			{value: 0, text: '未完成'}
			{value: 2, text: '已完成'}
		]
	# $('.datatables').DataTable
	# 	'bLengthChange': false
	# 	'bInfo': false
	# 	'order': [[ 3, "desc" ]]
	# 	# 取消欄排序
	# 	'aoColumnDefs': [{
	# 		'bSortable': false
	# 		'aTargets': [1]
	# 	}]
	# 	'oLanguage':
	# 		'sProcessing': '處理中...'
	# 		'sLengthMenu': '顯示 _MENU_ 項結果'
	# 		'sZeroRecords': '沒有匹配結果'
	# 		'sInfo': '共 _TOTAL_ 筆資料。'
	# 		'sInfoEmpty': '顯示第 0 至 0 項結果，共 0 項'
	# 		'sInfoFiltered': '(從 _MAX_ 項結果過濾)'
	# 		'sSearch': '搜索: '
	# 		'oPaginate':
	# 			'sFirst': '首頁'
	# 			'sPrevious': '上頁'
	# 			'sNext': '下頁'
	# 			'sLast': '尾頁'
				

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


# Updates "Select all" control in a data table
updateDataTableSelectAllCtrl = (table) ->
  $table = table.table().node()
  $chkbox_all = $('tbody input[type="checkbox"]', $table)
  $chkbox_checked = $('tbody input[type="checkbox"]:checked', $table)
  chkbox_select_all = $('thead input[name="select_all"]', $table).get(0)
  # If none of the checkboxes are checked
  if $chkbox_checked.length == 0
    chkbox_select_all.checked = false
    if 'indeterminate' of chkbox_select_all
      chkbox_select_all.indeterminate = false
    # If all of the checkboxes are checked
  else if $chkbox_checked.length == $chkbox_all.length
    chkbox_select_all.checked = true
    if 'indeterminate' of chkbox_select_all
      chkbox_select_all.indeterminate = false
    # If some of the checkboxes are checked
  else
    chkbox_select_all.checked = true
    if 'indeterminate' of chkbox_select_all
      chkbox_select_all.indeterminate = true
  return

$ ->
  # Array holding selected row IDs
  rows_selected = []
  table = $('#list_case_export').DataTable(
    'order': [
      2
      'asc'
    ]
    'bAutoWidth': true
    'bLengthChange': false
    'oLanguage':
      'sProcessing': '處理中...'
      'sLengthMenu': '顯示 _MENU_ 項結果'
      'sZeroRecords': '沒有匹配結果'
      'sInfo': '共 _TOTAL_ 筆資料。'
      'sInfoEmpty': '顯示第 0 至 0 項結果，共 0 項'
      'sInfoFiltered': '(從 _MAX_ 項結果過濾)'
      'sSearch': '搜索:'
      'oPaginate':
        'sFirst': '首頁'
        'sPrevious': '上頁'
        'sNext': '下頁'
        'sLast': '尾頁'
    'columnDefs': [ {
      'targets': 0
      'searchable': false
      'orderable': false
      'className': 'dt-body-center'
      'render': (data, type, full, meta) ->
        '<input type="checkbox">'

    } ]
    'rowCallback': (row, data, dataIndex) ->
      # Get row ID
      rowId = data[0]
      # If row ID is in the list of selected row IDs
      if $.inArray(rowId, rows_selected) != -1
        $(row).find('input[type="checkbox"]').prop 'checked', true
        $(row).addClass 'selected'
      return
  )
  # Handle click on checkbox
  $('#list_case_export tbody').on 'click', 'input[type="checkbox"]', (e) ->
    $row = $(this).closest('tr')
    # Get row data
    data = table.row($row).data()
    # Get row ID
    rowId = data[0]
    # Determine whether row ID is in the list of selected row IDs 
    index = $.inArray(rowId, rows_selected)
    # If checkbox is checked and row ID is not in list of selected row IDs
    if @checked and index == -1
      rows_selected.push rowId
      # Otherwise, if checkbox is not checked and row ID is in list of selected row IDs
    else if !@checked and index != -1
      rows_selected.splice index, 1
    if @checked
      $row.addClass 'selected'
    else
      $row.removeClass 'selected'
    # Update state of "Select all" control
    updateDataTableSelectAllCtrl table
    # Prevent click event from propagating to parent
    e.stopPropagation()
    return
  # Handle click on table cells with checkboxes
  $('#list_case_export').on 'click', 'tbody td, thead th:first-child', (e) ->
    $(this).parent().find('input[type="checkbox"]').trigger 'click'
    return
  # Handle click on "Select all" control
  $('#list_case_export thead input[name="select_all"]').on 'click', (e) ->
    if @checked
      $('#list_case_export tbody input[type="checkbox"]:not(:checked)').trigger 'click'
    else
      $('#list_case_export tbody input[type="checkbox"]:checked').trigger 'click'
    # Prevent click event from propagating to parent
    e.stopPropagation()
    return
  $('#list_case_export_btn').click ->
    $select_row_id = []
    $.each rows_selected, (index, rowId) ->
      $select_row_id.push rowId
      return
    # 將每列第一欄塞入key值即可
    console.log $select_row_id
    return
  return