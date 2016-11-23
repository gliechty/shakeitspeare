// adds a sentence
$("#sentence").on("click", function(){
	event.preventDefault();
	var $newSentence = $.get('http://shakeitspeare.com/api/sentence').done(function(response){
		$('ul#answers').append("<li>"+response.sentence+"</li>");
		// checks if there are multiple li's and deletes first
		var lineItems = $("li");
		if (lineItems.length===2){
			$('ul#answers').children().first().remove();
		}
	});
});

// adds a poem
$("#poem").on("click", function(){
	event.preventDefault();
	var lines = $('#lines').val();
	var $newPoem = $.get('http://shakeitspeare.com/api/poem?lines='+lines+'').done(function(response){
		$('ul#answers').append("<li>"+response.poem+"</li>");
		// checks if there are multiple li's and deletes first
		var lineItems = $("li");
		if (lineItems.length===2){
			$('ul#answers').children().first().remove();
		}
	});
});

