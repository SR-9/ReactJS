import { createStore, combineReducers } from 'redux';

import { homeReducers } from './../screen/home_screen'

const rootReducers = (state = {}, action) => {
    return state;
}


export const store = createStore(combineReducers({
    rootReducers,
    homeReducers
}));
