$(document).ready(function(){
  $("#clickB").click(function(){
      $(".some-ps").append('<p class="lorem-p">Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur praesentium quas ducimus vero deserunt eius facere minima architecto! Quia quos tempora officiis, voluptate eos molestiae sapiente at recusandae veniam eveniet?</p>');

  });



$("#btnToggle").click(function(){
  console.log("click");
  $(".lorem-p:last-child").toggle();
});


});

const readMoreBtn = document.querySelector(".read-more-btn");
const text = document.querySelector(".text");

readMoreBtn.addEventListener("click", (e) => {
  text.classList.toggle("show-more");
  if (readMoreBtn.innerText === "Read More") {
    readMoreBtn.innerText = "Read Less";
  } else {
    readMoreBtn.innerText = "Read More";
  }
});
