import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'home', loadChildren: () => import('./pages/home/home.routes').then(m => m.HOME_ROUTES) }, 
  { path: 'about', loadChildren: () => import('./pages/about/about.routes').then(m => m.ABOUT_ROUTES) },
  { path: 'services', loadChildren: () => import('./pages/services/services.routes').then(m => m.SERVICES_ROUTES) },
  { path: 'quran', loadChildren: () => import('./pages/quran/quran.routes').then(m => m.QURAN_ROUTES) },
  { path: 'terms', loadChildren: () => import('./pages/terms/terms.routes').then(m => m.TERMS_ROUTES) },
  { path: 'shop', loadChildren: () => import('./pages/shop/shop.routes').then(m => m.SHOP_ROUTES) },
  { path: 'contact', loadChildren: () => import('./pages/contact/contact.routes').then(m => m.CONTACT_ROUTES) },
  {path: '**', redirectTo:'home'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
