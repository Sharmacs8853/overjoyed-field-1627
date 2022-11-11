
import thunk from "redux-thunk"
import {reducer as AuthReducer} from "./AuthReducer/reducer"
import {reducer as AppReducer} from "./AppReducer/reducer"
import { legacy_createStore,applyMiddleware,combineReducers } from "redux";


const rootReducer=combineReducers({AppReducer,AuthReducer})
const store=legacy_createStore(rootReducer,applyMiddleware(thunk))


export {store}