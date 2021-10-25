import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Usuario } from 'src/app/models/usuario';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  private usuarioUrl: string = 'https://projeto-interdisciplinar-api.herokuapp.com/usuarios';

  constructor(private httpClient: HttpClient) {}

  retriveAll(): Observable<Usuario[]> {
    return this.httpClient.get<Usuario[]>(this.usuarioUrl);
  }

  save(usuario: Usuario): Observable<Usuario> {
    return this.httpClient.post<Usuario>(`${this.usuarioUrl}`, usuario);
  }

  retrieveById(id: number): Observable<Usuario> {
    return this.httpClient.get<Usuario>(`${this.usuarioUrl}/${id}`);
  }

}
