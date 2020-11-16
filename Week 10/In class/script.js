let field = docuemt.getElementById("colorField");
let colorBTN = document.getElementById("colorToggle");

let toggleIMG = document.getElementById("quokkaIMG");
let imageBTN = document.getElementById("imgToggle");

let catSelect = document.getElementById("category");
let subSelect = document.getElementById("subcategory")

let imageToggle = function(){
   if(){
       //do stuff
       console.log("same")
   }
   else{
       //do other stuff
       console.log("different")
   }
}

//imageToggle();

let categoryUpdate = function(){
    let foodSubcats = ["coffee", "desserts", "cocktails", "muffins"];
    let animSubsacts = ["kittens", "puppies", "quokkas"];
    let natureSubcats = ("forest", "mountains", "lakes");


    if(catSelect.value === "food"){
       console.log("food");
       foodSubcats.forEach(function(elem){
           let opt = document.createElement
       )}
    }
    else if(catSelect.value === "anim"){
        console.log("anim");
    }
    else if(catSelect.value === "nat"){
        console.log("nat");
    }

}

imageBTN.addEventListener("click", imageToggle);

colorBTN.addEventListener("click", function(){
   console.log("Hello" + "World");

   let rComp = Math. random()*255;
   let rComp = Math. random()*255;
   let rComp = Math. random()*255;

   //"rgb(18, 187, 56)"
   field.style.backgroundColor = "rgb(" + rComp + ", " + gComp + ", " + bComp + ")";

})