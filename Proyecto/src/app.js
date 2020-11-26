const express = require ('express');
const app = express();
const path = require ('path');
const morgan = require ('morgan');

//settings
app.set('port', 5000);
app.set('views', path.join (__dirname,"views"));
app.set('public', path.join (__dirname,"public"));
app.set('view engine', 'ejs');

//middleware
app.use(morgan('dev'));
app.use(express.urlencoded({extended:false})); // traducción de formularios en JSON

//routes
app.use(require('./routes/index'));

//static 
app.use(express.static(path.join(__dirname,'public')));

// 404 handler
app.use((req, resp, next)=>{
    resp.status(404).send("recurso no encontrado en la ubicación especificada ...");
}); 

module.exports = app;