import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {

  cadastroCliente: FormGroup;

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
    this.cadastroCliente = this.fb.group({
      nome: ['', Validators.compose([
          Validators.required,
          Validators.maxLength(100)
        ])
      ],
      email: ['', Validators.compose([
          Validators.required,
          Validators.email
        ])
      ],
      telefone: ['', Validators.compose([
          Validators.required,
          Validators.maxLength(11),
          Validators.minLength(11)
        ])
      ],
      profissao: ['', Validators.compose([
          Validators.required,
          Validators.maxLength(100)
        ])
      ],
      titulo: ['', Validators.compose([
          Validators.required,
          Validators.maxLength(100)
        ])
      ],
      descrição: ['', Validators.compose([
          Validators.required,
          Validators.maxLength(100)
        ])
      ],
      cep: ['', Validators.compose([
          Validators.required,
          Validators.maxLength(8),
          Validators.minLength(8)
        ])
      ],
      estado: ['', Validators.compose([
          Validators.required
        ])
      ],
      cidade: ['', Validators.compose([
          Validators.required
        ])
      ],
      endereco: ['', Validators.compose([
          Validators.required,
          Validators.maxLength(100)
        ])
      ],
      tipoPostagem: ['', Validators.compose([
          Validators.required,
          Validators.maxLength(100)
        ])
      ],
      inputImagem: ['', Validators.compose([
          Validators.required
        ])
      ]
    });
  }
}
