import { Component, inject } from '@angular/core';
import { EmpleadosService } from '../../../../api/services/empleados/empleados.service';
import { Router, RouterLink } from '@angular/router';
import { Empleado } from '../../interfaces/empleado.interface';
import { FormEmpleado } from "../../components/form-empleado/form-empleado";

@Component({
  selector: 'app-create-empleado',
  imports: [RouterLink, FormEmpleado],
  templateUrl: './create-empleado.html',
  styleUrl: './create-empleado.css',
})
export class CreateEmpleado {

  empleadoServicio = inject(EmpleadosService);
  router: Router = inject(Router);

  createEmpleado(empleado: Empleado) {

    this.empleadoServicio.crearEmpleado(empleado).subscribe((
      {
        next: (res: Empleado) => {
          console.log("");
        },
        error: (error) => {
          console.log("hubo un error");
        },
        complete: () => {
          this.router.navigate(['/empleados/list-empleados']);
        }
      }
    ))

  }
}
