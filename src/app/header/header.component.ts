import { Store } from '@ngrx/store';
import { Component, OnInit } from '@angular/core';
import { RootStoreState, HomeActions } from '../root-store';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  constructor(private store$: Store<RootStoreState.State>) {}

  ngOnInit() {}

  logoSelected() {
    this.store$.dispatch(new HomeActions.HeaderLogoSelected());
  }
}
