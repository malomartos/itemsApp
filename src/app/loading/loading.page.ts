import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { delay, filter, take } from 'rxjs/operators';
import { selectFetchStatus } from '../state/selectors';
import { FetchStatus } from '../state/state';
import { getItems } from './../state/actions';
/**
 * Component for managing the loading of items
 */
@Component({
  selector: 'app-loading',
  templateUrl: './loading.page.html',
  styleUrls: ['./loading.page.scss'],
})
export class LoadingPage {

  constructor(  private router: Router,
                private store: Store) {}

  /**
   * Method called after routing is finished
   */
  ionViewDidEnter() {
    
    // subscription to the fetch status of items
    this.store.select(selectFetchStatus)
    .pipe(
      // dicard undefined or null values
      filter(fetched => !!fetched),
      // delay required on specification
      delay(2000),
      // we take only one value, then we unsubscribe
      take(1)
    )
    .subscribe(
      (fetched: FetchStatus) => {
        
        // navigation handling depending on fetchStatus
        const navigateURL = fetched === 'error' ? '/error': '/done';
        this.router.navigate([navigateURL]);

      }
    );

    // Dispatching of getItems action.
    this.store.dispatch(getItems());

  }


}
