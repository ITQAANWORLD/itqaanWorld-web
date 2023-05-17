import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InfoContainerComponent } from "../../../../shared/components/info-container/info-container.component";
import { ItqaanServiceCardComponent } from "../../../../shared/components/itqaan-service-card/itqaan-service-card.component";
import { FooterComponent } from "../../../../shared/components/footer/footer.component";

@Component({
    selector: 'app-cash-waqf',
    standalone: true,
    templateUrl: './cash-waqf.component.html',
    styleUrls: ['./cash-waqf.component.scss'],
    imports: [CommonModule, InfoContainerComponent, ItqaanServiceCardComponent, FooterComponent]
})
export class CashWaqfComponent {
  aboutItems = [
    {
        title: 'WHAT IS CASH WAQF ?',
        description: 'Cash waqf is a way to donate money to a fund that supports ongoing social and economic development initiatives that can shelter to orphanages and needy ummah. '
    },
    {
      title: 'CONCEPT OF CASH WAQF',
      description: 'Discover the power of giving with cash waqf - make a modest yet impactful donation today and help us create positive change in our community.  '
  },
  ];
  itqaanServices = [
    {
      img: './assets/imgs/cash-waqf.webp',
      title: 'Individual Beneficiary'
    },
    {
      img: './assets/imgs/waqf-beneficiary.webp',
      title: 'Institutional Beneficiary'
    },
  ];

}
