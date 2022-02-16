import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const ROUTES: Routes = [
  {
    path: '',
    loadChildren: () => import('./pages/home/home.module').then(m => m.HomeModule)
  },
  {
    path: 'activity1',
    loadChildren: () => import('./pages/activity1/activity1.module').then(m => m.Activity1Module)
  },
  {
    path: 'activity2',
    loadChildren: () => import('./pages/activity2/activity2.module').then(m => m.Activity2Module)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(ROUTES)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
