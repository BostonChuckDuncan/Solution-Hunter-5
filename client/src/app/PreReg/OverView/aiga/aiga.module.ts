import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AigaRoutingModule } from './aiga-routing.module';
import { AiGaComponent } from './aiga.component';


@NgModule({
  declarations: [
    AiGaComponent
  ],
  imports: [
    CommonModule,
    AigaRoutingModule
  ]
})
export class AigaModule { }
