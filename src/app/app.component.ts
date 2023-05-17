import { ChangeDetectionStrategy, Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  	changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent {
  scrolledEnough: boolean =false;
      
  @HostListener('window:scroll', [])
  onWindowScroll() {
    // Handle scroll event here
    const scrollPosition = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
    scrollPosition > 400 ? this.scrolledEnough = true : this.scrolledEnough = false;    
  }
  title = 'itqaan';

 
}
