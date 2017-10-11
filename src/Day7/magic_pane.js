$(function() {
	function randomColor(){
		return '#' + Math.random().toString(16).slice(2, 8);
	};

	$('.box').on('mouseenter', function(){
		$(this).css('background-color', randomColor());
		$(this).css('boxShadow', '0 0 8px white');
	});

	$('.box').on('mouseleave', function() {
		$(this).css('boxShadow', 'none');
	})
})