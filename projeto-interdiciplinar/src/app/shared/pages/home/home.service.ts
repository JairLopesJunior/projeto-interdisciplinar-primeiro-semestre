import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  private usuarioUrl: string = 'http://localhost:3000/usuarios';

  constructor(private httpClient: HttpClient) {}

  retriveAll(): Observable<Usuario[]> {
    return this.httpClient.get<Course[]>(this.courseUrl);
  }

}
