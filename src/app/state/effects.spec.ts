import { getItems, getItemsSuccess, getItemsFail } from './actions';
import { ItemService } from './../services/item.service';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { ItemsEffects } from './effects';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable, of, throwError } from 'rxjs';
import { TestBed } from '@angular/core/testing';
import { TestScheduler } from 'rxjs/testing';

describe('ItemsEffects', () => {

    const initialState = {
        list: [{
            title: 'minim consequat',
            description: 'Est reprehenderit excepteur nostrud laboris magna. Culpa magna cupidatat eu reprehenderit exercitation'
        }],
        fetched: undefined
     };
     
    const itemService = jasmine.createSpyObj('itemService', ['getItems']);

    let effects: ItemsEffects;
    let actions: Observable<any>;
    let store: MockStore<any>;
    let testScheduler;

    beforeEach(() => {
        TestBed.configureTestingModule({
          providers: [
            ItemsEffects,
            provideMockStore({ initialState }),
            provideMockActions(() => actions),
            { provide: ItemService, useValue: itemService }
          ]
        });
    
        effects = TestBed.inject(ItemsEffects);
        store = TestBed.inject(MockStore);
        store.setState({});
    
        testScheduler = new TestScheduler((actual, expected) => {
          expect(actual).toEqual(expected);
        });
      });

      it('should be created', () => {
        expect(effects).toBeTruthy();
      });

      describe('getItems$', () => {
        it('should handle getItems action and return all items', () => {

            const items = [];
            const action = getItems();
            const outcome = getItemsSuccess({list: items, fetched: 'fetched'});

            testScheduler.run(({hot, cold, expectObservable}) => {
                actions = hot('-a', {a: action });
                const response = cold('-b', {b: items });
                itemService.getItems.and.returnValue(response);

                expectObservable(effects.getItems$).toBe('--c', {c: outcome });
            });


        });

        it('should handle getItems action error ', () => {

            const error = new Error('Fail') as any;
            const action = getItems();
            const outcome = getItemsFail({ fetched: 'error'});

            testScheduler.run(({hot, cold, expectObservable}) => {
                actions = hot('-a', {a: action });
                const response = cold('-#|',{}, error );
                itemService.getItems.and.returnValue(response);

                expectObservable(effects.getItems$).toBe('--c', {c: outcome });
            });


        });

      });
});


