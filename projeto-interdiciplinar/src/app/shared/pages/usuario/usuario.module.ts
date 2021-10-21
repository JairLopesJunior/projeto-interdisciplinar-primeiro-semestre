import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SelectModule } from './../../components/select/select.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsuarioComponent } from './usuario.component';
import { CampoControlErroModule } from '../../components/campo-control-erro/campo-control-erro.module';



@NgModule({
  declarations: [
    UsuarioComponent
  ],
  imports: [
    CommonModule,
    SelectModule,
    FormsModule,
    ReactiveFormsModule,
    CampoControlErroModule
  ],
  exports: [
    UsuarioComponent
  ]
})
export class UsuarioModule { }
