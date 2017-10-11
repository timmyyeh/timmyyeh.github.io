$(function() {
	var paint = "white";

	$('.color').click(function(){
		paint = $(this).css('backgroundColor');
		console.log($(this).css('backgroundColor'));
	});

	$('.row').click(function () {
		$(this).css('backgroundColor', paint);
	})

});