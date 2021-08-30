import { AppState } from './state';
import { createReducer, on, Action } from '@ngrx/store';
import {
getItems,
getItemsFail,
getItemsSuccess,
logOut,
} from './actions'

/**
 * Initial state for the reducer
 */
export const initialState: AppState = { 
    list: [],
    fetched: undefined
};

/**
 * Reducer to manage the items state
 */
const itemsReducer = createReducer<AppState>(
    initialState,

    // when Logout action is dispatched the state must be the initial state
    on(logOut, state => ({...initialState})),

    // when getItems action is dispatched the state musn't change
    on(getItems, state => ({...state })),

    // when getItemsSuccess action is dispatched the state must be updated with the list of items and the new fetched status
    on(getItemsSuccess, (state, {list, fetched}) =>  ({ ...state, list: [...list], fetched: fetched })),

    // when getItemsSuccess action is dispatched the state must be updated with the new fetched status
    on(getItemsFail, (state, {fetched}) => ({...state, fetched: fetched })),
)

export function reducer(state: AppState, action: Action) {
    return itemsReducer(state, action);
  }