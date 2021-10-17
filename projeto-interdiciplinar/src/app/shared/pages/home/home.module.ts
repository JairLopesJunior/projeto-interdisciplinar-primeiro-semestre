import { CardModule } from './../../components/card/card.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { RouterModule } from '@angular/router';
import { PerfilComponent } from '../perfil/perfil.component';



@NgModule({
  declarations: [
    HomeComponent
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
    HomeComponent
  ]
})
export class HomeModule { }
