import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InfoContainerComponent } from "../../../../shared/components/info-container/info-container.component";
import { ItqaanServiceCardComponent } from "../../../../shared/components/itqaan-service-card/itqaan-service-card.component";
import { FooterComponent } from "../../../../shared/components/footer/footer.component";

@Component({
    selector: 'app-itqaan-bnb',
    standalone: true,
    templateUrl: './itqaan-bnb.component.html',
    styleUrls: ['./itqaan-bnb.component.scss'],
    imports: [CommonModule, InfoContainerComponent, ItqaanServiceCardComponent, FooterComponent]
})
export class ItqaanBnbComponent {
  aboutItems = [
    {
        title: 'WHAT IS HALAL BnB & RENTALS?',
        description: 'ItqaanBnB is a hospitality platform that provides Halal-friendly accommodations tailored to the needs of guests who prefer options that align with Islamic principles..'
    },
  ];
  itqaanServices = [
    {
      img: './assets/imgs/itqaan-bnb1.webp',
      title: 'Apartments'
    }, {
      img: './assets/imgs/itqaan-bnb2.webp',
      title: 'House for Rent'
    },
    
  ];

}
