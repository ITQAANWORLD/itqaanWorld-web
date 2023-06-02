import { Component } from '@angular/core';
import { FooterComponent } from 'src/app/shared/components/footer/footer.component';
import { ItqaanServiceCardComponent } from "../../shared/components/itqaan-service-card/itqaan-service-card.component";
import { CommonModule } from '@angular/common';

@Component({
    standalone: true,
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss'],
    imports: [FooterComponent, ItqaanServiceCardComponent, CommonModule]
})
export class HomeComponent {
  itqaanServices = [
    {
      img: '../../../assets/imgs/cash-waqf.svg',
      title: 'cash waqf',
    route: 'cash-waqf'

    },
    {
      img: '../../../assets/imgs/sadaqah.svg',
      title: 'sadaqa',
    route: 'itqaan-sadaqa'

    },
    {
      img: '../../../assets/imgs/zakaat.svg',
      title: 'itqaan zakaat',
    route: 'itqaan-zakaat'

    },
    {
      img: '../../../assets/imgs/p2p-loan.svg',
      title: 'p2p loan',
    route: 'itqaan-p2p'

    },
    {
      img: '../../../assets/imgs/itqaan-pay.svg',
      title: 'itqaan pay',
    route: 'itqaan-pay'

    },
    {
      img: '../../../assets/imgs/takaful.svg',
      title: 'takaful',
    route: 'itqaan-takful'

    },
    {
      img: '../../../assets/imgs/al-nisaa.svg',
      title: 'al-nisaa',
    route: 'al-nisaa'

    },
    {
      img: '../../../assets/imgs/halal-bnb.svg',
      title: 'halal bnb',
    route: 'itqaan-bnb'

    },
    {
      img: '../../../assets/imgs/atfaal.svg',
      title: 'atfaal',
    route: 'atfaal'

    },
    {
      img: '../../../assets/imgs/pension.svg',
      title: 'pension',
    route: 'itqaan-pension'

    },
    {
      img: '../../../assets/imgs/hajj-umrah.svg',
      title: 'hajj & umrah',
    route: 'itqaan-hajj'

    },
    {
      img: '../../../assets/imgs/transportation.svg',
      title: 'transport',
    route: 'itqaan-transportation'

    }
  ];
  itqaanFree = [
    {
      img: '../../../assets/imgs/cash-waqf.svg',
      title: 'quran',
      route: ''

    },
    {
      img: '../../../assets/imgs/cash-waqf.svg',
      title: 'hadith',
      route: 'hadith'

    },
  ]


}
