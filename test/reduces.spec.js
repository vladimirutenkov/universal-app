import { expect } from 'chai';
import { items, actions } from '../client/js/reducers';

describe('items', function() {
    it('moves 0 -> 0', function() {
        const initialState = ['a', 'b', 'c', 'd'];
        const action = actions.move(0, 0);
        const result = items(initialState, action);
        expect(result).to.eql(['a', 'b', 'c', 'd']);
    });

    it('moves 0 -> 1', function() {
        const initialState = ['a', 'b', 'c', 'd'];
        const action = actions.move(0, 1);
        const result = items(initialState, action);
        expect(result).to.eql(['b', 'a', 'c', 'd']);
    });

    it('moves 0 -> 2', function() {
        const initialState = ['a', 'b', 'c', 'd'];
        const action = actions.move(0, 2);
        const result = items(initialState, action);
        expect(result).to.eql(['b', 'c', 'a', 'd']);
    });

    it('moves 0 -> 3', function() {
        const initialState = ['a', 'b', 'c', 'd'];
        const action = actions.move(0, 3);
        const result = items(initialState, action);
        expect(result).to.eql(['b', 'c', 'd', 'a']);
    });

    it('moves 1 -> 1', function() {
        const initialState = ['a', 'b', 'c', 'd'];
        const action = actions.move(1, 1);
        const result = items(initialState, action);
        expect(result).to.eql(['a', 'b', 'c', 'd']);
    });

    it('moves 1 -> 2', function() {
        const initialState = ['a', 'b', 'c', 'd'];
        const action = actions.move(1, 2);
        const result = items(initialState, action);
        expect(result).to.eql(['a', 'c', 'b', 'd']);
    });

    it('moves 1 -> 3', function() {
        const initialState = ['a', 'b', 'c', 'd'];
        const action = actions.move(1, 3);
        const result = items(initialState, action);
        expect(result).to.eql(['a', 'c', 'd', 'b']);
    });

    it('moves 2 -> 2', function() {
        const initialState = ['a', 'b', 'c', 'd'];
        const action = actions.move(2, 2);
        const result = items(initialState, action);
        expect(result).to.eql(['a', 'b', 'c', 'd']);
    });

    it('moves 2 -> 3', function() {
        const initialState = ['a', 'b', 'c', 'd'];
        const action = actions.move(2, 3);
        const result = items(initialState, action);
        expect(result).to.eql(['a', 'b', 'd', 'c']);
    });

    it('moves 3 -> 0', function() {
        const initialState = ['a', 'b', 'c', 'd'];
        const action = actions.move(3, 0);
        const result = items(initialState, action);
        expect(result).to.eql(['d', 'a', 'b', 'c']);
    });

    it('moves 3 -> 1', function() {
        const initialState = ['a', 'b', 'c', 'd'];
        const action = actions.move(3, 1);
        const result = items(initialState, action);
        expect(result).to.eql(['a', 'd', 'b', 'c']);
    });

    it('moves 3 -> 2', function() {
        const initialState = ['a', 'b', 'c', 'd'];
        const action = actions.move(3, 2);
        const result = items(initialState, action);
        expect(result).to.eql(['a', 'b', 'd', 'c']);
    });

    it('moves 3 -> 3', function() {
        const initialState = ['a', 'b', 'c', 'd'];
        const action = actions.move(3, 3);
        const result = items(initialState, action);
        expect(result).to.eql(['a', 'b', 'c', 'd']);
    });

    it('moves 2 -> 0', function() {
        const initialState = ['a', 'b', 'c', 'd'];
        const action = actions.move(2, 0);
        const result = items(initialState, action);
        expect(result).to.eql(['c', 'a', 'b', 'd']);
    });

    it('moves 2 -> 1', function() {
        const initialState = ['a', 'b', 'c', 'd'];
        const action = actions.move(2, 1);
        const result = items(initialState, action);
        expect(result).to.eql(['a', 'c', 'b', 'd']);
    });

    it('moves 1 -> 0', function() {
        const initialState = ['a', 'b', 'c', 'd'];
        const action = actions.move(1, 0);
        const result = items(initialState, action);
        expect(result).to.eql(['b', 'a', 'c', 'd']);
    });
});
