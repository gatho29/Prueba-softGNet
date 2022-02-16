import { NgModule } from '@angular/core';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  imports: [],
  exports: [
    MatFormFieldModule,
    MatInputModule,
    MatMenuModule,
    MatIconModule
  ]
})
export class AngularMaterialModule { }
