import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import messages from './messages/reducer';
import auth from './auth/reducer';

export default combineReducers({
    router: routerReducer,
    messages,
    auth
})