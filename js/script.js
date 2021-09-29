$(".col-lg-4").slice(0, 3).show(); //showing 3 div

$(".btn").on("click", function () {
  $(".col-lg-4:hidden").slice(0, 3).show(); //showing 3 hidden div on click

  if ($(".col-lg-4:hidden").lenth == 0) {
    $(".btn").fadeout(); //this will hide
    //button when lenth is 0
  }
});
