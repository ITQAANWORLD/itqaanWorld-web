import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './shared/components/navbar/navbar.component';
import { ItqaanServiceCardComponent } from './shared/components/itqaan-service-card/itqaan-service-card.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ItqaanServiceCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
