import { combineReducers } from "redux";
import firstNameReducer from './firstNameReducer'
import lastNameReducer from './lastNameReducer'
import scoreReducer from './scoreReducer'
const allReducers = combineReducers({
    firstName: firstNameReducer,
    lastName: lastNameReducer,
    score: scoreReducer
})

export default allReducers