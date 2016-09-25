console.log('Loaded!');
//make the image move
/*  Every HTML element that you access via JavaScript has a style object. This 
object allows you to specify a CSS property and set its value. For example, 
this is what setting the background color of an HTML element whose id value is
superman looks like:
var myElement = document.querySelector("#superman");
myElement.style.backgroundColor = "#D93600";  */


var pictureElement = document.getElementById('picture');

var marginLeft = 0;
function moveRight() {
    var marginLeft = marginLeft + 10;
    pictureElement.style.marginLeft = marginLeft + 'px';
}

pictureElement.onclick = function(){
 var interval = setInterval(moveRight, 50);
};

var buttonClick = document.getElementById('btn');
buttonClick.onclick = function(){
    var counter = 0;
    counter = counter + 1;
    var span = getElementById('span');
    span.innerHTML = counter.toString();
    
}