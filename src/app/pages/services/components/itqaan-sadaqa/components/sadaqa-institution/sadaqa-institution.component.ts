import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InstitutionalDonationComponent } from "../../../../../../shared/components/institutional-donation/institutional-donation.component";

@Component({
    selector: 'app-sadaqa-institution',
    standalone: true,
    templateUrl: './sadaqa-institution.component.html',
    styleUrls: ['./sadaqa-institution.component.scss'],
    imports: [CommonModule, InstitutionalDonationComponent]
})
export class SadaqaInstitutionComponent {

}
