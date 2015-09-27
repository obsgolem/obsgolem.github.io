function enter_handler() {
	$(".word").css("visibility", "hidden");
}

function leave_handler() {
	$(this).css("visibility", "hidden").off("mouseleave");
}

$(function() {
	$(".letter").mouseenter(enter_handler);
	$(".word").mouseenter(enter_handler);

});
