import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InstitutionalDonationComponent } from "../../../../../../shared/components/institutional-donation/institutional-donation.component";

@Component({
    selector: 'app-dail-a-sanda-institution',
    standalone: true,
    templateUrl: './dail-a-sanda-institution.component.html',
    styleUrls: ['./dail-a-sanda-institution.component.scss'],
    imports: [CommonModule, InstitutionalDonationComponent]
})
export class DailASandaInstitutionComponent {

}
