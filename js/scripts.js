$(document).ready(function() {
  $("button#bg-black").click(function() {
    $("body").removeClass();
    $("body").addClass("black-background");
  });
  $("button#bg-white").click(function() {
    $("body").removeClass();
    $("body").addClass("white-background");
  });
});
