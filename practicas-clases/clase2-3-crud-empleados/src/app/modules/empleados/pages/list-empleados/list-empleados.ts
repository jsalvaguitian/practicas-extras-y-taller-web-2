import { Component, inject, OnDestroy, OnInit, signal } from '@angular/core';
import { EmpleadosService } from '../../../../api/services/empleados/empleados.service';
import { Subject, takeUntil } from 'rxjs';
import { Empleado } from '../../interfaces/empleado.interface';
import { TableModule } from 'primeng/table';
import { TablaEmpleado } from "../../components/tabla-empleado/tabla-empleado";
import { ProgressSpinner } from 'primeng/progressspinner';
import { Spinner } from "../../../../shared/primeng/spinner/spinner";

@Component({
  selector: 'app-list-empleados',
  imports: [TableModule, TablaEmpleado, ProgressSpinner, Spinner],
  templateUrl: './list-empleados.html',
  styleUrl: './list-empleados.css',
})

//Metodo que se dispera apenas inicia Angular es ngOnInt
//clase
export class ListEmpleados implements OnInit, OnDestroy {

  spinner = true;


  //PROPIEDAD DE UNA CLASE
  //nombreVariable: declaracion = asignacion

  empleados = signal<Empleado[]>([]);

  //inyecto el servicio listar empleados
  empleadoService = inject(EmpleadosService)

  destroy$ = new Subject<void>();

  ngOnDestroy(): void { //se ejecuta cuando el componente se destruya
    this.destroy$.next(); //emito un valor
    this.destroy$.complete();
  }


  ngOnInit(): void {
    //llamo a los empleados
    this.listarEmpleados()
  }

  listarEmpleados() {

    this.empleadoService.listarEmpleados().pipe(
      takeUntil(this.destroy$)

    ).subscribe(
      {
        //next nos da la data (respuesta que le pedimos)
        next: (respuesta: Empleado[]) => {
          setTimeout(() => {

            this.empleados.set(respuesta); //set es un metodo de signal
          }, 200)
        },
        //error en caso si falla
        error: (error) => {
          console.log("hubo un error");
        },
        //complete en caso de exito del next
        complete: () => {
                      this.spinner = false; //si dejo de

          console.log("se completo con exito el observable");

        }
      }
    );
  }

  /* Explicacion
    Para llamadas http usamos servicio y la libreria httpClient (para hacer peticiones http)
    * En donde se configura para usarlo? en app.config.ts
    * Como se crea servicio en la terminal? ng g s api/services/empleados/empleados.service
    * Nota: se crea una carpeta para hacer llamadas a nuestra api de node.js u otra api externa
    * Cuando abrimos un observable se recomienda destruirlo para no ocupar memoria en OnDestroy
    
  */



}
