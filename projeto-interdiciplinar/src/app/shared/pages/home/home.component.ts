import { Component, OnInit } from '@angular/core';
import { Psicologo } from 'src/app/models/psicologo';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  psicologos: Psicologo[] = [];

  constructor() { }

  ngOnInit(): void {
  }


}
