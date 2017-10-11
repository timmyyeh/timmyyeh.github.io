$(function(){
	$('.box_shadow').click(function () {
		var current = $(this).css('boxShadow');
		var a = current.split('px');
		var blur = a[a.length-3];
		var spread = a[a.length - 2];
		var newBlur = parseInt(blur) + 1;
		var newSpread = parseInt(spread) + 3;

		$(this).css('boxShadow', 'rgba(-1, 1, 0, 0.35) 0px 0px ' + newBlur + 'px ' + newSpread + 'px');
	});
});
