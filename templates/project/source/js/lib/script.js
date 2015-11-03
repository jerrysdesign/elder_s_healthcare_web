var hcs_calendar = hcs_calendar || {};
hcs_calendar = {
	default_setting : function( input_boolean , input_boolean2 ) {
		var currentLangCode = "zh-tw";
		var calendar_init ={
			lang: currentLangCode,
			theme: true,
			header: {
				left: "prev,next",
				center: "title",
				right: "agendaWeek,month today"
			},
			allDaySlot: false,               // 全天任務
			defaultView: "agendaWeek",       // 停留頁籤
			defaultDate: "2015-06-01",       // 預設日期
			eventLimit: true,                // 更多筆數
			firstDay: 1,                     // 起始週期
			titleFormat: {
				week: "YYYY/MM"
			},
			columnFormat: {
				month: "dd",
				week: "M/D dd",
			},
			axisFormat: "HH:mm",             // 側欄時間
			timeFormat: "HH:mm",             // 事件時間
			formatDate: "MM-dd-yyyy",
			eventBorderColor: "transparent", // 邊框顏色
			eventRender: function(event, element){
				var case_name = event.title;
				element.find(".fc-content").append('<span class="fc-title">'+ event.case_name +'</span>');
				if(event.wai_name != undefined && $(".fc-view").hasClass("fc-month-view") == false){
					element.find(".fc-content").append('<div class="fc-staff">居：'+ event.wai_name +'</div>');
				}
			},
			eventClick: function(event,element){

				var $start        = event.start.format("YYYY-MM-DD HH:mm"),
					$end          = event.end.format("YYYY-MM-DD HH:mm"),
					$body         = $("body"),
					$miss         = $(".miss"),
					$punch        = $(".punch"),
					$nonarrival   = $(".nonarrival"),
					_titleTask    = "任務",
					_topicTask    = "任務名稱",
					_timeStart    = "開始時間",
					_timeEnd      = "結束時間",
					_timeCycle    = "任務週期",
					_taskItme     = "任務項目",
					_attendant    = "服務人員",
					_supervisor   = "督導人員",
					_note         = "其它備註",
					_editEvent    = "修改事件",
					_miss         = "服務未遇",
					_done         = "確定",
					_punch        = "補打卡",
					_nonarrival   = "服務員未到",
					_titleMeeting = "會議/職訓",
					_topicEvent   = "事件主題",
					_eventIssue   = "事件議題",
					_location     = "事件地點",
					_join         = "參與人員",
					_lone_care    = "長照案號",
					_case_phone   = "個案電話",
					_eme_name     = "緊急聯絡",
					_eme_phone    = "聯絡電話",
					_miss_status  = "事件狀態",
					_miss_pay     = "自付金額",
					_miss_subsidy = "補助金額",
					_miss_note    = "未遇備註",
					_continue     = "繼續服務";
				
				if (event.className[0] == 'eventTask'){

					// task_state	
					var $this = $(this);
					var task_state_text = {
						task_miss     : _miss,
						task_continue : _continue,
						task_punch    : _punch,
						wai_yet       : _nonarrival,
					};

					task_state = '';
					for (var key in task_state_text){
						 if($this.hasClass(key)){
							var task_state = '<div class="'+ key +'_title">'+ task_state_text[key] +'</div>';
						}
					}

					var fancyContent = (
						'<div class="modal-header">' +
							'<h4 class="modal-title">'+ _titleTask + task_state +'</h4>' +
						'</div>' +

						'<div class="modal-body">'+
							'<div class="row">'+
								'<label class="col-md-2">'+ _topicTask +'</label>' +
								'<div class="col-md-10">'+ event.case_name +'</div>' +
							'</div>' +
							'<div class="row">'+
								'<label class="col-md-2">'+ _timeStart +'</label>' +
								'<div class="col-md-10">'+ $start +'</div>' +
							'</div>' +
							'<div class="row">'+
								'<label class="col-md-2">'+ _timeEnd +'</label>' +
								'<div class="col-md-10">'+ $end +'</div>' +
							'</div>' +
							'<div class="row">'+
								'<label class="col-md-2">'+ _timeCycle +'</label>' +
								'<div class="col-md-10">'+ event.taskCycle +'</div>' +
							'</div>' +
							'<div class="row">'+
								'<label class="col-md-2">'+ _taskItme +'</label>' +
								'<div class="col-md-10">'+ event.taskItem +'</div>' +
							'</div>' +
							'<div class="row">'+
								'<label class="col-md-2">'+ _attendant +'</label>' +
								'<div class="col-md-10">'+ event.wai_name +'</div>' +
							'</div>' +
							'<div class="row">'+
								'<label class="col-md-2">'+ _supervisor +'</label>' +
								'<div class="col-md-10">'+ event.war_name +'</div>' +
							'</div>' +
							'<div class="row">'+
								'<label class="col-md-2">'+ _note +'</label>' +
								'<div class="col-md-10">' +
									'<textarea class="form-control" rows="3">'+ event.task_note +'</textarea>' +
								'</div>' +
							'</div>' +
						'</div>'+
						'<div class="modal-footer">'+
							'<div class="row">' +
								'<div class="col-md-2 text-left">' +
									'<a href="#" class="btn btn-default">'+ _editEvent +'</a>' +
								'</div>' +
								'<div class="col-md-2 text-left">' +
									'<a href="#" class="btn btn-default miss">'+ _miss +'</a>' +
								'</div>' +
								'<div class="col-md-2 text-left">' +
									'<a href="#" class="btn btn-default punch">'+ _punch +'</a>' +
								'</div>' +
								'<div class="col-md-2 text-left">' +
									'<a href="#" class="btn btn-default nonarrival">'+ _nonarrival +'</a>' +
								'</div>' +
								'<div class="col-md-4 text-right">' +
									'<a href="#" class="btn btn-primary">'+ _done +'</a>' +
								'</div>' +
							'</div>' +
						'</div>');

						// missTask
						$miss.off('click');
						$body.off("click");

						// btn-punch
						$body.on("click",".punch", function(e){
							var $cont = confirm("您要補打卡 " + event.start.format("YYYY/MM/DD HH:mm") + '-' + event.end.format("HH:mm") + " ?");
							if($cont){
								$.fancybox.close();
								return false;
							}
						});

						// btn-nonarrival
						$body.on("click",".nonarrival", function(e){
							var $cont = confirm("請再次確認您要標註服務員未到 ? ");
							if($cont){
								$.fancybox.close();
								return false;
							}
						});

						// btn-missTask

						$body.on("click", ".miss", function() {
							var fancyContent = (
								'<div class="modal-header">' +
									'<h4 class="modal-title">'+ _miss +'</h4>' +
								'</div>' +
								'<div class="modal-body">' +
									'<div class="row">'+
										'<label class="col-md-2">'+ _lone_care +'</label>' +
										'<div class="col-md-10">'+ event.lone_care +'</div>' +
									'</div>' +
									'<div class="row">'+
										'<label class="col-md-2">'+ _topicTask +'</label>' +
										'<div class="col-md-10">'+ event.case_name +'</div>' +
									'</div>' +
									'<div class="row">'+
										'<label class="col-md-2">'+ _case_phone +'</label>' +
										'<div class="col-md-10">'+ event.case_phone +'</div>' +
									'</div>' +
									'<div class="row">'+
										'<label class="col-md-2">'+ _eme_name +'</label>' +
										'<div class="col-md-10">'+ event.eme_name +'</div>' +
									'</div>' +
									'<div class="row">'+
										'<label class="col-md-2">'+ _eme_phone +'</label>' +
										'<div class="col-md-10">'+ event.eme_phone +'</div>' +
									'</div>' +
									'<div class="row">'+
										'<label class="col-md-2">'+ _attendant +'</label>' +
										'<div class="col-md-10">'+ event.wai_name +'</div>' +
									'</div>' +
									'<div class="row">'+
										'<label class="col-md-2">'+ _miss_status +'</label>' +
										'<div class="col-md-10">'+
											'<select class="miss_status"></select>' +
										'</div>' +
									'</div>' +
									'<div class="row">'+
										'<label class="col-md-2">'+ _miss_pay +'</label>' +
										'<div class="col-md-10">'+
											'<input type="text" value="' + event.miss_pay +'">' +
										'</div>' +
									'</div>' +
									'<div class="row">'+
										'<label class="col-md-2">'+ _miss_subsidy +'</label>' +
										'<div class="col-md-10">'+
											'<input type="text" value="' + event.miss_subsidy +'">' +
										'</div>' +
									'</div>' +
									'<div class="row">'+
										'<label class="col-md-2">'+ _miss_note +'</label>' +
										'<div class="col-md-10">'+
											'<textarea class="form-control" rows="3">'+ event.miss_note +'</textarea>' +
										'</div>' +
									'</div>' +
								'</div>' +
								'<div class="modal-footer">'+
									'<div class="row">' +
										'<div class="col-md-6 text-left">' +
											'<a href="#" class="btn btn-default">'+ _continue +'</a>' +
										'</div>' +
										'<div class="col-md-6 text-right">' +
											'<a href="#" class="btn btn-primary">'+ _done +'</a>' +
										'</div>' +
									'</div>' +
								'</div>');
							$.fancybox({
								"minWidth": 600,
								"padding": 0,
								"closeBtn": false,
								"content": fancyContent
							});
							var select = $(".miss_status"),
								myobject = event.miss_status,
								option = '';
							for(index in myobject) {
								option +='<option>'+ myobject[index] +'</option>';
							};
							select.html(option);
						});
				} else {
					var fancyContent = (
						'<div class="modal-header">' +
							'<h4 class="modal-title">'+ _titleMeeting +'</h4>' +
						'</div>' +
						'<div class="modal-body">' +
							'<div class="row">'+
								'<label class="col-md-2">'+ _topicEvent +'</label>' +
								'<div class="col-md-10">'+ event.case_name +'</div>' +
							'</div>' +
							'<div class="row">'+
								'<label class="col-md-2">'+ _eventIssue +'</label>' +
								'<div class="col-md-10">'+ event.issue +'</div>' +
							'</div>' +
							'<div class="row">'+
								'<label class="col-md-2">'+ _location +'</label>' +
								'<div class="col-md-10">'+ event.eventLocation +'</div>' +
							'</div>' +
							'<div class="row">'+
								'<label class="col-md-2">'+ _timeStart +'</label>' +
								'<div class="col-md-10">'+ $start +'</div>' +
							'</div>' +
							'<div class="row">'+
								'<label class="col-md-2">'+ _timeEnd +'</label>' +
								'<div class="col-md-10">'+ $end +'</div>' +
							'</div>' +
							'<div class="row">'+
								'<label class="col-md-2">'+ _join +'</label>' +
								'<div class="col-md-10">'+ event.participants +'</div>' +
							'</div>' +
							'<div class="row">'+
								'<label class="col-md-2">'+ _note +'</label>' +
								'<div class="col-md-10">'+
									'<textarea class="form-control" rows="3">'+ event.task_note +'</textarea>' +
								'</div>' +
							'</div>' +
						'</div>' +
						'<div class="modal-footer">'+
							'<div class="row">' +
								'<div class="col-md-6 text-left">' +
									'<a href="#" class="btn btn-default">'+ _editEvent +'</a>' +
								'</div>' +
								'<div class="col-md-6 text-right">' +
									'<a href="#" class="btn btn-primary">'+ _done +'</a>' +
								'</div>' +
							'</div>' +
						'</div>');
				};

				$.fancybox({
					"minWidth": 600,
					"padding": 0,
					"closeBtn": false,
					"content": fancyContent
				});
			},
			events: data_events
		}
		if(input_boolean!= undefined) {
			calendar_init.eventLimit  = input_boolean;
			calendar_init.defaultView = "month";      // 停留頁籤
			if (input_boolean2 != undefined) {
				calendar_init.eventRender = function(event, element) {
					var case_name = event.title;
					element.find(".fc-time").text( event.start.format("HH:mm") + " - " +  event.end.format("HH:mm"));
					element.find(".fc-content").append('<span class="fc-title">'+ event.case_name +'</span>');
				}
			}
		};
		$("#calendar").fullCalendar(calendar_init);
	},
	filterSlide: function(contWrap, contList) {
		var $cont         = $(contWrap),
			$fList        = $(contList),
			$fEvent       = $("#filterEvent"),
			$toolbar      = $(".fc-toolbar"),
			$btnAtt       = $("#btn-attendant"),
			$btnCase      = $("#btn-case"),
			$btnPV        = $(".fc-button-group:eq(0) button"),
			$btnMW        = $(".fc-button-group:eq(1) button"),
			$btnT         = $(".fc-today-button"),
			_attend       = "wrap-cont-attendant",
			_case         = "wrap-cont-case",
			_objContList1 = "#filterBox2",
			_objContList2 = "#filterBox4",
			_blur         = "itemblur",
			_conH         = $cont.outerHeight(),
			_defH         = 0,
			_speed        = 300;

		// 判斷物件外層是否為關閉狀態，依狀態收合內容
		if($cont.is(":hidden")) {
			// 打開比對區塊
			$cont.slideDown(_speed);
			$toolbar.stop().animate({"margin-bottom": _conH},_speed);
			$fEvent.addClass(_blur).find('input[type="checkbox"]').attr("disabled", true);
			$btnPV.addClass(_blur).attr("disabled", true);
			$btnMW.addClass(_blur).attr("disabled", true);
			$btnT.addClass(_blur).attr("disabled", true);
			if($cont.attr("class") === _attend){
				$btnCase.addClass(_blur).off("click");
			} else {
				$btnAtt.addClass(_blur).off("click");
			}
		} else {
			// 收合比對區塊
			$cont.slideUp(_speed);
			$toolbar.stop().animate({"margin-bottom": _defH},_speed);
			$fEvent.removeClass(_blur).find('input[type="checkbox"]').removeAttr("disabled");
			$btnPV.removeClass(_blur).removeAttr("disabled");
			$btnMW.removeClass(_blur).removeAttr("disabled");
			$btnT.removeClass(_blur).removeAttr("disabled");
			// 將開合按鈕狀態設置為致能
			if($cont.attr("class") === _attend){
				// 居服
				$btnCase.removeClass(_blur).on("click", function() {
					hcs_calendar.filterSlide("." + _case, _objContList2);
				});
			} else {
				// 個案
				$btnAtt.removeClass(_blur).on("click", function() {
					hcs_calendar.filterSlide("." + _attend, _objContList1);
				});
			};
		};
	},
	checkContAutoWidth: function() {
		$("#filterBox1,#filterBox2,#filterBox3,#filterBox4").width($("#calendar").width() - 1);
	},
	listContAutoWidth: function(autoObj) {
		var $obj   = $(autoObj).children(":eq(0)"),
			$item  = $obj.children(),
			$oneW  = $item.outerWidth(true),
			$allW  = $item.length * $oneW;

		$obj.width($allW);
	},
	todayTH: function() {
		var $index       = $(".ui-state-highlight").index(),
			$highlightTh = $(".ui-widget-header").find("th"),
			_cur         = "cur";

		if($index >= 0){
			$(".ui-widget-header").find("th").eq($index).addClass(_cur);
		}
	},
	filterEvent: function() {
		var $this   = $(this),
			$evnet  = $this.attr("id"),
			$fcMore = $(".fc-more"),
			$task   = "eventTask",
			$hide   = "eventHide";
		// 將符合取消勾選項目隱藏
		if($this.is(":checked")){
			// 隱藏
			$("." + $evnet).removeClass($hide);
			if($evnet === $task){
				$fcMore.removeClass($hide);
			}
		} else {
			// 顯示
			$("." + $evnet).addClass($hide);
			if($evnet === $task){
				$fcMore.addClass($hide);
			}

		}
	},
	filterUser: function(filterObj, listObj) {
		var $checked   = $(filterObj).find("input[type=checkbox]:checked"),
			$listbox   = $(listObj).children(":eq(0)"),
			$length    = $checked.length,
			$eventtask = $(".eventTask"),
			$c_head    = $(".fc-toolbar"),
			$btnAtt    = $("#btn-attendant"),
			$btnCase   = $("#btn-case"),
			$btnPV     = $(".fc-button-group:eq(0) button"),
			$btnMW     = $(".fc-button-group:eq(1) button"),
			$btnT      = $(".fc-today-button"),
			$hide      = "eventHide",
			_blur      = "itemblur",
			_maxStint  = 10,
			_speed     = 300,
			_listH     = 51,
			_maxNote   = "最多只能勾選比對10個人員",
			_minNote   = "目前無勾選比對人員",
			_filterbgc = ["f-bgc01","f-bgc02","f-bgc03","f-bgc04","f-bgc05","f-bgc06","f-bgc07","f-bgc08","f-bgc09","f-bgc10"];

		if ($length > 0 && $length <= _maxStint){
			var checkName = [],
				listName  = [];

			// 隱藏無勾選到事件
			$eventtask.addClass($hide);

			// 依序以勾選人員樣式名稱，取得需顯示事件樣式名稱
			$checked.each(function(){
				var $this = $(this);
				if ($this.is(":checked")){
					checkName.push($this.prop("className").substr(4));
					listName.push($this.next().text());
				};
			});

			// 依序將需顯示事件新增事件顏色
			for (var key in checkName){
				$("." + checkName[key]).addClass(_filterbgc[key]);
				$("." + checkName[key]).removeClass($hide);
			};

			// 清空勾選顯示列表內容後依序填入勾選者與相符事件顏色，並重整區塊寬度
			$listbox.empty();
			var list = [];
			for (var key2 in listName){
				list[key2] = '<li><div class="listDot '+ _filterbgc[key2] +'"></div>'+ listName[key2] +'</li>'
			}
			$listbox.html(list.join(''));
			hcs_calendar.listContAutoWidth(listObj);

			// 收合進行比對區塊，顯示比對結果並重整篩選區塊高度
			$(filterObj).slideUp(_speed).children().hide();
			$(listObj).slideDown(_speed);
			$c_head.stop().animate({"margin-bottom": _listH},_speed);

			// 將按鈕狀態設置為除能
			$btnAtt.off("click");
			$btnCase.off("click");
			$btnMW.addClass(_blur).attr("disabled", true);

			// 將按鈕狀態設置為致能
			$btnPV.removeClass(_blur).attr("disabled", false);
			$btnT.removeClass(_blur).attr("disabled", false);


		// 判斷勾選比數大小值
		} else if($length > _maxStint){
			alert(_maxNote);
		} else {
			alert(_minNote);
		};
	},
	filterClose: function(contWrap, contList) {
		var $cont         = $(contWrap),
			$fList        = $(contList),
			$toolbar      = $(".fc-toolbar"),
			$btnAtt       = $("#btn-attendant"),
			$btnCase      = $("#btn-case"),
			$fEvent       = $("#filterEvent"),
			$btnMW        = $(".fc-button-group:eq(1) button"),
			_attend       = ".wrap-cont-attendant",
			_case         = ".wrap-cont-case",
			_objContWrap1 = "#filterBox1", // 居服進行比對區塊
			_objContList1 = "#filterBox2", // 居服比對結果區塊
			_objContWrap2 = "#filterBox3", // 個案進行比對區塊
			_objContList2 = "#filterBox4", // 個案比對結果區塊
			_blur         = "itemblur",
			_conH         = $cont.outerHeight(),
			_defH         = 0,
			_speed        = 300;

		// 收合比對結果，還原比對區塊初始狀態
		$fList.slideUp(0);
		$fList.siblings().slideDown(0).children().show().find("input[type=checkbox]").prop("checked", false);
		$cont.slideUp(0);
		$toolbar.stop().animate({"margin-bottom": _defH},_speed);
		$fEvent.removeClass(_blur).find('input[type="checkbox"]').removeAttr("disabled");
		$btnMW.removeClass(_blur).removeAttr("disabled");

		// 將開合按鈕狀態設置為致能
		$btnAtt.removeClass(_blur).on("click", function() {
			hcs_calendar.filterSlide(_attend, _objContList1);
		});
		$btnCase.removeClass(_blur).on("click", function() {
			hcs_calendar.filterSlide(_case, _objContList2);
		});
	},
	runEvent: function() {
		var $checked_a        = $("#filterBox1"),
			$listbox_a        = $("#filterBox2"),
			$checked_c        = $("#filterBox3"),
			$listbox_c        = $("#filterBox4"),
			$btn_af_check     = $("#btn-af-check"),
			$btn_cf_check     = $("#btn-cf-check"),
			$highlight_length = $(".ui-state-highlight").length,
			$checked_a_length = $checked_a.find("input[type=checkbox]:checked").length,
			$checked_c_length = $checked_c.find("input[type=checkbox]:checked").length,
			_speed = 300;

		if($("#filterBox2").is(":visible") && $checked_a_length > 0){
			$("#btn-af-check").click();
		};
		if($listbox_c.is(":visible") && $checked_c_length > 0){
			$btn_cf_check.click();
		};
		if($highlight_length > 0){
			hcs_calendar.todayTH();
		};
	},
	loc_reload: function() {
		$('#calendar').fullCalendar('destroy');
		hcs_calendar.default_setting();
	}
};

// change_supervisor_popup
function change_supervisor_popup() {
	var $cont = $("#change_supervisor_box");
	$.fancybox({
		"minWidth": 600,
		"padding": 0,
		"closeBtn": false,
		'content': $cont
	});
}

// Dom Ready
$(function(){

	var $body                = $("body"),
		$btnAttendant        = $("#btn-attendant"),
		$btnCase             = $("#btn-case"),
		$wrapContAttendant   = $(".wrap-cont-attendant"),
		$wrapContCase        = $(".wrap-cont-case"),
		$btnAfCheck          = $("#btn-af-check"),
		$btnCfCheck          = $("#btn-cf-check"),
		$btnAfClose          = $("#btn-af-close"),
		$btnCfClose          = $("#btn-cf-close"),
		$filterEvent         = $("#filterEvent"),
		$exportExcel         = $("#exportExcel"),
		$filterEventCheckbox = $filterEvent.find('input[type="checkbox"]'),
		_wrapContAttendant   = ".wrap-cont-attendant",
		_wrapContCase        = ".wrap-cont-case",
		_objContWrap1        = "#filterBox1", // 居服進行比對區塊
		_objContList1        = "#filterBox2", // 居服比對結果區塊
		_objContWrap2        = "#filterBox3", // 個案進行比對區塊
		_objContList2        = "#filterBox4", // 個案比對結果區塊
		_defaultH            = 0,
		_speed               = 300;

	hcs_calendar.default_setting();
	hcs_calendar.checkContAutoWidth();

	// resize
	$(window).resize(hcs_calendar.checkContAutoWidth);

	// 行事暦 - prev
	$body.on("click",".fc-prev-button", function() {
		// 月
		if($(".fc-month-button").hasClass("ui-state-active") && $(_wrapContAttendant).is(":visible")) {
			hcs_calendar.filterUser(_objContWrap1, _objContList1);
		// 週
		} else {
			hcs_calendar.runEvent();
		}
	});

	// 行事暦 - next
	$body.on("click",".fc-next-button", function() {
		// 月
		if($(".fc-month-button").hasClass("ui-state-active") && $(_wrapContAttendant).is(":visible")) {
			hcs_calendar.filterUser(_objContWrap1, _objContList1);
		// 週
		} else {
			hcs_calendar.runEvent();
		}
	});

	// 行事暦 - 週
	$body.on("click", ".fc-agendaWeek-button", function() {
		$("#btn-case").show().removeClass("month itemblur").on("click");
		$filterEvent.removeClass("month");
	});

	// 行事暦 - 月
	$body.on("click",".fc-month-button", function() {
		var $checkbox = $filterEvent.find('input[type="checkbox"]'),
			$checkedLength = $filterEvent.find('input[type="checkbox"]:checked').length,
			$checkboxLength = $checkbox.length;

		$(".fc-toolbar").stop().animate({"margin-bottom": _defaultH});
		// $btnAttendant.hide();
		$("#btn-case").hide();

		// 居服、個案進行比對內容頁面關閉
		$wrapContAttendant.slideUp(_speed);
		$wrapContCase.slideUp(_speed);

		$btnCase.addClass("month");
		$filterEvent.addClass("month");

		if($checkedLength < $checkboxLength){
			$checkbox.not(':checked').click();
		}
		hcs_calendar.todayTH();
	});

	// 行事暦 - 今天
	$('.fc-today-button').on("click", hcs_calendar.todayTH);

	// 任務 & 會議 / 職訓 篩選
	$filterEventCheckbox.on("click", hcs_calendar.filterEvent);

	// 個案比對 - 收合
	$btnCase.on("click", function() {
		hcs_calendar.filterSlide(_wrapContCase, _objContList2);
	});

	// 個案比對 > 進行比對 - 確定
	$btnCfCheck.on("click", function() {
		hcs_calendar.filterUser(_objContWrap2, _objContList2);
	});

	// 個案比對 > 比對結果 - 關閉
	$btnCfClose.on("click", function() {
		hcs_calendar.filterClose(_wrapContCase, _objContList2);
		hcs_calendar.loc_reload();
		$filterEvent.find('input[type="checkbox"]').prop("checked", true);
	});

	// 居服員比對 - 收合
	$btnAttendant.on("click", function() {
		hcs_calendar.filterSlide(_wrapContAttendant, _objContList1);
	});

	// 居服員比對 > 進行比對 - 確定
	$btnAfCheck.on("click", function() {
		// 月
		if($(".fc-month-button").hasClass("ui-state-active")) {
			hcs_calendar.filterUser(_objContWrap1, _objContList1);
			var _checked = $("#filterBox1").find('input[type="checkbox"]:checked').length;
			// 比對項目符合則變更月暦基本設定
			if(_checked >= 1 && _checked <= 10) {
				$('#calendar').fullCalendar('destroy');
				hcs_calendar.default_setting(false, true);
				hcs_calendar.filterUser(_objContWrap1, _objContList1);
				$exportExcel.show();
			}
		// 週
		} else {
			hcs_calendar.filterUser(_objContWrap1, _objContList1);
		}
	});

	// 居服員比對 > 比對結果 - 關閉
	$btnAfClose.on("click", function() {
		hcs_calendar.filterClose(_wrapContAttendant, _objContList1);
		$filterEvent.find('input[type="checkbox"]').prop("checked", true);
		// 月
		if($(".fc-month-button").hasClass("ui-state-active")) {
			$('#calendar').fullCalendar('destroy');
			hcs_calendar.default_setting(true);
			$exportExcel.hide();
		// 週
		} else {
			hcs_calendar.loc_reload();
		}
	});
});