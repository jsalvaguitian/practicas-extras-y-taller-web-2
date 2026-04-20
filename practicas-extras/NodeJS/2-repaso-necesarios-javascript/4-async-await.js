/*
Cuando uso Async siempre la funcion tendra 1 o varios await.
Toda funcion asincrona con espera devuelve una promesa que puede ser resolve o reject

Cuando la funcion asincrona es exitoso devuelve el resultado resolve de la promesa
Pero si hubo un error devolvera el reject entonces debemos manejar ese error 

*/

function mensaje(){
    return new Promise((resolve, reject)=> {
        setTimeout(()=>{
            if(false)
                resolve("Esto se va a ejecutar despues de 3 segundos");
            else
                reject("Hubo un error");
        }, 3000);
    });
}

async function llamadaAsync() {
    console.log("Llamada...");
    const resultado = await mensaje();
    return resultado;
}

llamadaAsync().then(result => console.log(result)).catch(error => console.log(error));
