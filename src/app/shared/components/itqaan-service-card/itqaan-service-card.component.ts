import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  standalone:true,
  imports: [CommonModule],
  selector: 'app-itqaan-service-card',
  templateUrl: './itqaan-service-card.component.html',
  styleUrls: ['./itqaan-service-card.component.scss']
})
export class ItqaanServiceCardComponent {
  @Input() img:string ='';
  @Input() title:string ='';
  @Input() isService:boolean= false;

}
