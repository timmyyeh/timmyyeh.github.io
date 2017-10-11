$(function(){
	$.get('https://httpbin.org/xml', function(xml){
		$(xml).find('slide').each(function(){
			var li = $('<li></li>').text($(this).find('title').text());
			if($(this).find('item').length > 0){
				var ul = $('<ul></ul>');
				$(this).find('item').each(function(){
					if($(this).text() != ''){
						ul.append($('<li>'+$(this).text()+'</li>'));
					}
				});
				li.append(ul);
			}
			$('#list').append(li);
		});

	});

});
