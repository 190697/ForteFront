import { Component } from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { iTarea } from '../../services/tarea';
import { TareasService } from '../../services/tareas-service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-delete',
  imports: [RouterModule, CommonModule, FormsModule],
  templateUrl: './delete.html',
  styleUrl: './delete.css'
})
export class Delete {
  idTarea = '';

  model: iTarea = {
    id: undefined,
    titulo: '',
    descripcion: '',
    id_Estatus: 1,
    fecha_Registro: undefined
  };

    constructor(private tareaService: TareasService, private router: Router, private route: ActivatedRoute) {}

  ngOnInit() {
    this.idTarea = this.route.snapshot.paramMap.get('tareaId') ?? '';
    this.tareaService.getTarea(this.idTarea).subscribe((tarea) => {
      this.model = tarea;
    })
  }

  submit(){
    if (this.model.id !== undefined && this.model.id !== null) {
      this.tareaService.deleteTarea(this.model.id.toString()).subscribe({
        next: (response) => {
          console.log("Tarea eliminada:", response);
          alert("Tarea eliminada exitosamente");

          this.router.navigate(['tarea']);
        },
        error: (error) => {
          console.error("Error al eliminar tarea:", error);
          alert("Error al eliminar tarea");
        }
      });
    } else {
      alert("ID de tarea no válido para eliminar.");
    }
  }

}
