import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HardproblemRoutingModule } from './hardproblem-routing.module';
import { HardProblemComponent } from './hardproblem.component';


@NgModule({
  declarations: [
    HardProblemComponent
  ],
  imports: [
    CommonModule,
    HardproblemRoutingModule
  ]
})
export class HardProblemModule { }
