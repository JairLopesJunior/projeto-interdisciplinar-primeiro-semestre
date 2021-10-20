import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Usuario } from 'src/app/models/usuario';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  private usuarioUrl: string = 'http://localhost:3000/usuarios';

  constructor(private httpClient: HttpClient) {}

  retriveAll(): Observable<Usuario[]> {
    return this.httpClient.get<Usuario[]>(this.usuarioUrl);
  }

}
