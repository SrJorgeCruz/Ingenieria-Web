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

router.get('/src/Estudiantes/Productividad/:curp',(req, res)=>{
  const usuarioJSONr = fs.readFileSync('src/Estudiantes/Productividad/'+req.params.curp,'utf-8');
  const usuario = JSON.parse(usuarioJSONr);  
  res.json(usuario)
});

router.get('/index1/:titulo',(req, res)=>{
  let tit = req.params.titulo;
  let indice=0;
  let contador=0;
  let producto;  
  productos.ACongreso.forEach(element => {
    if(element.titulo == tit)
    { 
      indice=contador;
    }
      contador ++;
    })
  producto=productos.ACongreso[indice];
  res.render('index1',{producto});
});


router.get('/index2/:titulo',(req, res)=>{
  let tit = req.params.titulo;
  let indice=0;
  let contador=0;
  let producto;  
  productos.ARevista.forEach(element => {
    if(element.titulo == tit)
    { 
      indice=contador;
    }
      contador ++;
    })
  producto=productos.ARevista[indice];
  res.render('index2',{producto});
});


router.get('/index3/:titulo',(req, res)=>{
  let tit = req.params.titulo;
  let indice=0;
  let contador=0;
  let producto;  
  productos.CLibro.forEach(element => {
    if(element.titulo == tit)
    { 
      indice=contador;
    }
      contador ++;
    })
  producto=productos.CLibro[indice];
  res.render('index3',{producto});
});


router.get('/index4/:titulo',(req, res)=>{
  let tit = req.params.titulo;
  let indice=0;
  let contador=0;
  let producto;  
  productos.libro.forEach(element => {
    if(element.titulo == tit)
    { 
      indice=contador;
    }
      contador ++;
    })
  producto=productos.libro[indice];
  res.render('index4',{producto});
});



router.get('/index5/:titulo',(req, res)=>{
  let tit = req.params.titulo;
  let indice=0;
  let contador=0;
  let producto;  
  productos.hardwareSoftware.forEach(element => {
    if(element.titulo == tit)
    { 
      indice=contador;
    }
      contador ++;
    })
  producto=productos.hardwareSoftware[indice];
  res.render('index5',{producto});
});


module.exports = router;