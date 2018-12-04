import { Store } from '@ngrx/store';
import { Component, OnInit } from '@angular/core';
import { RootStoreState, HomeSelectors } from '../root-store';

@Component({
  selector: 'app-show-image',
  templateUrl: './show-image.component.html',
  styleUrls: ['./show-image.component.scss']
})
export class ShowImageComponent implements OnInit {
  constructor(private store$: Store<RootStoreState.State>) {}

  ngOnInit() {
    this.store$
      .select(HomeSelectors.selectUserName)
      .subscribe(name => console.log(name));
  }
}
