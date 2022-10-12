// import { INCREMENT_COUNTER, DECREMENT_COUNTER, RESET_COUNTER, FETCH_RECIPE } from "../actionType";
// import { useState } from "react";

// export const incrementCounter = () =>async (dispatch)  =>{
//     console.log("Increment counter middleware requested")
//     let newName = "Counter Application"
//     dispatch(
//         {
//           type:INCREMENT_COUNTER,
//           payload : newName
//         }
//       )
// }

// export const decrementCounter = () => async (dispatch) => {
//     console.log("Decrement counter middleare requested")
//     let newName = "Counter application using redux"
//     dispatch({
//         type:DECREMENT_COUNTER,
//         payload : newName
//       })
// }


// export const resetThunkCounter = () => async (dispatch) => {
//     console.log("Reset counter middleare requested")
//     dispatch({
//         type:RESET_COUNTER
//       })
// }

// export const fetchRecipe = (keyword) => async (dispatch) => {
//   // let [loading, setLoading] = useState(true);
//   //   let [receipe, setReceipe] = useState([]);
  
//   console.log("Fetch recipe action")
//   let response = await fetch("https://www.themealdb.com/api/json/v1/1/search.php?s="+keyword)
//   let data = await response.json()
//   console.log(data)
//   // setReceipe(data)
//   // setLoading(false)

//   dispatch({
//     type: FETCH_RECIPE,
//     payload: data.meals
//   })


// }




import { INCREMENT_COUNTER, DECREMENT_COUNTER, RESET_COUNTER, FETCH_RECIPE } from "../actionType";

export const incCounter = () => async dispatch => {
    console.log("Increment")
    dispatch({
        type:INCREMENT_COUNTER
      })
}
export const decCounter = () => async dispatch => {
    console.log("Decrement")
    dispatch({
        type:DECREMENT_COUNTER
      })
}
export const resCounter = () => async dispatch => {
    console.log("Reset")
    dispatch({
        type:RESET_COUNTER
      })
}
export const fetchRec = (keyword) => async dispatch => {
    console.log("recipie fetched")
    let response = await fetch("https://www.themealdb.com/api/json/v1/1/search.php?s=" + keyword)
    let data = await response.json()
    console.log(data)
    dispatch({
        type:FETCH_RECIPE,
        payload : data.meals
    })
}