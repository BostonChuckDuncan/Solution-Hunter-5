import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SplashPageComponent } from './SplashPage/SplashPage.component';
import { SplashPagePostComponent } from './SplashPagePost/SplashPagePost/SplashPagePost.component';

const routes: Routes = [
  { path: '', redirectTo: 'splashPage', pathMatch: 'full' },
  { path: 'splashPage', component: SplashPageComponent, pathMatch: 'full' },
  { path: 'splashPagePost', component: SplashPagePostComponent, pathMatch: 'full' },

  {
    path: 'whatshunter',
    loadChildren: () => import('./PreReg/OverView/whatshunter/whatshunter.module')
      .then(m => m.WhatshunterModule)
  },
  {
    path: 'usinghunter',
    loadChildren: () => import('./PreReg/OverView/using-hunter/using-hunter.module')
      .then(m => m.UsingHunterModule)
  },
  {
    path: 'consulting',
    loadChildren: () => import('./PreReg/Contacts/consulting/consulting.module')
      .then(m => m.ConsultingModule)
  },
  {
    path: 'hardproblem',
    loadChildren: () => import('./PreReg/OverView/hardproblem/hardproblem.module')
      .then(m => m.HardProblemModule)
  },
  {
    path: 'features',
    loadChildren: () => import('./PreReg/OverView/features/features.module')
      .then(m => m.FeaturesModule) },
  { 
    path: 'aiga',
    loadChildren: () => import('./PreReg/OverView/aiga/aiga.module')
      .then(m => m.AigaModule) 
  },
  { 
    path: 'examples', 
    loadChildren: () => import('./PreReg/Guides/examples/examples.module')
      .then(m => m.ExamplesModule) 
  },
  { 
    path: 'tutorials', 
    loadChildren: () => import('./PreReg/Guides/tutorials/tutorials.module')
      .then(m => m.TutorialsModule) 
  },
  { 
    path: 'aboutResearch', 
    loadChildren: () => import('./PreReg/Guides/research/research.module')
      .then(m => m.ResearchModule) 
  },
  { 
    path: 'aboutUs', 
    loadChildren: () => import('./PreReg/Contacts/about-us/about-us.module')
      .then(m => m.AboutUsModule) 
  },
  { 
    path: 'contactUs', 
    loadChildren: () => import('./PreReg/Contacts/contact-us/contact-us.module')
      .then(m => m.ContactUsModule) 
  },
  { path: 'support', loadChildren: () => import('./PreReg/Contacts/support/support.module').then(m => m.SupportModule) },
  { path: 'consulting', loadChildren: () => import('./PreReg/Contacts/consulting/consulting.module').then(m => m.ConsultingModule) },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
