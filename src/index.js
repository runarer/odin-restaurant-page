import "./style.css"
import createHome from "./home";
import createMenu from "./menu";

let content = document.getElementById("content");
content.append( createHome() ); // Load on page load

let homeButton = document.getElementById("home");
homeButton.addEventListener("click",() => { content.replaceChildren( createHome() ); });

let menuButton = document.getElementById("menu");
menuButton.addEventListener("click",() => { content.replaceChildren( createMenu() ); });

let locationsButton = document.getElementById("locations");
locationsButton.addEventListener("click",() => { content.replaceChildren( ); });

