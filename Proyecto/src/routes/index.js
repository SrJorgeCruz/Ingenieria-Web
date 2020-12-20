const {Router} = require('express');
const router = Router();
const fs = require('fs');
const uuid = require('uuid4');

 
const usuarioJSONr = fs.readFileSync('src/Estudiantes/CUMJ000723HMCRNRA8.json','utf-8');
const usuario = JSON.parse(usuarioJSONr);

const productosJSONr = fs.readFileSync('src/Estudiantes/Productividad/CUMJ000723HMCRNRA8.json','utf-8');
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

router.post('/guardarACongreso',(req, res) =>{
  const formData = req.body
  console.log('form data', formData);

  let {titulo,nombre,fecha,autor,tema,url} = req.body;

  const fechaEvento = fecha;
  const tipoAutor = autor;
  const asociado = tema;
  const URL = url;

  let producto = {
    titulo,
    nombre,
    fechaEvento, 
    tipoAutor,
    asociado,
    URL
  };
  productos.ACongreso.push(producto);

  // convierte a string el arreglo de objetos javascript
  const productosJSON = JSON.stringify(productos);

  fs.writeFileSync('src/Estudiantes/Productividad/'+usuario.curp+'.json', productosJSON,'utf-8');

  res.redirect('/paginaAlumno');
});

router.post('/guardarARevista',(req, res) =>{
  const formData = req.body
  console.log('form data', formData);


  let {titulo,nombre,tipo,indice,opcion,issn,doi,autor,tema,url} = req.body;
  const tipoRevista = tipo;
  const indiceOtro = opcion;
  const ISSN = issn;
  const DOI = doi
  const tipoAutor = autor;
  const asociado = tema;
  const URL = url;

  let producto = {
    titulo,
    nombre,
    tipoRevista,
    indice,
    indiceOtro,
    ISSN,
    DOI,
    tipoAutor,
    asociado,
    URL
  };
  productos.ARevista.push(producto);

  // convierte a string el arreglo de objetos javascript
  const productosJSON = JSON.stringify(productos);

  fs.writeFileSync('src/Estudiantes/Productividad/'+usuario.curp+'.json', productosJSON,'utf-8');

  res.redirect('/paginaAlumno');
});

router.post('/guardarCLibro',(req, res) =>{
  const formData = req.body
  console.log('form data', formData);

  let {titulo, editorial, edicion, año, isbn, autor, tema, url} = req.body;

  const añoPublicacion = año;
  const ISBN = isbn;
  const tipoAutor = autor;
  const asociado = tema;
  const URL = url;

  let producto = {
    titulo,
    editorial,
    edicion,
    añoPublicacion,
    ISBN,
    tipoAutor,
    asociado,
    URL
  };
  productos.CLibro.push(producto);

  // convierte a string el arreglo de objetos javascript
  const productosJSON = JSON.stringify(productos);

  fs.writeFileSync('src/Estudiantes/Productividad/'+usuario.curp+'.json', productosJSON,'utf-8');

  res.redirect('/paginaAlumno');
});

router.post('/guardarlibro',(req, res) =>{
  const formData = req.body
  console.log('form data', formData);

  let {titulo, editorial, edicion, año, isbn, autor, tema, url} = req.body;

  const añoPublicacion = año;
  const ISBN = isbn;
  const tipoAutor = autor;
  const asociado = tema;
  const URL = url;

  let producto = {
    titulo,
    editorial,
    edicion,
    añoPublicacion,
    ISBN,
    tipoAutor,
    asociado,
    URL
  };
  productos.libro.push(producto);

  // convierte a string el arreglo de objetos javascript
  const productosJSON = JSON.stringify(productos);

  fs.writeFileSync('src/Estudiantes/Productividad/'+usuario.curp+'.json', productosJSON,'utf-8');

  res.redirect('/paginaAlumno');
});

router.post('/guardarhardwareSoftware',(req, res) =>{
  const formData = req.body
  console.log('form data', formData);

  let {titulo, año, derechos, autor, tema, url} = req.body;

  const añoDesarrollo = año;
  const derechosAutor = derechos;
  const tipoAutor = autor;
  const asociado = tema;
  const URL = url;

  let producto = {
    titulo,
    añoDesarrollo,
    derechosAutor,
    tipoAutor,
    asociado,
    URL
  };
  productos.hardwareSoftware.push(producto);

  // convierte a string el arreglo de objetos javascript
  const productosJSON = JSON.stringify(productos);

  fs.writeFileSync('src/Estudiantes/Productividad/'+usuario.curp+'.json', productosJSON,'utf-8');

  res.redirect('/paginaAlumno');
});


router.post('/modificarACongreso',(req, res) =>{
  let {titulo,nombre,fecha,autor,tema,url} = req.body;

  const fechaEvento = fecha;
  const tipoAutor = autor;
  const asociado = tema;
  const URL = url;
  let producto = {
    titulo,
    nombre,
    fechaEvento, 
    tipoAutor,
    asociado,
    URL
  };

  productos.ACongreso.map(function(element){
    if(element.titulo == producto.titulo){
      element.nombre=producto.nombre;
      element.fechaEvento=producto.fechaEvento;
      element.tipoAutor=producto.tipoAutor;
      element.asociado=producto.asociado;
      element.URL=producto.URL;
    }
  })

  // convierte a string el arreglo de objetos javascript
  const productosJSON = JSON.stringify(productos);

  fs.writeFileSync('src/Estudiantes/Productividad/'+usuario.curp+'.json', productosJSON,'utf-8');
  
  res.redirect('/paginaAlumno');
});



router.post('/modificarARevista',(req, res) =>{
  let {titulo,nombre,tipo,indice,opcion,issn,doi,autor,tema,url} = req.body;
  const tipoRevista = tipo;
  const indiceOtro = opcion;
  const ISSN = issn;
  const DOI = doi
  const tipoAutor = autor;
  const asociado = tema;
  const URL = url;

  let producto = {
    titulo,
    nombre,
    tipoRevista,
    indice,
    indiceOtro,
    ISSN,
    DOI,
    tipoAutor,
    asociado,
    URL
  };
  
  productos.ARevista.map(function(element){
    if(element.titulo == producto.titulo){
      element.nombre=producto.nombre;
      element.tipoRevista=producto.tipoRevista;
      element.indice=producto.indice;
      element.indiceOtro=producto.indiceOtro;
      element.ISSN=producto.ISSN;
      element.DOI=producto.DOI;
      element.tipoAutor=producto.tipoAutor;
      element.asociado=producto.asociado;
      element.URL=producto.URL;
    }
  })

  // convierte a string el arreglo de objetos javascript
  const productosJSON = JSON.stringify(productos);

  fs.writeFileSync('src/Estudiantes/Productividad/'+usuario.curp+'.json', productosJSON,'utf-8');

  res.redirect('/paginaAlumno');
});



router.post('/modificarCLibro',(req, res) =>{
  let {titulo, editorial, edicion, año, isbn, autor, tema, url} = req.body;

  const añoPublicacion = año;
  const ISBN = isbn;
  const tipoAutor = autor;
  const asociado = tema;
  const URL = url;

  let producto = {
    titulo,
    editorial,
    edicion,
    añoPublicacion,
    ISBN,
    tipoAutor,
    asociado,
    URL
  };

  productos.CLibro.map(function(element){
    if(element.titulo == producto.titulo){
      element.editorial=producto.editorial;
      element.edicion=producto.edicion;
      element.añoPublicacion=producto.añoPublicacion;
      element.ISBN=producto.ISBN;
      element.tipoAutor=producto.tipoAutor;
      element.asociado=producto.asociado;
      element.URL=producto.URL;
    }
  })
  // convierte a string el arreglo de objetos javascript
  const productosJSON = JSON.stringify(productos);

  fs.writeFileSync('src/Estudiantes/Productividad/'+usuario.curp+'.json', productosJSON,'utf-8');

  res.redirect('/paginaAlumno');
});


router.post('/modificarlibro',(req, res) =>{
  let {titulo, editorial, edicion, año, isbn, autor, tema, url} = req.body;

  const añoPublicacion = año;
  const ISBN = isbn;
  const tipoAutor = autor;
  const asociado = tema;
  const URL = url;

  let producto = {
    titulo,
    editorial,
    edicion,
    añoPublicacion,
    ISBN,
    tipoAutor,
    asociado,
    URL
  };

  productos.libro.map(function(element){
    if(element.titulo == producto.titulo){
      element.editorial=producto.editorial;
      element.edicion=producto.edicion;
      element.añoPublicacion=producto.añoPublicacion;
      element.ISBN=producto.ISBN;
      element.tipoAutor=producto.tipoAutor;
      element.asociado=producto.asociado;
      element.URL=producto.URL;
    }
  })
  // convierte a string el arreglo de objetos javascript
  const productosJSON = JSON.stringify(productos);

  fs.writeFileSync('src/Estudiantes/Productividad/'+usuario.curp+'.json', productosJSON,'utf-8');

  res.redirect('/paginaAlumno');
});



router.post('/modificarhardwareSoftware',(req, res) =>{
  let {titulo, año, derechos, autor, tema, url} = req.body;

  const añoDesarrollo = año;
  const derechosAutor = derechos;
  const tipoAutor = autor;
  const asociado = tema;
  const URL = url;

  let producto = {
    titulo,
    añoDesarrollo,
    derechosAutor,
    tipoAutor,
    asociado,
    URL
  };
  productos.hardwareSoftware.map(function(element){
    if(element.titulo == producto.titulo){
      element.añoDesarrollo=producto.añoDesarrollo;
      element.derechosAutor=producto.derechosAutor;
      element.tipoAutor=producto.tipoAutor;
      element.asociado=producto.asociado;
      element.URL=producto.URL;
    }
  })
  // convierte a string el arreglo de objetos javascript
  const productosJSON = JSON.stringify(productos);

  fs.writeFileSync('src/Estudiantes/Productividad/'+usuario.curp+'.json', productosJSON,'utf-8');

  res.redirect('/paginaAlumno');
});




module.exports = router;

