import { isEmpty as empty, last, init, head, tail, slice, take, takeRight } from 'lodash/fp';

export const lrotslice = (start, end, a) => empty(a)
    ? a
    : [...take(start, a), ...lrot(slice(start, end + 1, a)), ...takeRight(a.length - end - 1, a)];

export const rrotslice = (start, end, a) => empty(a)
    ? a
    : [...take(start, a), ...rrot(slice(start, end + 1, a)), ...takeRight(a.length - end - 1, a)];

export const lrot = a => empty(a) ? a : [...tail(a), head(a)];
export const rrot = a => empty(a) ? a : [last(a), ...init(a)];
