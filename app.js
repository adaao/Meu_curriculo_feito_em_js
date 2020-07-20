const express = require('express');
const path = require('path');

const port = 3000;
const app = express();


//setup view engine
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.get('/', function(req, res, next){
   res.render('index',{
      title: 'meu servido em Express',
      version: "0.0.0"
   });
});

app.listen(port, err => {
   console.log(`Server listening on port ${port}`);
})