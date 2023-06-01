import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-selected-institution',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './selected-institution.component.html',
  styleUrls: ['./selected-institution.component.scss']
})
export class SelectedInstitutionComponent implements OnInit {
  @Input() widthValueFromBackend: number = 60;
  details:any
  
  // @ts-ignore
  selectedDetailsId: string = null;

  selectDetails(detailsId: string, event:Event) {
    event.preventDefault();
    if (this.selectedDetailsId === detailsId) {
      // @ts-ignore
      this.selectedDetailsId = null; // Close the currently opened details
    } else {
      this.selectedDetailsId = detailsId; // Open the clicked details
    }
  }

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
