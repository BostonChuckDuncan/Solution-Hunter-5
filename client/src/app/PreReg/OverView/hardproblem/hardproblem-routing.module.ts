import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HardProblemComponent } from './hardproblem.component';

const routes: Routes = [{ path: '', component: HardProblemComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HardproblemRoutingModule { }
