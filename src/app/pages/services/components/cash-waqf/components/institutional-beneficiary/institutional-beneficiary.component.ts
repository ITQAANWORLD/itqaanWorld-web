import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from "../../../../../../shared/components/footer/footer.component";
import { IconCardComponent } from "../../../../../../shared/components/icon-card/icon-card.component";

@Component({
    selector: 'app-institutional-beneficiary',
    standalone: true,
    templateUrl: './institutional-beneficiary.component.html',
    styleUrls: ['./institutional-beneficiary.component.scss'],
    imports: [CommonModule, FooterComponent, IconCardComponent]
})
export class InstitutionalBeneficiaryComponent {
  iconCards = [
    {
      title: 'Location',
      icon: 'location',
      description:''
    },
    {
      title: 'Jummah prayers not yet available',
      icon: 'clock',
      description:'12:00 AM'
    },
    {
      title:'jaafara@gamil.com',
      icon:'mail',
      description:''
    },
    {
      title:'Website',
      icon: 'world',
      description:''
    }
  ]

}
