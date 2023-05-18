import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InfoContainerComponent } from "../../../../shared/components/info-container/info-container.component";
import { FooterComponent } from "../../../../shared/components/footer/footer.component";

@Component({
    selector: 'app-itqaan-hadith',
    standalone: true,
    templateUrl: './itqaan-hadith.component.html',
    styleUrls: ['./itqaan-hadith.component.scss'],
    imports: [CommonModule, InfoContainerComponent, FooterComponent]
})
export class ItqaanHadithComponent {

}
