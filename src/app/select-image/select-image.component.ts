import { Subscription } from 'rxjs';
import { Store } from '@ngrx/store';
import { Component, OnInit } from '@angular/core';
import { RootStoreState, HomeActions } from '../root-store';

@Component({
  selector: 'app-select-image',
  templateUrl: './select-image.component.html',
  styleUrls: ['./select-image.component.scss']
})
export class SelectImageComponent implements OnInit {
  constructor(private store$: Store<RootStoreState.State>) {}

  ngOnInit() {
    this.store$.dispatch(new HomeActions.GenerateRandomSelects());
  }
}
