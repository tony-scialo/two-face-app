import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { tap } from 'rxjs/operators';
import { HomeActionTypes } from './actions';

@Injectable()
export class HomeEffects {
  constructor(private router: Router, private actions$: Actions) {}

  @Effect({ dispatch: false })
  navToResults = this.actions$.pipe(
    ofType(HomeActionTypes.TRY_IT_CLICK),
    tap(() => {
      this.router.navigate(['showImage']);
    })
  );
}
