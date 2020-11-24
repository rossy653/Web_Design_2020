mainImg = document.getElementById('mainImg');

thumb1 = document.getElementById('thumb1');
thumb1Src = document.getElementById('thumb1').src; 
thumb2 = document.getElementById('thumb2');
thumb2Src = document.getElementById('thumb2').src; 
thumb3 = document.getElementById('thumb3');
thumb3Src = document.getElementById('thumb3').src; 
thumb4 = document.getElementById('thumb4');
thumb4Src = document.getElementById('thumb4').src; 

toggleIMG = document.getElementById('menuToggleIMG');

toggleIMG.addEventListener("click",function(){
    console.log(toggleIMG.title);
   if(toggleIMG.title === "closed" ){
       //one thing
       getNavSlidebar.style.visability = "visible";
       toggleIMG.style.background = "url('heart.png')";
       toggle.title = "open";
   } 
   else{
       //something else
       getNavlinks.style.visability = "hidden";
       toggleIMG.style.background = "url('button.png')";
       toggle.title = "closed";
   }
});




thumb1.addEventListener("click", function(){
    mainImg.src=thumb1Src
})
thumb2.addEventListener("click", function(){
    mainImg.src=thumb2Src
})
thumb3.addEventListener("click", function(){
    mainImg.src=thumb3Src
})
thumb4.addEventListener("click", function(){
    mainImg.src=thumb4Src
})

