import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsingHunterComponent } from './using-hunter.component';

const routes: Routes = [{ path: '', component: UsingHunterComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsingHunterRoutingModule { }
