function enter_handler() {
	$(".word").css("opacity", "0");
	$("." + this.classList[1]).css("opacity", "1");
}

function leave_handler() {
	$(this).css("visibility", "hidden").off("mouseleave");
}

$(function() {
	$(".letter").mouseenter(enter_handler);
	$(".word").mouseenter(enter_handler);

});
