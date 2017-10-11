$(function () {
	// var time = new Date();

 	setInterval(function() {
		$('#timmer').text(new Date());
	}, 1000);
 	// console.log(Math.random().toString(16).slice(2, 8));
	setInterval(function() {
		var number = Math.random().toString(16).slice(2,8);
		$('body').css('backgroundColor', '#'+number);
		$('#color').text(number);
	}, 1000);
});
