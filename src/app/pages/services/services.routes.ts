import { Route } from "@angular/router";
import { CashWaqfComponent } from "./components/cash-waqf/cash-waqf.component";
import { AlNisaaComponent } from "./components/al-nisaa/al-nisaa.component";
import { AtFaalComponent } from "./components/at-faal/at-faal.component";
import { ItqaanBnbComponent } from "./components/itqaan-bnb/itqaan-bnb.component";
import { ItqaanHajjComponent } from "./components/itqaan-hajj/itqaan-hajj.component";
import { ItqaanP2pComponent } from "./components/itqaan-p2p/itqaan-p2p.component";
import { ItqaanPayComponent } from "./components/itqaan-pay/itqaan-pay.component";
import { ItqaanPensionComponent } from "./components/itqaan-pension/itqaan-pension.component";
import { ItqaanSadaqaComponent } from "./components/itqaan-sadaqa/itqaan-sadaqa.component";
import { ItqaanTransportationComponent } from "./components/itqaan-transportation/itqaan-transportation.component";
import { ItqaanZakaatComponent } from "./components/itqaan-zakaat/itqaan-zakaat.component";
import { TakafulComponent } from "./components/takaful/takaful.component";
import { CashwaqfInstitutionComponent } from "./components/cash-waqf/components/cashwaqf-istitution/cashwaqf-institution.component";
import { SadaqaInstitutionComponent } from "./components/itqaan-sadaqa/components/sadaqa-institution/sadaqa-institution.component";
import { DailASandaInstitutionComponent } from "./components/itqaan-sadaqa/components/dail-a-sanda-institution/dail-a-sanda-institution.component";

export const SERVICES_ROUTES: Route[] = [
    {path: 'cash-waqf', component: CashWaqfComponent},
    {path: 'al-nisaa', component: AlNisaaComponent},
    {path: 'atfaal', component: AtFaalComponent},
    {path: 'itqaan-bnb', component: ItqaanBnbComponent},
    {path: 'itqaan-hajj', component: ItqaanHajjComponent},
    {path: 'itqaan-p2p', component: ItqaanP2pComponent},
    {path: 'itqaan-pay', component: ItqaanPayComponent},
    {path: 'itqaan-pension', component: ItqaanPensionComponent},
    {path: 'itqaan-sadaqa', component: ItqaanSadaqaComponent},
    {path: 'itqaan-transportation', component: ItqaanTransportationComponent},
    {path: 'itqaan-zakaat', component: ItqaanZakaatComponent},
    {path: 'itqaan-takful', component: TakafulComponent},
    {path: 'cash-waqf/institutional-beneficiary', component: CashwaqfInstitutionComponent},
    {path: 'itqaan-sadaqa/sadaqa-beneficiary', component: SadaqaInstitutionComponent},
    {path: 'itqaan-sadaqa/dial-a-sanda', component: DailASandaInstitutionComponent},
  ];