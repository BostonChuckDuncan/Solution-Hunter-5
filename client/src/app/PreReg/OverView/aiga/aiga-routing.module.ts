import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AiGaComponent } from './aiga.component';

const routes: Routes = [{ path: '', component: AiGaComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AigaRoutingModule { }
