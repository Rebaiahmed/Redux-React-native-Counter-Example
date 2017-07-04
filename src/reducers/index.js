import { ComineReducers} from 'redux' ;
import countReducers from './countReducers.js' ;

//********combije our all reducers in rootReducer*/

const allReducers = combineReducers({
    count : countReducer,
})

export default allReducers ;