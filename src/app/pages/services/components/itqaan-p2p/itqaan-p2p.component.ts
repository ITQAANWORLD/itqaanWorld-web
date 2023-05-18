import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InfoContainerComponent } from "../../../../shared/components/info-container/info-container.component";
import { ItqaanServiceCardComponent } from "../../../../shared/components/itqaan-service-card/itqaan-service-card.component";
import { FooterComponent } from "../../../../shared/components/footer/footer.component";

@Component({
    selector: 'app-itqaan-p2p',
    standalone: true,
    templateUrl: './itqaan-p2p.component.html',
    styleUrls: ['./itqaan-p2p.component.scss'],
    imports: [CommonModule, InfoContainerComponent, ItqaanServiceCardComponent, FooterComponent]
})
export class ItqaanP2pComponent {
  aboutItems = [
    {
        title: 'ITQAAN P2P LENDING',
        description: 'P2P lending is an alternative form of financing that connects investors with borrowers. Shariah-compliant P2P lending adheres to Islamic finance principles, such as avoiding interest-based transactions and promoting social responsibility.'
    },
  ];
  itqaanServices = [
    {
      img: './assets/imgs/many2one.webp',
      title: 'Group to person loan'
    },
    {
      img: './assets/imgs/one2many.webp',
      title: 'person to group loan'
    },
    {
      img: './assets/imgs/one2one.webp',
      title: 'person to person loan'
    },
  ];

}
