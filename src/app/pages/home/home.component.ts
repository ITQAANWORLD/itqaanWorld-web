import { Component } from '@angular/core';
import { FooterComponent } from 'src/app/shared/components/footer/footer.component';

@Component({
  standalone:true,
  imports: [FooterComponent],
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

}
