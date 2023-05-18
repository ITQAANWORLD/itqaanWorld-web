import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InfoContainerComponent } from "../../../../shared/components/info-container/info-container.component";
import { ItqaanServiceCardComponent } from "../../../../shared/components/itqaan-service-card/itqaan-service-card.component";
import { FooterComponent } from "../../../../shared/components/footer/footer.component";

@Component({
    selector: 'app-al-nisaa',
    standalone: true,
    templateUrl: './al-nisaa.component.html',
    styleUrls: ['./al-nisaa.component.scss'],
    imports: [CommonModule, InfoContainerComponent, ItqaanServiceCardComponent, FooterComponent]
})
export class AlNisaaComponent {
  aboutItems = [
    {
        title: 'WHAT IS AL-NISAA?',
        description: 'Al Nisaa is an Itqaan pioneering Product that our empowers women to take control of financial lives by providing a range of innovative and Sharia-compliant financial services.'
    },
  
  ];
  itqaanServices = [
    {
      img: './assets/imgs/many2one.webp',
      title: 'Women Group'
    },
  ];

}
