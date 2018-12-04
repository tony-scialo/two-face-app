import { Component, OnInit, OnDestroy } from '@angular/core';
import { Store } from '@ngrx/store';
import { RootStoreState, HomeSelectors, HomeActions } from '../root-store';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {
  userName: string;
  userNameSub: Subscription;

  constructor(private store$: Store<RootStoreState.State>) {}

  ngOnInit() {
    this.userNameSub = this.store$
      .select(HomeSelectors.selectUserName)
      .subscribe(name => (this.userName = name));
  }

  ngOnDestroy() {
    this.userNameSub.unsubscribe();
  }

  onTryIt() {
    this.store$.dispatch(new HomeActions.TryItClick());
  }
}
