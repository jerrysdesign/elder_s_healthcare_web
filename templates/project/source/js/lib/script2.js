// change_supervisor_popup
function common_popup_init(object){
	var $cont = $(object);
	$.fancybox({
		'content' : $cont,
		"minWidth": 600,
		"padding" : 0,
		"closeBtn": false
	});
}

// Dom Ready
$(function(){
	// change_supervisor_popup
	$("#change_supervisor").click(function(){
		common_popup_init("#change_supervisor_box")
	});
});