import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {

  nome: string = 'Nome';
  email: string = 'Email';
  telefone: string = 'Telefone';
  profissao: string = 'Profissão';
  titulo: string = 'Título';
  descricao: string = 'Descrição';
  cep: string = 'CEP';
  endereco: string = 'Endereço';
  tipoPostagem: string = 'Tipo da Postagem';
  estado: string = 'Estado';
  cidade: string = 'Cidade';

  constructor() { }

  ngOnInit(): void {
  }

}
