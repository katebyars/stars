$(document).ready(function(){
///Front End Logic///
  // $("div").hover(function(){
  //   $("span").addClass(".two");
  //   // $(this).fadeIn("slow");
  //   // $(this).fadeOut("slow");
  //   // $(this).fadeIn("slow");
  //   // $(this).fadeOut("fast");
  //   // $(this).hide();
  //   // $(this).show();
  //   // $(this).fadeIn("slow");
  // });
  var starSizes = ["one", ".two", ".three"];
  var length = starSizes.length;

  function assignStar (star, child)
  {

  }
  $("div.star").child().forEach(function() {
    starIndex = Math.floor(Math.random() * starSizes.length);
    $(this).addClass(starSizes[starIndex]);
  });

  $(".star").hover(function(){
    $(this).fadeIn("slow");
    $(this).fadeOut("slow");
    $(this).fadeIn("slow");
    $(this).fadeOut("fast");
    $(this).hide();
    $(this).show();
    $(this).fadeIn("slow");
  });

});

///Back End Logic///
