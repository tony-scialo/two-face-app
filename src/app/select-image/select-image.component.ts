import { Subscription } from 'rxjs';
import { Store } from '@ngrx/store';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { RootStoreState, HomeActions, HomeSelectors } from '../root-store';

@Component({
  selector: 'app-select-image',
  templateUrl: './select-image.component.html',
  styleUrls: ['./select-image.component.scss']
})
export class SelectImageComponent implements OnInit, OnDestroy {
  path = '../../assets/images/';
  selectImgList: string[];
  selectImgListSub: Subscription;

  numAttempts: number;
  numAttemptsSub: Subscription;

  totalNumAllowedAttempts: number;
  totalNumAllowedAttemptsSub: Subscription;

  constructor(private store$: Store<RootStoreState.State>) {}

  ngOnInit() {
    this.store$.dispatch(new HomeActions.GenerateRandomSelects());
    this.selectImgListSub = this.store$
      .select(HomeSelectors.selectSelectImgList)
      .subscribe(img => (this.selectImgList = img));

    this.numAttemptsSub = this.store$
      .select(HomeSelectors.selectNumAttempts)
      .subscribe(na => (this.numAttempts = na));

    this.totalNumAllowedAttemptsSub = this.store$
      .select(HomeSelectors.selectTotalNumAllowedAttempts)
      .subscribe(tna => (this.totalNumAllowedAttempts = tna));
  }

  ngOnDestroy() {
    this.selectImgListSub.unsubscribe();
    this.numAttemptsSub.unsubscribe();
    this.totalNumAllowedAttemptsSub.unsubscribe();
  }

  onImageClick(filename: string) {
    this.store$.dispatch(new HomeActions.UserImageSelection(filename));

    if (this.numAttempts !== this.totalNumAllowedAttempts) {
      this.store$.dispatch(new HomeActions.GoBackToSelectImage());
    } else {
      console.log('tresty');
    }
  }
}
