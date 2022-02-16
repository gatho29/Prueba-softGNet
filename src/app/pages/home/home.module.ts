import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './home.component';


const COMPONENTS = [
  HomePageComponent,
];

const ROUTES: Routes = [
  {
    path: '',
    component: HomePageComponent
  }
]

@NgModule({
  declarations: [...COMPONENTS],
  imports: [
    CommonModule,
    RouterModule.forChild(ROUTES)
  ],
  exports: [...COMPONENTS, RouterModule]
})
export class HomeModule { }
