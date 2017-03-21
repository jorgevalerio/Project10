
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

					$('a').click(function(stop){
					  stop.preventDefault();

					  var urlPokeSolo = $(this).attr("href");
					  var modal = document.getElementById('myModal');
					  var span = document.getElementsByClassName("close")[0];

					  function openbox() {
					modal.style.display = "block";
						  $('.pokeInfo2').html("loading...");
				}

					  openbox();

					  span.onclick = function() {
					modal.style.display = "none";
				};

					  console.log(urlPokeSolo);
	 

					  let pokeURL = urlPokeSolo ;	

					  function pokemonInfo(dataFromApi){
						let pokeName     = dataFromApi.name;
						let pokeWeight     = dataFromApi.weight;
						let pokeHeight     = dataFromApi.height;
						let pokeBaseExperience     = dataFromApi.base_experience;
						let pokeImageUrl = dataFromApi.sprites.front_default;
						let pokeType     = dataFromApi.types[0].type.name;


						var pokeInfo = '<div>';
							pokeInfo += '<h3> Info: </h3>';
							pokeInfo += '<ul>';
							pokeInfo += '<li> <strong>Name: </strong>  ' + pokeName + '</li>';
							pokeInfo += '<li><strong> Type: </strong>  ' + pokeType +'</li>';
						    pokeInfo += '<li><strong> Weight: </strong>  ' + pokeWeight  +'</li>';
						  	pokeInfo += '<li><strong> BE: </strong>  ' + pokeBaseExperience+'</li>';
						  pokeInfo += '<li><strong> Height: </strong>  ' + pokeHeight+'</li>';
							pokeInfo += '</ul>';
							pokeInfo += '<img src="' + pokeImageUrl + '">';

							$('.pokeInfo2').html(pokeInfo);

						console.log(pokeName);
						}

					  $.getJSON(pokeURL,pokemonInfo);	


					  window.onclick = function(event) {
					if (event.target == modal) {
						$('.pokeInfo2').html("loading...");
						modal.style.display = "none";

					}
				};

				  });
		}



	$.getJSON(pokeURList,pokemonInfoList);	

	});
		
});








 





	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	

	

	
		



	
	
	
	
	
