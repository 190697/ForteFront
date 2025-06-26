import { HttpClient as HttClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { iTarea } from './tarea';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class TareasService {
  private apiURL = "http://localhost:5032/api";

  constructor(private http: HttClient) { }

  getTareas(): Observable<iTarea[]>{
    return this.http.get<iTarea[]>(`${this.apiURL}/Tareas`);
  }

  getTarea(id: string): Observable<iTarea>{
    return this.http.get<iTarea>(`${this.apiURL}/Tareas/` + id);
  }

  createTarea(data: iTarea): Observable<boolean>{
    return this.http.post<boolean>(`${this.apiURL}/Tareas`, data);
  }

  updateTarea(data: iTarea): Observable<boolean>{
    return this.http.put<boolean>(`${this.apiURL}/Tareas`, data);
  }

  deleteTarea(id: string): Observable<boolean>{
    return this.http.delete<boolean>(`${this.apiURL}/Tareas/` + id);
  }
}
