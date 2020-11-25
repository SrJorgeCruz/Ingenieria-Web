function cambiarFormLF() {
  var rf = document.getElementById("rf");
  var lf = document.getElementById("lf");
  var cf = document.getElementById("cf");
  var df = document.getElementById("df");
  var ef = document.getElementById("ef");
  cf.style.display = "none";
  rf.style.display = "none";
  lf.style.display = "block";
  df.style.display = "none";
  ef.style.display = "none";
}

function cambiarFormRF() {
  var rf = document.getElementById("rf");
  var lf = document.getElementById("lf");
  var cf = document.getElementById("cf");
  var df = document.getElementById("df");
  var ef = document.getElementById("ef");
  cf.style.display = "none";
  lf.style.display = "none";
  rf.style.display = "block";
  df.style.display = "none";
  ef.style.display = "none";
}

function cambiarFormCF() {
  var rf = document.getElementById("rf");
  var lf = document.getElementById("lf");
  var cf = document.getElementById("cf");
  var df = document.getElementById("df");
  var ef = document.getElementById("ef");
  cf.style.display = "block";
  rf.style.display = "none";
  lf.style.display = "none";
  df.style.display =" none";
  ef.style.display = "none";
}

function cambiarFormDF() {
//console.log("Hola");

  var rf = document.getElementById("rf");
  var lf = document.getElementById("lf");
  var cf = document.getElementById("cf");
  var df = document.getElementById("df");
  var ef = document.getElementById("ef");
  cf.style.display = "none";
  rf.style.display = "none";
  lf.style.display = "none";
  df.style.display = "block";
  ef.style.display = "none";

}
  function cambiarFormEF(){

    var rf = document.getElementById("rf");
    var lf = document.getElementById("lf");
    var cf = document.getElementById("cf");
    var df = document.getElementById("df");
    var ef = document.getElementById("ef");
    cf.style.display = "none";
    rf.style.display = "none";
    lf.style.display = "none";
    df.style.display = "none";
    ef.style.display = "block";

  }




// Funciones navegacion  PaginaAlumno.html
function cambiarDPersonales(){
  let DP = document.getElementById("idPersonales");
  let P = document.getElementById("idProductividad");
  let MD = document.getElementById("idModificarDatos");

  DP.style.display = "block";
  P.style.display = "none";
  MD.style.display = "none";
}

function cambiarProductividad(){
  let DP = document.getElementById("idPersonales");
  let P = document.getElementById("idProductividad");
  let MD = document.getElementById("idModificarDatos");

  DP.style.display = "none";
  P.style.display = "block";
  MD.style.display = "none";
}

function cambiarMDatos(){
  let DP = document.getElementById("idPersonales");
  let P = document.getElementById("idProductividad");
  let MD = document.getElementById("idModificarDatos");

  DP.style.display = "none";
  P.style.display = "none";
  MD.style.display = "block";
}
