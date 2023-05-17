import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  services = ['cash waqf', 'itqaan sadaqa', 'itqaan zakaat', 'itqaan P2P loan', 'itqaan pay', 'takful','Al-Nisaa', 'atfaal', 'itqaan pension', 'itqaan BNB & rentals', 'hajj & umra savings ', 'itqaan transportation'];
  quranHadith = ['quran', 'hadith']

}
