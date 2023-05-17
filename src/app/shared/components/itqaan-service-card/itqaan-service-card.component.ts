import { Component, Input } from '@angular/core';

@Component({
  standalone:true,
  imports: [],
  selector: 'app-itqaan-service-card',
  templateUrl: './itqaan-service-card.component.html',
  styleUrls: ['./itqaan-service-card.component.scss']
})
export class ItqaanServiceCardComponent {
  @Input() img:string ='';
  @Input() title:string ='';
}
