import { Component, OnInit } from '@angular/core';
import { Psicologo } from 'src/app/models/psicologo';
import { PsicologoService } from '../cadastro-psicologo/psicologo.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  p: string = 'psicologo';

  psicologos: Psicologo[] = [];

  constructor(private psicologoService: PsicologoService) { }

  ngOnInit(): void {
    this.retrieveAll();
  }

  retrieveAll(): void{
    this.psicologoService.retriveAll().subscribe({
        next: psicologos => {
          this.psicologos = psicologos;
        },
        error: err => alert('Error: ' + err)
    })
  }
}
