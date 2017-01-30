import { bindActionCreators } from 'redux';
import { actions } from './reducers';

export const dispatcher = dispatch => ({ actions: bindActionCreators(actions, dispatch) });
