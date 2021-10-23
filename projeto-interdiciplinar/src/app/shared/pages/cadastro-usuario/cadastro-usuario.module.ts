import { UsuarioComponent } from './../usuario/usuario.component';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SelectModule } from '../../components/select/select.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CadastroUsuarioComponent } from './cadastro-usuario.component';
import { CampoControlErroModule } from '../../components/campo-control-erro/campo-control-erro.module';
import { AlifeFileToBase64Module } from 'alife-file-to-base64';



@NgModule({
  declarations: [
    CadastroUsuarioComponent
  ],
  imports: [
    CommonModule,
    SelectModule,
    FormsModule,
    ReactiveFormsModule,
    CampoControlErroModule,
    AlifeFileToBase64Module,
    RouterModule.forChild([
      {
        path: 'usuario/:id', component: UsuarioComponent
      }
    ])
  ],
  exports: [
    CadastroUsuarioComponent
  ]
})
export class CadastroUsuarioModule { }
