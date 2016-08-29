$(document).ready(function(){
//default display

  //variables

  //Events
  $(".button, #char-count").hide();
  $(".tweet-compose").click(function(){
    $(this).animate({height: "5em" }, 500);
    $("#char-count, .button").show();

  });
  $(document).click(function(){
  $(".tweet-compose").animate({height: "2.5em"}, 500);
  $("#tweet-controls").hide();
})
















});
