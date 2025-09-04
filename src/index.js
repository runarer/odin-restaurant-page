import "./style.css"
import createHome from "./home";

let content = document.getElementById("content");

let homeButton = document.getElementById("home");
homeButton.addEventListener("click",() => { content.replaceChildren( createHome() ); });

let menuButton = document.getElementById("menu");
menuButton.addEventListener("click",() => { content.replaceChildren( ); });

let locationsButton = document.getElementById("locations");
locationsButton.addEventListener("click",() => { content.replaceChildren( ); });


