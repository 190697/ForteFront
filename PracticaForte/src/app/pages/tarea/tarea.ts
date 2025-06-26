import { Component } from '@angular/core';
import { iTarea } from '../../services/tarea'; // Se importa interfaz y/o entidad de tarea
import { TareasService } from '../../services/tareas-service'; // Se importa servicio de tarea
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-tarea',
  imports: [RouterModule, CommonModule],
  templateUrl: './tarea.html',
  styleUrl: './tarea.css'
})

export class Tarea {
  tareas : iTarea[] = [];

  constructor(private tarea: TareasService) {}

  ngOnInit() {
    this.tarea.getTareas().subscribe((data: iTarea[]) => {
      this.tareas = data;
    });
  }
}
