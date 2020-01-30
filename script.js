$(document).ready(function () {
  var source = $("#entry-template").html();
  var template = Handlebars.compile(source);
  var context = { };
  var html = template(context);
  for (var i = 0; i < 36; i++) {
    $(".container").append(html)
  }
  $(document).on("click",".container div",function () {
    $.ajax(
    {
      url: "https://flynn.boolean.careers/exercises/api/random/int",
      method: "GET",
      success: function (data, stato) {
         console.log(data.response);
         if (parseInt(data.response)<= 5) {
           console.log("il numero e inferiore a 5");
           $(this).addClass("yellow")
         }
         else {
           console.log("il numero e maggiroe di 5");
            $(this).addClass("green")
         }
      },
      error: function (richiesta, stato, errori) {
         alert("E' avvenuto un errore. " + errori);
      }
    });
  })
});
