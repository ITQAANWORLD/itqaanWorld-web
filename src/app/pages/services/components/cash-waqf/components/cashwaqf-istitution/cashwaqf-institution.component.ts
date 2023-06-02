import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InstitutionalDonationComponent } from "../../../../../../shared/components/institutional-donation/institutional-donation.component";

@Component({
    selector: 'app-cashwaqf-institution',
    standalone: true,
    templateUrl: './cashwaqf-institution.component.html',
    styleUrls: ['./cashwaqf-institution.component.scss'],
    imports: [CommonModule, InstitutionalDonationComponent]
})
export class CashwaqfInstitutionComponent {

}
