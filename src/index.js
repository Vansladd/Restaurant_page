import "./Home.css"
import restaurantImage from "./restaurant.jpg"
const contentDiv = document.querySelector("#content");


const image = document.createElement("img");

image.src = restaurantImage;

const header = document.createElement("h1");

header.innerText = "Vansladd's Restaurant";

contentDiv.appendChild(header)

contentDiv.appendChild(image)
