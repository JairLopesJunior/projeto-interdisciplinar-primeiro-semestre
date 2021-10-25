import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Psicologo } from 'src/app/models/psicologo';

@Injectable({
  providedIn: 'root'
})
export class PsicologoService {

  private psicologoUrl: string = 'https://projeto-interdisciplinar-api.herokuapp.com/psicologos';

  constructor(private httpClient: HttpClient) {}

  retriveAll(): Observable<Psicologo[]> {
    return this.httpClient.get<Psicologo[]>(this.psicologoUrl);
  }

  save(psicologo: Psicologo): Observable<Psicologo> {
    return this.httpClient.post<Psicologo>(`${this.psicologoUrl}`, psicologo);
  }

  retrieveById(id: number): Observable<Psicologo> {
    return this.httpClient.get<Psicologo>(`${this.psicologoUrl}/${id}`);
  }
}
