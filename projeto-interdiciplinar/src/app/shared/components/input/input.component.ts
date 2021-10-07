import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit {

  @Input() titulo: string;
  @Input() controlName: string;
  @Input() formGroup: FormGroup;
  @Input() tipoInput: any;

  constructor() { }

  ngOnInit(): void {
  }

}
