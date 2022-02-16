import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Activity2Component } from './activity2.component';
import { RouterModule, Routes } from '@angular/router';

const ROUTES: Routes = [
  {
    path: '',
    component: Activity2Component
  }
];

@NgModule({
  declarations: [Activity2Component],
  imports: [
    CommonModule,
    RouterModule.forChild(ROUTES)
  ],
  exports: [RouterModule]
})
export class Activity2Module { }

