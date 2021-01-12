var toutFaux = document.querySelectorAll(".proposition.faux")
var longueurToutFaux = document.querySelectorAll("div.faux").length


for (u = 0; u < longueurToutFaux; u++)
{toutFaux[u].addEventListener("click", function() {alert("Essaye encore !")})
}

document.querySelector("#samba").innerHTML =  '<i style="color:blue;" class="fas fa-arrow-circle-right"></i>'
document.querySelector(".cochon").addEventListener("click", function() {new Audio("sons/cochon-2.mp3").play();})
$(".elephant").on("click", function() {new Audio("sons/elephant-2.mp3").play();})
$(".oie").on("click", function() {new Audio("sons/goose-sounds.mp3").play();})
$(".perroquet").on("click", function() {new Audio("sons/sf_perroquet2.mp3").play();})
$(".furet").on("click", function() {new Audio("sons/furet-2.mp3").play();})
$(".fleche").on("click", function() {new Audio("sons/samba.mp3.mp3").play();} )
