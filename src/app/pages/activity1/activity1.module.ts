import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Activity1Component } from './activity1.component';
import { RouterModule, Routes } from '@angular/router';
import { AngularMaterialModule } from 'src/app/config/angular-material.module';
import { ListadoMonitoresComponent } from './listado/listado.component';
import { MonitorComponent } from './monitor/monitor.component';
import { MonitoriaComponent } from './monitoria/monitoria.component';
import { ListadoMonitoriasComponent } from './monitoria/listado/listado.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

const ROUTES: Routes = [
  {
    path: '',
    component: Activity1Component
  }
];

@NgModule({
  declarations: [
    Activity1Component,
    ListadoMonitoresComponent,
    MonitorComponent,
    MonitoriaComponent,
    ListadoMonitoriasComponent,
    ],

  imports: [
    CommonModule,
    AngularMaterialModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(ROUTES)
  ],
  exports: [RouterModule]
})
export class Activity1Module { }
