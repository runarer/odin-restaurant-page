import "./style.css"

let content = document.getElementById("content");

let homeButton = document.getElementById("home");
homeButton.addEventListener("click",() => { content.replaceChildren( ); alert("Home"); });

let menuButton = document.getElementById("menu");
menuButton.addEventListener("click",() => { content.replaceChildren( ); alert("Menu"); });

let locationsButton = document.getElementById("locations");
locationsButton.addEventListener("click",() => { content.replaceChildren( ); alert("Locations"); });


