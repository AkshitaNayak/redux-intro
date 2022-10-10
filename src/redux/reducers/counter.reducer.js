import { INCREMENT_COUNTER, DECREMENT_COUNTER,RESET_COUNTER } from "../actionType";

const initialState={
    counter:0,
    appName:"Counter App"
}
export const counterReducer=(state=initialState,action)=>{
    //action is an object with 2 properties
    //1. action.Type
    //2. action.Payload:data needs to updated on state
    
    switch(action.type){
        case INCREMENT_COUNTER:
            return{
                ...state,counter:state.counter+1
            }
            case DECREMENT_COUNTER:
                return{
                    ...state,counter:state.counter-1
                }
                case RESET_COUNTER:
                    return{
                        ...state,counter:0
                    }
                    default:
                        return state
    }
}