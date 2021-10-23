import { CadastroUsuarioModule } from './cadastro-usuario/cadastro-usuario.module';
import { CadastroModule } from './cadastro/cadastro.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContatoComponent } from './contato/contato.component';
import { PerfilComponent } from './perfil/perfil.component';
import { HomeModule } from './home/home.module';
import { UsuarioComponent } from './usuario/usuario.component';


@NgModule({
  declarations: [
    ContatoComponent,
    PerfilComponent,
    UsuarioComponent
  ],
  imports: [
    CommonModule,
    CadastroModule,
    CadastroUsuarioModule,
    HomeModule
  ],
  exports: [
    ContatoComponent,
    PerfilComponent
  ],
})
export class PagesModule { }
