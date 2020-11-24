

 let catSelect = document.getElementById("category");
 let subSelect = document.getElementById("subcategory");

 let carousel = document.getElementById("carousel");
 let carouselIMG = document.getElementById("carouselIMG");


 let categoryUpdate = function(){
    let foodSubcats = ["Shoes", "Jewelry",];
    let animSubcats = ["Fashion", "Makeup",];
    let natureSubcats = ["Cities", "Deserts",];

    subSelect.innerHTML = "";

    if(catSelect.value === "food"){
        console.log("food");
        foodSubcats.forEach(function(elem){
            let opt = document.createElement("option");
            opt.value = elem;
            opt.innerText = elem;
            subSelect.appendChild(opt);
        })
    }
    else if(catSelect.value === "anim"){
        console.log("animals");
        animSubcats.forEach(function(elem){
            let opt = document.createElement("option");
            opt.value = elem;
            opt.innerText = elem;
            subSelect.appendChild(opt);
        })
    }
    else if(catSelect.value === "nat"){
        console.log("nature");
        natureSubcats.forEach(function(elem){
            let opt = document.createElement("option");
            opt.value = elem;
            opt.innerText = elem;
            subSelect.appendChild(opt);
        })
    }}
    catSelect.addEventListener("change", categoryUpdate);

  let images = [
     "shoes1.jpg",
    "shoes2.jpg",
    "shoes3.jpg",
    ]
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




 