function ran_col() { //function name
    var color = '#'; // hexadecimal starting symbol
    var letters = ["aec6cf","a4b6dd","d09292","c094cc","c37892","9ecb77","cb779e","a477cb"]; //Set your colors here
    color += letters[Math.floor(Math.random() * letters.length)];
    document.body.style.background = color; // Setting the random color on your div element.
    var list = document.getElementsByClassName("btn btn-rant");
    list[0].style.background = color;
    list[1].style.background = color;
  }

  function getRandomInt(min,max){
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
  }

  function requestRant() {
    $.get("http://54.167.102.0:3000/api/rants/",
        function(data,status){
          var rants = data;
          var index = getRandomInt(0, rants['Rants'].length);
          var output = rants['Rants'][index]['rant'];
          $("#rant_desc").text(output);
        }        
  );
}
function requestCompliment() {
  $.get("http://54.167.102.0:3000/api/compliments/",
  function(data,status){
    var rants = data;
    var index = getRandomInt(0, rants['Compliments'].length);
    var output = rants['Compliments'][index]['compliment'];
    $("#compliment_desc").text(output);
  }        
  );
  }

  function submitRant(){
    var text = $("#rant_text").val();
    var jsonData = "{'rant': '" + text + "'}";
    $.post( "http://54.167.102.0:3000/api/rants", { rant : text } );

  }