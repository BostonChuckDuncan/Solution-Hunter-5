import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsingHunterRoutingModule } from './using-hunter-routing.module';
import { UsingHunterComponent } from './using-hunter.component';


@NgModule({
  declarations: [
    UsingHunterComponent
  ],
  imports: [
    CommonModule,
    UsingHunterRoutingModule
  ]
})
export class UsingHunterModule { }
