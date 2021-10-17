import { SelectModule } from './../../components/select/select.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CadastroComponent } from './cadastro.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CampoControlErroModule } from '../../components/campo-control-erro/campo-control-erro.module';


@NgModule({
  declarations: [
    CadastroComponent
  ],
  imports: [
    CommonModule,
    SelectModule,
    FormsModule,
    CampoControlErroModule,
    ReactiveFormsModule
  ],
  exports: [
    CadastroComponent
  ]
})
export class CadastroModule { }
