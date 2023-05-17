import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'home', loadChildren: () => import('./pages/home/home.routes').then(m => m.HOME_ROUTES) }, 
  { path: 'about', loadChildren: () => import('./pages/about/about.routes').then(m => m.ABOUT_ROUTES) },
  { path: 'services', loadChildren: () => import('./pages/services/services.routes').then(m => m.SERVICES_ROUTES) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
