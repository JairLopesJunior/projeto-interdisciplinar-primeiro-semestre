import { CidadeEstadoService } from './../cadastro/cidade-estado.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PsicologoService } from './psicologo.service';

@Component({
  selector: 'app-cadastro-psicologo',
  templateUrl: './cadastro-psicologo.component.html',
  styleUrls: ['./cadastro-psicologo.component.css']
})
export class CadastroPsicologoComponent implements OnInit {

  estados = this.cidadeEstadoService.allEstados();
  cidades: Array<any>;

  experiencias = [
      { experiencia: 'Adolescência' },
      { experiencia: 'Ansiedade' },
      { experiencia: 'Assédio Moral' },
      { experiencia: 'Autoconhecimento' },
      { experiencia: 'Câncer' },
      { experiencia: 'Conflitos Amorosos' },
      { experiencia: 'Conflitos Familiares' },
      { experiencia: 'Depressão' },
      { experiencia: 'Estresse' },
      { experiencia: 'Idade Adulta' },
      { experiencia: 'Medos' },
      { experiencia: 'Morte e Luto' },
      { experiencia: 'Orientação Profissional' },
      { experiencia: 'Separação' },
      { experiencia: 'Traumas' },
  ];

  cadastroPsicologo: FormGroup;

  imagemBase64: string;

  constructor(private fb: FormBuilder,
              private _psicologoService: PsicologoService,
              private _router: Router,
              private cidadeEstadoService: CidadeEstadoService) {}

  ngOnInit(): void {
    this.formularioCliente();
  }

  onSubmit(): void {
    if(this.cadastroPsicologo.valid) {
      const idEstado = this.cadastroPsicologo.get('estado');
      this.cidadeEstadoService.allEstados().filter( (estadoFilter) => {
        if(idEstado?.value === estadoFilter.ID) {
          idEstado?.patchValue(estadoFilter.Nome);
        }
      });
      this._psicologoService.save(this.cadastroPsicologo.value).subscribe({
        next: psicologo => {
          alert("Salvo com sucesso.")
          this._router.navigate([`psicologo/${psicologo.id}`]);
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
          Validators.maxLength(11),
          Validators.minLength(10)
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
      experiencia: [null, Validators.compose([
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
      cidade: [{value: '', disabled: true}, Validators.compose([
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

  hasEstado(): void {
    const estado = this.cadastroPsicologo.get('estado')?.value;
    if(estado || estado !== '') {
      this.cadastroPsicologo.controls['cidade'].enable();
      console.log(typeof estado)
      const cidadesEncontradas = this.cidadeEstadoService.getCidadesPeloIdEstado(estado);
      this.cidades = cidadesEncontradas;
      return;
    }
    this.cadastroPsicologo.controls['cidade'].disable();
  }

}
