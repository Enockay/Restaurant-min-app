import _, { min } from "lodash";
import "./style.css";
import "./pages.css";
import image from "./pictures/image.jpg";

//design a  frame work of the restaurant
const div = document.createElement("div");
div.classList.add("container");

//append the body of the restaurant
document.body.appendChild(div);

//the header section
const header = document.createElement("div");
header.classList.add("header");
div.appendChild(header);

//lets move on with other parts now 
export const mainContainer = document.createElement("div");
mainContainer.classList.add("main-container");
const img = document.createElement("img");
img.src = image;
mainContainer.appendChild(img);
div.appendChild(mainContainer);

//lets store the menu, about and contact
const store = document.createElement("div");
store.classList.add("store");
mainContainer.appendChild(store);

//the body section
const home = document.createElement("button");
home.classList.add("home");
home.textContent = "Home";
store.appendChild(home);

//sidebar section
const menu = document.createElement("button");
menu.classList.add("menu");
menu.textContent = "Menu";
store.appendChild(menu);

//location section 
const location = document.createElement("button");
location.classList.add("location");
location.textContent = "location";
store.appendChild(location);


//contact section
const contact = document.createElement("button");
contact.classList.add("contact");
contact.textContent = "Contact";
store.appendChild(contact);

// add cart
const cart = document.createElement("button");
cart.classList.add("contact");
cart.textContent = "Cart";
store.appendChild(cart);


//footer section
const footer = document.createElement("div");
footer.classList.add("footer");
footer.textContent = "Copyright © 2021 Universal Restaurant. All rights reserved.";
div.appendChild(footer);

const label = document.createElement("p");
label.textContent = "Can Reach Us Via Email:enockaymwema@.com";
footer.appendChild(label);

//design home section of the restaurant
const topic = document.createElement("div");
topic.classList.add("topic");
topic.textContent = "Welcome To Universal Restaurant!.";
header.appendChild(topic);

//sub ending of our header
const subTopic = document.createElement("p");
subTopic.classList.add("sub-topic");
subTopic.textContent = "We are the best restaurant in town and we serve the best food try us..";
topic.appendChild(subTopic);

//design a bar for displaying your information
const bar = document.createElement("div");
bar.classList.add("bar");
mainContainer.appendChild(bar);






import  {displayHome, locate,contactPage} from "./code.js";
let childElement = bar.appendChild(displayHome());

home.addEventListener("click", () => {
   bar.removeChild(childElement);
   if(childElement){
      childElement = displayHome();
      bar.appendChild(childElement);
   }
});

import  {displayMenu,setPrice}  from "./main.js";
menu.addEventListener("click", () => {
   bar.removeChild(childElement)
   if(childElement){
      childElement = displayMenu();
      bar.appendChild(childElement);
   }
})

location.addEventListener("click", () => {
   bar.removeChild(childElement);
   if(childElement){
      childElement = locate();
      bar.appendChild(childElement);
   }
})

contact.addEventListener("click", () => {
   bar.removeChild(childElement);
   if(childElement){
      childElement = contactPage();
      bar.appendChild(childElement);
   }
})