import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from 'src/app/shared/components/footer/footer.component';
import { InfoContainerComponent } from 'src/app/shared/components/info-container/info-container.component';
import { ItqaanServiceCardComponent } from 'src/app/shared/components/itqaan-service-card/itqaan-service-card.component';

@Component({
  selector: 'app-itqaan-zakaat',
  standalone: true,
  imports: [CommonModule, InfoContainerComponent, ItqaanServiceCardComponent, FooterComponent],
  templateUrl: './itqaan-zakaat.component.html',
  styleUrls: ['./itqaan-zakaat.component.scss']
})
export class ItqaanZakaatComponent implements OnInit {
  aboutItems = [
    {
        title: 'WHAT IS ZAKAAT?',
        description: 'Zakat is a form of obligatory charity in Islam that involves giving a portion of one`s wealth to the less fortunate. It is one of the five pillars of Islam and is an act of worship that purifies both one`s wealth and soul. '
    },
  ];
  itqaanServices = [
    {
      img: '../../../assets/imgs/sadaqah.svg',
      title: 'Individual Zakaat'
    },
    {
      img: '../../../assets/imgs/zakaat.svg',
      title: 'Institutional Zakaat'
    },
   
  ];

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
