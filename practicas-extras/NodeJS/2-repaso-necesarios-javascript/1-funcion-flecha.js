// Opcion 1 Funcion
const years = [2021,2022,2023,2024,2025,2026];
const birth = 1996;

let edad = years.map(function(anElement){
    return anElement - birth;
});

console.log(edad);

//Opcion 2 Funcion flecha
let edad2 = years.map((anElement)=>{
    return anElement - birth;
});
console.log(edad2);

//Opcion 3 Funcion flecha acortada al max
let edad3 = years.map(anElement => anElement-birth);
console.log(edad3);