const express = require('express');
const CurriculoController = require('./controllers/curriculo-controller');
const path = require('path');
const createError = require('http-errors');

const port = 3000;
const app = express();
app.use(express.static(path.join(__dirname, 'public')));

const indexRoute = require('./routes/index');
const curriculoRoutes = require('./routes/curriculo-routes');

app.get('/', indexRoute);
app.get('/curriculo', curriculoRoutes);

//Errors
//404
app.use((req, res, next) => {
   next(createError(404));
});

//error handler
app.use((err, req, res, next) => {
   res.locals.message = err.message;
   res.locals.error = req.app.get('env') === 'development' ? err : {};

   res.status(err.status || 500);
   res.render('error');
})


//setup view engine
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

//server
app.listen(port, err => {
   console.log(`Server listening on port ${port}`);
})