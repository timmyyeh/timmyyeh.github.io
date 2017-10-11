$(document).ready(function (){

	$('textarea').one('keypress', function () {
		$('#prompt_container').fadeOut('slow');
		$('textarea').addClass('text_area');
		$('#info_container').fadeIn('slow');
	});

	$('textarea').on('keyup', function () {
		var text = $('textarea').val();
		console.log(text);
		var size = 130*(Math.pow(Math.pow(1/13, (1/250)), text.length));

		$('textarea').css('font-size', size + 'px');
		$('#char_count').text('Character Count: ' + text.length)

		if (text.length >= 150) {
			$('#info_container').css('background-color', '#f2ad00');
		} 
		if (text.length >= 200) {
			$('#info_container').css('background-color', '#ed6700');
		} 
		if (text.length >= 250) {
			$('#info_container').css('background-color', '#ba000d');
		} 
		if (text.length < 150) {
			$('#info_container').css('background-color', '#42863e');
		}
	});
});

