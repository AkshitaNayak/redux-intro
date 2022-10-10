import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import './App.css';
import { DECREMENT_COUNTER, INCREMENT_COUNTER, RESET_COUNTER } from './redux/actionType';
import { incrementCounter,decrementCounter, resetThunkCounter } from './redux/actions/counter.action';
function App() {

  // let [counter, setCounter] = useState(0)


  let {counter} = useSelector(state => state)
  const dispatch = useDispatch()

  console.log('Counter is ',counter)

  let increaseCounter = () => {
    //function for increment
    // setCounter(counter + 1)
    dispatch(incrementCounter())

    
  }

  let decreaseCounter = () => {
    //function for decrement
    // setCounter(counter - 1)
    dispatch(decrementCounter())

    
  }

  let resetCounter = () => {
    // setCounter(0)
    dispatch(resetThunkCounter())
    
  }

  return (
    // <>
    //   <div style={{width:'400px',margin: '0 auto'}}>
    //     <div style={{ display: 'flex', justifyContent: 'space-between', width: '400px', margin: '0 auto' }}>
    //     {/* <h1>{counter.appName}</h1> */}
    //       <button onClick={increaseCounter}>Increment Counter</button>
    //       <h1>{counter.counter}</h1>
    //       <button onClick={decreaseCounter}>Decrement counter</button>


    //     </div>

    //     <button onClick={resetCounter} style={{ marginTop: '40px', width: '100%' }}>Reset</button>
    //   </div>
    // </>
    <>
    
    <h1>{counter.appName}</h1>
    
       <button onClick={increaseCounter}>Inc</button>
     
       <h1>{counter.counter}</h1>
       <button onClick={decreaseCounter}>Dec</button>
       <button onClick={resetCounter}>Reset</button>
    </>
  );
}

export default App;
