import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {

  usuario: any = {
    nome: null
  };


  cadastroCliente: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.formularioCliente();
  }

  verificaValidTouched(campo: string) {
    return !this.cadastroCliente.get(campo)?.valid 
    && this.cadastroCliente.get(campo)?.touched;
  }

  aplicaCssErro(campo: any) {
    return {
      'has-error': this.verificaValidTouched(campo),
      'has-feedback': this.verificaValidTouched(campo)
    };
  }

  formularioCliente() {
    this.cadastroCliente = this.fb.group({
      nome: [null, Validators.compose([
          Validators.required,
          Validators.maxLength(100),
          Validators.minLength(2)
        ])
      ],
      email: [null, Validators.compose([
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
