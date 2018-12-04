import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { RootStoreState, HomeSelectors } from '../root-store';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  userName$: Observable<String>;
  constructor(private store$: Store<RootStoreState.State>) {}

  ngOnInit() {
    this.userName$ = this.store$.select(HomeSelectors.selectUserName);
  }
}
