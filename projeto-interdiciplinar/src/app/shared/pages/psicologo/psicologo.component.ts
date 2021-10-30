import { Psicologo } from './../../../models/psicologo';
import { Component, OnInit } from '@angular/core';
import { PsicologoService } from '../cadastro-psicologo/psicologo.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-psicologo',
  templateUrl: './psicologo.component.html',
  styleUrls: ['./psicologo.component.css']
})
export class PsicologoComponent implements OnInit {

  psicologo: Psicologo;
  experiencias: string[];

  constructor(private _psicologoService: PsicologoService,
              private _activatedRoute: ActivatedRoute,) { }

  ngOnInit(): void {
    this.retrieveById();
  }

  retrieveById(): void {
    this._psicologoService.retrieveById(Number(this._activatedRoute.snapshot.paramMap.get('id'))).subscribe({
      next: psicologo => {
        psicologo.imagem = psicologo.imagem ?? 'assets/imagem.png';
        let psicologoArray = String(psicologo.experiencia).split(',');
        for(let i = 0; i < psicologoArray.length; i++){
          psicologoArray[i] = psicologoArray[i].replace(/[&\/\\#,+()$~%.'":*?<>{}]/g, '');
        }
        this.experiencias = psicologoArray;
        this.psicologo = psicologo
      },
      error: err => alert('Error: ' + err)
    });
  }
}
