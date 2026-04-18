function saludar(nombre){
    console.log("Hola "+nombre);
}

saludar("Jesi");
//Explicacion error: 
//saludar(document);
//document pertenece al DOM del navegador y nodejs ejecuta js fuera del navegador.
/*Como ejecutar en terminal o cmd?
node app.js */