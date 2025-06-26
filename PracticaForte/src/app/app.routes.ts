import { Routes } from '@angular/router';
import { Tarea } from './pages/tarea/tarea';
import { Inicio } from './pages/inicio/inicio';
import { Create } from './pages/create/create';
import { Edit } from './pages/edit/edit';
import { Delete } from './pages/delete/delete';

export const routes: Routes = [
    { path: 'tarea', component: Tarea },
    { path: 'tarea/crear', component: Create },
    { path: 'tarea/:tareaId/editar', component: Edit },
    { path: 'tarea/:tareaId/eliminar', component: Delete },
    { path: '', component: Inicio },
    { path: '**', redirectTo: '' }
];