/*--Hamburger Menu--*/
var burger = document.getElementById("b_icon"); //Her laves "#b_icon" til en variabel "burger"
var links = document.getElementById("b_links"); //Her laves "#b_links" til en variabel "links"
var line_1 = document.getElementById("line_1"); //Her laves "#line_1" til en variabel "line_1"
var line_2 = document.getElementById("line_2"); //Her laves "#line_2" til en variabel "line_2"
var line_3 = document.getElementById("line_3"); //Her laves "#line_3" til en variabel "line_3"
var closeBurger = document.getElementById("b_close"); //Her laves "#b_close" til en variabel "closeBurger"

burger.addEventListener("click", function() { //Her laves en click funktion for variablen "burger"
  if (links.style.display == "none") { //Hvis variablen "links" er usynlig bliver følgende variabler synlige og usynlige
    links.style.display = "flex"
    line_1.style.display = "none"
    line_2.style.display = "none"
    line_3.style.display = "none"
    closeBurger.style.display = "flex"

  } else { //Hvis variablen "links" er synlig bliver følgende variabler synlige og usynlige
    links.style.display = "none"
    line_1.style.display = "flex"
    line_2.style.display = "flex"
    line_3.style.display = "flex"
    closeBurger.style.display = "none"
  }
});

var screen = window.matchMedia("(max-width: 1175px)"); //Her laves en variabel for den givne skærmstørrelse

screen.addListener(noneLinks); //Her laves der en funktion, der aflæser skærmstørrelsen for enheden websitet vises på

function noneLinks(screen) { //Denne function resetter den globale Hamburger Menu ved ændring af skærmstrørrelsen
  if (screen.matches) {
    links.style.display = ""
  } else {
    links.style.display = "none"
    line_1.style.display = "flex"
    line_2.style.display = "flex"
    line_3.style.display = "flex"
    closeBurger.style.display = "none"
  }
};

noneLinks(screen); //Sørger for at funktionen "noneLinks" kører fra når siden loades

/*--Kontaktformular--*/

var btn = document.querySelector("button"); //Her laves button-elementet til en variabel "btn"

var form = document.querySelector("form"); //Her laves form-elementet til en variabel "form"

btn.addEventListener("click", function(event) { //Her laves en click funktion for variablen "btn"

  event.preventDefault();

  var name = form.name.value;
  var lastName = form.last_name.value;
  var Email = form.Email.value;

  if (name.length > 1) {
    document.querySelector("#name_comment_1").innerHTML = "";
  } else {
    document.querySelector("#name_comment_1").innerHTML = "Indtast dit navn!";
  }

  if (lastName.length > 1) {
    document.querySelector("#name_comment_2").innerHTML = "";
  } else {
    document.querySelector("#name_comment_2").innerHTML = "Indtast dit efternavn!";
  }

  if (Email.length > 1) {
    document.querySelector("#name_comment_3").innerHTML = "";

  } else {
    document.querySelector("#name_comment_3").innerHTML = "Indtast din Email!";

  }
});
