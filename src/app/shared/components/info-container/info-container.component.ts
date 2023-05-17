import { Component, Input } from '@angular/core';

@Component({
  standalone:true,
  imports: [],
  selector: 'app-info-container',
  templateUrl: './info-container.component.html',
  styleUrls: ['./info-container.component.scss']
})
export class InfoContainerComponent {
  @Input() title: string = '';
  @Input() description: string = '';
  

}
