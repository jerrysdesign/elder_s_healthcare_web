var hcs_calendar = hcs_calendar || {};
hcs_calendar = {
	default_setting : function(){
		var currentLangCode = "zh-tw";
		$("#calendar").fullCalendar({
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
					_attendant    = "居服人員",
					_supervisor   = "督導人員",
					_note         = "其它備註",
					_editEvent    = "修改事件",
					_miss         = "服務未遇",
					_done         = "確定",
					_punch        = "補打卡",
					_nonarrival   = "居服員未到",
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

					var fancyContent = (
						'<div class="modal-header">' +
							'<h4 class="modal-title">'+ _titleTask +'</h4>' +
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
							var $cont = confirm("請再次確認您要標註居服員未到 ? ");
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
		});

	},
	filterSlide: function(contWrap, contList){
		var $cont         = $(contWrap),
			$fList        = $(contList),
			$fEvent       = $("#filterEvent"),
			$toolbar      = $(".fc-toolbar"),
			$btnAtt       = $("#btn-attendant"),
			$btnCase      = $("#btn-case"),
			$btnMW        = $(".fc-button-group:eq(1) button"),
			_attend       = "wrap-cont-attendant",
			_case         = "wrap-cont-case",
			_objContList1 = "#filterBox2",
			_objContList2 = "#filterBox4",
			_blur         = "itemblur",
			_conH         = $cont.outerHeight(),
			_defH         = 0,
			_speed        = 300;

		if($cont.is(":hidden") || $fList.is(":visible")){
			$cont.slideDown(_speed);
			$toolbar.stop().animate({"margin-bottom": _conH},_speed);
			$fEvent.addClass(_blur).find('input[type="checkbox"]').attr("disabled", true);
			$btnMW.addClass(_blur).attr("disabled", true);
			if($cont.attr("class") === _attend){
				$btnCase.addClass(_blur).off("click");
			} else {
				$btnAtt.addClass(_blur).off("click");
			}
		} else {
			$cont.slideUp(_speed);
			$toolbar.stop().animate({"margin-bottom": _defH},_speed);
			$fEvent.removeClass(_blur).find('input[type="checkbox"]').removeAttr("disabled");
			$btnMW.removeClass(_blur).removeAttr("disabled");
			if($cont.attr("class") === _attend){
				$btnCase.removeClass(_blur).on("click", function(){
					hcs_calendar.filterSlide("." + _case, _objContList2);
				});
			} else {
				$btnAtt.removeClass(_blur).on("click", function(){
					hcs_calendar.filterSlide("." + _attend, _objContList1);
				});
			}
		};
	},
	checkContAutoWidth: function(){
		$("#filterBox1,#filterBox2,#filterBox3,#filterBox4").width($("#calendar").width() - 1);
	},
	listContAutoWidth: function(autoObj){
		var $obj   = $(autoObj).children(":eq(0)"),
			$item  = $obj.children(),
			$oneW  = $item.outerWidth(true),
			$allW  = $item.length * $oneW;

		$obj.width($allW);
	},
	todayTH: function(){
		var $index       = $(".ui-state-highlight").index(),
			$highlightTh = $(".ui-widget-header").find("th"),
			_cur         = "cur";

		if($index >= 0){
			$highlightTh.eq($index).addClass(_cur);
		}
	},
	filterEvent: function(){
		var $this   = $(this),
			$evnet  = $this.attr("id"),
			$fcMore = $(".fc-more"),
			$task   = "eventTask",
			$hide   = "eventHide";
		if(!$this.is(":checked")){
			$("." + $evnet).addClass($hide);
			if($evnet === $task){
				$fcMore.addClass($hide);
			}
		} else {
			$("." + $evnet).removeClass($hide);
			if($evnet === $task){
				$fcMore.removeClass($hide);
			}
		}
	},
	filterUser: function(filterObj, listObj){
		var $checked   = $(filterObj).find("input[type=checkbox]:checked"),
			$listbox   = $(listObj).children(":eq(0)"),
			$length    = $checked.length,
			$eventtask = $(".eventTask"),
			$c_head    = $(".fc-toolbar"),
			$hide      = "eventHide",
			_maxStint  = 10,
			_speed     = 300,
			_listH     = 51,
			_maxNote   = "最多只能勾選比對10個人員",
			_minNote   = "目前無勾選比對人員",
			_filterbgc = ["f-bgc01","f-bgc02","f-bgc03","f-bgc04","f-bgc05","f-bgc06","f-bgc07","f-bgc08","f-bgc09","f-bgc10"];

		if ($length > 0 && $length <= _maxStint){
			var checkName = [],
				listName  = [];

			$eventtask.addClass($hide);
			$checked.each(function(){
				var $this = $(this);
				if ($this.is(":checked")){
					checkName.push($this.prop("className").substr(4));
					listName.push($this.next().text());
				};
			});

			// added BackgroundColor
			for (var key in checkName){
				$("." + checkName[key]).addClass(_filterbgc[key]);
				$("." + checkName[key]).removeClass($hide);
			};

			// userList
			$listbox.empty();
			var list = [];
			for (var key2 in listName){
				list[key2] = '<li><div class="listDot '+ _filterbgc[key2] +'"></div>'+ listName[key2] +'</li>'
			}
			$listbox.html(list.join(''));
			hcs_calendar.listContAutoWidth(listObj);

			// filterSlide
			$(filterObj).slideUp(_speed).children().hide();
			$(listObj).slideDown(_speed);
			$c_head.stop().animate({"margin-bottom": _listH},_speed);

		} else if($length > _maxStint){
			alert(_maxNote);
		} else {
			alert(_minNote);
		};
	},
	runEvent: function(){
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

		if($listbox_a.is(":visible") && $checked_a_length > 0){
			$btn_af_check.click();
		};
		if($listbox_c.is(":visible") && $checked_c_length > 0){
			$btn_cf_check.click();
		};
		if($highlight_length > 0){
			hcs_calendar.todayTH();
		};
	},
	loc_reload: function(){
		location.reload();
	}
};

// Dom Ready
$(function(){

	var $btnAttendant        = $("#btn-attendant"),
		$btnCase             = $("#btn-case"),
		$wrapContAttendant   = $(".wrap-cont-attendant"),
		$wrapContCase        = $(".wrap-cont-case"),
		$btnAfCheck          = $("#btn-af-check"),
		$btnCfCheck          = $("#btn-cf-check"),
		$btnAfClose          = $("#btn-af-close"),
		$btnCfClose          = $("#btn-cf-close"),
		$filterEvent         = $("#filterEvent"),
		$filterEventCheckbox = $filterEvent.find('input[type="checkbox"]'),
		_wrapContAttendant   = ".wrap-cont-attendant",
		_wrapContCase        = ".wrap-cont-case",
		_objContWrap1        = "#filterBox1",
		_objContList1        = "#filterBox2",
		_objContWrap2        = "#filterBox3",
		_objContList2        = "#filterBox4",
		_defaultH            = 0,
		_speed               = 300;

	hcs_calendar.default_setting();
	hcs_calendar.checkContAutoWidth();

	// resize
	$(window).resize(hcs_calendar.checkContAutoWidth);

	// tabs-prev
	$(".fc-prev-button").on("click", hcs_calendar.runEvent);

	// tabs-next
	$(".fc-next-button").on("click", hcs_calendar.runEvent);

	// tabs-agendaWeek
	$(".fc-agendaWeek-button").on("click", hcs_calendar.loc_reload);

	// tabs-month
	$(".fc-month-button").on("click", function(){
		var $checkbox = $filterEvent.find('input[type="checkbox"]'),
			$checkedLength = $filterEvent.find('input[type="checkbox"]:checked').length,
			$checkboxLength = $checkbox.length;

		$(".fc-toolbar").stop().animate({"margin-bottom": _defaultH});
		$btnAttendant.hide();
		$btnCase.hide();
		$wrapContAttendant.slideUp(_speed);
		$wrapContCase.slideUp(_speed);
		$filterEvent.show().addClass("month");
		if($checkedLength < $checkboxLength){
			$checkbox.not(':checked').click();
		}
		hcs_calendar.todayTH();
	});

	// tabs-today
	$('.fc-today-button').on("click", hcs_calendar.todayTH);

	// filterEvent
	$filterEventCheckbox.on("click", hcs_calendar.filterEvent);

	// filter-case-slide
	$btnCase.on("click", function(){
		hcs_calendar.filterSlide(_wrapContCase, _objContList2);
	});

	// filter-case
	$btnCfCheck.on("click", function(){
		hcs_calendar.filterUser(_objContWrap2, _objContList2);
	});

	// filter-case-close
	$btnCfClose.on("click", hcs_calendar.loc_reload);

	// filter-attendant-slide
	$btnAttendant.on("click", function(){
		hcs_calendar.filterSlide(_wrapContAttendant, _objContList1);
	});

	// filter-attendant
	$btnAfCheck.on("click", function(){
		hcs_calendar.filterUser(_objContWrap1, _objContList1);
	});

	// filter-attendant-close
	$btnAfClose.on("click", hcs_calendar.loc_reload);
});
