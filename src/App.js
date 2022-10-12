//my code but it doesnt work///////////////////////////////////////////////////////////////////////////


// import { useState } from 'react';
// import { useSelector, useDispatch } from 'react-redux';
// import './App.css';
// import { DECREMENT_COUNTER, INCREMENT_COUNTER, RESET_COUNTER } from './redux/actionType';
// import { incrementCounter,decrementCounter, resetThunkCounter, fetchRecipe } from './redux/actions/counter.action';
// function App() {

//   // let [counter, setCounter] = useState(0)


//   let {counter} = useSelector(state => state)
//   const dispatch = useDispatch()

//   console.log('Counter is ',counter)

//   let increaseCounter = () => {
//     //function for increment
//     // setCounter(counter + 1)
//     dispatch(incrementCounter())

    
//   }

//   let decreaseCounter = () => {
//     //function for decrement
//     // setCounter(counter - 1)
//     dispatch(decrementCounter())

    
//   }

//   let resetCounter = () => {
//     // setCounter(0)
//     dispatch(resetThunkCounter())
    
//   }

//   let fetchData = () => {
//     // setCounter(0)
//     dispatch(fetchRecipe("chicken"))
    
//   }

//   return (
//     // <>
//     //   <div style={{width:'400px',margin: '0 auto'}}>
//     //     <div style={{ display: 'flex', justifyContent: 'space-between', width: '400px', margin: '0 auto' }}>
//     //     {/* <h1>{counter.appName}</h1> */}
//     //       <button onClick={increaseCounter}>Increment Counter</button>
//     //       <h1>{counter.counter}</h1>
//     //       <button onClick={decreaseCounter}>Decrement counter</button>


//     //     </div>

//     //     <button onClick={resetCounter} style={{ marginTop: '40px', width: '100%' }}>Reset</button>
//     //   </div>
//     // </>
//     <>
    
//     <h1>{counter.appName}</h1>
    
//        <button onClick={increaseCounter}>Inc</button>
     
//        <h1>{counter.counter}</h1>
//        <button onClick={decreaseCounter}>Dec</button>
//        <button onClick={resetCounter}>Reset</button>
//        <button onClick={fetchData}>Fetch Recipe</button>

//        {/* <div>
//         {counter.recipe.map((meal)=>{
//           return(
//             <div>
//                 <h1>{meal.strmeal}</h1>
//             </div>
//           )
//         })
//       }
//        </div> */}


// <div>
//         {counter.recipie instanceof Array ? counter.recipie.map((meal, index)=>{
//           return(
//             <div key={index}>
//               <h1>{meal.strMeal}</h1>
//               <img src={meal.strMealThumb} style={{width:"200px", height:"200px"}}/>
//             </div>
//           )
//         }): null}
//       </div>
//     </>



//   );
// }

// export default App;


//////////////////////////////////////////////////////////////////Not my code but it works////////////////////////////////////////////////////////


// import { useState, useEffect } from 'react';
// import React from 'react';
// import { useSelector, useDispatch } from 'react-redux';
// import { INCREMENT_COUNTER, DECREMENT_COUNTER, RESET_COUNTER } from './redux/actionType';
// import './App.css';
// import { decCounter, incCounter, resCounter, fetchRec } from './redux/actions/counter.action';

// function App() {
//   let {counter} = useSelector(state => state)
//   const dispatch = useDispatch()

//   let [search, setSearch] = useState('');

//   const inc = () => {
//     dispatch(incCounter())
//   }
//   const dec = () => {
//     dispatch(decCounter())
//   }
//   const res = () => {
//     dispatch(resCounter())
//   }
//   const fetchData = () => {
//     dispatch(fetchRec(search))
//   }
//   const handleChange = (event) => {setSearch(event.target.value)} 
//   return (
//     <div className="App">
//       <button onClick={inc}>Increment</button>
//       <div>{counter.counter}</div>
//       <button onClick={dec}>Decrement</button>
//       <button onClick={res}>Reset</button>
//       <input type="text" onChange={handleChange} value={search} />
//       <button onClick={fetchData}>Fetch recipie</button>
//       <div>
//         {counter.recipie instanceof Array ? counter.recipie.map((meal, index)=>{
//           return(
//             <div key={index}>
//               <h1>{meal.strMeal}</h1>
//               <img src={meal.strMealThumb} style={{width:"200px", height:"200px"}}/>
//             </div>
//           )
//         }): null}
//       </div>
//     </div>
//   );
// }

// export default App;

/////////////////////////////////////////////////////////////////////////////////////////////////




// import React, {useEffect} from 'react'

// export default function App() {
//   let url = "http://localhost:3000/user"

//   let addUser = async () => {
//     let response = await fetch(url,{
//       method:"POST",
//       body:JSON.stringify(
//         {
//           id: '3',
//           name: 'userThree',
//           age:12,
//         }
//       ),
//       headers:{
//         'Content-type':'application/json; charset=UTF-8',
//       },
//     })

//     let data = await response.json()
//     console.log(data)
//   }
//   return (
//     <div>
//       <button onClick={addUser}>Add user</button>
//     </div>
//   )
// }


/////////////////////////////////////////////////////////////////////////////////////////
//Todo code



import React from 'react'
import { useEffect, useState } from 'react'

export default function App() {
  let url = "http://localhost:3000/todos/"
  let [todos,setTodos] = useState([])
  let [loading, setLoading] = useState(true)
  let [newTodo,setNewTodo] = useState("")

  let getAllTodos = async ()=>{
    let response = await fetch(url)
    let data = await response.json()
    console.log(data)
    setTodos(data)
    setLoading(false)
  }

  let addTodo = async(event)=>{
    event.preventDefault()
    console.log("Adding New todo", newTodo)
    let todoToAdd = {
      "title" : newTodo,
      "status":false
    }


    let response = await fetch(url,{
      method:"POST",
      body:JSON.stringify(todoToAdd),
      headers: {
        "Content-Type" : "application/json"
      },
    })

    let data = await response.json()
    console.log(data)
    setNewTodo("")
    getAllTodos()
  }

  let deleteTodo = async(id)=>{
    console.log("Deleting todo with id",id)
    let response = await fetch(url+id,{
      method:"DELETE",
      headers: {
        "Content-Type":"application/json"
      }
    })

    let data = await response.json()
    console.log(data)
    getAllTodos()
  }

  useEffect(()=>{
    getAllTodos()
  },[])

  return (
    <div>
      {
        loading?("Fetching Todos"):(
          todos.map((todo)=>{
            return(
              <Todo todo={todo} key={todo.id} deleteTodo={deleteTodo}/>
            )
          })
        )
      }

      <>
      <h1>Add new Todo</h1>
      <form onSubmit={addTodo}>
        <input type="text" value={newTodo} onChange={(event)=>{
          setNewTodo(event.target.value)
        }}/>

        <button>Add new todo</button>

      </form>
      </>
    </div>
  )
}

function Todo (props){
  

  return(
    <>
    <h1>{props.todo.title}</h1>
    <p onClick={()=>{
      props.deleteTodo(props.todo.id)
    }}>Delete todo</p>
    </>
  )
}
