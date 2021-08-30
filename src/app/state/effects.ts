import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { of } from 'rxjs/internal/observable/of';
import { catchError, concatMap, map, skip, switchMap, take, tap } from 'rxjs/operators';
import { ItemService } from './../services/item.service';
import
    {
        getItems,
        getItemsFail,
        getItemsSuccess
    } from './actions';


@Injectable()
export class ItemsEffects {

    /**
     * Effect to handle the getItem Action
     */
    getItems$ = createEffect(
        () => this.action$
        .pipe(
            ofType(getItems),
            concatMap( 
                action  => this.itemService.getItems().pipe(
                    // Updating the store with items and fetched status
                    map( items => getItemsSuccess({ list: items, fetched: 'fetched' })),
                    // Updating the store with the error fetched status
                    catchError(error =>  of(getItemsFail({ fetched: 'error' })))
                )
            ),
        ))
    ;


    constructor ( private action$: Actions, private itemService: ItemService) {}
}

