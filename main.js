$(".header-right > a").click(
  function(){
    $(".hamburger-menu").addClass("active");
  }
);

$(".hamburger-menu .close").click(
  function(){
    $(".hamburger-menu").removeClass("active");
  }
)
