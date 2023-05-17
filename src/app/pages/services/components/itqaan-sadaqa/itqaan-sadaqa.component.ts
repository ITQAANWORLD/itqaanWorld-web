import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InfoContainerComponent } from "../../../../shared/components/info-container/info-container.component";
import { ItqaanServiceCardComponent } from "../../../../shared/components/itqaan-service-card/itqaan-service-card.component";
import { FooterComponent } from "../../../../shared/components/footer/footer.component";

@Component({
    selector: 'app-itqaan-sadaqa',
    standalone: true,
    templateUrl: './itqaan-sadaqa.component.html',
    styleUrls: ['./itqaan-sadaqa.component.scss'],
    imports: [CommonModule, InfoContainerComponent, ItqaanServiceCardComponent, FooterComponent]
})
export class ItqaanSadaqaComponent {
  aboutItems = [
    {
        title: 'WHAT IS SADAQA?',
        description: 'ITQAAN is a platform that explores the beauty and significance of sadaqa in Islam, emphasizing that it is more than just giving charity. The focus is on building a connection with Allah and helping those in need through various forms of voluntary giving, including time and skills.'
    },
    {
      title: 'DONATE YOUR SADAQA',
      description: 'Start today and make sadaqa a regular part of your life to experience it`s blessings and rewards'
  },
  ];
  itqaanServices = [
    {
      img: './assets/imgs/individual-icon.webp',
      title: 'Sadaqa to Individuals'
    },
    {
      img: './assets/imgs/mosque-icon.webp',
      title: 'Sadaqa to Mosques & Others'
    },
    {
      img: './assets/imgs/waqf-beneficiary.webp',
      title: 'Dial a sanda'
    },
  ];

}
