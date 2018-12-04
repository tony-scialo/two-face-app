import { Subscription } from 'rxjs';
import { Store } from '@ngrx/store';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { RootStoreState, HomeSelectors, HomeActions } from '../root-store';

@Component({
  selector: 'app-show-image',
  templateUrl: './show-image.component.html',
  styleUrls: ['./show-image.component.scss']
})
export class ShowImageComponent implements OnInit, OnDestroy {
  path = '../../assets/images/';
  randomImg: string;
  timerLength = 1000;

  randomImgSub: Subscription;
  timerLengthSub: Subscription;

  constructor(private store$: Store<RootStoreState.State>) {}

  ngOnInit() {
    this.store$.dispatch(new HomeActions.SelectRandomImage());
    this.randomImgSub = this.store$
      .select(HomeSelectors.selectRandomImage)
      .subscribe(img => (this.randomImg = img));

    this.timerLengthSub = this.store$
      .select(HomeSelectors.selectTimerLength)
      .subscribe(tl => (this.timerLength = tl));

    this.runTimer();
  }

  ngOnDestroy() {
    this.randomImgSub.unsubscribe();
    this.timerLengthSub.unsubscribe();
  }

  runTimer() {
    setTimeout(() => {
      this.store$.dispatch(new HomeActions.UserTimerEnd());
    }, this.timerLength);
  }
}
