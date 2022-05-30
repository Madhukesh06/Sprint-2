// Add the coffee to local storage with key "coffee"
main(); // calling main function

let c= JSON.parse(localStorage.getItem("count"))||0;
document.getElementById("coffee_count").innerText = c;

let PRICE = JSON.parse(localStorage.getItem("PRI"))||0;

let ar = JSON.parse(localStorage.getItem("coffee"))||[];


async function coffeData() {
    let url = "https://masai-mock-api.herokuapp.com/coffee/menu";
    try {
        let res = await fetch(url);
        let data = await res.json()
        return data.menu.data;
    } catch (error) {
        console.log(`Error: ${error}`);
    }
}

async function main() {
    let res = coffeData();
    let cofData = await res;
    append(cofData);
  
}


function append(data) {
    document.getElementById("menu").innerHTML = null;
    data.forEach(el => {
        // console.log(el)

     let CARD = document.createElement("div") 

     let IM = document.createElement("img")   
     let Type = document.createElement("h3")   
     let Price = document.createElement("dh3")   
     let btn = document.createElement("button");

     IM.src = el.image;
     Type.innerText = el.title;
     Price.innerText = el.price;   
     btn.innerText = "Add to Bucket"

     CARD.setAttribute("id","card") 
     btn.setAttribute("id","add_to_bucket")   

     CARD.append(IM,Type,Price,btn);
     document.getElementById("menu").append(CARD);

     //adding click event listner to btn
     btn.addEventListener("click",function(){
         addtoBucket(el);
     }); 


     function addtoBucket(el){
       c++;
       localStorage.setItem("count",c) 
       document.getElementById("coffee_count").innerText = c;
       ar.push(el);
       localStorage.setItem("coffee",JSON.stringify(ar))

       // Calculate total price and append to bucket
       PRICE = PRICE + el.price;
       localStorage.setItem("PRI",PRICE);
       console.log(PRICE)
     }
    });
}



