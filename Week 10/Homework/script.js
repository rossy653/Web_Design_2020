mainImg = document.getElementById('mainImg');

thumb1 = document.getElementById('thumb1');
thumb1Src = document.getElementById('thumb1').src; 
thumb2 = document.getElementById('thumb2');
thumb2Src = document.getElementById('thumb2').src; 
thumb3 = document.getElementById('thumb3');
thumb3Src = document.getElementById('thumb3').src; 
thumb4 = document.getElementById('thumb4');
thumb4Src = document.getElementById('thumb4').src; 

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


let toggleNavStatus = false;

let toggleNav = function () {
    let getNavSlidebar = document.querySelector(".nav-slidebar");
    let getButton = document.querySelector(".btn-toggle-nav");

    if (toggleNavStatus === false) {
        getNavSlidebar.style.visability = "visible";
        getButton.style.background = "url(heart.png)"
    }
    toggleNavStatus = true;
}

    
    else (toggleNavStatus === true) {
        getNavlinks.style.visability = "hidden";
        getButton.style.background = "url(burger.png)";
    
toggleNavStatus = false;
}