import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SplashPageComponent } from './SplashPage.component';
import { NavBarModule } from '../navBar/navBar.module';


@NgModule({
  imports: [
    CommonModule,
    NavBarModule,
  ],
  declarations: [
    SplashPageComponent
  ]
})
export class SplashPageModule { }
