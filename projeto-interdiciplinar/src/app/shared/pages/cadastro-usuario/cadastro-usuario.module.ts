import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SelectModule } from '../../components/select/select.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CadastroUsuarioComponent } from './cadastro-usuario.component';
import { CampoControlErroModule } from '../../components/campo-control-erro/campo-control-erro.module';



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
    RouterModule.forChild([
      {
        path: 'usuario/:id', component: CadastroUsuarioComponent
      }
    ])
  ],
  exports: [
    CadastroUsuarioComponent
  ]
})
export class CadastroUsuarioModule { }
