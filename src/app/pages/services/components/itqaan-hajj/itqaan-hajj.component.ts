import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InfoContainerComponent } from "../../../../shared/components/info-container/info-container.component";
import { ItqaanServiceCardComponent } from "../../../../shared/components/itqaan-service-card/itqaan-service-card.component";
import { FooterComponent } from "../../../../shared/components/footer/footer.component";

@Component({
    selector: 'app-itqaan-hajj',
    standalone: true,
    templateUrl: './itqaan-hajj.component.html',
    styleUrls: ['./itqaan-hajj.component.scss'],
    imports: [CommonModule, InfoContainerComponent, ItqaanServiceCardComponent, FooterComponent]
})
export class ItqaanHajjComponent {
  aboutItems = [
    {
        title: 'ITQAAN HAJJ & UMRAH SAVINGS',
        description: 'Itqaan`s Hajj and Umrah saving scheme is a Shari`ah-compliant financial product that helps Muslims save money for their pilgrimage over time. '
    },
  ];
  itqaanServices = [
    {
      img: './assets/imgs/hajjumra2.webp',
      title: 'Hajj Savings'
    }, {
      img: './assets/imgs/hajjumra1.webp',
      title: 'Umrah Savings'
    },
    
  ];

}
