$(function(){
	var seconds = 0;
	var minutes = 0;
	var hours = 0;
	var stopwatch = null;
	$(`.start`).on('click', function(){

		stopwatch = setInterval(function(){
			if(seconds > 59){
				minutes += 1;
				seconds = 0;
			}
			if(minutes > 59){
				hours += 1;
				minutes = 0;
			}

			$('#stopwatch').text(hours+':'+minutes+':'+seconds);
			seconds += 1;
		},1000)
	});
	$('.stop').click(function(){
		clearInterval(stopwatch);
		
	});
	$('.reset').click(function(){
		clearInterval(stopwatch);
		seconds = minutes = hours = 0;
		$('#stopwatch').text(hours+':'+minutes+':'+seconds);

	});
});
