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
});

