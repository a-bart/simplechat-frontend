import io from 'socket.io-client';
import * as types from '../types';
import config from '../../../config';

const initialState = {
    messages: [],
    socket: io.connect(config.BACKEND_URL)
};

export default (state = initialState, action) => {
    switch (action.type) {
        case types.UPDATE_MESSAGE:
            return {
                ...state,
                // messages: [...state.messages, action.message]
                messages: state.messages.concat([action.message])
            };
        case types.CLEAR_MESSAGE:
            return {
                ...state,
                messages: []
            };

        default:
            return state
    }
}