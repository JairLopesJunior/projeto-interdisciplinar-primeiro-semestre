import { CadastroUsuarioComponent } from '../cadastro-usuario/cadastro-usuario.component';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CadastroComponent } from './cadastro.component';
import { CadastroPsicologoComponent } from '../cadastro-psicologo/cadastro-psicologo.component';


@NgModule({
  declarations: [
    CadastroComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: 'cadastro/usuario', component: CadastroUsuarioComponent
      },
      {
        path: 'cadastro/psicologo', component: CadastroPsicologoComponent
      }
    ])
  ],
  exports: [
    CadastroComponent
  ]
})
export class CadastroModule { }
