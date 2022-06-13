import axios from 'axios';

import CONSTANTS from '../../utils/constants';

export function singup(email) {
    return dispatch => {
        axios.post(`${CONSTANTS.baseURL}/signup`, { email })
             .then(resp => {
                localStorage.setItem(CONSTANTS.tokenKey, resp.data.user.token);
                dispatch({ type: 'TOKEN_RECEIVED', payload: resp.data.user.token })
             })
             .catch(e => dispatch({ type: 'TOKEN_UNRECEIVED', payload: e }));
    }
}

export function init() {
    const token = localStorage.getItem(CONSTANTS.tokenKey);

    if(token) return [
        login(token)
    ]

    else return {
        type: 'UNLOGGED',
        payload: false
    }
}

export function login(token) {
     return {
        type: 'LOGGED',
        payload: token
    }
}
