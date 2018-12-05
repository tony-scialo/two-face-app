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

  userTimeStart: number;

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

    this.userTimeStart = new Date().getTime();
  }

  ngOnDestroy() {
    this.selectImgListSub.unsubscribe();
    this.numAttemptsSub.unsubscribe();
    this.totalNumAllowedAttemptsSub.unsubscribe();
  }

  onImageClick(filename: string) {
    const userEndTime = new Date().getTime();

    const userImageSelect = {
      filename: filename,
      userStartTime: userEndTime - this.userTimeStart
    };

    this.store$.dispatch(new HomeActions.UserImageSelection(userImageSelect));

    if (this.numAttempts !== this.totalNumAllowedAttempts) {
      this.store$.dispatch(new HomeActions.GoBackToSelectImage());
    } else {
      this.store$.dispatch(new HomeActions.GoToShowResults());
    }
  }
}
