console.log('Loaded!');
//make the image move

var pictureElement = document.getElementById('picture');


var interval = setInterval(moveRight , 50);
var marginLength = 0;
var moveRight = function() {
    var marginLength = marginLength + 10;
    picture.style.marginLength = marginLength + "px";
};

