import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { map, Observable, of } from 'rxjs';
import { Empleado } from '../../../modules/empleados/interfaces/empleado.interface';

@Injectable({
  providedIn: 'root',
})
export class EmpleadosService {

  /* Recordatorio: para hacer peticiones http inyectamos HttpCLient en el SERVICIO
   */

  empleados : Empleado[] = [
    {
      id : 1,
      apellido : "Simpson",
      nombre : "Homero"

    },
    {
      id : 2,
      apellido : 'Simpson',
      nombre : 'Bart'

    }
  ]
  http = inject(HttpClient);

  //opcion 1 simple
  //teoricamente esto esta aca esta bien usando el metodo get 
  /*return this.http.get('/list-empleados')*/

  //metodos
  listarEmpleados(): Observable<Empleado[]>{

    //simulacion de una respuesta observable
    return of<Empleado[]>(this.empleados).pipe(
       map((respuesta)=>{
         return respuesta;
       })

    );

    //se usara cuando usemos node .js xq sino saltara error porque aun no tenemos nuestra api node.js
    //opcion 2 usando el operador PIPE de rjxs en donde dentro de el mismo podemos usar otros operadores mas de 
    //en el COMPONENTE se requiere suscribirse para poder usarlo ya que esto devuelve un observable. Se requiere suscribirse para escuchar al observable
    // return this.http.get('/list-empleados').pipe(
    //   map((respuesta)=>{
    //     return respuesta;
    //   })
    // )
    
  }


  eliminarEmpleado(){
    return of([])

  }

  verEmpleado(id : number) : Observable<Empleado>{
    return of<Empleado>(this.empleados[0])
  }

  crearEmpleado(empleado: Empleado){
    return of(this.empleados[0])
  }

  updateEmpleado(){
    return of([])
  }
}
