$(document).ready(function() {
  $(".clickable").click(function() {
    $("#javascript-showing").toggle();
    $("#javascript-hidden").toggle();
  });

  $(".clickable1").click(function() {
    $("#operators-showing").toggle();
    $("#operators-hidden").toggle();
  });

  $(".clickable2").click(function() {
    $("#varibles-showing").toggle();
    $("#varibles-hidden").toggle();
  });

  $(".clickable3").click(function() {
    $("#naming-showing").toggle();
    $("#naming-hidden").toggle();
  });

  $(".clickable4").click(function() {
    $("#function-showing").toggle();
    $("#function-hidden").toggle();
  });

  $(".clickable5").click(function() {
    $("#method-showing").toggle();
    $("#method-hidden").toggle();
  });
});

