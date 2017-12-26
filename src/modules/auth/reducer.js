import * as types from '../types';
import config from '../../../config';

const initialState = {
    login: null,
    gender: null
};

export default (state = initialState, action) => {
    switch (action.type) {
        case types.LOGIN:
            return {
                ...state,
                login: action.payload.login,
                gender: action.payload.gender
            };
        case types.LOGOUT:
            return {
                ...state,
                login: null,
                gender: null
            };

        default:
            return state
    }
}