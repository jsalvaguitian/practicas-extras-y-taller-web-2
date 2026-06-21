//rutas hijas "empleados" de la ruta padre "app"

import { Routes } from "@angular/router";
import { ListEmpleados } from "./pages/list-empleados/list-empleados";
import { CreateEmpleado } from "./pages/create-empleado/create-empleado";
import { UpdateEmpleado } from "./pages/update-empleado/update-empleado";
import { DetailEmpleado } from "./pages/detail-empleado/detail-empleado";

export const empleadosRoutes: Routes = [
    {
        path : '',
        children : [
            {
                path : 'list-empleados', 
                component : ListEmpleados
            },
             {
                path : 'create-empleado', 
                component : CreateEmpleado
            },
             {
                path : 'update-empleado/:id', 
                component : UpdateEmpleado
            },
             {
                path : 'detail-empleado/:id', 
                component : DetailEmpleado
            },
             {
                path : '**', 
                redirectTo: 'list-empleados'
            },
        ]
    }
]