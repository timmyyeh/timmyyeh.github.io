$(function() {
	var content = "ww";
	$('#submit_btn').click(function(event){
		event.preventDefault();
		content = $('#bad_habit').val();

		$('#habit').text('your bad habit is '+content);


	});

});
