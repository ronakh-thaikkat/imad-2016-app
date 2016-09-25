console.log('Loaded!');
//make the image move
/*  Every HTML element that you access via JavaScript has a style object. This 
object allows you to specify a CSS property and set its value. For example, 
this is what setting the background color of an HTML element whose id value is
superman looks like:
var myElement = document.querySelector("#superman");
myElement.style.backgroundColor = "#D93600";  */

var button = document.getElementById('btn');


button.onclick = function(){

var request = new XMLHttpRequest();
 request.onreadychangestate = function(){
    if(request.readyState === XMLHttpRequest.DONE) {
      if(request.status === 200){
       var counter = request.responseText;
       var span = document.getElementById('count');
       span.innerHTML = counter.toString();
     }
    }
 };
 request.open('GET', 'http://ronakh-thaikkat.imad.hasura-app.io/counter', true);
 request.send(null);
};

var nameInput = document.getElementById('inputBox');
var inputName = nameInput.value;
var button = document.getElementById('inputButton');

//create a function and request when clicked on the button

button.onclick = function(){
    var request = new XMLHttpRequest();
        request.onreadychangestate = function(){
            if(request.readtState === 200 && request.status === 200){
                var list = '';
                var names = request.responseText;
                names = JSON.parse(names);
                for(i = 0; i < names.length; i ++){
                    list += '<li>' + names[i] + '</li>';
                }
                var ui = document.getElementById('nameList');
                ui.innerHTML = list;
            }
        };
        
    request.open('GET', 'http://ronakh-thaikkat.imad.hasura-app.io/submit-name?name=' + inputName, true); //value from input box 
    request.send(null);
};
