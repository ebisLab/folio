export function highlight(text) {
    var inputText = document.getElementById("inputText");
    if((inputText = document.getElementById("inputText") )!= null){
      // var inputText = document.getElementById("inputText");
      var innerHTML = inputText.innerHTML;
      var index = innerHTML.indexOf(text);
      if (index >= 0) { 
        innerHTML = innerHTML.substring(0,index) + "<span class='highlight'>" + innerHTML.substring(index,index+text.length) + "</span>" + innerHTML.substring(index + text.length);
        inputText.innerHTML = innerHTML;
       }
  }
  }