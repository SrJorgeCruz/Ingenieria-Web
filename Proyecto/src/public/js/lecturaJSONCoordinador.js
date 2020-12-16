
const selectAlumnos = document.getElementById("selectAlumnos");
selectAlumnos.addEventListener("change", function(ev){
    
    const requestURL2 = '/src/Estudiantes/Productividad/'+selectAlumnos.value+'.json';
    console.log(requestURL2)
    const request2 = new XMLHttpRequest();
    request2.open('GET', requestURL2);
    request2.responseType = 'json';
    request2.send();
    request2.onload = function() {
        
        const productividad = request2.response;
        console.log(productividad)
        borradoDatos();
        llenadoProductividad(productividad);
    }
})

function borradoDatos(){
    var divDatos = document.getElementById('datos-pnl_1');
    var numHijos = divDatos.childElementCount;
    var divHijos = divDatos.childNodes;

    for(var i = 0; i < numHijos; i++){
        divDatos.removeChild(divHijos[numHijos-i]);
    }

    divDatos = document.getElementById('datos-pnl_2');
    numHijos = divDatos.childElementCount;
    divHijos = divDatos.childNodes;

    for(var i = 0; i < numHijos; i++){
        divDatos.removeChild(divHijos[numHijos-i]);
    }

    divDatos = document.getElementById('datos-pnl_3');
    numHijos = divDatos.childElementCount;
    divHijos = divDatos.childNodes;

    for(var i = 0; i < numHijos; i++){
        divDatos.removeChild(divHijos[numHijos-i]);
    }

    divDatos = document.getElementById('datos-pnl_4');
    numHijos = divDatos.childElementCount;
    divHijos = divDatos.childNodes;

    for(var i = 0; i < numHijos; i++){
        divDatos.removeChild(divHijos[numHijos-i]);
    }

    divDatos = document.getElementById('datos-pnl_5');
    numHijos = divDatos.childElementCount;
    divHijos = divDatos.childNodes;

    for(var i = 0; i < numHijos; i++){
        divDatos.removeChild(divHijos[numHijos-i]);
    }

    divDatos = document.getElementById('datos-pnl_5');
    numHijos = divDatos.childElementCount;
    divHijos = divDatos.childNodes;

    for(var i = 0; i < numHijos; i++){
        divDatos.removeChild(divHijos[numHijos-i]);
    }

   
}



function llenadoProductividad(jsonObj){
    const ACongreso = jsonObj['ACongreso'];
    const ARevista = jsonObj['ARevista'];
    const CLibro = jsonObj['CLibro'];
    const libro = jsonObj['libro'];
    const h_s = jsonObj['hardwareSoftware'];


    for (var i = 0; i < ACongreso.length; i++) {
        const pnl = document.getElementById('datos-pnl_1');

        const myArticle = document.createElement('article');
        const myH2 = document.createElement('h2');
        const myPara1 = document.createElement('p');
        const myPara2 = document.createElement('p');
        const myPara3 = document.createElement('p');
        const myPara4 = document.createElement('p');
    
        myH2.textContent = ACongreso[i].titulo;
        myPara1.textContent = 'Nombre del congreso: ' + ACongreso[i].nombre;
        myPara2.textContent = 'Fecha del evento: ' + ACongreso[i].fechaEvento;
        myPara3.textContent = 'Tipo de autor: ' + ACongreso[i].tipoAutor;
        myPara4.textContent = 'Asociado al tema de tesis: ' + ACongreso[i].asociado;

    
        myArticle.appendChild(myH2);
        myArticle.appendChild(myPara1);
        myArticle.appendChild(myPara2);
        myArticle.appendChild(myPara3);
        myArticle.appendChild(myPara4);
        myArticle.appendChild(document.createElement('hr'));
    
        pnl.appendChild(myArticle);
      }

      for (var i = 0; i < ARevista.length; i++) {
        const pnl = document.getElementById('datos-pnl_2');

        const myArticle = document.createElement('article');
        const myH2 = document.createElement('h2');
        const myPara1 = document.createElement('p');
        const myPara2 = document.createElement('p');
        const myPara3 = document.createElement('p');
        const myPara4 = document.createElement('p');
        const myPara5 = document.createElement('p');
        const myPara6 = document.createElement('p');
        const myPara7 = document.createElement('p');
        const myPara8 = document.createElement('p');
    
        myH2.textContent = ARevista[i].titulo;
        myPara1.textContent = 'Nombre de la revista: ' + ARevista[i].nombre;
        myPara2.textContent = 'Tipo de revista: ' + ARevista[i].tipoRevista;
        if(ARevista[i].indice != 'Otro'){
            myPara3.textContent = 'Indice de la revista: ' + ARevista[i].indice;
        }
        else{
            myPara3.textContent = 'Indice de la revista: ' + ARevista[i].indiceOtro;
        }
        myPara4.textContent = 'ISSN: ' + ARevista[i].ISSN;
        myPara5.textContent = 'DOI: ' + ARevista[i].DOI;
        myPara6.textContent = 'Tipo de autor: ' + ARevista[i].tipoAutor;
        myPara7.textContent = 'Asociado al tema de tesis: ' + ARevista[i].asociado;
        myPara8.textContent = 'URL: ' + ARevista[i].URL;
            
    
        myArticle.appendChild(myH2);
        myArticle.appendChild(myPara1);
        myArticle.appendChild(myPara2);
        myArticle.appendChild(myPara3);
        myArticle.appendChild(myPara4);
        myArticle.appendChild(myPara5);
        myArticle.appendChild(myPara6);
        myArticle.appendChild(myPara7);
        myArticle.appendChild(myPara8);
        myArticle.appendChild(document.createElement('hr'));

        pnl.appendChild(myArticle);
      }

      for (var i = 0; i < CLibro.length; i++) {
        const pnl = document.getElementById('datos-pnl_3');

        const myArticle = document.createElement('article');
        const myH2 = document.createElement('h2');
        const myPara1 = document.createElement('p');
        const myPara2 = document.createElement('p');
        const myPara3 = document.createElement('p');
        const myPara4 = document.createElement('p');
        const myPara5 = document.createElement('p');
        const myPara6 = document.createElement('p');
        const myPara7 = document.createElement('p');
    
        myH2.textContent = CLibro[i].titulo;
        myPara1.textContent = 'Editorial: ' + CLibro[i].editorial;
        myPara2.textContent = 'Edición: ' + CLibro[i].edicion;
        myPara3.textContent = 'Año publicación: ' + CLibro[i].añoPublicacion;
        myPara4.textContent = 'ISBN: ' + CLibro[i].ISBN;
        myPara5.textContent = 'Tipo de autor: ' + CLibro[i].tipoAutor;
        myPara6.textContent = 'Asociado al tema de tesis: ' + CLibro[i].asociado;
        myPara7.textContent = 'URL: ' + CLibro[i].URL;

    
        myArticle.appendChild(myH2);
        myArticle.appendChild(myPara1);
        myArticle.appendChild(myPara2);
        myArticle.appendChild(myPara3);
        myArticle.appendChild(myPara4);
        myArticle.appendChild(myPara5);
        myArticle.appendChild(myPara6);
        myArticle.appendChild(myPara7);
        myArticle.appendChild(document.createElement('hr'));

        pnl.appendChild(myArticle);
      }

      for (var i = 0; i < libro.length; i++) {
        const pnl = document.getElementById('datos-pnl_4');

        const myArticle = document.createElement('article');
        const myH2 = document.createElement('h2');
        const myPara1 = document.createElement('p');
        const myPara2 = document.createElement('p');
        const myPara3 = document.createElement('p');
        const myPara4 = document.createElement('p');
        const myPara5 = document.createElement('p');
        const myPara6 = document.createElement('p');
        const myPara7 = document.createElement('p');
    
        myH2.textContent = libro[i].titulo;
        myPara1.textContent = 'Editorial: ' + libro[i].editorial;
        myPara2.textContent = 'Edicion: ' + libro[i].edicion;
        myPara3.textContent = 'Año publicación: ' + libro[i].añoPublicacion;
        myPara4.textContent = 'ISBN: ' + libro[i].ISBN;
        myPara5.textContent = 'Tipo de autor: ' + libro[i].tipoAutor;
        myPara6.textContent = 'Asociado al tema de tesis: ' + libro[i].asociado;
        myPara7.textContent = 'URL: ' + libro[i].URL;

    
        myArticle.appendChild(myH2);
        myArticle.appendChild(myPara1);
        myArticle.appendChild(myPara2);
        myArticle.appendChild(myPara3);
        myArticle.appendChild(myPara4);
        myArticle.appendChild(myPara5);
        myArticle.appendChild(myPara6);
        myArticle.appendChild(myPara7);
        myArticle.appendChild(document.createElement('hr'));

        pnl.appendChild(myArticle);
      }

      for (var i = 0; i < h_s.length; i++) {
        const pnl = document.getElementById('datos-pnl_5');

        const myArticle = document.createElement('article');
        const myH2 = document.createElement('h2');
        const myPara1 = document.createElement('p');
        const myPara2 = document.createElement('p');
        const myPara3 = document.createElement('p');
        const myPara4 = document.createElement('p');
        const myPara5 = document.createElement('p');
    
        myH2.textContent = h_s[i].titulo;
        myPara1.textContent = 'Año de desarrollo: ' + h_s[i].añoDesarrollo;
        myPara2.textContent = 'Derechos de autor: ' + h_s[i].derechosAutor;
        myPara3.textContent = 'Tipo de autor: ' + h_s[i].tipoAutor;
        myPara4.textContent = 'Asociado al tema de tesis: ' + h_s[i].asociado;
        myPara5.textContent = 'URL: ' + h_s[i].URL;

    
        myArticle.appendChild(myH2);
        myArticle.appendChild(myPara1);
        myArticle.appendChild(myPara2);
        myArticle.appendChild(myPara3);
        myArticle.appendChild(myPara4);
        myArticle.appendChild(myPara5);
        myArticle.appendChild(document.createElement('hr'));

        pnl.appendChild(myArticle);
      }


}