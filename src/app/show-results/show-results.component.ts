import { Subscription } from 'rxjs';
import { Store } from '@ngrx/store';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { RootStoreState, HomeSelectors } from '../root-store';

@Component({
  selector: 'app-show-results',
  templateUrl: './show-results.component.html',
  styleUrls: ['./show-results.component.scss']
})
export class ShowResultsComponent implements OnInit, OnDestroy {
  numCorrect: number;
  numCorrectSub: Subscription;

  numAllowedAttempts: number;
  numAllowedAttemptsSub: Subscription;

  totalTimeTaken: number;
  totalTimeTakenSub: Subscription;

  avgTimePerGuess = 2.45;

  constructor(private store$: Store<RootStoreState.State>) {}

  ngOnInit() {
    this.numCorrectSub = this.store$
      .select(HomeSelectors.selectNumCorrect)
      .subscribe(nc => (this.numCorrect = nc));

    this.numAllowedAttemptsSub = this.store$
      .select(HomeSelectors.selectTotalNumAllowedAttempts)
      .subscribe(na => (this.numAllowedAttempts = na));

    this.totalTimeTakenSub = this.store$
      .select(HomeSelectors.selectTotalTimeTaken)
      .subscribe(ttt => (this.totalTimeTaken = ttt));
  }

  ngOnDestroy() {
    this.numCorrectSub.unsubscribe();
    this.numAllowedAttemptsSub.unsubscribe();
    this.totalTimeTakenSub.unsubscribe();
  }
}
