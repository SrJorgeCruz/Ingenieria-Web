const app = require('./app');

/* Definición de función asincrona */
async function main(){  
  await app.listen(app.get("port"));  // instrucción asincrona
  console.log("server on port", app.get("port"));
}

main();
