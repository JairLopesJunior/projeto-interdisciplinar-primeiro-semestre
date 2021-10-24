import { CadastroUsuarioModule } from './cadastro-usuario/cadastro-usuario.module';
import { CadastroModule } from './cadastro/cadastro.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContatoComponent } from './contato/contato.component';
import { HomeModule } from './home/home.module';
import { UsuarioComponent } from './usuario/usuario.component';
import { PostagemModule } from './postagem/postagem.module';
import { CadastroPsicologoComponent } from './cadastro-psicologo/cadastro-psicologo.component';


@NgModule({
  declarations: [
    ContatoComponent,
    UsuarioComponent,
    CadastroPsicologoComponent
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
