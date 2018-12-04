import { FILENAMES } from '../shared/data/image-names';
import { Store } from '@ngrx/store';
import { Component, OnInit } from '@angular/core';
import { RootStoreState, HomeSelectors, HomeActions } from '../root-store';

@Component({
  selector: 'app-show-image',
  templateUrl: './show-image.component.html',
  styleUrls: ['./show-image.component.scss']
})
export class ShowImageComponent implements OnInit {
  path = '../../assets/images/';
  randomImg: string;
  timerLength = 1000;

  constructor(private store$: Store<RootStoreState.State>) {}

  ngOnInit() {
    // this.randomImg = this.getRandomImage();
    this.store$.dispatch(new HomeActions.SelectRandomImage());
    this.store$
      .select(HomeSelectors.selectRandomImage)
      .subscribe(img => (this.randomImg = img));

    this.runTimer();
  }

  runTimer() {
    setTimeout(() => {
      this.store$.dispatch(new HomeActions.UserTimerEnd());
    }, this.timerLength);
  }
}
