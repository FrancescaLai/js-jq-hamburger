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


var testo = $(".images p");
var immagine = $(".images img")
var visible = true;

immagine.click(
  function(){
    if (visible == true) {
      testo.fadeOut("slow");
      visible = false;
    } else {
      testo.fadeIn("fast");
      visible = true;
    }
  }
);
