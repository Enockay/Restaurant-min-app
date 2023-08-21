export {displayHome,
    locate,
    contactPage
           }
import manager from "./pictures/manager.jpg";
function  displayHome() {
const div = document.createElement("div");
div.classList.add("container2");

const header = document.createElement("h1");
header.classList.add("head");
header.textContent = "Universal Restaurant is the best";
div.appendChild(header);

 //container for description
const div2 = document.createElement("div");
div2.classList.add("des");
div.appendChild(div2);


const description = document.createElement("p");
description.classList.add("p");
description.textContent = "In Fact the Statistics say that we are ranked the best restaurant in town when it comes to offering the best food how services are the best we have nice delicious meals from the best certified chefs so far am pretty sure you gonna like us trust me "; 
div2.appendChild(description);
 
//hotel shedule
const div3 = document.createElement("div");
div3.classList.add("shedule");
div.appendChild(div3);

const hour = document.createElement("h2");
hour.textContent = "Hours we operate";
div3.appendChild(hour);

const list1 = document.createElement("ul");
list1.classList.add("list");
list1.textContent = "Monday - Friday: 11:00 AM - 10:00 PM";
div3.appendChild(list1);

const list2 = document.createElement("ul");
list2.classList.add("list");
list2.textContent = "Saturday - Sunday: 11:00 AM - 11:00 PM";
div3.appendChild(list2);

const para = document.createElement("p");
para.classList.add("para");
para.textContent = "We are open 7 days a week thats making our operation to be 24/7";
div3.appendChild(para);

div.appendChild(div3);

//our location
const div4 = document.createElement("div");
div4.classList.add("contact-location");
div.appendChild(div4);

const location = document.createElement("h2");
location.textContent = "Universal Restaurant located Near Gate F around CHUKA Unversity" ;
div4.appendChild(location);


return div;

}


//location function
function locate(){
const div = document.createElement("div");
div.classList.add("contact-location");

const location = document.createElement("h2");
location.textContent = "Universal Restaurant located Near Gate F around CHUKA Unversity wait for the map its loading sooner than possble will be here soon" ;
div.appendChild(location);

const map = document.createElement("iframe");
map.classList.add("map");
div.appendChild(map);


return div
}

function contactPage() {
const div = document.createElement("div");
div.classList.add("contact-location");

const img = document.createElement("img");
img.classList.add("img1");
img.src = manager;
div.appendChild(img);

const div1 = document.createElement("div");
div1.classList.add("contactUs");
div.appendChild(div1);

const label = document.createElement("label");
label.textContent = "Universal Restaurant Manager: Hon John Doe";
div1.appendChild(label);

const address = document.createElement("p");
address.textContent = "1423-90200 - chuka university";
div1.appendChild(address);

const phone = document.createElement("p");
phone.textContent = "0700-000-000";
div1.appendChild(phone);

const email = document.createElement("p");
email.textContent = "enockaymwema@.com";
div1.appendChild(email);



return div
}


