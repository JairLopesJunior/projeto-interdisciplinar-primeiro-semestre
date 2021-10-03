import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContatoComponent } from './contato/contato.component';
import { PerfilComponent } from './perfil/perfil.component';
import { CadastroComponent } from './cadastro/cadastro.component';
import { HomeModule } from './home/home.module';


@NgModule({
  declarations: [
    ContatoComponent,
    CadastroComponent,
    PerfilComponent
  ],
  imports: [
    CommonModule,
    HomeModule
  ],
  exports: [
    ContatoComponent,
    CadastroComponent,
    PerfilComponent
  ],
})
export class PagesModule { }
