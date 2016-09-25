console.log('Loaded!');
//make the image move
/*  Every HTML element that you access via JavaScript has a style object. This 
object allows you to specify a CSS property and set its value. For example, 
this is what setting the background color of an HTML element whose id value is
superman looks like:
var myElement = document.querySelector("#superman");
myElement.style.backgroundColor = "#D93600";  */


var request = new XMLHttpRequest();
request.onreadychangestate = function(){
    if(request.readyState === XMLHttpRequest.DONE && request.status === 200){
      var counter = request.responseText;
      var span = document.getELementById('span');
      span.innerHTML = counter.toString();
    }


 request.open('GET', 'http://ronakh-thaikkat.imad.hasura-app.io/counter', true);
 request.send(null);
};