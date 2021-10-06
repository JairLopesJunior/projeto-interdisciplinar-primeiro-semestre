import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {

  formGroup: FormGroup;

//  nome: string = 'Nome';
//  email: string = 'Email';
 // telefone: string = 'Telefone';
 // profissao: string = 'Profissão';
 // titulo: string = 'Título';
 // descricao: string = 'Descrição';
 // cep: string = 'CEP';
 // endereco: string = 'Endereço';
 // tipoPostagem: string = 'Tipo da Postagem';
 // estado: string = 'Estado';
 // cidade: string = 'Cidade';

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.formularioCliente();
  }
  
  enviarDados(){
  }

  formularioCliente() {
    this.formGroup = this.fb.group({
      nome: ['', Validators.compose([
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(100)
        ])
      ]
    });
  }
}
