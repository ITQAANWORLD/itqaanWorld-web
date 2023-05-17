import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  standalone:true,
  imports: [CommonModule],
  selector: 'app-info-container',
  templateUrl: './info-container.component.html',
  styleUrls: ['./info-container.component.scss']
})
export class InfoContainerComponent {
  @Input() title: string = '';
  @Input() description: string = '';
  @Input() isService:boolean= false;
  

}
