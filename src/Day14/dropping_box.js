$(function(){
	var animate_array = ['crawl', 'dangle', 'jump', 'stretch', 'flip'];
	$('.box').click(function(){
		var box = this;
		var animateClass = animate_array[Math.floor(Math.random() * 5)];
		// console.log(animateClass);
		$(box).addClass(animateClass);


		setTimeout(function(){

			$(box).removeClass(animateClass);


		}, 4000);
	});

});
