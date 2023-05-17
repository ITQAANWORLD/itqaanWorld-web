import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  @Input() scrolled: boolean = false;
  
  services = [
    {title:'cash waqf',
    route: 'cash-waqf'
  }, 
    {title:'itqaan sadaqa',
    route: 'itqaan-sadaqa'
  }, 
    {title:'itqaan zakaat',
    route: 'itqaan-zakaat'
  }, 
    {title:'itqaan P2P loan',
    route: 'itqaan-p2p'
  }, 
    {title:'itqaan pay',
    route: 'itqaan-pay'
  }, 
    {title:'takful',
    route: 'itqaan-takful'
  },
    {title:'Al-Nisaa',
    route: 'al-nisaa'
  }, 
    {title:'atfaal',
    route: 'atfaal'
  }, 
    {title:'itqaan pension',
    route: 'itqaan-pension'
  }, 
    {title:'itqaan BNB & rentals',
    route: 'itqaan-bnb'
  }, 
    {title:'hajj & umra savings ',
    route: 'itqaan-hajj'
  }, 
    {title:'itqaan transportation',
    route: ''
  }]
  quranHadith = ['quran', 'hadith']

}
