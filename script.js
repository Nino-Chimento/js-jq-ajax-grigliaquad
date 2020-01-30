$(document).ready(function () {
  var source = $("#entry-template").html();
  var template = Handlebars.compile(source);
  var context = { };
  var html = template(context);
  for (var i = 0; i < 36; i++) {
    $(".container").append(html)
  }
  $(document).on("click",".container div",function () {
    console.log("N");
  })
});
