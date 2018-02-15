$(function() {

	$("input#autocomplete").on("keyup", function(e){
	 	let username = e.target.value;

		$('form').submit(function(e){
			e.preventDefault();
			location.href = "https://github.com/"+username;
			return false; /* Breaks loop so we can use native browser back function */
		});

		$("#autocomplete").keyup(function(e) {
		    if (event.keyCode === 13) {
		       e.preventDefault();
		       location.href = "https://github.com/"+username;
		       return false; /* Breaks loop so we can use native browser back function */
		    }
		});

	 	$.ajax({
	 		url: "https://api.github.com/search/users?q="+ username + "&page=1&per_page=3",
	 		data: {
	 			client_id: "xxxxx",
	 			client_secret: "xxxxx"
	 		}
	 	}).done(function(query) {

	 		var results = [
	 		{
	 			value: query.items[0].login,
	 			label: query.items[0].login,
	 			icon: query.items[0].avatar_url,
	 			html_url: query.items[0].html_url
	 		},
	 		{
	 			value: query.items[1].login,
	 			label: query.items[1].login,
	 			icon: query.items[1].avatar_url,
	 			html_url: query.items[1].html_url
	 		},
	 		{
	 			value: query.items[2].login,
	 			label: query.items[2].login,
	 			icon: query.items[2].avatar_url,
	 			html_url: query.items[2].html_url
	 		}
	 		];

	 		$("input#autocomplete").autocomplete({
	 			minLength: 1,   
	 			delay: 0,                                   
	 			source: results,        
	 			select: function( event, ui ) {
	 				window.location.href = ui.item.value;
	 			}
	 		}).data("uiAutocomplete")._renderItem = function (ul, item) {
	 			return $("<li>")
	 			.append(`<a title="${item.label}'s Profile" href='${item.html_url}'>
	 					 	<img height='64px' width='64px' src='${item.icon}' />
	 					 	<span class='auto-desc'><span class='hilite'>${item.label}</span>
	 					 </a>
	 			`)
	 			.appendTo(ul);
	 		}; 

	 		console.log(results);
	 	});
	 });
});