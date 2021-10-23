import { CardModule } from './../../components/card/card.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';



@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    CardModule,
  ],
  exports: [
    HomeComponent
  ]
})
export class HomeModule { }
