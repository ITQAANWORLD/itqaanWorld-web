import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-selected-institution',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './selected-institution.component.html',
  styleUrls: ['./selected-institution.component.scss']
})
export class SelectedInstitutionComponent {
  @Input() widthValueFromBackend: number = 60;


}
