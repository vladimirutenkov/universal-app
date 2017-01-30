import { expect } from 'chai';
import { rrot, lrot, rrotslice, lrotslice } from '../client/js/utils';

describe('rrot', function() {
    it('of an empty array is also empty', function() {
        const result = rrot([]);
        expect(result).to.eql([]);
    });

    it('performs a single right rotation in the given array', function() {
        const arr = ['a', 'b', 'c', 'd'];
        const result = rrot(arr);
        expect(result).to.eql(['d', 'a', 'b', 'c']);
    });
});

describe('lrot', function() {
    it('of an empty array is also empty', function() {
        const result = lrot([]);
        expect(result).to.eql([]);
    });

    it('performs a single left rotation in the given array', function() {
        const arr = ['a', 'b', 'c', 'd'];
        const result = lrot(arr);
        expect(result).to.eql(['b', 'c', 'd', 'a']);
    });
});

describe('rrotslice', function() {
    it('of an empty array is also empty', function() {
        const result = rrotslice(0, 2, []);
        expect(result).to.eql([]);
    });

    it('performs a single right rotation between the given indices in the given array', function() {
        const arr = ['a', 'b', 'c', 'd'];
        const result = rrotslice(0, 2, arr);
        expect(result).to.eql(['c', 'a', 'b', 'd']);
    });
});

describe('lrotslice', function() {
    it('of an empty array is also empty', function() {
        const result = lrotslice(0, 2, []);
        expect(result).to.eql([]);
    });

    it('performs a single left rotation between the given indices in the given array', function() {
        const arr = ['a', 'b', 'c', 'd'];
        const result = lrotslice(1, 3, arr);
        expect(result).to.eql(['a', 'c', 'd', 'b']);
    });
});
