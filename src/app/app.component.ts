import { ChangeDetectionStrategy, Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  	changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent {
  scrolledEnough: boolean =false;

  title = 'itqaan';

 
}
