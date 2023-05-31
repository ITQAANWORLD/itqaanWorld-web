import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from "../../../../../../shared/components/footer/footer.component";
import { IconCardComponent } from "../../../../../../shared/components/icon-card/icon-card.component";
import { RouterLink } from '@angular/router';
import { InstitutionCardComponent } from "../../../../../../shared/components/institution-card/institution-card.component";
import { SelectedInstitutionComponent } from "../../../../../../shared/components/selected-institution/selected-institution.component";

@Component({
    selector: 'app-institutional-beneficiary',
    standalone: true,
    templateUrl: './institutional-beneficiary.component.html',
    styleUrls: ['./institutional-beneficiary.component.scss'],
    imports: [CommonModule, FooterComponent, IconCardComponent, RouterLink, InstitutionCardComponent, SelectedInstitutionComponent]
})
export class InstitutionalBeneficiaryComponent {

  isInstitutionList:boolean = false;
  isInstitutionSelected:boolean=false;
  isDonate:boolean=true;
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
