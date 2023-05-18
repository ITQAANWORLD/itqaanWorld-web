import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InfoContainerComponent } from "../../../../shared/components/info-container/info-container.component";
import { ItqaanServiceCardComponent } from "../../../../shared/components/itqaan-service-card/itqaan-service-card.component";
import { FooterComponent } from "../../../../shared/components/footer/footer.component";

@Component({
    selector: 'app-takaful',
    standalone: true,
    templateUrl: './takaful.component.html',
    styleUrls: ['./takaful.component.scss'],
    imports: [CommonModule, InfoContainerComponent, ItqaanServiceCardComponent, FooterComponent]
})
export class TakafulComponent  implements OnInit{
      // Fetch all the details element.
      details:any
      aboutItems = [
        {
            title: 'WHAT IS TAKAFUL?',
            description: 'Takaful is a type of insurance that is Shariah-compliant and operates on the principle of cooperation and mutual help.'
        }
      ];

      ngOnInit() {
        this.details = document.querySelectorAll("details");
        // Add the onclick listeners.
        this.details.forEach((targetDetail:any) => {            
            targetDetail.addEventListener("click", () => {
            // Close all the details that are not targetDetail.
            this.details.forEach((detail:any) => {
                if (detail !== targetDetail) {
                detail.removeAttribute("open");
                }
            });
            });
        });
    }


}
