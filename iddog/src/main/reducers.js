import { combineReducers } from 'redux';

import LoginReducer from '../pages/Login/LoginReducer';
import FeedReducer from '../pages/Feed/FeedReducer';
import TabReducer from '../components/Tab/TabReducer';

const rootReducer = combineReducers({
    login: LoginReducer,
    feed: FeedReducer,
    tab: TabReducer
});

export default rootReducer;