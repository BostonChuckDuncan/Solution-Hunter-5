import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WhatsHunterComponent } from './whatshunter.component';

const routes: Routes = [{ path: '', component: WhatsHunterComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WhatshunterRoutingModule { }
