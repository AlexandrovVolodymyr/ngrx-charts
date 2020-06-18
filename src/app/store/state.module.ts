import { NgModule } from '@angular/core';

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { feature } from './actions/main.actions';
import { reducer } from './reducers/main.reducer';
import { MainEffect } from './effects/main.effect';

@NgModule({
  imports: [
    StoreModule.forFeature(feature, reducer),
    EffectsModule.forFeature([MainEffect])
  ],
  providers: [
    MainEffect
  ]
})
export class StateModule {}
