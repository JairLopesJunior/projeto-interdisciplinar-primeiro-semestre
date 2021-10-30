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

  hasEstado = false;

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
              private _router: Router) {}

  ngOnInit(): void {
    this.formularioCliente();
    this.VerificarEstado();
  }

  onSubmit(): void {
    if(this.cadastroPsicologo.valid) {
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
      estado: [{value: ''}, Validators.compose([
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

  private VerificarEstado(): void {
    const estado = this.cadastroPsicologo.get('estado')?.value;
    console.log(estado)
    if(estado) {
      this.cadastroPsicologo.controls['cidade'].enable();
    }
  }

  estados = [{
    "ID": "1",
    "Sigla": "AC",
    "Nome": "Acre"
  },
       {
    "ID": "2",
    "Sigla": "AL",
    "Nome": "Alagoas"
  },
       {
    "ID": "3",
    "Sigla": "AM",
    "Nome": "Amazonas"
  },
       {
    "ID": "4",
    "Sigla": "AP",
    "Nome": "Amapá"
  },
       {
    "ID": "5",
    "Sigla": "BA",
    "Nome": "Bahia"
  },
       {
    "ID": "6",
    "Sigla": "CE",
    "Nome": "Ceará"
  },
       {
    "ID": "7",
    "Sigla": "DF",
    "Nome": "Distrito Federal"
  },
       {
    "ID": "8",
    "Sigla": "ES",
    "Nome": "Espírito Santo"
  },
       {
    "ID": "9",
    "Sigla": "GO",
    "Nome": "Goiás"
  },
       {
    "ID": "10",
    "Sigla": "MA",
    "Nome": "Maranhão"
  },
       {
    "ID": "11",
    "Sigla": "MG",
    "Nome": "Minas Gerais"
  },
       {
    "ID": "12",
    "Sigla": "MS",
    "Nome": "Mato Grosso do Sul"
  },
       {
    "ID": "13",
    "Sigla": "MT",
    "Nome": "Mato Grosso"
  },
       {
    "ID": "14",
    "Sigla": "PA",
    "Nome": "Pará"
  },
       {
    "ID": "15",
    "Sigla": "PB",
    "Nome": "Paraíba"
  },
       {
    "ID": "16",
    "Sigla": "PE",
    "Nome": "Pernambuco"
  },
       {
    "ID": "17",
    "Sigla": "PI",
    "Nome": "Piauí"
  },
       {
    "ID": "18",
    "Sigla": "PR",
    "Nome": "Paraná"
  },
       {
    "ID": "19",
    "Sigla": "RJ",
    "Nome": "Rio de Janeiro"
  },
       {
    "ID": "20",
    "Sigla": "RN",
    "Nome": "Rio Grande do Norte"
  },
       {
    "ID": "21",
    "Sigla": "RO",
    "Nome": "Rondônia"
  },
       {
    "ID": "22",
    "Sigla": "RR",
    "Nome": "Roraima"
  },
       {
    "ID": "23",
    "Sigla": "RS",
    "Nome": "Rio Grande do Sul"
  },
       {
    "ID": "24",
    "Sigla": "SC",
    "Nome": "Santa Catarina"
  },
       {
    "ID": "25",
    "Sigla": "SE",
    "Nome": "Sergipe"
  },
       {
    "ID": "26",
    "Sigla": "SP",
    "Nome": "São Paulo"
  },
       {
    "ID": "27",
    "Sigla": "TO",
    "Nome": "Tocantins"
  }]

}
