import { CadastroModule } from './cadastro/cadastro.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContatoComponent } from './contato/contato.component';
import { PerfilComponent } from './perfil/perfil.component';
import { HomeModule } from './home/home.module';


@NgModule({
  declarations: [
    ContatoComponent,
    PerfilComponent
  ],
  imports: [
    CommonModule,
    CadastroModule,
    HomeModule
  ],
  exports: [
    ContatoComponent,
    PerfilComponent
  ],
})
export class PagesModule { }
