$(function(){
	var url = 'https://httpbin.org/';	
	$('#btn1').click(function(){
		$('#content').load(url+'html');

	});
	$('#btn2').click(function(){
		$('#content').load(url+'encoding/utf8');

	});
});
