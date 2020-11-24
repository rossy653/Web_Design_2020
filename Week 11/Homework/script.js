let catSelect = document.getElementById("category");
let subSelect = document.getElementById("subcategory");

let carousel = document.getElementById("carousel");
let carouselIMG = document.getElementById("carouselIMG");

let imagesS = ["shoes1.jpg","shoes2.jpg","shoes3.jpg"];

let imagesM = ["makeup1.jpg","makeup2.jpg","makeup3.jpg"];

let imagesJ = ["jewel1.jpg","jewel2.jpg","jewel3.jpg"];
let counter = 0;

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
    }
}

let imgChange = function(){
    counter++;
    if(counter === 3) {
        counter = 0;
    }
    if(subSelect.value == "Shoes"){
        carouselIMG.src = imagesS[counter]; 
    }
    else if(subSelect.value == "Makeup"){
        carouselIMG.src = imagesM[counter];
    }
    else{
        carouselIMG.src = imagesJ[counter];
    }
    
}


let subscribeRequest = function(){
    prompt("Give us your email or else!!!", "my@email.com");
}


window.addEventListener("load", function(){
    //setTimeout(subscribeRequest, 4000); 
    setInterval (imgChange,3000);
})

catSelect.addEventListener("change", categoryUpdate);

 