import { UsuarioService } from './usuario.service';
import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/models/usuario';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  usuarios: Usuario[] = [];

  constructor(private usuarioService: UsuarioService) { }

  ngOnInit(): void {
    this.retrieveAll();
  }

  retrieveAll(): void{
    this.usuarioService.retriveAll().subscribe({
        next: usuarios => {
          console.log(usuarios)
            this.usuarios = usuarios;
        },
        error: err => alert('Error: ' + err)
    })
  }

  perfis = [
    {
      imagem: 'assets/imagem.png',
      descricao: 'Lorem ipsum luctus est ultrices maecenas laoreet, lacus diam erat sociosqu libero dictum senectusLorem ipsum luctus est ultrices maecenas laoreet, lacus diam erat sociosqu libero dictum senectus',
      titulo: 'titulo1titulo1titulo1titulo1titulo1titulo1titulo1'
    },
    {
      imagem: 'assets/imagem.png',
      descricao: 'Lorem ipsum luctus est ultrices maecenas laoreet, lacus diam erat sociosqu libero dictum senectusLorem ipsum luctus est ultrices maecenas laoreet, lacus diam erat sociosqu libero dictum senectus',
      titulo: 'titulo2'
    },
    {
      imagem: 'assets/imagem.png',
      descricao: 'Lorem ipsum luctus est ultrices maecenas laoreet, lacus diam erat sociosqu libero dictum senectusLorem ipsum luctus est ultrices maecenas laoreet, lacus diam erat sociosqu libero dictum senectus',
      titulo: 'titulo3'
    },
    {
      imagem: 'assets/imagem.png',
      descricao: 'Lorem ipsum luctus est ultrices maecenas laoreet, lacus diam erat sociosqu libero dictum senectus...',
      titulo: 'titulo4'
    }
  ]

}
