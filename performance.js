

var xhr = new XMLHttpRequest();
var output = document.querySelector('.contentColumnn');
console.log(xhr);
xhr.onreadystatechange = function () {
	if (xhr.readyState === 4) {
		var package = JSON.parse(xhr.responseText);

		for (a = 0; a < package.length; a++) {
			var newHtml = `<li class="child" style="display:inline-block;width:200px"><div class="card mt-2 p-0 col-3 w-100" id="card"><p class="card-text text-center pt-1 itemTitle"><strong>${package[a].title}</strong></p><img class="card-img-top" src="${package[a].image}"><div class="card-body"><p class="card-text float-left cat"><strong>${package[a].category}</strong></p><p class="card-text float-right"><strong> Price: ${Math.floor(Math.random()*15 + 1)},${Math.floor(Math.random()*5 + 1)}${Math.floor(Math.random()*9 + 1)} €</strong></p></li>`;

			output.innerHTML += newHtml;
		}
	
		// const input = document.getElementById('searchBar');
		// Array.from(document.getElementById('card'));
		// console.log(card);
		// var list = document.getElementById('card');

	// FILTER FUNCTION	



	const dropdown = document.getElementById('selector');
	dropdown.addEventListener('click', function(){
		var text = this.value;
		for(var i = 0; i < list.length; i++){
			if (!list[i].innerText.toUpperCase().includes(text.toUpperCase())) {
				list[i].style.display = 'none';
			} else {
				list[i].style.display = 'inline-block';
			}
		  }
		});

	// SEARCH FUNCTION
		const input = document.getElementById('searchBar');
		var list = document.querySelectorAll('.child');
		
		input.addEventListener('keyup', function(){
			var text = this.value;
			
		  for(var i = 0; i < list.length; i++){
			  if (!list[i].innerText.toUpperCase().includes(text.toUpperCase())) {
				list[i].style.display = 'none';
				
			} else {
				list[i].style.display = 'inline-block';
				
			}
		  }
		});
	}
}


xhr.open('GET', 'package.json');
xhr.send();

