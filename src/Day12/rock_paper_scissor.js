$(document).ready(function (){
	$('.clickable').click(function(){
		$(".shake").effect("shake", {direction: 'up', times: '5'});
		type = this.id;
		setTimeout(function(){
			comRand()
		}, 500)
		// comRand();
		

	});


	function comRand(){

		var num = Math.round(Math.random() * 2);
		console.log(num)
		//Rock
		if(num == 0){
			$('.currentRight').hide();
			$('.currentRight').removeClass("currentRight");
			$('.rockRight').addClass("currentRight");
			$('.currentRight').show();
		}
		//paper
		else if(num == 1){
			$('.currentRight').hide();
			$('.currentRight').removeClass("currentRight");
			$('.papperRight').addClass("currentRight");
			$('.currentRight').show();
		}
		//scissor
		else{
			$('.currentRight').hide();
			$('.currentRight').removeClass("currentRight");
			$('.scissorRight').addClass("currentRight");
			$('.currentRight').show();
		}
	};
});
