import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  standalone:true,
  imports: [CommonModule, RouterLink],
  selector: 'app-itqaan-service-card',
  templateUrl: './itqaan-service-card.component.html',
  styleUrls: ['./itqaan-service-card.component.scss']
})
export class ItqaanServiceCardComponent {
  @Input() img:string ='';
  @Input() title:string = '';
  @Input() route:any;
  @Input() isService:boolean= false;

}
