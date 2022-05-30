// On clicking remove button the item should be removed from DOM as well as localstorage.

let c= JSON.parse(localStorage.getItem("count"))||0;

let PRICE = JSON.parse(localStorage.getItem("PRI"))||0;
document.getElementById("total_amount").innerText = PRICE;

let ar = JSON.parse(localStorage.getItem("coffee"))||[];



append(ar);

function append(data) {
    
    document.getElementById("bucket").innerHTML = null;
    data.forEach(function(el,i){

     let CARD = document.createElement("div") 

     let IM = document.createElement("img")   
     let Type = document.createElement("h3")   
     let Price = document.createElement("dh3")   
     let btn = document.createElement("button");

     IM.src = el.image;
     Type.innerText = el.title;
     Price.innerText = el.price;   
     btn.innerText = "Remove"


     CARD.setAttribute("id","card") 
     btn.setAttribute("id","remove_coffee")

     
     CARD.append(IM,Type,Price,btn);
     document.getElementById("bucket").append(CARD);

     //adding click event listner to btn
     btn.addEventListener("click",function(){
        removeFunct(el,i);  
     }); 

     function removeFunct(el,i){
        c--;
        localStorage.setItem("count",c); 

        PRICE = PRICE - el.price;
        document.getElementById("total_amount").innerText = PRICE;
        localStorage.setItem("PRI",PRICE);

        ar.splice(i,1)
        localStorage.setItem("coffee",JSON.stringify(ar))
        location.reload()
     }
    });
}