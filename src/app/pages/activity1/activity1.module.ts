import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Activity1Component } from './activity1.component';
import { RouterModule, Routes } from '@angular/router';
import { AngularMaterialModule } from 'src/app/config/angular-material.module';

const ROUTES: Routes = [
  {
    path: '',
    component: Activity1Component
  }
];

@NgModule({
  declarations: [Activity1Component],
  imports: [
    CommonModule,
    AngularMaterialModule,
    RouterModule.forChild(ROUTES)
  ],
  exports: [RouterModule]
})
export class Activity1Module { }
