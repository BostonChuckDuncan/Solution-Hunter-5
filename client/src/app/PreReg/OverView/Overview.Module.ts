import {NgModule} from '@angular/core';
import {AiGaModule} from './ai-ga/ai-ga.module';
import {FeaturesModule} from './features/features.module';
import {HardProblemModule} from './hard-problem/hard-problem.module';
import { UsingHunterModule } from './using-hunter/using-hunter.module';
import {WhatshunterModule} from './whatshunter/whatshunter.module';

@NgModule({
  declarations: [],
  imports: [
    AiGaModule,
    FeaturesModule,
    HardProblemModule,
    UsingHunterModule,
    WhatshunterModule
],
  exports: [
    AiGaModule,
    FeaturesModule,
    HardProblemModule,
    UsingHunterModule,
    WhatshunterModule
  ]
})
export class OverviewModule {}
