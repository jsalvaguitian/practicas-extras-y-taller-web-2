import { Routes } from '@angular/router';
import { Home } from './public/home/home';
import { ListEmpleados } from './modules/empleados/pages/list-empleados/list-empleados';

//el app.route va ser el PADRE DE TODAS LAS RUTAS

export const routes: Routes = [
    {
        path : '',
        component : Home
    },
    {
        path : 'empleados',
        loadChildren : () => import('./modules/empleados/empleados.routes').then(e => e.empleadosRoutes)
    },
    {
        path : '*',
        redirectTo : ''
    }
];
