$(document).ready(function () {
	var i = 0;


	$('body').on('click', function(e){


		$('#container').append(`<div class="drop color${i}"></div>`);
		$(`.color${i}`).css({height: randomInt(), width: randomInt(),top:e.pageY, left:e.pageX, backgroundColor: randomColor()});
		i++;
	});

	function randomInt(){
		return Math.floor(Math.random() * 100 + 1); //1~100
	}
	function randomColor() {
		return '#' + Math.random().toString(16).slice(2, 8);
	};

});

