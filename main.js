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

testo.mouseover(
  function(){
    if(visible == true){
      immagine.fadeOut("slow");
      visible = false;
    } else {
      immagine.fadeIn("fast");
      visible = true;
    }
  }
)
