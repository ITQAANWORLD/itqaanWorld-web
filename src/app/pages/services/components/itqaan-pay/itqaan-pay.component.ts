import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InfoContainerComponent } from "../../../../shared/components/info-container/info-container.component";
import { ItqaanServiceCardComponent } from "../../../../shared/components/itqaan-service-card/itqaan-service-card.component";
import { FooterComponent } from "../../../../shared/components/footer/footer.component";

@Component({
    selector: 'app-itqaan-pay',
    standalone: true,
    templateUrl: './itqaan-pay.component.html',
    styleUrls: ['./itqaan-pay.component.scss'],
    imports: [CommonModule, InfoContainerComponent, ItqaanServiceCardComponent, FooterComponent]
})
export class ItqaanPayComponent {
  aboutItems = [
    {
        title: 'WHAT IS ITQAAN UTILITY BILLS?',
        description: 'Itqaan Utility Bills is an Shariah-compliant financial services, including utility payments and agent banking solutions.'
    },
    {
      title: 'WHAT IS ITQAAN UTILITY BILLS?',
      description: 'Common utility services are water, sewer, electric, gas, garbage, cable TV, internet, and mobile services. The charges you pay on your utility bill depends mainly on your energy consumption. You can check with your monthly bill to get your utility bill details'
  },
  ];
  itqaanServices = [
    {
      img: './assets/imgs/many2one.webp',
      title: 'NHIF'
    },
    {
      img: './assets/imgs/one2many.webp',
      title: 'Electricity'
    },
    {
      img: './assets/imgs/one2one.webp',
      title: 'water bills'
    },
    {
      img: './assets/imgs/one2one.webp',
      title: 'school fees'
    },
    {
      img: './assets/imgs/one2one.webp',
      title: 'internet'
    },
    {
      img: './assets/imgs/one2one.webp',
      title: 'cable tv'
    },
    {
      img: './assets/imgs/one2one.webp',
      title: 'agent banking'
    },
  ];

}
