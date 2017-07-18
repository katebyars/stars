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
  var starSizes = ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve'];
  var length = starSizes.length;
  var starChild = (".star:first-child");

  $("starChild").each(function(e){
    starIndex = Math.floor(Math.random()*starSizes.length);
    $(this).addClass(starSizes[starIndex]);
    alert("hi");
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
