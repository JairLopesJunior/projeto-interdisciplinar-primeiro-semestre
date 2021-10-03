import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeComponent } from './home/home.component';
import { ContatoComponent } from './contato/contato.component';
import { PerfilComponent } from './perfil/perfil.component';
import { CadastroComponent } from './cadastro/cadastro.component';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    HomeComponent,
    ContatoComponent,
    CadastroComponent,
    PerfilComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
          path: 'perfil', component: PerfilComponent
      }
    ])
  ],
  exports: [
    HomeComponent,
    ContatoComponent,
    CadastroComponent,
    PerfilComponent
  ],
})
export class PagesModule { }
