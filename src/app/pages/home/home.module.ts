import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { ItqaanServiceCardComponent } from 'src/app/shared/components/itqaan-service-card/itqaan-service-card.component';
import { FooterComponent } from 'src/app/shared/components/footer/footer.component';


@NgModule({
  declarations: [
    HomeComponent,
    ItqaanServiceCardComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }
