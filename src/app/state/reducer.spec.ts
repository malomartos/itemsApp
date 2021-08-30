import { getItems, getItemsFail, getItemsSuccess, logOut } from './actions';
import * as fromReducer from './reducer';

describe('ItemsReducer', () => {

    describe('unknown action', () => {
        it('should return the default state', () => {

            const {initialState} = fromReducer;
            const action = {
                type: 'Unknown'
            };

            const state = fromReducer.reducer(initialState, action);

            expect(state).toBe(initialState);
        });
    });

    describe('logOut action', () =>{
        it('should update the state in an inmutable way ', () => {
            const {initialState} = fromReducer;

            const action = logOut();
            const state = fromReducer.reducer(initialState, action);

            expect(state).toEqual(initialState);
            expect(state).not.toBe(initialState);
        });
    });


    describe('getItems action', () =>{
        it('should update the state in an inmutable way ', () => {
            const {initialState} = fromReducer;
            const newState = {...initialState };

            const action = getItems();
            const state = fromReducer.reducer(initialState, action);

            expect(state).toEqual(newState);
            expect(state).not.toBe(newState);
        });
    });

    describe('getItemsSuccess action', () =>{
        it('should update the state in an inmutable way ', () => {
            const {initialState} = fromReducer;
            const newState = {
                list: [{
                    title: 'minim consequat',
                    description: 'Est reprehenderit excepteur nostrud laboris magna. Culpa magna cupidatat eu reprehenderit exercitation'
                }],
                fetched: 'fetched'
             };

            const action = getItemsSuccess({list: newState.list, fetched: 'fetched'});
            const state = fromReducer.reducer(initialState, action);

            expect(state.list.length).toBe(1);
            expect(state).not.toEqual(initialState);
        });
    });

    describe('getItemsFail action', () =>{
        it('should update the state in an inmutable way ', ()=>{
            const {initialState} = fromReducer;

            const action = getItemsFail({ fetched: 'error'});
            const state = fromReducer.reducer(initialState, action);

            expect(state.fetched).toBe('error');
            expect(state).not.toEqual(initialState);
        });
    });



});