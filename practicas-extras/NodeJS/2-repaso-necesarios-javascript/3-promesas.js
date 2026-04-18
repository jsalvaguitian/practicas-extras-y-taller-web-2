/**
 * JS no es multihilo como otros lenguajes.
 * Problemas de usar callback:
 * callback al permitir funciones anidadas, esta puede seguir creciendo y hace que el mantenimiento 
 * del codigo sea complejo.
 * SOLUCION: usar promesas o async
 */
const mensaje = new Promise((resolve, reject) =>{
    setTimeout(()=>{
        if(true)
            resolve('Esto se va ejecutar despues de 3 segundos')

        else
            reject('Hubo un error');
    },3000);
});

mensaje
        .then(msj => console.log(msj))
        .catch(error => console.log(error))

