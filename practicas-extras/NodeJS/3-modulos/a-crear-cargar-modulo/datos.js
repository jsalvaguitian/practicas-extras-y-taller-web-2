var url = 'http://jesi.io/datos';

//funcion a exportar
function dato(mensaje){
    //Cuando envie un HTTP request
    console.log(mensaje);
}
//no exportada ejemplo
function leerDato(){}

//para usar elementos de un modulo, lo exportaremos.
//todo lo que exportemos se convertira automaticamente algo publico, o sea una interfaz publica
//exportacion de una funcion
module.exports.log = dato;

//exportacion de una variable
module.exports.url = url;

//module.exports.aliasCualVamosALLamarlo = elemento del modulo que decidimos que seran publicos



//para ver la descripcion de nuestro modulo (exportacions, modulos hijos, padres, etc)
console.log(module);