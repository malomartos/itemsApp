import { createFeatureSelector, createSelector } from "@ngrx/store";
import { AppState } from "./state";

/**
 * Feature Selector for items
 */
export const featureItems = createFeatureSelector<AppState>('items')

/**
 * Selector for fetched status
 */
export const selectFetchStatus = createSelector(
    featureItems,
    items => items.fetched

)

/**
 * Selector for all the items list
 */
export const selectItemsList =  createSelector(
    featureItems,
    (items) => items.list
)
