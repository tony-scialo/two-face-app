import { HomeEffects } from './effects';
import { featureReducer } from './reducer';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StoreModule.forFeature('home', featureReducer),
    EffectsModule.forFeature([HomeEffects])
  ]
})
export class HomeStoreModule {}
