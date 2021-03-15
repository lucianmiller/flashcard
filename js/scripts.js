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
    $("#variables-showing").toggle();
    $("#variables-hidden").toggle();
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

  $(".clickable6").click(function() {
    $("#arguments-showing").toggle();
    $("#arguments-hidden").toggle();
  });

  $(".clickable7").click(function() {
    $("#parameters-showing").toggle();
    $("#parameters-hidden").toggle();
  });
});

