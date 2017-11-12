function ran_col() { //function name
    var color = '#'; // hexadecimal starting symbol
    var letters = ["aec6cf","a4b6dd","d09292","c094cc","c37892","9ecb77","cb779e","a477cb"]; //Set your colors here
    color += letters[Math.floor(Math.random() * letters.length)];
    document.body.style.background = color; // Setting the random color on your div element.
    var list = document.getElementsByClassName("btn btn-rant");
    list[0].style.background = color;
    list[1].style.background = color;
  }

  function getRandomINt(min,max){
    min = Math.cell(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
  }

  function requestRant() {
    $.get()
  }