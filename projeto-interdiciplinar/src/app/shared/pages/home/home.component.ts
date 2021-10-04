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
      descricao: 'Teste1',
      titulo: 'titulo1'
    },
    {
      imagem: 'assets/imagem.png',
      descricao: 'Teste2',
      titulo: 'titulo2'
    },
    {
      imagem: 'assets/imagem.png',
      descricao: 'Teste3',
      titulo: 'titulo3'
    },
    {
      imagem: 'assets/imagem.png',
      descricao: 'Teste4',
      titulo: 'titulo4'
    }
  ]

}
