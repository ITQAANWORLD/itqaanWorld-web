import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from "../../../../shared/components/footer/footer.component";
import { ItqaanServiceCardComponent } from "../../../../shared/components/itqaan-service-card/itqaan-service-card.component";
import { InfoContainerComponent } from "../../../../shared/components/info-container/info-container.component";

@Component({
    selector: 'app-itqaan-transportation',
    standalone: true,
    templateUrl: './itqaan-transportation.component.html',
    styleUrls: ['./itqaan-transportation.component.scss'],
    imports: [CommonModule, FooterComponent, ItqaanServiceCardComponent, InfoContainerComponent]
})
export class ItqaanTransportationComponent {
  aboutItems = [
    {
        title: 'KNOW ABOUT ITQAAN TRANSPORTATION',
        description: 'Itqaan offers a transport services platform that provides a one-stop-shop solution for all transportation needs, including taxis, buses, freight, and airlines. '
    },
  
  ];
  itqaanServices = [
    {
      img: './assets/imgs/many2one.webp',
      title: 'Air'
    },
    {
      img: './assets/imgs/many2one.webp',
      title: 'Taxi'
    },
    {
      img: './assets/imgs/many2one.webp',
      title: 'Road'
    },
    {
      img: './assets/imgs/many2one.webp',
      title: 'Sea'
    },
    {
      img: './assets/imgs/many2one.webp',
      title: 'Ambulance'
    },
    {
      img: './assets/imgs/many2one.webp',
      title: 'Delivery'
    },
  ];

}
