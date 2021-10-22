import { UsuarioService } from './../home/usuario.service';
import { Validators, FormGroup, FormBuilder } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent implements OnInit {
  
  cadastroCliente: FormGroup;

  constructor(private fb: FormBuilder,
              private usuarioService: UsuarioService) {}

  ngOnInit(): void {
    this.formularioCliente();
  }

  onSubmit(): void {
    if(this.cadastroCliente.valid) {
      this.usuarioService.save(this.cadastroCliente.value).subscribe({
        next: usuario => alert("Salvo com sucesso."),
        error: err => alert('Error: ')
      });
    }
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
      nome: ['', Validators.compose([
          Validators.required,
          Validators.maxLength(100),
          Validators.minLength(2)
        ])
      ],
      profissao: ['', Validators.compose([
          Validators.required,
          Validators.maxLength(100)
        ])
      ],
      sobreMim: ['', Validators.compose([
          Validators.required,
          Validators.maxLength(100)
        ])
      ],
      relato: ['', Validators.compose([
          Validators.required,
          Validators.maxLength(100)
        ])
      ],
      tipo: ['', Validators.compose([
          Validators.required
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
      imagem: ['', Validators.compose([
          Validators.required
        ])
      ]
    });
  }

}
