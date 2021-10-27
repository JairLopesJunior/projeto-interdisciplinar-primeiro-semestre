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

  filteredPsicologos: Psicologo[] = [];

  filterBy: string = "";

  constructor(private psicologoService: PsicologoService) { }

  ngOnInit(): void {
    this.retrieveAll();
  }

  retrieveAll(): void{
    this.psicologoService.retriveAll().subscribe({
        next: psicologos => {
          this.psicologos = psicologos;
          this.filteredPsicologos = this.psicologos;
        },
        error: err => alert('Error: ' + err)
    })
  }

  set filter(value: string) { 
    this.filterBy = value;

    this.psicologos = this.filteredPsicologos.filter((psicologo: Psicologo) => psicologo.nome.toLocaleLowerCase().indexOf(this.filterBy.toLocaleLowerCase()) > -1);
  }

  get filter() { 
    return this.filterBy;
  }
}
