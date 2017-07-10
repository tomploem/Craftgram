import { combineReducers, createStore, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'

const photoReducer = (state={} , actions) => {

    switch (actions.type) {
        case 'SET_PHOTOS': {
            state = {...state, photos : actions.payload}
            return state
        }
        default: return state
    }
}

const reducers = combineReducers({
    photos : photoReducer
});

const initialState = {
    photos: {
        url : "https://scontent-bru2-1.cdninstagram.com/t51.2885-15/e35/17126624_265259360593820_2770359630834958336_n.jpg"
    }
}

export const initStore = () => {
    return createStore(reducers, initialState, applyMiddleware(thunkMiddleware))
}
