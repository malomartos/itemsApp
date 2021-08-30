import { FetchStatus } from './state';
import { createAction, props } from '@ngrx/store';
import { Item } from '../models/Item';

/**
 * Action dispatched on Done page to navigate to login page and restore the store to it's inital value
 */
export const logOut = createAction('[Done page] Log out');

/**
 * Action dispatched on Loading Page to get the items
 */
export const getItems = createAction('[Loading Page] Get Items');

/**
 * Action dispatched on Loading Page to update the store with the fetched items 
 */
export const getItemsSuccess = createAction('[Loading Page] Get Items success', props<{list: Array<Item>, fetched: FetchStatus}>() );

/**
 * Action dispatched on Loading Page to update the store with the error on fetching the items
 */
export const getItemsFail = createAction('[Loading Page] Get Items fail', props<{ fetched: FetchStatus }>());

