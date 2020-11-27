const {Router} = require('express');
const router = Router();
const fs = require('fs');
const uuid = require('uuid4');

 
const usuarioJSONr = fs.readFileSync('src/Estudiantes/GOJD001207HMCNMNA7.json','utf-8');
const usuario = JSON.parse(usuarioJSONr);

const productosJSONr = fs.readFileSync('src/Estudiantes/Productividad/GOJD001207HMCNMNA7.json','utf-8');
const productos = JSON.parse(productosJSONr);

const listaJSONr = fs.readFileSync('src/Estudiantes/listaAlumnos.json','utf-8');
const lista = JSON.parse(listaJSONr);

//Especificación de la ruta inicial de la app
router.get('/paginaAlumno',(req, res)=>{
  res.render('PaginaAlumno',{usuario,productos});
});

router.get('/paginaCoordinador',(req, res)=>{
    res.render('PaginaCoordinador',{lista});
});


router.get('/nuevosProductos',(req, res)=>{
    res.render('index0');
});

router.get('/index1/:ACongreso.titulo',(req, res)=>{
  let tit = req.params.titulo;
  let indice=0;
  let contador=0;
  let producto;  
  productos.ACongreso.forEach(element => {
    if(element.productos.ACongreso.titulo == tit)
    { 
      indice=contador;
    }
      contador ++;
    })
    producto=productos.ACongreso[indice];
  res.render('index1');
});

router.get('/index2',(req, res)=>{
  res.render('index2');
});

router.get('/index3',(req, res)=>{
  res.render('index3');
});

router.get('/index4',(req, res)=>{
  res.render('index4');
});
router.get('/index5',(req, res)=>{
  res.render('index5');
});


module.exports = router;