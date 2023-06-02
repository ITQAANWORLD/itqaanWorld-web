import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SelectedInstitutionComponent } from "../selected-institution/selected-institution.component";
import { InstitutionCardComponent } from "../institution-card/institution-card.component";
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-institutional-donation',
    standalone: true,
    templateUrl: './institutional-donation.component.html',
    styleUrls: ['./institutional-donation.component.scss'],
    imports: [CommonModule,  RouterLink, SelectedInstitutionComponent, InstitutionCardComponent]
})
export class InstitutionalDonationComponent {
@Input() title:string =''

  isInstitutionList:boolean = false;
  isInstitutionSelected:boolean=true;
  isDonate:boolean=false;
  isPay:boolean=false;

  iconCards = [
    {
      title: 'Location',
      icon: 'location',
      description:''
    },
    {
      title: 'Jummah prayers not yet available',
      icon: 'clock',
      description:'12:00 AM'
    },
    {
      title:'jaafara@gamil.com',
      icon:'mail',
      description:''
    },
    {
      title:'Website',
      icon: 'world',
      description:''
    }
  ]

  toggleSelected(state:string) {
    if (state == 'list') {
      this.isInstitutionList = false
      this.isPay = false;
      this.isDonate = false;
      this.isInstitutionSelected = true;

    } else if(state == 'institution') {
      this.isInstitutionList = false
      this.isPay = false;
      this.isInstitutionSelected = false;
      this.isDonate = true;

    } else if (state=='selected') {
      this.isDonate = false;
      this.isInstitutionList = false
      this.isInstitutionSelected = false;
      this.isPay = true;

    }  else if (state =='backHome' ) {
      this.isInstitutionList = true
      this.isPay = false;
      this.isDonate = false;
      this.isInstitutionSelected = false;
    }  else if (state == 'backList' ) {
      this.isInstitutionList = false
      this.isPay = false;
      this.isDonate = false;
      this.isInstitutionSelected = true;
    }
    else if (state == 'backSelected' ) {
      this.isInstitutionList = false
      this.isPay = false;
      this.isInstitutionSelected = false;
      this.isDonate = true;

    }
  }
}
