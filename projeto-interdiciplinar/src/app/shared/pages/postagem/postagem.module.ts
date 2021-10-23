import { PerfilComponent } from './../perfil/perfil.component';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostagemComponent } from './postagem.component';
import { CardModule } from '../../components/card/card.module';



@NgModule({
  declarations: [
    PostagemComponent
  ],
  imports: [
    CommonModule,
    CardModule,
    RouterModule.forChild([
      {
          path: 'perfil', component: PerfilComponent
      }
    ])
  ],
  exports: [
    PostagemComponent
  ]
})
export class PostagemModule { }
