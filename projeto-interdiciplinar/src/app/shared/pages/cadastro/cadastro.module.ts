import { PsicologoComponent } from './../psicologo/psicologo.component';
import { UsuarioComponent } from './../usuario/usuario.component';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CadastroComponent } from './cadastro.component';


@NgModule({
  declarations: [
    CadastroComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: 'cadastro/usuario', component: UsuarioComponent
      },
      {
        path: 'cadastro/psicologo', component: PsicologoComponent
      }
    ])
  ],
  exports: [
    CadastroComponent
  ]
})
export class CadastroModule { }
