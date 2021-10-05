import { InputModule } from './components/input/input.module';
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


@NgModule({
  declarations: [
    NavbarComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    PagesModule,
    InputModule,
    CardModule,
    SelectModule,
    RouterModule.forChild([
      {
          path: '', component: HomeComponent
      },
      {
          path: 'home', component: HomeComponent
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
