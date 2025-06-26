import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { iTarea } from '../../services/tarea';
import { TareasService } from '../../services/tareas-service';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-create',
  imports: [FormsModule, RouterModule],
  templateUrl: './create.html',
  styleUrl: './create.css'
})
export class Create {
  model: iTarea = {
    id: undefined,
    titulo: '',
    descripcion: '',
    id_Estatus: 1,
    fecha_Registro: undefined
  };

  constructor(private tareaService: TareasService, private router: Router) {}

  submit(){
    this.tareaService.createTarea(this.model).subscribe({
      next: (response) => {
        console.log("Tarea creada:", response);
        alert("Tarea creada exitosamente");

        this.router.navigate(['tarea']);
      },
      error: (error) => {
        console.error("Error al crear tarea:", error);
        alert(error.error);
      }
    });
  }
}
