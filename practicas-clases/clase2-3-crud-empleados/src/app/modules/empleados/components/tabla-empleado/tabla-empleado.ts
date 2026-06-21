import { Component, inject, input } from '@angular/core';
import { Empleado } from '../../interfaces/empleado.interface';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { Router } from '@angular/router';
@Component({
  selector: 'app-tabla-empleado',
  imports: [TableModule, ButtonModule],
  templateUrl: './tabla-empleado.html',
  styleUrl: './tabla-empleado.css',
})
/*
AHORA TablaEmpleado es HIJO de ListaEmpleado

Como pide data ek hijo a su padre? con INPUT en este caso tendra que ser requerido

Usar deeste modo input.required<Empleados[]>(); el input seria un SIGNAL Y PARA OBTENER DATOS DE UNA SENIAL tenemos
que hacer en el html empleados() 
 */
export class TablaEmpleado {

  //para poder navergar entre paginas uso router
  router = inject(Router)

  empleados = input.required<Empleado[]>();

  editarEmpleado(empleado : Empleado){
    this.router.navigate(['empleados/update-empleado', empleado.id])

  }

  eliminarEmpleado(empleado : Empleado){

  }

  verEmpleado(empleado : Empleado){
    this.router.navigate(['empleados/detail-empleado', empleado.id])

  }

  crearEmpleado(){
    this.router.navigate(['empleados/create-empleado'])
  }
}
