var hamburger = $(".hamburger-menu")

$(".fas.fa-bars").click(
  function(){
    hamburger.addClass("active");
  }
);

$(".close").click(
  function(){
    hamburger.removeClass("active");
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
