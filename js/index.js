//ready function starts
$(document).ready(function() {
  //search icon toggle effect 
  $("#searchButton").on("click", function() {
    $("#inputText").toggle(1500);
  });

  //typed article search
  $("#inputText").on("keyup", function(event) {

    //declaring var for .getJSON function
    var inputText = $("#inputText").val();
    var url = "https://en.wikipedia.org/w/api.php?action=opensearch&gsrnamespace=0&gsrlimit=10&format=json&search=" + inputText + "&callback=?";

    //.getJSOn starts
    $.getJSON(url, function(response) {
      var html = "";

      //iterating through 4 arrays in response page
      for (var i = 0; i < response[1].length; i++) {
        //creating an html string from response with clickable link on results
        html += "<a href='" + response[3][i] + "' target='_blank'> <div class='result'><h2>" + response[1][i] + "</h2> <p>" + response[2][i] + "</p></div></a>"
      };
      //appending html to placeholder div
      $("#placeHolder").html(html);
      $(html).addClass("background", "gray");
    }); //.get JSON ends
  }); // typed article search ends

  //random article button
  $("#randomButton").on("click", function() {
    window.open("https://en.wikipedia.org/wiki/Special:Random")
  });

  //adding animation
  $("#coffee").addClass("animated bounce");

}); //ready function ends