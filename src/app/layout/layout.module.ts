import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TopbarComponent } from './topbar/topbar.component';
import { FooterComponent } from './footer/footer.component';
import { RouterModule } from '@angular/router';

const COMPONENTS = [TopbarComponent, FooterComponent];

@NgModule({
  declarations: [...COMPONENTS],
  imports: [CommonModule, RouterModule],
  exports: [...COMPONENTS]
})

export class LayoutModule { }
