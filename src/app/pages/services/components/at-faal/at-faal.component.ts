import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InfoContainerComponent } from "../../../../shared/components/info-container/info-container.component";
import { ItqaanServiceCardComponent } from "../../../../shared/components/itqaan-service-card/itqaan-service-card.component";
import { FooterComponent } from "../../../../shared/components/footer/footer.component";

@Component({
    selector: 'app-at-faal',
    standalone: true,
    templateUrl: './at-faal.component.html',
    styleUrls: ['./at-faal.component.scss'],
    imports: [CommonModule, InfoContainerComponent, ItqaanServiceCardComponent, FooterComponent]
})
export class AtFaalComponent {
  aboutItems = [
    {
        title: 'KNOW ABOUT ATFAAL',
        description: 'Welcome to Itqaan Atfaal, where we offer a Halal kids wallet designed to help children manage their finances in accordance with Islamic values. Our wallet is based on the principles of Islamic finance, which prohibits interest, gambling, and speculative activities..'
    },
    {
      title: 'HOW IT WORKS',
      description: 'Our Halal kids wallet is a digital wallet that provides a safe and secure way for children to learn about money management, budgeting, and saving. It is easy to use and user-friendly, allowing children to track their allowance, savings, and make purchases within predefined limits set by their parents. Parents can set up the wallet on behalf of their children, monitor their transactions, transfer allowance, and track savings, helping their children develop healthy financial habits from an early age.'
  },
  {
    title: 'OUR ETHICS',
    description: 'We follow ethical and socially responsible investment principles, avoiding investments in industries such as alcohol, tobacco, and gambling. This ensures that your child`s money is invested in a manner consistent with your beliefs and values.'
},
  ];
  itqaanServices = [
    {
      img: './assets/imgs/waqf-beneficiary.webp',
      title: 'Atfaal Wallet'
    },
    
  ];

}
