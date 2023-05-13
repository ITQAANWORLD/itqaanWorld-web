import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './shared/components/navbar/navbar.component';
import { ItqaanServiceCardComponent } from './shared/components/itqaan-service-card/itqaan-service-card.component';
import { FooterComponent } from './shared/components/footer/footer.component';
import { InfoContainerComponent } from './shared/components/info-container/info-container.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
