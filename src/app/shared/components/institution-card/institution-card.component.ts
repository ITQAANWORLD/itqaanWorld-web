import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-institution-card',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './institution-card.component.html',
  styleUrls: ['./institution-card.component.scss']
})
export class InstitutionCardComponent {
  @Input() widthValueFromBackend: number = 60;
  @Output() selectedCard = new EventEmitter();
  
  onClick() {
    this.selectedCard.emit('institution')
  }

}
