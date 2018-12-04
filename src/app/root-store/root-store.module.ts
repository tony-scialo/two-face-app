import { StoreModule } from '@ngrx/store';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeStoreModule } from './home-store/home-store.module';

@NgModule({
  declarations: [],
  imports: [CommonModule, HomeStoreModule, StoreModule.forRoot({})]
})
export class RootStoreModule {}