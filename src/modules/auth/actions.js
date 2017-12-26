import * as types from '../types';

export const isLogined = () => {
    return (dispatch, getState) => {
        return !!getState().auth.login;
    }
};

export const signIn = data => {
    console.log('in signIn: ', data);
    return (dispatch) => {
        dispatch({
            type: types.LOGIN, payload: data
        });
    }
};

export const signOut = () => {
    return (dispatch) => {
        dispatch({
            type: types.LOGOUT
        });
    }
};