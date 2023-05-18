import { Route } from "@angular/router";
import { ItqaanQuranComponent } from "./components/itqaan-quran/itqaan-quran.component";
import { ItqaanHadithComponent } from "./components/itqaan-hadith/itqaan-hadith.component";


export const QURAN_ROUTES: Route[] = [
    {path: '', component: ItqaanQuranComponent},
    {path: 'hadith', component: ItqaanHadithComponent},
   
  ];