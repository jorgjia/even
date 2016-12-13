// Importimi i librarive
var express = require('express'), bodyParser = require('body-parser');

// Deklarimi i ekspresit
var app = new express();
var msg;
app.use(express.static('public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.post("/:nr", function(req, res) {
    var number = Number(req.body.number);
    

      if(number %2 === 0)  {
     
		msg='numri eshte cift'; 
      } else {
		msg='numri eshte tek'; 
      } 
     
     
  res.json({message: msg});
  
});

app.listen(process.env.PORT || 8000);

exports.app = app;