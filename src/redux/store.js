import { createStore, combineReducers,applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { counterReducer } from "./reducers/counter.reducer";
import { composeWithDevTools } from "redux-devtools-extension";

const rootReducer = combineReducers({
    counter :counterReducer
})

const store = createStore(rootReducer,{},composeWithDevTools(applyMiddleware(thunk)))

export default store