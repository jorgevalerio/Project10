
$(document).ready(function() { 
				  
$('form').submit(function(evt) {
	evt.preventDefault();
	let ID = $('#pokeIdNumber').val();
	let pokeURL = "http://pokeapi.co/api/v2/pokemon/" + ID +"/" ;	

	if (ID <= 699) {				  
		function pokemonInfo(dataFromApi){
		let pokeName     = dataFromApi.name;
		let pokeImageUrl = dataFromApi.sprites.front_default;
		let pokeType     = dataFromApi.types[0].type.name;
			
			
		var pokeInfo = '<div>';
			pokeInfo += '<h3> Info: </h3>';
			pokeInfo += '<ul>';
			pokeInfo += '<li> <strong>Name: </strong>  ' + pokeName + '</li>';
			pokeInfo += '<li><strong> Type: </strong>  ' + pokeType +'</li>';
			pokeInfo += '</ul>';
			pokeInfo += '<img src="' + pokeImageUrl + '">';
			
			$('.pokeInfo').html(pokeInfo);

		console.log(pokeName);
		}
	} else {
			alert('There is only 699 species of Pokemon -Please enter a number up to 699');
		}

	$.getJSON(pokeURL,pokemonInfo);		
	
		});
		
});


$(document).ready(function() { 

$("a").click(function() {
    return false;
})

});
///////////////////////////////////////////////////////////////////////

// pokemon List 20 

///////////////////////////////////////////////////////////////////////




$(document).ready(function() { 
				  
$('button.buttonPokemonList').click(function(evt) {
	evt.preventDefault();
	
	let pokeURList = "http://pokeapi.co/api/v2/pokemon/";	

					  
		function pokemonInfoList(dataFromApi){
		var pokeName     = dataFromApi.count;
		let pokemonURL     = dataFromApi.count;
		
		let pokeListHTML = '<div id="ok"><ul>';
		
		$.each(dataFromApi.results, function (i, pokeMon){
			
			   pokeListHTML += '<li>';
			   pokeListHTML += pokeMon.name;
			  
			   pokeListHTML += '<button> <a href="'+pokeMon.url+ '">Learn More</a>';
			   pokeListHTML += '</button>';
			   pokeListHTML += '</li>';

			console.log(pokeMon.name);
		});
			
			
			
			  pokeListHTML += '</ul></div>';
			
			
		
			$('#pokemonList').html(pokeListHTML);
			
			
			
			

	
		}
	
	

	$.getJSON(pokeURList,pokemonInfoList);	
	

	
		});
		
});





$(document).ready(function(){
	
	$("a").click(function() {
    return false;
})
	
  $('button.ok').click(function(stop){
	  stop.preventDefault();
	  
	 var urlPokeSolo = $(this).attr("href");
	 var href = $(this).attr('href');
	  console.log(urlPokeSolo);
	  console.log(href);
	  
  });
	
	
	
});









	
	
	
	
	
