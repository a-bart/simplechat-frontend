import * as types from '../types';

export const updateMessages = (message) => {
    return dispatch => {
        dispatch({
            type: types.UPDATE_MESSAGE, message
        });
    }
};