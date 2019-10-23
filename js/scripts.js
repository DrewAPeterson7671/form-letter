$(document).ready(function(){
  $("#formone").submit(function(event){
    var name = $("input#name").val();
    $(".name").text(name);

  event.preventDefault();
  });
});
