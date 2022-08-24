import CONSTANTS from '../../utils/constants';
import history from '../../main/history';

const INITIAL_STATE = {
    token: localStorage.getItem(CONSTANTS.tokenKey)
}

export default function(state = INITIAL_STATE, action) {
    switch (action.type) {
        case 'TOKEN_RECEIVED':  
        case 'LOGGED':
            history.push('/feed');
            return { ...state, token: true }
        default: 
            return state;
    }
}