import { CardModule } from './components/card/card.module';
import { PagesModule } from './pages/pages.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { CadastroComponent } from './pages/cadastro/cadastro.component';
import { ContatoComponent } from './pages/contato/contato.component';
import { HomeComponent } from './pages/home/home.component';
import { SelectModule } from './components/select/select.module';
import { CampoControlErroModule } from './components/campo-control-erro/campo-control-erro.module';
import { PostagemComponent } from './pages/postagem/postagem.component';


@NgModule({
  declarations: [
    NavbarComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    PagesModule,
    CardModule,
    SelectModule,
    CampoControlErroModule,
    RouterModule.forChild([
      {
          path: '', component: HomeComponent
      },
      {
          path: 'home', component: HomeComponent
      },
      {
          path: 'usuarios', component: PostagemComponent
      },
      {
          path: 'cadastro', component: CadastroComponent
      },
      {
          path: 'contato', component: ContatoComponent
      }
    ])
  ],
  exports: [
    NavbarComponent,
    FooterComponent
  ]
})
export class SharedModule { }
