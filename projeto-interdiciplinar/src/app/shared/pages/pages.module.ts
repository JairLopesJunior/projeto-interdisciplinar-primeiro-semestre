import { CadastroUsuarioModule } from './cadastro-usuario/cadastro-usuario.module';
import { CadastroModule } from './cadastro/cadastro.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContatoComponent } from './contato/contato.component';
import { HomeModule } from './home/home.module';
import { UsuarioComponent } from './usuario/usuario.component';
import { PostagemModule } from './postagem/postagem.module';


@NgModule({
  declarations: [
    ContatoComponent,
    UsuarioComponent
  ],
  imports: [
    CommonModule,
    CadastroModule,
    CadastroUsuarioModule,
    HomeModule,
    PostagemModule
  ],
  exports: [
    ContatoComponent,
  ],
})
export class PagesModule { }
