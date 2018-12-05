import { environment } from './../environments/environment';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RootStoreModule } from './root-store/root-store.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { FormsModule } from '@angular/forms';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  MatFormFieldModule,
  MatInputModule,
  MatButtonModule
} from '@angular/material';
import { ShowImageComponent } from './show-image/show-image.component';
import { HeaderComponent } from './header/header.component';
import { SelectImageComponent } from './select-image/select-image.component';
import { ShowResultsComponent } from './show-results/show-results.component';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ShowImageComponent,
    HeaderComponent,
    SelectImageComponent,
    ShowResultsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    RootStoreModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    environment.imports,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
