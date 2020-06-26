import { combineReducers } from 'redux'

import passwordReducer from './password-reducer'

// store holds the array of passwords, handles changes with passwordReducer
export default combineReducers({
    passwords: passwordReducer
})