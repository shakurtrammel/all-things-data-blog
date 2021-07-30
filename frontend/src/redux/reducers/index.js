import { combineReducers } from 'redux'
import totalState from './articlesReducer'


// article reducer: focused on the individual article objects in state.
const rootReducer = combineReducers({
    totalState: totalState
})


export default rootReducer