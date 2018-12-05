import { ShowResultsComponent } from './show-results/show-results.component';
import { SelectImageComponent } from './select-image/select-image.component';
import { ShowImageComponent } from './show-image/show-image.component';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'showImage', component: ShowImageComponent },
  { path: 'selectImage', component: SelectImageComponent },
  { path: 'showResults', component: ShowResultsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
