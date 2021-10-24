import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cadastro-psicologo',
  templateUrl: './cadastro-psicologo.component.html',
  styleUrls: ['./cadastro-psicologo.component.css']
})
export class CadastroPsicologoComponent implements OnInit {

  cadastroPsicologo: FormGroup;

  imagemBase64: string;

  constructor(private fb: FormBuilder,
              private _psicologoService: PsicologoService,
              private _router: Router) {}

  ngOnInit(): void {
    this.formularioCliente();
  }

  onSubmit(): void {
    if(this.cadastroPsicologo.valid) {
      this._psicologoService.save(this.cadastroPsicologo.value).subscribe({
        next: psicologo => {
          alert("Salvo com sucesso.")
          this._router.navigate([`usuario/${psicologo.id}`]);
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
    this.cadastroPsicologo.get('imagem')?.setValue(file);
  }

  verificaValidTouched(campo: string) {
    return !this.cadastroPsicologo.get(campo)?.valid 
    && this.cadastroPsicologo.get(campo)?.touched;
  }

  aplicaCssErro(campo: any) {
    return {
      'has-error': this.verificaValidTouched(campo),
      'has-feedback': this.verificaValidTouched(campo)
    };
  }

  formularioCliente() {
    this.cadastroPsicologo = this.fb.group({
      nome: ['', Validators.compose([
          Validators.required,
          Validators.maxLength(100),
          Validators.minLength(2)
        ])
      ],
      email: ['', Validators.compose([
          Validators.required,
          Validators.maxLength(100),
          Validators.email
        ])
      ],
      telefone: ['', Validators.compose([
          Validators.required,
          Validators.maxLength(15),
          Validators.minLength(15)
        ])
      ],
      crp: ['', Validators.compose([
          Validators.required,
          Validators.maxLength(6),
          Validators.minLength(6)
        ])
      ],
      preco: ['', Validators.compose([
          Validators.required
        ])
      ],
      experiencia: ['', Validators.compose([
          Validators.required,
          Validators.maxLength(350)
        ])
      ],
      facebook: ['', Validators.compose([
          Validators.maxLength(100)
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
      sobreMim: ['', Validators.compose([
          Validators.required,
          Validators.maxLength(350)
        ])
      ],
      imagem: ['', Validators.compose([
          Validators.required,
        ])
      ]
    })
  }

}
