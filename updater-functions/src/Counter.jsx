// updaterFunction = A function passed as an argument to setState() usually
//                   eg. setYear(updaterFunction)
//                   or  setYear(arrowFunction)     Good..
//                   ->  setYear(prevYear => prevYear + 1);
//                   or  setYear(y => y = 1);
//
//                   Allows for safe updates based on the previous state
//                   Used with multiple state updates and asynchronous functions
//                   It is Good Practice to use updaterFunctions.

import React, { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  const decrement = () => {
    // Takes the PENDING state to calculate NEXT state.
    // React puts updater functions in queue (waiting in line);
    // During the next render, React will call them in same order.

    setCount((c) => c - 1);
    setCount((c) => c - 1);
    setCount((c) => c - 1);
  };

  const reset = () => {
    setCount(0);
  };

  const increment = () => {
    setCount((c) => c + 1);
    setCount((c) => c + 1);
    setCount((c) => c + 1);
  };
  return (
    <div className='counter'>
      <p>Count: {count}</p>
      <button onClick={decrement}>Decrement</button>
      <button onClick={reset}>Reset</button>
      <button onClick={increment}>Increment</button>
    </div>
  );
}

export default Counter;
