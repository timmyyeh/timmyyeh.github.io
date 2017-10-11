$(function(){
	var table = $('<table border="1"></table>');
	$.getJSON('https://httpbin.org/headers', function(data){
		$.each(data.headers, function(th, td){
			var thead = $(`<th>${th}</th>`);
			var tdiv = $(`<td>${td}</td>`);
			var row = $(`<tr></tr>`).append(thead).append(tdiv);
			table.append(row);
		});

	});
	$('#container').append(table);
});
