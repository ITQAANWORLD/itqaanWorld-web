import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from "../../shared/components/footer/footer.component";

@Component({
    selector: 'app-contact',
    standalone: true,
    templateUrl: './contact.component.html',
    styleUrls: ['./contact.component.scss'],
    imports: [CommonModule, FooterComponent]
})
export class ContactComponent {

}
