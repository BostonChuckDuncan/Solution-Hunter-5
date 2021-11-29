import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TutorialsComponent } from './tutorials/tutorials.component';
import { ResearchComponent } from './research/research.component';
import { ExamplesComponent } from './examples/examples.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    ExamplesComponent,
    TutorialsComponent,
    ResearchComponent
  ],
  exports: [
    ExamplesComponent,
    TutorialsComponent,
    ResearchComponent
  ]
})
export class GuidesModule { }
