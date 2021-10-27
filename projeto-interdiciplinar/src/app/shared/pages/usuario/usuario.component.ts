import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Usuario } from 'src/app/models/usuario';
import { UsuarioService } from '../home/usuario.service';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent implements OnInit {

  usuario: Usuario;

  constructor(private _usuarioService: UsuarioService,
              private _activatedRoute: ActivatedRoute,) { }

  ngOnInit(): void {
    this._usuarioService.retrieveById(Number(this._activatedRoute.snapshot.paramMap.get('id'))).subscribe({
      next: usuario => {
        usuario.imagem = usuario.imagem ?? 'assets/imagem.png';
        this.usuario = usuario
      },
      error: err => alert('Error: ' + err)
    });
  }

}
