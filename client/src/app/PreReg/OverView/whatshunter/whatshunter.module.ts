import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WhatshunterRoutingModule } from './whatshunter-routing.module';
import { WhatsHunterComponent } from './whatshunter.component';


@NgModule({
  declarations: [
    WhatsHunterComponent
  ],
  imports: [
    CommonModule,
    WhatshunterRoutingModule
  ]
})
export class WhatshunterModule { }
