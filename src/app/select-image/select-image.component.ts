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

  constructor(private store$: Store<RootStoreState.State>) {}

  ngOnInit() {
    this.store$.dispatch(new HomeActions.GenerateRandomSelects());
    this.selectImgListSub = this.store$
      .select(HomeSelectors.selectSelectImgList)
      .subscribe(img => (this.selectImgList = img));
  }

  ngOnDestroy() {
    this.selectImgListSub.unsubscribe();
  }

  onImageClick(filename: string) {
    console.log(filename);
  }
}
