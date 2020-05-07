import { combineReducers } from 'redux';

import sidebarReducer from "./sidebar";

export default combineReducers({
    sidebar: sidebarReducer
});