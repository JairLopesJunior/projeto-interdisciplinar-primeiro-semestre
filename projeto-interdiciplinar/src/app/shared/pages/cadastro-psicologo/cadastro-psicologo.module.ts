import { PsicologoComponent } from './../psicologo/psicologo.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AlifeFileToBase64Module } from 'alife-file-to-base64';
import { CampoControlErroModule } from '../../components/campo-control-erro/campo-control-erro.module';
import { SelectModule } from '../../components/select/select.module';
import { CadastroPsicologoComponent } from './cadastro-psicologo.component';
import { RouterModule } from '@angular/router';
import { NgxMaskModule } from 'ngx-mask';



@NgModule({
  declarations: [
    CadastroPsicologoComponent
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
        path: 'psicologo/:id', component: PsicologoComponent
      }
    ]),
    NgxMaskModule.forRoot({
      //dropSpecialCharacters: false, // Salva com a mascara
      showMaskTyped: true
    })
  ],
  exports: [
    CadastroPsicologoComponent
  ]
})
export class CadastroPsicologoModule { }
