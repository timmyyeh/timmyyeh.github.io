$(function(){
	function randomColor(){
		return '#' + Math.random().toString(16).slice(2, 8);
	}

	$('#shadow').click(function(){
		$('body').css('backgroundColor', randomColor());
	});
});

