import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { map } from 'rxjs/operators';
import { Item } from '../models/Item';

/**
 * Provider for operations with Items
 */
@Injectable({
  providedIn: 'root'
})
export class ItemService {

  constructor( private httpClient: HttpClient) { }

  /**
   * Gets all the items
   * 
   * @param disableRandomError boolean to disable random error on call
   * @returns an Observable with the array of Items
   */
  getItems(disableRandomError?: boolean): Observable<Item[]> {
    // If random error is generated the URL will be setted to a fake value in order to generate an error
    const url = (disableRandomError || this.trueSometimes()) ? '/assets/db/items.json': 'notExistingURL';
      return this.httpClient.get(url)
      .pipe(
        map( items => items as Item[])
      );
  }

/**
 * Help method to fake random errors
 * 
 * @returns true or false randomly
 */
  private trueSometimes(): boolean {
    const val = Math.floor(Math.random() * 2);
    return  val === 0 ? false : true;
}

}
