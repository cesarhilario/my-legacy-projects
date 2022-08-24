import axios from 'axios';

import CONSTANTS from '../../utils/constants';

import { showTabs, selectTab } from '../../components/Tab/TabActions';

export function getFeed(category) {
    const URL = (!category) ? `${CONSTANTS.baseURL}/feed` : `${CONSTANTS.baseURL}/feed?category=${category}`;
    const response = axios.get(URL, {
        headers: {
            'Authorization': localStorage.getItem(CONSTANTS.tokenKey)
        }
    });

    return dispatch => {
        dispatch({
            type: 'FEED_RECEIVED',
            payload: response
        });
    }
}

export function openImage() {
    return {
        type: 'OPENED_IMAGE',
        payload: true
    }
}

export function showImage() {
    return {
        type: 'SHOWED_IMAGE',
        payload: true
    }
}

export function logout() {
    return {
        type: 'LOGOUT',
        payload: false
    }
}

export function setPath(path) {
    return {
        type: 'PATH_SET',
        payload: path
    }
}

export function init() {
    console.log('MA OE')
    return [
        selectTab('husky'), 
        showTabs('husky')
    ]
}