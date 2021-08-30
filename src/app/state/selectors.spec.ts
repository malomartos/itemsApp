import * as fromSelectors from './selectors';

describe('Selectors', () => {

    const initialState = {
        list: [{
            title: 'minim consequat',
            description: 'Est reprehenderit excepteur nostrud laboris magna. Culpa magna cupidatat eu reprehenderit exercitation'
        }],
        fetched: 'fetched'
     };
    

    it('should select all items', () => {
        const result = fromSelectors.selectItemsList.projector(initialState);

        expect(result.length).toBe(1);
    });

    it('should select the fetch status', () => {
        const result = fromSelectors.selectFetchStatus.projector(initialState);

        expect(result).toBe('fetched');
    });
});