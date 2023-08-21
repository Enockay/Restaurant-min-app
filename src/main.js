export {displayMenu};
import Burger from "./pictures/Burger.jpg";
import Turn from "./pictures/Turn.jpg";
import photo from "./pictures/photo.jpg";
import fish from "./pictures/fish.jpg";
import ugali from "./pictures/ugali.jpg";
import matumbo from "./pictures/matumbo.jpg";

 function displayMenu(){
    //main container
    const div1 = document.createElement("div");
    div1.setAttribute("id", "menu");
    div1.classList.add("menu-container");

    //heading
    const head = document.createElement("h2");
    head.classList.add("head");
    head.textContent = "Explore Our Menu.";
    div1.appendChild(head);

    //menu grids
    const div = document.createElement("div");
    div.classList.add("menu-page");
    div1.appendChild(div);

  
   //food
    const div2 = document.createElement("div");
    div2.classList.add("food");
    div2.setAttribute("data-price", "100");
    div2.setAttribute("id", "food");
    div.appendChild(div2);

   
   const img1 = document.createElement("img");
   img1.classList.add("img1");
   img1.src = Burger;
   div2.appendChild(img1);

   const name = document.createElement("h3");
   name.classList.add("name");
   name.textContent = "Meal  here Burger COST :$100"; 
  
   div2.appendChild(name);

   const div3 = document.createElement("div");
   div3.classList.add("food");
   div3.setAttribute("data-price", "500");
   div3.setAttribute("id", "food");
   div.appendChild(div3);

   const img2 = document.createElement("img");
   img2.classList.add("img1");
   img2.src = Turn;
   div3.appendChild(img2);

   const name1 = document.createElement("h3");
   name1.classList.add("name");
   name1.textContent = "Meal  here is turn food  COST :$500";
   div3.appendChild(name1);

   const div4 = document.createElement("div");
   div4.classList.add("food");
   div4.setAttribute("id", "food");
   div4.setAttribute("data-price", "400");
   div.appendChild(div4);

   const img3 = document.createElement("img");
   img3.classList.add("img1");
   img3.src = photo;
   div4.appendChild(img3);

   const name2 = document.createElement("h3");
   name2.classList.add("name");
   name2.textContent = "Meal  here is turn food  COST :$400";
   div4.appendChild(name2);

   const div5 = document.createElement("div");
   div5.classList.add("food");
   div5.setAttribute("id", "food");
   div5.setAttribute("data-price", "100");
   div.appendChild(div5);

   const image = document.createElement("img");
   image.classList.add("img1");
   image.src = fish;

   div5.appendChild(image);
   
   const name3 = document.createElement("h3");
   name3.classList.add("name");
   name3.textContent = "Meal  here is chafool COST :$100";
   div5.appendChild(name3);

   const div6 = document.createElement("div");
   div6.classList.add("food");
   div6.setAttribute("id", "food");
   div6.setAttribute("data-price", "50");
   div.appendChild(div6);

   const img4 = document.createElement("img");
   img4.classList.add("img1");
   img4.src = ugali;
   div6.appendChild(img4);

   const name4 = document.createElement("h3");
   name4.classList.add("name");
   name4.textContent = "Meal  here is kenyan meal COST :$50";
   div6.appendChild(name4);

   const div7 = document.createElement("div");
   div7.classList.add("food");
   div7.setAttribute("id", "food");
   div7.setAttribute("data-price", "100");
   div.appendChild(div7);

   const img5 = document.createElement("img");
   img5.classList.add("img1");
   img5.src = matumbo;
   div7.appendChild(img5);

   const name5 = document.createElement("h3");
   name5.classList.add("name");
   name5.textContent = "Meal  here is Animal Interstines COST :$100";
   div7.appendChild(name5);

   const footer = document.createElement("h3");
   footer.classList.add("head2");
   footer.textContent = "You can choose the meal you want its our pleasure to have you...";
   div1.appendChild(footer);
      

    return div1
}

class price{
    constructor(price){
        this.price = price;
    }
    getPrice(){
        return this.price
    }
    setPrice(value){
        this.price = value;
    }
}


