import { combineReducers } from 'redux';
import { rrotslice, lrotslice } from './utils';

const INC = 'INC';
const DEC = 'DEC';
const MOVE = 'MOVE';

export const actions = {
    inc: () => ({ type: INC }),
    dec: () => ({ type: DEC }),
    move: (oldPos, newPos) => ({ type: MOVE, payload: { oldPos, newPos } }),
};

export function counter(state = 0, action) {
    switch (action.type) {
        case INC:
            return state + 1;

        case DEC:
            return state - 1;

        default:
            return state;
    }
}

export function items(state = [], action) {
    switch (action.type) {
        case MOVE:
            return move(action.payload.oldPos, action.payload.newPos, state);

        default:
            return state;
    }
}

function move(oldPos, newPos, state) {
    return newPos > oldPos
        ? lrotslice(oldPos, newPos, state)
        : rrotslice(newPos, oldPos, state);
}

export default combineReducers({
    counter,
    items,
});
