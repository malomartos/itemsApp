import { Item } from "../models/Item";

/**
 * Type for FetchedStatus
 */
export type FetchStatus = 'fetched' | 'error';

/**
 * Items state
 */
export class AppState {
    list: Array<Item>;
    fetched: FetchStatus;
}