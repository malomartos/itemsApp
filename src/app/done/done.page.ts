import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs/internal/Observable';
import { Item } from '../models/Item';
import { logOut } from '../state/actions';
import { selectItemsList } from './../state/selectors';

/**
 * Component for displaying the items
 */
@Component({
  selector: 'app-done',
  templateUrl: './done.page.html',
  styleUrls: ['./done.page.scss'],
})
export class DonePage {

  /**
   * Observable to show the items list
   */
  itemList$: Observable<Item[]>;


  constructor(  private router: Router,
                private store: Store
              ) {

    // Fetching the items from the store
    this.itemList$ = this.store.pipe( select(selectItemsList) );
  }
         
/**
 * Function to handle click event from Logout button
 */
logOut() {
  
  // Dispatching the Logout Action
  this.store.dispatch(logOut());

  // Redirection to login page
  this.router.navigate(['/login']);
}
}
