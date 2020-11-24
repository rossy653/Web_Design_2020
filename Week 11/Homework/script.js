

 let catSelect = document.getElementById("category");
 let subSelect = document.getElementById("subcategory");

 let carousel = document.getElementById("carousel");
 let carouselIMG = document.getElementById("carouselIMG");
 
let carouselUpdate = function(){
    let imagesShoes = images = ["shoes1.jpg","shoes2.jpg","shoes3.jpg",]
    let imagesJewel = images = ["jewel1.jpg","jewel2.jpg","jewel3.jpg",]
    
}

 let categoryUpdate = function(){
    let shopSubcats = ["Shoes", "Jewelry",];
    let colabsSubcats = ["Fashion", "Makeup",];
    let locatSubcats = ["Cities", "Deserts",];
    

    subSelect.innerHTML = "";

    if(catSelect.value === "shop"){
        console.log("shop");
        shopSubcats.forEach(function(elem){
            let opt = document.createElement("option");
            opt.value = elem;
            opt.innerText = elem;
            subSelect.appendChild(opt);
        })
        
    }
    else if(catSelect.value === "colabs"){
        console.log("colaborations");
        colabsSubcats.forEach(function(elem){
            let opt = document.createElement("option");
            opt.value = elem;
            opt.innerText = elem;
            subSelect.appendChild(opt);
        })
    }
    else if(catSelect.value === "locat"){
        console.log("locations");
        locatSubcats.forEach(function(elem){
            let opt = document.createElement("option");
            opt.value = elem;
            opt.innerText = elem;
            subSelect.appendChild(opt);
        })
    }}
    catSelect.addEventListener("change", categoryUpdate);


    //Carousel of Images

    images = ["shoes1.jpg","shoes2.jpg","shoes3.jpg",]
  
 let counter = 0;


 let imgChange = function(){
     counter++;
     if(counter === 3) {counter = 0}
     carouselIMG.src = images[counter];
 }
 let subscribeRequest = function(){
    prompt("Give us your email or else!!!", "my@email.com")
}
    window.addEventListener("load", function(){
        setTimeout(imgChange, 4000); 
        setInterval (imgChange,3000);
    })




 