/* Website Out-Fader */

$(document).ready(function() {

  $('.toplink').click(function() {
  	event.preventDefault();
  	newLocation = this.href;
  	$('body').fadeOut(150, newpage);
  });

  function newpage() {
  	window.location = newLocation;
  }

});




/* friendlist */ 
$(document).ready(function(){
	
	var friendListLeft = document.getElementById('company-list-left');
	var friendListRight = document.getElementById('company-list-right');

	$.getJSON('/js/links.json', function(data){

		const arr = Object.keys(data).map(i => data[i]);
		arr.forEach(function(key, i){
    	
      var n = key.name;
      var a = key.link;

      var newLI = document.createElement('li');
      var newLink = document.createElement('a');
	
      newLink.innerHTML= n;
      newLink.href = a;

 			(i > (arr.length / 2) -1 	) ? friendListRight.appendChild(newLI) : friendListLeft.appendChild(newLI);
   		newLI.appendChild(newLink);

    });
	});
	
});

