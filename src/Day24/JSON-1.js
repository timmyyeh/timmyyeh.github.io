$(function(){
	$.getJSON('https://httpbin.org/ip', function(data){
		$('#IP').text(data.origin);
	});
});
