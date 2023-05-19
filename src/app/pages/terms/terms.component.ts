import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from "../../shared/components/footer/footer.component";

@Component({
    selector: 'app-terms',
    standalone: true,
    templateUrl: './terms.component.html',
    styleUrls: ['./terms.component.scss'],
    imports: [CommonModule, FooterComponent]
})
export class TermsComponent {

}
