function enter_handler() {
	$(".word").css("visibility", "hidden");
	$("." + this.classList[1]).not(this).css("visibility", "visible").mouseleave(leave_handler);
}

function leave_handler() {
	$(this).css("visibility", "hidden").off("mouseleave");
}

$(function() {
	$(".letter").mouseenter(enter_handler);
});
