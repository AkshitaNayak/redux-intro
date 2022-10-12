import { INCREMENT_COUNTER, DECREMENT_COUNTER, RESET_COUNTER, FETCH_RECIPE } from "../actionType";

// const initialState = {
//     counter: 0,
//     appName: "Counter App",
//     appCreator: "Akshita Nayak",
//     recipe: []

// }
// export const counterReducer = (state = initialState, action) => {
//     //action is an object with 2 properties
//     //1. action.Type
//     //2. action.Payload:data needs to updated on state

//     switch (action.type) {
//         case INCREMENT_COUNTER:
//             return {
//                 ...state, counter: state.counter + 1
//                 ,
//                 appName: action.payload
//             }
//         case DECREMENT_COUNTER:
//             return {
//                 ...state, counter: state.counter - 1,
//                 appName: action.payload
//             }
//         case RESET_COUNTER:
//             return {
//                 ...state, counter: 0
//             }
//         case FETCH_RECIPE:
//             return{
//                 state, recipe:action.payload
//             }
//         default:
//             return state
//     }
// }


// import { INCREMENT_COUNTER, DECREMENT_COUNTER, RESET_COUNTER, FETCH_RECIPIE } from "./ActionType";
const initialState = {
    counter : 0,
    Writer : "Aakash",
    recipie : [],
}

export const counterReducer = (state = initialState, action) => {
    switch(action.type){
        case INCREMENT_COUNTER:
            return{
                ...state,
                counter:state.counter + 1
            }
        case DECREMENT_COUNTER:
            return{
                ...state,
                counter:state.counter - 1
            }
        case RESET_COUNTER:
            return{
                ...state,
                counter:0
            }
        case FETCH_RECIPE:
            return{
                ...state,
                recipie:action.payload
            }
        default:
            return state
    }
}