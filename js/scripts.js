$(document).ready(function(){
///Front End Logic///
  $(".star").hover(function(){
    $(this).fadeOut("fast");
    $(this).fadeIn("slow");
    $(this).fadeOut("slow");
    $(this).fadeIn("slow");
    $(this).hide();
    $(this).show();
    $(this).fadeIn("slow");
  });
});

///Back End Logic///
