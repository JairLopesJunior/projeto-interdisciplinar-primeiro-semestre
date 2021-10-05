import { SelectModule } from './../../components/select/select.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CadastroComponent } from './cadastro.component';

import { InputModule } from '../../components/input/input.module';


@NgModule({
  declarations: [
    CadastroComponent
  ],
  imports: [
    CommonModule,
    InputModule,
    SelectModule
  ],
  exports: [
    CadastroComponent
  ]
})
export class CadastroModule { }
