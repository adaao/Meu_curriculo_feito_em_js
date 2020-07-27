const express = require('express');
const CurriculoController = require('./controllers/curriculo-controller');
const path = require('path');

const port = 3000;
const app = express();
app.use(express.static(path.join(__dirname, 'public')));

const indexRoute = require('./routes/index');
const curriculoRoutes = require('./routes/curriculo-routes');

app.get('/', indexRoute);
app.get('/curriculo', curriculoRoutes);


//setup view engine
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

//server
app.listen(port, err => {
   console.log(`Server listening on port ${port}`);
})