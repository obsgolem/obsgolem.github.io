function enter_handler() {
	leave_handler();
	$("." + this.classList[1]).css("opacity", "1").css("color", "#5d5d5d");
}

function leave_handler() {
	$(".word").css("opacity", "0").css("color", "");
	$(".letter").css("color", "");
}

$(function() {
	$(".letter").mouseenter(enter_handler);
	$(".word").mouseenter(enter_handler);

	$(".letter").mouseleave(leave_handler);
	$(".word").mouseleave(leave_handler);
});
