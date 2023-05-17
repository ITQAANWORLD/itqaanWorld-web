import { Component } from '@angular/core';
import { InfoContainerComponent } from "../../shared/components/info-container/info-container.component";

@Component({
    standalone: true,
    imports: [InfoContainerComponent],
    selector: 'app-about',
    templateUrl: './about.component.html',
    styleUrls: ['./about.component.scss'],
})
export class AboutComponent {

}
