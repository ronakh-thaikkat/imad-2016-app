var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});


app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});

var articles = {
 'article-One' : {
    top: "This is article one",
    text: "This contains random stuff that dont make any sense and this is from"
           + "article one"
 },
 
 'article-Two' : {
    top: "This is article two",
    text: "This contains random stuff that dont make any sense and this is from"
           + "article two"
 },

 'article-Three' : {
    top: "This is article three",
    text: "This contains random stuff that dont make any sense and this is from"
           + "article three"
 }
};
function createTemplate(data){
    var top = data.top;
    var text = data.text;
    var htmlTemplate = `
    <html>
    <head>
        <title><h1> ${head} </h1></title>
        <meta name = "viewport" content="width=device-width, intial-scale = 1"/>
        <link href = "ui/style.css" rel="stylesheet" />
    </head>
        <body>
          <div class = 'container'>
            <div>
                <a href= '/'>Home</a>
            </div>
            <hr/>
            <h3>This is Article one</h3>
            <div>
                <p> ${text}</p>
            </div>
          </div>
        </body>
</html>
`;
return htmlTemplate;  
}


app.get('/:articleName', function(req, res){
    var articleName = req.params.articleName;
    res.send(createTemplate(articles[articleName]));

});

var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
