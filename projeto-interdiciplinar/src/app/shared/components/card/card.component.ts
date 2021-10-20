import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  @Input() nome: string = '';
  @Input() relato: string = '';
  @Input() imagem: string | undefined = '';

  constructor() { }

  ngOnInit(): void {
  }

}
