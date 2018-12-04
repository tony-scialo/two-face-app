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
  filenameList = FILENAMES;
  randomImg: string;
  timerLength = 1000;

  constructor(private store$: Store<RootStoreState.State>) {}

  ngOnInit() {
    this.randomImg = this.getRandomImage();
    this.runTimer();
  }

  generateRandomNumInRange(min, max): number {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  getRandomImage(): string {
    const t = this.generateRandomNumInRange(0, this.filenameList.length - 1);
    return this.filenameList[t].filename;
  }

  runTimer() {
    setTimeout(() => {
      this.store$.dispatch(new HomeActions.UserTimerEnd());
    }, this.timerLength);
  }
}
