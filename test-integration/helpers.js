import { stub } from 'sinon';
import { actions } from '../client/js/reducers';

export class ActionsStub {
    constructor() {
        Object.getOwnPropertyNames(actions).forEach(actionName => {
            this[actionName] = stub();
        });
    }
}
