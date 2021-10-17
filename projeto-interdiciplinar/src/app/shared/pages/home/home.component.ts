import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  teste: string = 'sdfsd';
  titulo: string = 'Tittulo2';
  imagem: string = 'assets/imagem.png';

  constructor() { }

  ngOnInit(): void {
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
