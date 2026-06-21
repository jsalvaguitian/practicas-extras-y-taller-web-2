import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { EmpleadosService } from '../../../../api/services/empleados/empleados.service';
import { Empleado } from '../../interfaces/empleado.interface';
import { Spinner } from '../../../../shared/primeng/spinner/spinner';
import { ButtonModule } from 'primeng/button';
@Component({
  selector: 'app-detail-empleado',
  imports: [RouterLink, Spinner, ButtonModule],
  templateUrl: './detail-empleado.html',
  styleUrl: './detail-empleado.css',
})
export class DetailEmpleado implements OnInit{
  spinner = true;
  empleado! : Empleado; //el signo de ! significa decirle a typescript que confie que va tener una asignacion mas adelante
  id! : number;
  activateRouter = inject(ActivatedRoute);
  empleadoService = inject(EmpleadosService);

  ngOnInit(): void {
    this.id = Number(this.activateRouter.snapshot.paramMap.get('id'))
    console.log(this.id);

    this.detailEmpleado();
  }

  detailEmpleado(){
    this.empleadoService.verEmpleado(this.id).subscribe({
      next : (res: Empleado) => {
        this.empleado = res;
      },
      error : (error) =>{
        console.log("hubo un error");
      },
      complete : () => {
        this.spinner = false;
      }
    })

  }
}
/*
por que empleado es de tipo empleado y no un asenial? porque al ser ver detalle no tiene
que estar consultando por los cambios, es algo fijo, en cambio lista, editar, crear si estan en constante cambios
*/
