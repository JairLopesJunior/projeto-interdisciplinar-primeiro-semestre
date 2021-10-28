import { UsuarioService } from '../home/usuario.service';
import { Validators, FormGroup, FormBuilder } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cadastro-usuario',
  templateUrl: './cadastro-usuario.component.html',
  styleUrls: ['./cadastro-usuario.component.css']
})
export class CadastroUsuarioComponent implements OnInit {
  
  cadastroCliente: FormGroup;

  imagemBase64: string;

  constructor(private fb: FormBuilder,
              private _usuarioService: UsuarioService,
              private _router: Router) {}

  ngOnInit(): void {
    this.formularioCliente();
  }

  onSubmit(): void {
    if(this.cadastroCliente.valid) {
      const tipo = this.cadastroCliente.get('tipo')?.value;
      if(+tipo === 1){
        this.adaptarValoresParaAnonimo();
      }
      this._usuarioService.save(this.cadastroCliente.value).subscribe({
        next: usuario => {
          alert("Salvo com sucesso.")
          this._router.navigate([`usuario/${usuario.id}`]);
        },
        error: err => {
          if(err.statusText === 'Payload Too Large') {
            alert("Erro, imagem muito grande!!");
          }else{
            alert('Erro.');
          }
        }
      });
    }
  }

  onFileChanges(event: any): void {
    const file = event[0].base64;
    this.cadastroCliente.get('imagem')?.setValue(file);
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
          Validators.maxLength(350)
        ])
      ],
      relato: ['', Validators.compose([
          Validators.required,
          Validators.maxLength(350)
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
      imagem: ['']
    });
  }

  // Métodos privados
  private adaptarValoresParaAnonimo(): void {
    this.cadastroCliente.get('nome')?.patchValue('ANÔNIMO');
    this.cadastroCliente.get('imagem')?.patchValue('');
  }

}
