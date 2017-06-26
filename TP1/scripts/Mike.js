$(function(){


	/************************* Exercice 1 *************************/

	let index = 0; // L'index permettra de parcourir le tableau d'image

	setInterval(function(){ // Permet d'effectuer une fonction toute les x seconde

		let image = [
			"http://www.pharmacie-aspe.com/manager/filemanager/userfiles/images/vignettes_rubriques/alimentation-bebe-saint-raphael-pharmacie-aspe-83.jpg",
		"http://www.pharmacie-aspe.com/charte/6.jpg",
		"http://deplainpied.fr/images/Slide/Slide4.png"]; // Variable qui stocke nos images

		if(index == image.length) // Condition pour revenir à la premiere image
			index = 0;

		$("#slider-Mike").attr("src", image[index]); // Modifier la source de l'image

		index++;


	}, 3000);

	/************************* Exercice 2 *************************/

	$(".one_third").one("click", function(){	// Function se declanche au click sur l'id imagesMike1 une seul fois
		$("#imagesMike1").attr("src", "http://www.fundacion-affinity.org/sites/default/files/styles/250x250/public/el-gato-y-la-ciguena-antes-de-que-llegue-el-bebe.jpg?itok=KjcaHsEd"); // Modifier la source de l'image
		$("#imagesMike2").attr("src", "http://www.fundacion-affinity.org/sites/default/files/styles/250x250/public/preparar-la-llegada-del-bebe.jpg?itok=eO9g84Bd"); // Modifier la source de l'image
		$("#imagesMike3").attr("src", "https://www.baby-digne.com/page_contact/Photo%20030.jpg"); // Modifier la source de l'image
	});


	/************************* Exercice 3 *************************/
	$(".one_third").click(function(){ // Function se declanche au click sur la class one_third
		let image = $("#imagesMike1").attr("src"); // Je stock la valeur src de la premiere image dans la variable image
		$("#imagesMike1").attr("src", $("#imagesMike3").attr("src")); // Je modifie le src de la premiere image par le src de la troisieme
		$("#imagesMike3").attr("src", $("#imagesMike2").attr("src")); // Je modifie le src de la troisieme image par le src de la deuxieme
		$("#imagesMike2").attr("src", image);// Je modifie le src de la deuxieme image par le src stoker dans la variable image
	});


	/************************* Exercice 4 *************************/
	$(".one_quarter .more > a").click(function(){ // Function se declanche au click sur la balise a qui se trouve dans class more
		event.preventDefault(); // Annuler l'evennement par default

		console.log($(this)) // Balise a selectionner
		console.log($(this).parent()) // Balise p class more
		console.log($(this).parent().parent()) // Balise article class one_quarter
		console.log($(this).parent().parent().children("p")) // Balise p


		$(this).parent().parent().children("p").eq(0).append("En appuyant ICI j'affiche plus d'infos. ")
        $(this).parent().parent().children("p").eq(1).hide();

	});






	/************************* Exercice 5 *************************/

var request = $.ajax({// envoi d'un request sur une url avec une  methode
  url: "https://jsonplaceholder.typicode.com/users",//on lui demande d'aller sur cette url cest donc ma demande
  method: "GET",// je fais une demande sous la methode get
  dataType: "json"// ce champs est optionnel cest juste pour dire que ce que je vais recuperer cest du code json, il definit le type de donnés recus par le serveur
});

request.done(function( users) { // done = succes le code a effectuer en cas de reussite ( users = reponse du serveur)
	let content ="";
console.log(users);

for (var i = 0; i < users.length; i++) {
	content += '<li><a href ="#">' +users[i].name+'</a><li>'
}
$("#right_column ul").html(content)// Evenement  du DOM : modification de l'HTML  dans la balise ul qui se trouoove dans la balise qui a l'id right_column
});

request.fail(function( jqXHR, textStatus ) { // fail = echec le code à effectuer en cas d'echec ( users = reponse du serveur)
  alert( "Request failed: " + textStatus );
});




var request = $.ajax({
  url: "https://jsonplaceholder.typicode.com/photos",
  method: "GET",
  dataType: "json"
});

request.done(function(photos) {

	console.log($("#posts img"));
	console.log(photos[0].url);

	for (var i = 0; i < 2; i++) {
		$("#posts img").eq(i).attr("src", photos[i].url);
	}

	//
	$(" #posts .more > a").click(function(){ // Function se declanche au click sur la balise a qui se trouve dans class more
		event.preventDefault(); // Annuler l'evennement par default

		console.log($(this)) // Balise a selectionner
		console.log($(this).parent()) // Balise p class more
		console.log($(this).parent().parent()) // Balise article class one_quarter
		console.log($(this).parent().parent().children("p")) // Balise p

		for( var i =0; i<2; i++ ) {
			if(photos[i].url == $(this).parent().parent().parent().children("img").attr("src")){
			$(this).parent().parent().children("p").append(photos[i].title);
			// la fonction eq() permet de parcourir un tableau en jQuery.
			//$(this).parent().parent().children("p").hide();
		}
		}
});

});
});
