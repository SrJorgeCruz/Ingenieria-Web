//Lectura de Datos Personales y llenado para la modificacion de datos

const requestURL1 = '../Estudiantes/GOJD001207HMCNMNA7.json';

const request1 = new XMLHttpRequest();
request1.open('GET', requestURL1);
request1.responseType = 'json';
request1.send();

request1.onload = function() {
    const datos = request1.response;
    populateDatos(datos);
}

function populateDatos(jsonObj) {
    const idpNombre = document.getElementById("Idp-nombre");
    const idpApellidoP = document.getElementById("Idp-apellidoP");
    const idpApellidoM = document.getElementById("Idp-apellidoM");
    const idpBoleta = document.getElementById("Idp-Boleta");
    const idpCURP = document.getElementById("Idp-CURP");
    const idpFNacimiento = document.getElementById("Idp-FNacimiento");
    const idpEmail = document.getElementById("Idp-email");

    idpNombre.value = jsonObj['nombre'];
    idpApellidoP.value = jsonObj['apellidoP'];
    idpApellidoM.value = jsonObj['apellidoM'];
    idpBoleta.value = jsonObj['boleta'];
    idpCURP.value = jsonObj['curp'];
    idpFNacimiento.value = jsonObj['fechaNacimiento'];
    idpEmail.value = jsonObj['email'];

    const idpNombreM = document.getElementById("Idp-nombreM");
    const idpApellidoPM = document.getElementById("Idp-apellidoPM");
    const idpApellidoMM = document.getElementById("Idp-apellidoMM");
    const idpBoletaM = document.getElementById("Idp-BoletaM");
    const idpCURPM = document.getElementById("Idp-CURPM");
    const idpFNacimientoM = document.getElementById("Idp-FNacimientoM");
    const idpEmailM = document.getElementById("Idp-emailM");

    idpNombreM.value = jsonObj['nombre'];
    idpApellidoPM.value = jsonObj['apellidoP'];
    idpApellidoMM.value = jsonObj['apellidoM'];
    idpCURPM.value = jsonObj['curp'];
    idpFNacimientoM.value = jsonObj['fechaNacimiento'];
    idpEmailM.value = jsonObj['email'];

}

//Lectura de Datos de productos

const requestURL2 = '../Estudiantes/Productividad/GOJD001207HMCNMNA7.json';

const request2 = new XMLHttpRequest();
request2.open('GET', requestURL2);
request2.responseType = 'json';
request2.send();

request2.onload = function() {
    const productividad = request2.response;
    llenadoProductividad(productividad);
}

function llenadoProductividad(jsonObj){
    const ACongreso = jsonObj['ACongreso'];
    const ARevista = jsonObj['ARevista'];
    const CLibro = jsonObj['CLibro'];
    const libro = jsonObj['libro'];
    const h_s = jsonObj['hardware/software'];

    for (var i = 0; i < ACongreso.length; i++) {
        const pnl = document.getElementById('datos-pnl_1');

        const myA = document.createElement('a');

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

        myA.appendChild(myArticle);
        myA.href = 'index.html'
    
        pnl.appendChild(myA);
      }

      for (var i = 0; i < ARevista.length; i++) {
        const pnl = document.getElementById('datos-pnl_2');

        const myA = document.createElement('a');

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

        myA.appendChild(myArticle);
        myA.href = 'index.html'
    
        pnl.appendChild(myA);
      }

      for (var i = 0; i < CLibro.length; i++) {
        const pnl = document.getElementById('datos-pnl_3');

        const myA = document.createElement('a');

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
        myPara1.textContent = 'Nombre del congreso: ' + CLibro[i].editorial;
        myPara2.textContent = 'Fecha del evento: ' + CLibro[i].edicion;
        myPara3.textContent = 'Tipo de Autor: ' + CLibro[i].añoPublicacion;
        myPara4.textContent = 'Asociado al tema de tesis: ' + CLibro[i].ISBN;
        myPara5.textContent = 'Fecha del evento: ' + CLibro[i].tipoAutor;
        myPara6.textContent = 'Tipo de autor: ' + CLibro[i].asociado;
        myPara7.textContent = 'Asociado al tema de tesis: ' + CLibro[i].URL;

    
        myArticle.appendChild(myH2);
        myArticle.appendChild(myPara1);
        myArticle.appendChild(myPara2);
        myArticle.appendChild(myPara3);
        myArticle.appendChild(myPara4);
        myArticle.appendChild(myPara5);
        myArticle.appendChild(myPara6);
        myArticle.appendChild(myPara7);

        myA.appendChild(myArticle);
        myA.href = 'index.html'
    
        pnl.appendChild(myA);
      }

      for (var i = 0; i < libro.length; i++) {
        const pnl = document.getElementById('datos-pnl_4');

        const myA = document.createElement('a');

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
        myPara1.textContent = 'Nombre del congreso: ' + libro[i].editorial;
        myPara2.textContent = 'Fecha del evento: ' + libro[i].edicion;
        myPara3.textContent = 'Tipo de Autor: ' + libro[i].añoPublicacion;
        myPara4.textContent = 'Asociado al tema de tesis: ' + libro[i].ISBN;
        myPara5.textContent = 'Fecha del evento: ' + libro[i].tipoAutor;
        myPara6.textContent = 'Tipo de autor: ' + libro[i].asociado;
        myPara7.textContent = 'Asociado al tema de tesis: ' + libro[i].URL;

    
        myArticle.appendChild(myH2);
        myArticle.appendChild(myPara1);
        myArticle.appendChild(myPara2);
        myArticle.appendChild(myPara3);
        myArticle.appendChild(myPara4);
        myArticle.appendChild(myPara5);
        myArticle.appendChild(myPara6);
        myArticle.appendChild(myPara7);

        myA.appendChild(myArticle);
        myA.href = 'index.html'
    
        pnl.appendChild(myA);
      }

      for (var i = 0; i < h_s.length; i++) {
        const pnl = document.getElementById('datos-pnl_5');

        const myA = document.createElement('a');

        const myArticle = document.createElement('article');
        const myH2 = document.createElement('h2');
        const myPara1 = document.createElement('p');
        const myPara2 = document.createElement('p');
        const myPara3 = document.createElement('p');
        const myPara4 = document.createElement('p');
        const myPara5 = document.createElement('p');
    
        myH2.textContent = h_s[i].titulo;
        myPara1.textContent = 'Año de desarrollo: ' + h_s[i].editorial;
        myPara2.textContent = 'Derechos de autor: ' + h_s[i].edicion;
        myPara3.textContent = 'Tipo de autor: ' + h_s[i].añoPublicacion;
        myPara4.textContent = 'Asociado al tema de tesis: ' + h_s[i].ISBN;
        myPara5.textContent = 'URL: ' + h_s[i].tipoAutor;

    
        myArticle.appendChild(myH2);
        myArticle.appendChild(myPara1);
        myArticle.appendChild(myPara2);
        myArticle.appendChild(myPara3);
        myArticle.appendChild(myPara4);
        myArticle.appendChild(myPara5);

        myA.appendChild(myArticle);
        myA.href = 'index.html'
    
        pnl.appendChild(myA);
      }


}

