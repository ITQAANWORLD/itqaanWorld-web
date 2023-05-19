import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from "../../shared/components/footer/footer.component";

@Component({
    selector: 'app-shop',
    standalone: true,
    templateUrl: './shop.component.html',
    styleUrls: ['./shop.component.scss'],
    imports: [CommonModule, FooterComponent]
})
export class ShopComponent {

}
