import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InfoContainerComponent } from "../../../../shared/components/info-container/info-container.component";
import { ItqaanServiceCardComponent } from "../../../../shared/components/itqaan-service-card/itqaan-service-card.component";
import { FooterComponent } from "../../../../shared/components/footer/footer.component";

@Component({
    selector: 'app-itqaan-pension',
    standalone: true,
    templateUrl: './itqaan-pension.component.html',
    styleUrls: ['./itqaan-pension.component.scss'],
    imports: [CommonModule, InfoContainerComponent, ItqaanServiceCardComponent, FooterComponent]
})
export class ItqaanPensionComponent {
  aboutItems = [
    {
        title: 'KNOW ABOUT HALAL PENSION',
        description: 'Welcome to Itqaan, your trusted source for Shariah-compliant pension solutions. Our expert advisors are here to guide you on your journey to retirement, helping you make informed decisions that align with your values and beliefs. At Itqaan, we understand the importance of investing in a way that not only generates returns, but also upholds the principles of Islamic finance. Our pension plans are designed to provide you with peace of mind, knowing that your retirement savings are being managed in accordance with Shariah principles. Let us help you build a secure financial future while staying true to your faith'
    },
  ];
  itqaanServices = [
    {
      img: './assets/imgs/itqaan-pension.webp',
      title: 'Pension'
    },
    
  ];

}
