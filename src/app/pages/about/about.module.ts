import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AboutRoutingModule } from './about-routing.module';
import { AboutComponent } from './about.component';
import { InfoContainerComponent } from 'src/app/shared/components/info-container/info-container.component';


@NgModule({
  declarations: [
    AboutComponent,
    InfoContainerComponent,
  ],
  imports: [
    CommonModule,
    AboutRoutingModule
  ]
})
export class AboutModule { }
