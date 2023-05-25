import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-icon-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './icon-card.component.html',
  styleUrls: ['./icon-card.component.scss']
})
export class IconCardComponent {
  @Input() icon:string='';
  @Input() title:string = '';
  @Input() description:string ='';

}
