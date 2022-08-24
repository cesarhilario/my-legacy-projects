import CONSTANTS from '../../utils/constants';
import history from '../../main/history';

const INITIAL_STATE = {
    list: [],
    show: false,
    opened: false
}

export default function(state = INITIAL_STATE, action) {
    switch (action.type) {
        case 'FEED_RECEIVED':  
            return { ...state, list: action.payload.data.list, opened: false, show: false };
        case 'OPENED_IMAGE':
            return { ...state, show: false, opened: true };
        case 'SHOWED_IMAGE': 
            return { ...state, show: true };
        case 'LOGOUT':
            localStorage.removeItem(CONSTANTS.tokenKey);
            history.push('/');
            return state;
        case 'PATH_SET':
            return { ...state, path: action.payload }
        default: 
            return state;
    }
}