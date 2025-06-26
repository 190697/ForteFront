import { Component } from '@angular/core';
import { TareasService } from '../../services/tareas-service';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { iTarea } from '../../services/tarea';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-edit',
  imports: [RouterModule, FormsModule],
  templateUrl: './edit.html',
  styleUrl: './edit.css'
})

export class Edit {
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
    this.tareaService.updateTarea(this.model).subscribe({
      next: (response) => {
        console.log("Tarea actualizada:", response);
        alert("Tarea actualizada exitosamente");

        this.router.navigate(['tarea']);
      },
      error: (error) => {
        console.error("Error al crear tarea:", error);
        alert(error.error);
      }
    });
  }
}
