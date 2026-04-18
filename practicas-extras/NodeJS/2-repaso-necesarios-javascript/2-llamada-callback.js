//Funciones callback 
/*
La funcion callback es la funcion que se pasa como parametro a otra funcion.
Y se ejecuta luego de haber hecho primero otra cosa.
Palabra clave: callback.
Se usa mucho en operaciones asincronas pero se las reemplazan por promesas y async-await
para que sea mas prolijo
*/

function saludar(nombre, callback){
    console.log("Hola "+ nombre);
    callback(nombre);
}

function despedirse(n){
    console.log("Adios "+ n);
}

let name = "Jesi";

saludar(name, despedirse);

function Sumar(num1, num2, callback){
    let resultado = num1 + num2;
    callback(resultado)
}

function resultado(res){
    console.log(res);
}

Sumar(10, 8, resultado);

setTimeout(() => console.log("Se va ejecutar despues de 3 segundos"), 3000);
