$(function(){
	$('#submit_btn').on('click', function(e){
		e.preventDefault();
		var context = $('#txt_area').val();
		var y = 0;

		if(context.replace(/^\s+|\s+$/g, '')==''){
			context = 'You should probably enter some text next time.';
		}
			$('body').css({backgroundColor: "black", color: "white"});
			$('#container').html(`<div id="newtext">${context}</div>`);
			// console.log($('#newtext').height());
		scrollText(y);

		function scrollText(y){
			setTimeout(function(){
				var newY = y;
				// console.log(newY);
				var height = $('#newtext').height();
				// console.log(height);
				if (newY > -1 * height - 150) {
					newY -= 1;
					$('#newtext').css('top', newY);
					console.log($('#newtext').height());

					scrollText(newY);
				}
			}, 30);

		};
	});
});
