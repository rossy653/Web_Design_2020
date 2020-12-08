$(document).ready(function(){
  $("#clickB").click(function(){
      $(".some-ps").append('<p class="lorem-p">Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur praesentium quas ducimus vero deserunt eius facere minima architecto! Quia quos tempora officiis, voluptate eos molestiae sapiente at recusandae veniam eveniet?</p>');

  });



$("#btnToggle").click(function(){
  $(".lorem-p:last-child").toggle();
});


});