import chai from 'chai';
import sinonChai from 'sinon-chai';
import enzymeChai from 'chai-enzyme';
import { jsdom } from 'jsdom';

chai.use(sinonChai);
chai.use(enzymeChai());

global.document = jsdom('<!doctype html><html><body></body></html>');
global.window = global.document.defaultView;
global.navigator = global.window.navigator;
global.location = global.window.location;
