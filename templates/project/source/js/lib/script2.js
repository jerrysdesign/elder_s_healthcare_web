// change_supervisor_popup
function change_supervisor_popup(){
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
	// change_supervisor_popup
	$("#change_supervisor").on("click",change_supervisor_popup);
});